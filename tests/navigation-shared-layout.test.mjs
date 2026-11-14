import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

const existingPages = [
  'src/app/page.tsx',
  'src/app/about/page.tsx',
  'src/app/our-services/page.tsx',
  'src/app/software/page.tsx',
  'src/app/case-studies/page.tsx',
  'src/app/our-process/page.tsx',
  'src/app/cs-sign-hub/page.tsx',
  'src/app/hardware/page.tsx',
]

test('root layout owns exactly one shared header and footer', async () => {
  const [layout, homepage, footer] = await Promise.all([
    readSource('src/app/layout.tsx'),
    readSource('src/app/page.tsx'),
    readSource('src/components/Footer.tsx'),
  ])

  assert.match(layout, /import Header from '@\/components\/Header'/)
  assert.match(layout, /import Footer from '@\/components\/Footer'/)
  assert.equal((layout.match(/<Header\s*\/>/g) ?? []).length, 1)
  assert.equal((layout.match(/<Footer\s*\/>/g) ?? []).length, 1)
  assert.doesNotMatch(layout, /<main\b/)

  assert.doesNotMatch(homepage, /import Header|import Footer/)
  assert.doesNotMatch(homepage, /<Header\b|<Footer\b/)
  assert.match(homepage, /<main id="main-content"/)

  // The footer may navigate the site, but it must not invent a contact channel
  // or link off-site. Every href is a flat top-level route with a trailing slash.
  assert.doesNotMatch(footer, /mailto:|tel:|https?:\/\//)
  const footerHrefs = [...footer.matchAll(/href: '([^']+)'/g)].map((match) => match[1])
  assert.ok(footerHrefs.length > 0, 'footer carries internal navigation')
  assert.ok(
    footerHrefs.every((href) => href.startsWith('/') && href.endsWith('/')),
    `footer hrefs must be flat canonical routes: ${footerHrefs.join(', ')}`,
  )
})

test('every implemented page has exactly one main landmark and no page-level shell', async () => {
  for (const path of existingPages) {
    const page = await readSource(path)

    assert.equal((page.match(/<main\b/g) ?? []).length, 1, `${path} needs exactly one main`)
    assert.equal((page.match(/<\/main>/g) ?? []).length, 1, `${path} needs a closed main`)
    assert.doesNotMatch(page, /<Header\b|<Footer\b/, `${path} must not duplicate the shared shell`)
  }
})

test('header navigation uses the typed six-destination route registry', async () => {
  const [header, registry] = await Promise.all([
    readSource('src/components/Header.tsx'),
    readSource('src/lib/routes.ts'),
  ])

  assert.match(header, /import Link from 'next\/link'/)
  assert.match(header, /import \{ primaryNavRoutes \} from '@\/lib\/routes'/)
  assert.match(header, /primaryNavRoutes\.map/)
  assert.match(header, /href=\{route\.path\}/)
  assert.match(header, /aria-label="Click iX home"/)
  assert.match(header, /href="\/"/)

  const navBlocks = registry
    .split(/\n  \w+: \{/)
    .filter((block) => block.includes('inPrimaryNav: true'))

  assert.equal(navBlocks.length, 5)
  assert.deepEqual(
    navBlocks.map((block) => block.match(/path: '([^']+)'/)?.[1]),
    ['/about/', '/our-services/', '/software/', '/case-studies/', '/our-process/'],
  )

  for (const block of navBlocks) {
    assert.match(block, /status: 'implemented'/)
  }

  assert.match(registry, /navLabel: 'Products'/)
  assert.doesNotMatch(registry, /path: '\/products\/'/)
})

test('header exposes active-page and accessible mobile-menu states', async () => {
  const [header, css] = await Promise.all([
    readSource('src/components/Header.tsx'),
    readSource('src/app/globals.css'),
  ])

  assert.match(header, /usePathname/)
  assert.match(header, /aria-current=\{isCurrent\(route\.path\) \? 'page' : undefined\}/)
  assert.match(header, /aria-expanded=\{isMenuOpen\}/)
  assert.match(header, /aria-controls="primary-navigation"/)
  assert.match(header, /id="primary-navigation"/)
  assert.match(header, /event\.key === 'Escape'/)
  assert.match(header, /menuButtonRef\.current\?\.focus\(\)/)
  assert.match(header, /setIsMenuOpen\(\(open\) => !open\)/)

  assert.match(css, /\.nav-toggle\s*\{[\s\S]*?display:\s*none/)
  assert.match(css, /@media \(max-width: 768px\)[\s\S]*?\.nav-toggle\s*\{[\s\S]*?display:\s*inline-flex/)
  assert.match(css, /\.site-nav\[data-open='true'\]\s*\{\s*display:\s*flex/)
})

test('homepage CTAs stay on implemented routes and never use hash navigation', async () => {
  const [header, page, hero, clients, system] = await Promise.all([
    readSource('src/components/Header.tsx'),
    readSource('src/app/page.tsx'),
    readSource('src/components/home/HeroCinematic.tsx'),
    readSource('src/components/home/ClientRow.tsx'),
    readSource('src/components/home/SystemLoop.tsx'),
  ])

  // The homepage is composed from section components.
  const homepage = page + hero + clients + system

  assert.match(homepage, /href="\/software\/"/)
  assert.match(homepage, /href="\/case-studies\/"/)
  // Enquiries leave the site for a mail draft: there is no contact page.
  assert.match(homepage, /href=\{mailto\('/)
  assert.match(homepage, /href="\/our-services\/"/)
  assert.doesNotMatch(homepage, /href="#/)
  assert.doesNotMatch(header, /href="#(?:solutions|software|projects|process|contact)"/)
})
