// Work Trace — which layers of the stack a documented deployment actually covered.
//
// Every active layer must cite a sentence that already exists in the case
// record (brief, action bullet, client, place or outcome). `tests/work-trace.test.mjs`
// fails the build if a citation cannot be found verbatim, so this file cannot
// acquire an invented claim without the gate catching it.
//
// An inactive layer is not a gap in the client's estate. It means Click iX was
// not the party responsible for that layer, and the interface says so in words.

import { caseCategories, caseStudies, type CaseStudy } from './content'

export type TraceLayerId = 'site' | 'screen' | 'playback' | 'integration'

export interface TraceLayerDefinition {
  readonly id: TraceLayerId
  readonly label: string
  readonly question: string
}

export const traceLayers: readonly TraceLayerDefinition[] = [
  { id: 'site', label: 'Site', question: 'Where it went' },
  { id: 'screen', label: 'Screen', question: 'Hardware' },
  { id: 'playback', label: 'Playback', question: 'Software' },
  { id: 'integration', label: 'Integration', question: 'Systems' },
]

export interface TraceEvidence {
  /** Compact label shown in the cell. Must not add a claim beyond the source. */
  readonly detail: string
  /** Verbatim fragment of the case record that justifies the layer. */
  readonly source: string
}

export interface TraceEntry {
  readonly caseId: string
  readonly client: string
  readonly title: string
  readonly sector: string
  readonly systems: readonly string[]
  readonly layers: Readonly<Record<TraceLayerId, TraceEvidence | null>>
}

type LayerMap = Readonly<Record<TraceLayerId, TraceEvidence | null>>

