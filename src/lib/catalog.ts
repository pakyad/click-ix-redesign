import type { RouteId } from './routes'

export type ServiceTheme =
  | 'message'
  | 'coordinate'
  | 'journey'
  | 'network'
  | 'content'
  | 'insight'
  | 'interaction'

export interface ServiceEntry {
  readonly routeId: RouteId
  readonly theme: ServiceTheme
  readonly line: string
  readonly intro: string
  readonly related: readonly RouteId[]
}

// Seven service categories from the supplied website linking note. Hardware is
// presented under Products, not as an eighth service.
export const serviceCatalog: readonly ServiceEntry[] = [
  {
    routeId: 'marketingCommunicationStrategy',
    theme: 'message',
    line: 'Decide what the screen is for before deciding what it says.',
    intro:
      'Creative and messaging direction, digital screen formats and technology advisory — connected so the message and the medium are chosen together.',
    related: ['consumerJourneyMapping', 'contentMapping'],
  },
  {
    routeId: 'projectManagement',
    theme: 'coordinate',
    line: 'One accountable plan across sites, suppliers and approvals.',
    intro:
      'Consultancy, ideation, training, network management and end-to-end project management for screen deployments that cross trades and timelines.',
    related: ['digitalSignageSolutionsMapping', 'hardware'],
  },
  {
    routeId: 'consumerJourneyMapping',
    theme: 'journey',
    line: 'Understand the moment before you place the screen.',
    intro:
      'Touch-point mapping across arrival, dwell and departure, so a screen earns its position in the visitor journey rather than interrupting it.',
    related: ['marketingCommunicationStrategy', 'interactiveSolution'],
  },
  {
    routeId: 'digitalSignageSolutionsMapping',
    theme: 'network',
    line: 'Match each screen to its place, audience and content.',
    intro:
      'Screens and displays, media players, CMS and interactive systems, and the DOOH or indoor software that will actually run them.',
    related: ['hardware', 'contentMapping'],
  },
  {
    routeId: 'contentMapping',
    theme: 'content',
    line: 'Give every message a place in the loop.',
    intro:
      'Idea, strategy, concept and content design, development and ongoing management — built around the formats each screen can actually play.',
    related: ['marketingCommunicationStrategy', 'dataAnalytics'],
  },
  {
    routeId: 'dataAnalytics',
    theme: 'insight',
    line: 'Prove what played, and who was there.',
    intro:
      'Dashboard access, customisable reporting and recommendations, connected to ATMD, Aidiencer and CS Edge measurement rather than a separate analytics exercise.',
    related: ['consumerJourneyMapping', 'contentMapping'],
  },
  {
    routeId: 'interactiveSolution',
    theme: 'interaction',
    line: 'Build the interaction, not just the screen.',
    intro:
      'Interactive experiences, custom development and programming, with sensor and kiosk integration where the task needs it.',
    related: ['consumerJourneyMapping', 'hardware'],
  },
]
