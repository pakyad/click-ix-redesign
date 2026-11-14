import assert from 'node:assert/strict'
import { access, readFile } from 'node:fs/promises'
import test from 'node:test'

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

const canonicalPaths = [
  '/',
  '/about/',
  '/our-services/',
  '/software/',
  '/cs-sign-hub/',
  '/case-studies/',
  '/marketing-communication-strategy/',
  '/project-management/',
  '/consumer-journey-mapping/',
  '/digital-signage-solutions-mapping/',
  '/hardware/',
  '/content-mapping/',
  '/data-analytics/',
  '/interactive-solution/',
  '/case-studies-medical-pharma/',
  '/case-studies-retail-malls/',
  '/case-studies-out-of-home-advertisers/',
  '/case-studies-fmcg-others/',
  '/our-process/',
  '/cs-play/',
  '/cs-play-ssn/',
  '/cs-deals/',
  '/omnibuy-dsp/',
  '/cs-context/',
  '/measurement/',
]

const scaffoldedPages = [
  'src/app/about/page.tsx',
  'src/app/our-services/page.tsx',
  'src/app/software/page.tsx',
  'src/app/case-studies/page.tsx',
  'src/app/our-process/page.tsx',
]

const absentPages = [
  'src/app/our-services/hardware/page.tsx',
  'src/app/case-studies/case-studies-retail-malls/page.tsx',
]

test('route registry preserves the flat canonical policy', async () => {
  const registry = await readSource('src/lib/routes.ts')
  const paths = [...registry.matchAll(/path: '([^']+)'/g)].map((match) => match[1])

  assert.equal(paths.length, canonicalPaths.length)
  assert.deepEqual([...paths].sort(), [...canonicalPaths].sort())
  assert.equal(new Set(paths).size, canonicalPaths.length)

  for (const path of paths) {
    if (path !== '/') {
      assert.ok(path.endsWith('/'), `${path} must keep a trailing slash`)
    }
  }

  assert.equal(
    paths.filter((path) => path !== '/our-services/' && path.startsWith('/our-services/')).length,
    0,
    'service routes must not be nested under /our-services/',
  )
  assert.equal(
    paths.filter((path) => path !== '/case-studies/' && path.startsWith('/case-studies/')).length,
    0,
    'case-study routes must not be nested under /case-studies/',
  )

  assert.equal((registry.match(/inPrimaryNav: true/g) ?? []).length, 5)
  assert.match(registry, /navLabel: 'Services'/)
  assert.match(registry, /navLabel: 'Process'/)
})

test('six approved page shells expose metadata, a main landmark, and one heading', async () => {
  for (const path of scaffoldedPages) {
    const page = await readSource(path)

    assert.match(page, /import type \{ Metadata \} from 'next'/, `${path} needs typed metadata`)
    assert.match(page, /export const metadata: Metadata = \{/, `${path} needs metadata export`)
    assert.match(page, /<main id="main-content"(?:\s[^>]*)?>/, `${path} needs the skip-link target`)
    // A page may own its <h1> directly or delegate it to a shared header component.
    const headings = (page.match(/<h1(?:\s[^>]*)?>/g) ?? []).length
    const sharedHeaders = (page.match(/<PageHeader\b|<CaseStudiesHero\b/g) ?? []).length
    assert.equal(headings + sharedHeaders, 1, `${path} needs exactly one page heading`)
  }
})

test('nested alternative URLs do not exist', async () => {
  for (const path of absentPages) {
    await assert.rejects(access(new URL(`../${path}`, import.meta.url)), undefined, `${path} must not exist yet`)
  }
})

test('every canonical route implementation agrees with its registry status', async () => {
  const registry = await readSource('src/lib/routes.ts')
  const records = [...registry.matchAll(/path: '([^']+)'[\s\S]*?status: '(implemented|planned)'/g)]
  assert.equal(records.length, canonicalPaths.length)
  for (const [, path, status] of records) {
    const file = `src/app${path === '/' ? '/' : path}page.tsx`
    if (status === 'implemented') await access(new URL(`../${file}`, import.meta.url))
    else await assert.rejects(access(new URL(`../${file}`, import.meta.url)), undefined, `${path} should still be planned`)
  }
})

test('Next.js preserves trailing slashes', async () => {
  const config = await readSource('next.config.mjs')
  assert.match(config, /trailingSlash:\s*true/)
})
