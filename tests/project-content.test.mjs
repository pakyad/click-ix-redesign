import assert from 'node:assert/strict'
import test from 'node:test'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'

const source = await readFile(new URL('../src/lib/content.ts', import.meta.url), 'utf8')
const compiled = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 },
}).outputText
const content = await import('data:text/javascript;base64,' + Buffer.from(compiled).toString('base64'))

test('the product stack keeps three core platforms and eight offerings', () => {
  assert.equal(content.products.length, 8)
  assert.equal(content.coreProducts.length, 3)
  assert.deepEqual(content.coreProducts.map((product) => product.name), ['CS Deals', 'CS Play', 'CS Play SSN'])
  assert.equal(new Set(content.products.map((product) => product.id)).size, 8)
  for (const product of content.products) {
    assert.ok(product.capabilities.length >= 3, `${product.name} needs sourced capabilities`)
    assert.ok(product.role.length > 0)
  }
})

test('the case archive only carries documented stories and sector links', () => {
  assert.equal(content.caseStudies.length, 14)
  assert.equal(content.featuredCases.length, 5)
  assert.deepEqual(content.featuredCases.map((study) => study.id), ['maxis', 'cheras', 'cubig', 'kpj2', 'loreal'])

  const categoryIds = content.caseCategories.map((category) => category.id)
  for (const study of content.caseStudies) {
    assert.ok(categoryIds.includes(study.category), `${study.id} has an unknown category`)
    assert.ok(study.systems.length > 0, `${study.id} needs systems`)
    assert.ok(study.where.length > 0, `${study.id} needs a location`)
    assert.ok(study.brief.length > 0, `${study.id} needs a brief`)
    assert.ok(study.did.length > 0, `${study.id} needs actions`)
    assert.ok(study.why.length > 0, `${study.id} needs an outcome`)
  }
  for (const category of content.caseCategories) {
    assert.ok(content.casesForCategory(category.id).length > 0, `${category.label} is empty`)
    assert.ok(category.route.startsWith('/case-studies'), `${category.label} must use a flat route`)
  }
})

test('unverified clients and invented results stay out of the content model', () => {
  const text = source
  for (const name of ['Mandarin Oriental', 'Sunway Medical', 'Colgate', 'Proton']) {
    assert.doesNotMatch(text, new RegExp(name), `${name} is still unverified`)
  }
  assert.doesNotMatch(text, /\b(?:ROI|uplift|lift of|increase of)\b/i)
  assert.doesNotMatch(text, /9 years|nine years/i)
})

test('the commercial flow and delivery method match the supplied account', () => {
  assert.deepEqual(content.commercialFlow.map((item) => item.step), ['Sell', 'Schedule', 'Play', 'Prove', 'Bill'])
  assert.deepEqual(content.deliverySteps.map((step) => step.step), ['01', '02', '03', '04'])
  assert.match(content.company.positioning, /runs, sells and proves/)
})
