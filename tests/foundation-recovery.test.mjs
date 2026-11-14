import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const readSource = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')

test('homepage is a single semantic main with the sourced six-section story', async () => {
  const page = await readSource('src/app/page.tsx')
  // The hero is a component and its headline is a stage; the composed homepage
  // is checked across page, hero, stage, the slogan source and the sections.
  const hero = await readSource('src/components/home/HeroCinematic.tsx')
  const stage = await readSource('src/components/home/HeroStage.tsx')
  const slogans = await readSource('src/lib/slogans.ts')
  const clients = await readSource('src/components/home/ClientRow.tsx')
  const system = await readSource('src/components/home/SystemLoop.tsx')
  const composed = page + hero + stage + slogans + clients + system

  assert.equal((page.match(/<main\b/g) ?? []).length, 1)
  assert.equal((page.match(/<\/main>/g) ?? []).length, 1)
  assert.match(page, /<main id="main-content"/)
  assert.equal((composed.match(/<h1\b/g) ?? []).length, 1)
  assert.match(composed, /Smarter Screen\./)
  assert.match(composed, /Smarter Business\./)
  assert.match(composed, /The software that runs, sells and proves digital screen networks/)
  assert.match(page, /id="work-title"/)
  assert.match(composed, /id="clients-title"/)
  assert.match(composed, /id="system-title"/)
  assert.match(page, /id="cta-title"/)
})

test('homepage keeps honest content boundaries', async () => {
  const [page, content] = await Promise.all([
    readSource('src/app/page.tsx'),
    readSource('src/lib/content.ts'),
  ])

  assert.doesNotMatch(page + content, /mailto:|tel:/)
  assert.doesNotMatch(page + content, /testimonial|“|”/)
  assert.doesNotMatch(page + content, /Mandarin Oriental|Sunway Medical|Colgate|Proton/)
  assert.doesNotMatch(page + content, /\b\d+(?:\.\d+)?%\s*(?:lift|increase|roi|engagement)/i)
  assert.doesNotMatch(content, /9 years|nine years/i)
})

test('shared shell exposes the official logo and one skip target', async () => {
  const [header, footer] = await Promise.all([
    readSource('src/components/Header.tsx'),
    readSource('src/components/Footer.tsx'),
  ])

  // v3 uses the light header, so the black original lockup is the correct variant.
  // The white lockup stays in public/brand for dark surfaces.
  assert.match(header, /click-ix-horizontal-black\.png/)
  assert.match(header, /aria-label="Click iX home"/)
  assert.match(header, /className="skip-link"/)
  assert.match(header, /href="#main-content"/)
  // The footer may link within the site; it must not invent a contact channel.
  assert.doesNotMatch(footer, /mailto:|tel:|https?:\/\//)
})
