/**
 * Hero advertising slot — the creative series.
 *
 * Each entry is a poster for one part of the software stack. The lines are
 * editorial restatements of what the product already does in `content.ts`;
 * no metric, client or capability is invented here.
 *
 * Where an official product mark exists it is used unchanged and in its own
 * colour. Where none exists the product is set in type — that is a gap in the
 * asset register, not a design choice.
 */
export type MotifId =
  | 'availability'
  | 'schedule'
  | 'panels'
  | 'menu'
  | 'target'
  | 'exchange'
  | 'proof'
  | 'audience'

export type PosterAccent = 'blue' | 'cyan' | 'teal'

export interface HeroPoster {
  readonly id: string
  readonly name: string
  /** Appended next to an existing mark, e.g. SSN beside the CS Play mark. */
  readonly markSuffix?: string
  readonly role: string
  readonly line: string
  readonly mark?: { readonly src: string; readonly width: number; readonly height: number }
  readonly motif: MotifId
  readonly accent: PosterAccent
}

export const heroPosters: readonly HeroPoster[] = [
  {
    id: 'cs-deals',
    name: 'CS Deals',
    role: 'Media owner ERP / CRM',
    line: 'Every slot accounted for.',
    mark: { src: '/brand/cityscreen/cs-deals-light.svg', width: 930, height: 188 },
    motif: 'availability',
    accent: 'teal',
  },
  {
    id: 'cs-play',
    name: 'CS Play',
    role: 'CMS for large-format screens',
    line: 'The right spot, at the right hour.',
    mark: { src: '/brand/cityscreen/cs-play-light.svg', width: 790, height: 188 },
    motif: 'schedule',
    accent: 'blue',
  },
  {
    id: 'cs-play-ssn',
    name: 'CS Play SSN',
    markSuffix: 'SSN',
    role: 'CMS for indoor screen networks',
    line: 'Small screens, run like a network.',
    mark: { src: '/brand/cityscreen/cs-play-light.svg', width: 790, height: 188 },
    motif: 'panels',
    accent: 'cyan',
  },
  {
    id: 'cs-sign-hub',
    name: 'CS Sign Hub',
    role: 'CMS for in-house screens',
    line: 'Menus and directories, on brand.',
    mark: { src: '/brand/cityscreen/cs-signhub-light.svg', width: 1269, height: 188 },
    motif: 'menu',
    accent: 'teal',
  },
  {
    id: 'omnibuy-dsp',
    name: 'OmniBuy DSP',
    role: 'Programmatic planning and buying',
    line: 'Buy the screen, not the guesswork.',
    motif: 'target',
    accent: 'blue',
  },
  {
    id: 'ssp',
    name: 'CS Context',
    role: 'Supply-side platform',
    line: 'Inventory on the buyer’s desk.',
    mark: { src: '/brand/cityscreen/cs-context-light.svg', width: 1183, height: 188 },
    motif: 'exchange',
    accent: 'cyan',
  },
  {
    id: 'measurement',
    name: 'Measurement',
    role: 'Audience measurement and campaign proof',
    line: 'Who was there when it played.',
    mark: { src: '/brand/cityscreen/cs-edgeinsights-light.svg', width: 1666, height: 188 },
    motif: 'proof',
    accent: 'teal',
  },
  {
    id: 'data-partnerships',
    name: 'Data partnerships',
    role: 'Third-party data and activation',
    line: 'Audience data, joined to the plan.',
    motif: 'audience',
    accent: 'blue',
  },
]