const layerMaps: Readonly<Record<string, LayerMap>> = {
  maxis: {
    site: { detail: '6 flagship stores', source: 'MC+ flagships at KLCC' },
    screen: { detail: 'LED + media players', source: 'Supply and maintenance of all media players' },
    playback: { detail: 'CS Play', source: 'managed from one CMS' },
    integration: { detail: 'Queue system', source: 'Integration with the queue system' },
  },
  mbic: {
    site: { detail: 'MBIC, KL', source: 'Maxis Business Innovation Centre (MBIC), Kuala Lumpur' },
    screen: { detail: 'AV + LED check', source: 'full system health check across AV, LED' },
    playback: { detail: 'CS Sign Hub', source: 'Presented CS Sign Hub with a live demo' },
    integration: { detail: 'CMS control panel', source: 'microsite control panel, served through the CMS' },
  },
  'maxis-hq': {
    site: { detail: 'HQ + SOC', source: 'Subang HiTech security operations centre (SOC)' },
    screen: { detail: '32-screen estate', source: '32-screen video wall estate' },
    playback: null,
    integration: { detail: 'Maxis change process', source: 'Maxis’ change-request process' },
  },
  cheras: {
    site: { detail: 'Cheras, KL', source: 'Cheras, Kuala Lumpur' },
    screen: null,
    playback: { detail: 'CS Play SSN + SLA', source: 'Mall screens run on CS Play SSN' },
    integration: null,
  },
  triumph: {
    site: { detail: '2 malls', source: 'Pavilion Kuala Lumpur' },
    screen: { detail: 'Mobile kiosks', source: 'mobile interactive kiosks' },
    playback: { detail: 'Web-app triggers', source: 'Built HTML triggers and a web app' },
    integration: { detail: 'Kinect games', source: 'Kinect-enabled dance game' },
  },
  rollti: {
    site: { detail: 'Franchise outlets', source: 'across its franchise network' },
    screen: { detail: 'Signage supply', source: 'Supplied and installed digital signage' },
    playback: { detail: 'Menus + promotions', source: 'run different menus and promotions' },
    integration: { detail: 'Synchronisation', source: 'Synchronised screens into one composite display' },
  },
  motogp: {
    site: { detail: 'Menara LGM, KL', source: 'Menara LGM' },
    screen: { detail: 'Capture card + player', source: 'capture card and media player' },
    playback: { detail: 'CS Play', source: 'captured it into CS Play' },
    integration: { detail: 'HTML live layout', source: 'HTML-based live-feed layout' },
  },
  cubig: {
    site: { detail: 'CuBig KLCC', source: 'CuBig KLCC' },
    screen: null,
    playback: { detail: 'Approved queue', source: 'passed a moderation page' },
    integration: { detail: 'QR microsite', source: 'QR-linked microsite' },
  },
  'big-tree': {
    site: null,
    screen: { detail: 'Players + CS Play', source: 'Media players and CS Play CMS' },
    playback: { detail: 'Content management', source: 'content management on selected activations' },
    integration: { detail: 'Data triggers', source: 'Dynamic triggers built on weather' },
  },
  kpj2: {
    site: { detail: 'One hospital', source: 'KPJ Damansara Specialist Hospital 2' },
    screen: { detail: 'Signage + kiosk frames', source: 'custom framing for the digital kiosks' },
    playback: { detail: 'CMS + content', source: 'Media players and CMS running the hospital information channel' },
    integration: { detail: 'Queue system', source: 'integration with the hospital queue system' },
  },
  'kpj-opening': {
    site: { detail: 'KPJ DSH2', source: 'KPJ Damansara Specialist Hospital 2' },
    screen: { detail: 'Signing + projection', source: 'interactive projected wall' },
    playback: null,
    integration: { detail: 'Invite list', source: 'linked to the opening’s invite list' },
  },
  pantai: {
    site: { detail: 'One hospital', source: 'Pantai Hospital' },
    screen: { detail: 'Signage + players', source: 'Supplied digital signage, media players' },
    playback: { detail: 'Content + CMS', source: 'the CMS to manage content' },
    integration: {
      detail: 'Queue system',
      source: 'integration with the hospital queue and information systems',
    },
  },
  btmc: {
    site: { detail: 'Klang, Selangor', source: 'Bandar Bukit Tinggi, Klang, Selangor' },
    screen: { detail: 'Screens + hardware', source: 'Turnkey delivery of screens, media hardware' },
    playback: { detail: 'Content manager', source: 'Content development and ongoing content management' },
    integration: {
      detail: 'HMS + queue',
      source: 'Integration with the hospital management and queue system',
    },
  },
  loreal: {
    site: { detail: 'Malaysia + Singapore', source: 'Malaysia and Singapore' },
    screen: { detail: 'Framing + displays', source: 'framing for edutainment' },
    playback: { detail: 'Players + signage', source: 'Supplied the media players and signage' },
    integration: { detail: 'RFID + motion', source: 'Fitted RFID, magnetic and motion sensors' },
  },
}

const sectorFor = (study: CaseStudy) =>
  caseCategories.find((category) => category.id === study.category)?.label ?? study.category

export const traceEntries: readonly TraceEntry[] = caseStudies
  .filter((study) => Boolean(layerMaps[study.id]))
  .map((study) => ({
    caseId: study.id,
    client: study.client,
    title: study.title,
    sector: sectorFor(study),
    systems: study.systems,
    layers: layerMaps[study.id],
  }))

export function traceFor(caseId: string): TraceEntry | undefined {
  return traceEntries.find((entry) => entry.caseId === caseId)
}

export function traceEntriesFor(caseIds: readonly string[]): readonly TraceEntry[] {
  const order = new Map(caseIds.map((id, index) => [id, index]))
  return traceEntries
    .filter((entry) => order.has(entry.caseId))
    .sort((a, b) => (order.get(a.caseId) ?? 0) - (order.get(b.caseId) ?? 0))
}

/** The text a citation is allowed to come from. Used by the honesty test. */
export function citationHaystack(study: CaseStudy): string {
  return [study.client, study.title, study.brief, ...study.did, study.why, study.where].join(' \u0000 ')
}
