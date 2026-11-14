import assert from 'node:assert/strict'
import test from 'node:test'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const transpile = (source) =>
  ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText

const asDataUrl = (code) => 'data:text/javascript;base64,' + Buffer.from(code).toString('base64')

const contentSource = await readFile(new URL('../src/lib/content.ts', import.meta.url), 'utf8')
const content = await import(asDataUrl(transpile(contentSource)))

// `workTrace.ts` imports the content model, which a data: URL cannot resolve,
// so the specifier is pointed at the already-compiled content module.
const traceSource = (await readFile(new URL('../src/lib/workTrace.ts', import.meta.url), 'utf8')).replace(
  /from '\.\/content'/,
  `from '${asDataUrl(transpile(contentSource))}'`,
)
const trace = await import(asDataUrl(transpile(traceSource)))

test('every traced deployment exists in the case archive', () => {
  const ids = new Set(content.caseStudies.map((study) => study.id))
  assert.ok(trace.traceEntries.length > 0, 'no deployments are traced')
  for (const entry of trace.traceEntries) {
    assert.ok(ids.has(entry.caseId), `${entry.caseId} is not a documented case`)
    assert.ok(entry.client && entry.title && entry.sector, `${entry.caseId} is missing display fields`)
  }
})

test('a layer is only covered when the case record says so', () => {
  for (const entry of trace.traceEntries) {
    const study = content.caseStudies.find((item) => item.id === entry.caseId)
    const haystack = trace.citationHaystack(study)

    for (const layer of trace.traceLayers) {
      const evidence = entry.layers[layer.id]
      if (!evidence) continue

      assert.ok(evidence.detail.trim().length > 0, `${entry.caseId}/${layer.id} has no detail label`)
      assert.ok(
        haystack.includes(evidence.source),
        `${entry.caseId}/${layer.id} cites "${evidence.source}", which is not in the case record`,
      )
    }
  }
})

test('the trace is allowed to report a layer as out of scope', () => {
  const totals = trace.traceEntries.map(
    (entry) => trace.traceLayers.filter((layer) => entry.layers[layer.id]).length,
  )

  assert.ok(Math.max(...totals) <= trace.traceLayers.length)
  assert.ok(
    totals.some((count) => count < trace.traceLayers.length),
    'every deployment claims all four layers, which is not credible and means the diagram cannot show absence',
  )
  assert.equal(trace.traceLayers.length, 4)
})

test('the trace can be filtered to a sector without losing order', () => {
  const retail = content.casesForCategory('retail-malls').map((study) => study.id)
  const filtered = trace.traceEntriesFor(retail)

  assert.equal(filtered.length, retail.length)
  assert.deepEqual(
    filtered.map((entry) => entry.caseId),
    retail,
  )
  assert.equal(trace.traceFor('maxis')?.client, 'Maxis')
  assert.equal(trace.traceFor('not-a-case'), undefined)
})

test('motion vocabulary stays at three curves and five durations', async () => {
  const css = await readFile(new URL('../src/app/globals.css', import.meta.url), 'utf8')

  for (const token of ['--ease-signal', '--ease-switch', '--ease-mech']) {
    assert.ok(css.includes(token), `${token} is missing from the motion tokens`)
  }
  for (const token of ['--dur-micro', '--dur-state', '--dur-surface', '--dur-block', '--dur-editorial']) {
    assert.ok(css.includes(token), `${token} is missing from the motion tokens`)
  }

  const curves = css.match(/--ease-[a-z]+:\s*cubic-bezier/g) ?? []
  assert.equal(curves.length, 3, 'only three easing curves may exist')
})

test('reveals are gated on JavaScript so no content is hidden without it', async () => {
  const css = await readFile(new URL('../src/app/globals.css', import.meta.url), 'utf8')
  const layout = await readFile(new URL('../src/app/layout.tsx', import.meta.url), 'utf8')

  assert.match(css, /html\.js \[data-reveal\]/, 'reveal rules must be scoped to html.js')
  assert.doesNotMatch(
    css,
    /^\[data-reveal\]\s*\{/m,
    'an ungated [data-reveal] rule would hide content when JavaScript is unavailable',
  )
  assert.match(layout, /classList\.add\('js'\)/, 'the root layout must arm the js class')
  assert.match(css, /prefers-reduced-motion: reduce/, 'reduced motion must resolve reveals to their end state')
})
