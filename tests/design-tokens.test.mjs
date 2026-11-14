import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const css = await readFile(new URL('../src/app/globals.css', import.meta.url), 'utf8')

const token = (name) => css.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`))?.[1]

function luminance(hex) {
  const channels = hex
    .replace('#', '')
    .match(/../g)
    .map((value) => parseInt(value, 16) / 255)
    .map((value) => (value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4))
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2]
}

function contrast(a, b) {
  const [high, low] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (high + 0.05) / (low + 0.05)
}

test('the design system defines the official brand colours', () => {
  assert.equal(token('yellow-500'), '#fcd804')
  assert.equal(token('blue-500'), '#1768ca')
  assert.equal(token('grey-500'), '#444647')
  assert.equal(token('navy-900'), '#061321')
  assert.equal(token('paper-50'), '#f5f1e6')
})

test('every documented text pair meets its WCAG target', () => {
  const pairs = [
    ['navy-900', 'text-dark-primary', 4.5],
    ['navy-900', 'text-dark-secondary', 4.5],
    ['navy-900', 'text-dark-muted', 4.5],
    ['navy-900', 'yellow-500', 4.5],
    ['navy-900', 'cyan-500', 4.5],
    ['navy-900', 'lime-500', 4.5],
    ['paper-50', 'text-light-primary', 4.5],
    ['paper-50', 'text-light-secondary', 4.5],
    ['paper-50', 'text-light-muted', 4.5],
    ['blue-500', 'action-light-text', 4.5],
    ['grey-500', 'action-light-text', 4.5],
  ]

  const resolve = (name) => {
    if (name === 'text-dark-primary' || name === 'action-light-text') return '#ffffff'
    if (name === 'text-dark-secondary') return '#b9c4ce'
    if (name === 'text-light-primary') return token('navy-900')
    if (name === 'text-dark-muted') return token('slate-400')
    if (name === 'text-light-secondary') return token('slate-500')
    if (name === 'text-light-muted') return token('slate-600')
    return token(name)
  }

  for (const [background, foreground, minimum] of pairs) {
    const bg = resolve(background)
    const fg = resolve(foreground)
    assert.ok(bg && fg, `${background}/${foreground} must resolve to hex values`)
    const ratio = contrast(bg, fg)
    assert.ok(ratio >= minimum, `${foreground} on ${background} is ${ratio.toFixed(2)}:1, needs ${minimum}:1`)
  }
})

test('yellow is never used as body text on paper', () => {
  assert.ok(contrast(token('paper-50'), token('yellow-500')) < 3)
  assert.ok(contrast(token('paper-0'), token('yellow-500')) < 3)
})
