export type RoutePath = '/' | `/${string}/`

export type RouteStatus = 'implemented' | 'planned'

export type RouteGroup = 'core' | 'services' | 'case-studies' | 'new'

export interface SiteRoute {
  readonly path: RoutePath
  readonly label: string
  readonly navLabel?: string
  readonly title: string
  readonly description: string
  readonly group: RouteGroup
  readonly status: RouteStatus
  readonly inPrimaryNav?: boolean
}

export const routes = {
  home: {
    path: '/',
    label: 'Home',
    title: 'Click iX — Smarter Screen. Smarter Business.',
    description:
      'Click iX builds the software that runs, sells and proves digital screen networks: CMS, ERP and CRM, programmatic demand and audience measurement.',
    group: 'core',
    status: 'implemented',
  },
  about: {
    path: '/about/',
    label: 'About',
    title: 'About | Click iX',
    description:
      'CLICK IX Sdn Bhd is a Kuala Lumpur AdTech company building the software behind digital screen networks, incorporated in 2022.',
    group: 'core',
    status: 'implemented',
    inPrimaryNav: true,
  },
  ourServices: {
    path: '/our-services/',
    label: 'Our Services',
    navLabel: 'Services',
    title: 'Services | Click iX',
    description:
      'Seven services around the Click iX software stack: strategy, project management, journey mapping, solution mapping, content, analytics and interactive builds.',
    group: 'core',
    status: 'implemented',
    inPrimaryNav: true,
  },
  software: {
    path: '/software/',
    label: 'Software',
    navLabel: 'Products',
    title: 'Products | Click iX',
    description:
      'One stack for the whole screen network: CS Deals, CS Play, CS Play SSN, CS Sign Hub, OmniBuy DSP, SSP, measurement and data partnerships.',
    group: 'core',
    status: 'implemented',
    inPrimaryNav: true,
  },
  csSignHub: {
    path: '/cs-sign-hub/',
    label: 'CS Sign Hub',
    title: 'CS Sign Hub | Click iX',
    description:
      'CS Sign Hub runs menus, directories and corporate screens for retail, F&B, hospitality and offices. Cloud by default, with an on-premise option.',
    group: 'core',
    status: 'implemented',
  },
  csPlay: {
    path: '/cs-play/',
    label: 'CS Play',
    title: 'CS Play | Click iX',
    description:
      'CMS for billboards and large-format screens: scheduling, live content, remote playback and proof-of-play on mass-facing LED.',
    group: 'core',
    status: 'implemented',
  },
  csPlaySsn: {
    path: '/cs-play-ssn/',
    label: 'CS Play SSN',
    title: 'CS Play SSN | Click iX',
    description:
      'CMS for indoor small-screen networks: grouped screens, venue and tenant content, paid advertiser loops and per-screen proof-of-play.',
    group: 'core',
    status: 'implemented',
  },
  csDeals: {
    path: '/cs-deals/',
    label: 'CS Deals',
    title: 'CS Deals | Click iX',
    description:
      'Media owner ERP and CRM: inventory, pipeline, packages, bookings, job requisitions, invoicing and reporting in one system.',
    group: 'core',
    status: 'implemented',
  },
  omnibuyDsp: {
    path: '/omnibuy-dsp/',
    label: 'OmniBuy DSP',
    title: 'OmniBuy DSP | Click iX',
    description:
      'Programmatic planning and buying for digital out-of-home: site selection, impression data, RTB, programmatic guaranteed and dynamic creative.',
    group: 'core',
    status: 'implemented',
  },
  csContext: {
    path: '/cs-context/',
    label: 'CS Context',
    title: 'CS Context — SSP | Click iX',
    description:
      'Supply-side platform for screen inventory: dynamic pricing, availability, buyer access, creative approval and programmatic billing.',
    group: 'core',
    status: 'implemented',
  },
  measurement: {
    path: '/measurement/',
    label: 'Measurement',
    title: 'Measurement | Click iX',
    description:
      'Audience measurement and campaign proof: ATMD, Aidiencer and CS Edge Insights joined to CMS spot data.',
    group: 'core',
    status: 'implemented',
  },
  caseStudies: {
    path: '/case-studies/',
    label: 'Case Studies',
    title: 'Case Studies | Click iX',
    description:
      'Documented screen deployments in four chapters: outdoor and live, retail and enterprise, healthcare, and brands. Each story states the brief, what we did and why it matters.',
    group: 'core',
    status: 'implemented',
    inPrimaryNav: true,
  },
  ourProcess: {
    path: '/our-process/',
    label: 'Our Process',
    navLabel: 'Process',
    title: 'Process | Click iX',
    description:
      'The Click iX delivery method: discovery and audit, compatibility and design, pilot, rollout and support — plus one commercial flow from sale to invoice.',
    group: 'new',
    status: 'implemented',
    inPrimaryNav: true,
  },
  marketingCommunicationStrategy: {
    path: '/marketing-communication-strategy/',
    label: 'Marketing & communications strategy',
    title: 'Marketing & communications strategy | Click iX',
    description:
      'Creative and messaging direction, digital screen formats and technology advisory, connected to the software that will run the screens.',
    group: 'services',
    status: 'implemented',
  },
  projectManagement: {
    path: '/project-management/',
    label: 'Project management',
    title: 'Project management | Click iX',
    description:
      'Consultancy, ideation, training, network management and end-to-end project management across sites, suppliers and approvals.',
    group: 'services',
    status: 'implemented',
  },
  consumerJourneyMapping: {
    path: '/consumer-journey-mapping/',
    label: 'Consumer journey mapping',
    title: 'Consumer journey mapping | Click iX',
    description:
      'Touch-point mapping across arrival, dwell and departure, so each screen earns its place in the visitor journey.',
    group: 'services',
    status: 'implemented',
  },
  digitalSignageSolutionsMapping: {
    path: '/digital-signage-solutions-mapping/',
    label: 'Digital signage solution mapping',
    title: 'Digital signage solution mapping | Click iX',
    description:
      'Screens, media players, CMS, interactive systems and the DOOH or indoor software that will run them.',
    group: 'services',
    status: 'implemented',
  },
  hardware: {
    path: '/hardware/',
    label: 'Hardware',
    title: 'Hardware | Click iX',
    description:
      'Screens, players and the parts between: outdoor LED, video walls, kiosks, menu boards, shelf strips, holographic displays and electronic shelf labels.',
    group: 'services',
    status: 'implemented',
  },
  contentMapping: {
    path: '/content-mapping/',
    label: 'Content mapping',
    title: 'Content mapping | Click iX',
    description:
      'Idea, strategy, concept and content design, development and ongoing management, built around the formats each screen can play.',
    group: 'services',
    status: 'implemented',
  },
  dataAnalytics: {
    path: '/data-analytics/',
    label: 'Data, measurement & reporting',
    title: 'Data, measurement & reporting | Click iX',
    description:
      'Dashboard access, customisable reporting and recommendations, connected to ATMD, Aidiencer and CS Edge measurement.',
    group: 'services',
    status: 'implemented',
  },
  interactiveSolution: {
    path: '/interactive-solution/',
    label: 'Interactive builds',
    title: 'Interactive builds | Click iX',
    description:
      'Interactive experiences, custom development and programming, with sensor and kiosk integration where the task needs it.',
    group: 'services',
    status: 'implemented',
  },
  caseStudiesMedicalPharma: {
    path: '/case-studies-medical-pharma/',
    label: 'Healthcare',
    title: 'Healthcare Case Studies | Click iX',
    description:
      'Hospital screen networks with doctors directories, wayfinding and queue integration — documented deployments across Malaysia.',
    group: 'case-studies',
    status: 'implemented',
  },
  caseStudiesRetailMalls: {
    path: '/case-studies-retail-malls/',
    label: 'Retail & Enterprise',
    title: 'Retail & Enterprise Case Studies | Click iX',
    description:
      'Store networks, experience centres and corporate AV — documented deployments run on the Click iX stack.',
    group: 'case-studies',
    status: 'implemented',
  },
  caseStudiesOutOfHomeAdvertisers: {
    path: '/case-studies-out-of-home-advertisers/',
    label: 'Outdoor & Live',
    title: 'Outdoor & Live Case Studies | Click iX',
    description:
      'Landmark LED, live broadcasts and audience participation — documented deployments run on CS Play.',
    group: 'case-studies',
    status: 'implemented',
  },
  caseStudiesFmcgOthers: {
    path: '/case-studies-fmcg-others/',
    label: 'Brands & FMCG',
    title: 'Brands & FMCG Case Studies | Click iX',
    description:
      'Point-of-decision displays and interactive product experiences at the counter.',
    group: 'case-studies',
    status: 'implemented',
  },
} as const satisfies Record<string, SiteRoute>

export type RouteId = keyof typeof routes

export const allRoutes: readonly SiteRoute[] = Object.values(routes)

export const implementedRoutes = allRoutes.filter((route) => route.status === 'implemented')

export const plannedRoutes = allRoutes.filter((route) => route.status === 'planned')

// Primary nav follows the supplied homepage comp: capability, product, proof,
// method, company, contact. Order lives here so the header stays dumb.
const navSequence = ['/our-services/', '/software/', '/case-studies/', '/our-process/', '/about/']

export const primaryNavRoutes = allRoutes
  .filter((route) => route.inPrimaryNav)
  .sort((a, b) => {
    const ai = navSequence.indexOf(a.path)
    const bi = navSequence.indexOf(b.path)
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi)
  })
export function getRoute(id: RouteId): SiteRoute {
  return routes[id]
}
