import { routes } from './routes'

/**
 * Primary navigation structure.
 *
 * Two levels only: a top-level destination and, where the site has a real
 * directory, a small panel of its children. Every href below is an implemented
 * route — the menu never advertises a page that does not exist.
 */
export interface NavMenuLink {
  readonly href: string
  readonly label: string
}

export interface NavMenuGroup {
  readonly label: string
  readonly links: readonly NavMenuLink[]
}

export interface NavMenuItem {
  readonly key: string
  readonly label: string
  readonly href: string
  readonly size?: 'wide' | 'mid'
  readonly align?: 'left' | 'right'
  readonly groups?: readonly NavMenuGroup[]
  readonly note?: string
  readonly footer?: NavMenuLink
}

export const primaryMenu: readonly NavMenuItem[] = [
  {
    key: 'services',
    label: routes.ourServices.navLabel ?? routes.ourServices.label,
    href: routes.ourServices.path,
    size: 'wide',
    align: 'left',
    groups: [
      {
        label: 'Plan',
        links: [
          { href: routes.marketingCommunicationStrategy.path, label: 'Communication strategy' },
          { href: routes.consumerJourneyMapping.path, label: 'Consumer journey mapping' },
          { href: routes.contentMapping.path, label: 'Content mapping' },
        ],
      },
      {
        label: 'Deliver',
        links: [
          { href: routes.projectManagement.path, label: 'Project management' },
          { href: routes.digitalSignageSolutionsMapping.path, label: 'Solution mapping' },
          { href: routes.dataAnalytics.path, label: 'Data & analytics' },
          { href: routes.interactiveSolution.path, label: 'Interactive builds' },
        ],
      },
    ],
    note: 'Eight services, one team',
    footer: { href: routes.ourServices.path, label: 'All services' },
  },
  {
    key: 'products',
    label: routes.software.navLabel ?? routes.software.label,
    href: routes.software.path,
    size: 'mid',
    groups: [
      {
        label: 'Platform',
        links: [
          { href: routes.software.path, label: 'All products' },
          { href: routes.csDeals.path, label: 'CS Deals' },
          { href: routes.csPlay.path, label: 'CS Play' },
          { href: routes.csPlaySsn.path, label: 'CS Play SSN' },
          { href: routes.csSignHub.path, label: 'CS Sign Hub' },
        ],
      },
      {
        label: 'Demand and proof',
        links: [
          { href: routes.omnibuyDsp.path, label: 'OmniBuy DSP' },
          { href: routes.csContext.path, label: 'CS Context' },
          { href: routes.measurement.path, label: 'Measurement' },
          { href: routes.hardware.path, label: 'Hardware' },
        ],
      },
    ],
    note: 'Built and maintained in-house',
    footer: { href: routes.about.path, label: 'Start with your screen list' },
  },
  {
    key: 'cases',
    label: routes.caseStudies.label,
    href: routes.caseStudies.path,
    size: 'wide',
    groups: [
      {
        label: 'Chapters',
        links: [
          { href: routes.caseStudiesOutOfHomeAdvertisers.path, label: 'Outdoor & live' },
          { href: routes.caseStudiesRetailMalls.path, label: 'Retail & enterprise' },
          { href: routes.caseStudiesMedicalPharma.path, label: 'Healthcare' },
          { href: routes.caseStudiesFmcgOthers.path, label: 'Brands & FMCG' },
        ],
      },
      {
        label: 'Start here',
        links: [
          { href: routes.caseStudies.path, label: 'All case studies' },
          { href: routes.ourProcess.path, label: 'Our process' },
        ],
      },
    ],
    note: 'Documented deployments',
    footer: { href: routes.about.path, label: 'Start a review' },
  },
  {
    key: 'process',
    label: routes.ourProcess.navLabel ?? routes.ourProcess.label,
    href: routes.ourProcess.path,
  },
  {
    key: 'about',
    label: routes.about.label,
    href: routes.about.path,
  },
]
