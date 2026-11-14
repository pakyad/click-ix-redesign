/**
 * The lines the hero plays.
 *
 * Every one is already the company's own copy: the logo subline, the brand
 * message, and the headings that open the products, the loop and the work.
 * Nothing here is a new claim — the hero is quoting the site.
 */
export type StripId = 'wave' | 'bands' | 'stack' | 'system' | 'work'

export interface Slogan {
  readonly id: string
  readonly lines: readonly string[]
  readonly strip: StripId
}

export const slogans: readonly Slogan[] = [
  { id: 'immersive', lines: ['Immersive experience'], strip: 'wave' },
  { id: 'brand', lines: ['Smarter Screen.', 'Smarter Business.'], strip: 'bands' },
  { id: 'stack', lines: ['One stack for the', 'whole screen network.'], strip: 'stack' },
  { id: 'system', lines: ['Five screens,', 'one system.'], strip: 'system' },
  { id: 'work', lines: ['Work that is', 'running now.'], strip: 'work' },
]
