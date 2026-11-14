import assert from 'node:assert/strict'
import test from 'node:test'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

async function load(relative) {
  const source = await readFile(new URL(relative, import.meta.url), 'utf8')
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
  }).outputText
  return import('data:text/javascript;base64,' + Buffer.from(compiled).toString('base64'))
}

const { serviceCatalog } = await load('../src/lib/catalog.ts')
const { serviceContent } = await load('../src/lib/content.ts')
const { routes } = await load('../src/lib/routes.ts')

test('the seven sourced services map to the service routes, without hardware', () => {
  const serviceIds = Object.entries(routes)
    .filter(([, route]) => route.group === 'services')
    .map(([id]) => id)
    .sort()

  assert.equal(serviceCatalog.length, 7)
  assert.deepEqual(
    serviceCatalog.map((item) => item.routeId).sort(),
    serviceIds.filter((id) => id !== 'hardware'),
  )
  assert.ok(!serviceCatalog.some((item) => item.routeId === 'hardware'))
})

test('every service has sourced scope, a stated limit and valid related links', () => {
  assert.equal(serviceContent.length, 7)

  for (const service of serviceCatalog) {
    const detail = serviceContent.find((entry) => entry.routeId === service.routeId)
    assert.ok(detail, `${service.routeId} needs sourced scope`)
    assert.ok(detail.scope.length >= 1)
    assert.ok(detail.limit.length > 20, `${service.routeId} needs an honest limit`)
    assert.equal(new Set(service.related).size, service.related.length)

    for (const id of service.related) {
      assert.ok(routes[id], `${service.routeId} links to an unknown route`)
      assert.notEqual(id, service.routeId)
      assert.ok(['services', 'case-studies'].includes(routes[id].group))
    }
  }
})

test('service copy avoids unsourced results and unverified clients', () => {
  const joined = JSON.stringify(serviceCatalog) + JSON.stringify(serviceContent)
  assert.doesNotMatch(joined, /guaranteed (?:results|growth)|increase (?:sales|footfall)|ROI of/i)
  assert.doesNotMatch(joined, /Mandarin Oriental|Sunway Medical|Colgate|Proton/)
})
