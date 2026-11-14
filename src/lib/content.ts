// Content sourced from the 2026 company profile, the legacy profile and the
// website linking note. No claim here is invented. Items still awaiting
// publication approval are marked `status: 'supplied'`.

export type Evidence = 'verified' | 'supplied' | 'editorial' | 'illustrative'

export interface Product {
  readonly id: string
  readonly name: string
  readonly role: string
  readonly audience: string
  readonly summary: string
  readonly capabilities: readonly string[]
  readonly screens?: readonly string[]
  readonly tier: 'core' | 'supporting' | 'separate'
  readonly accent: 'deals' | 'play' | 'ssn' | 'hub' | 'signal' | 'proof'
  readonly evidence: Evidence
}

export const products: readonly Product[] = [
  {
    id: 'cs-deals',
    name: 'CS Deals',
    role: 'Media owner ERP / CRM',
    audience: 'Sales, operations and finance teams running a screen network',
    summary:
      'The commercial spine. Inventory, pipeline, packages, bookings, job requisitions, invoicing and reporting in one system — including static media.',
    capabilities: [
      'Live availability and occupancy across every asset and site',
      'Advertiser, agency and deal pipeline in one CRM',
      'Package building, proposals and confirmed media booking orders',
      'Job requisitions handed to operations for install, flighting and takedown',
      'Invoicing and billing against confirmed bookings',
    ],
    tier: 'core',
    accent: 'deals',
    evidence: 'supplied',
  },
  {
    id: 'cs-play',
    name: 'CS Play',
    role: 'CMS for billboards and large-format screens',
    audience: 'Outdoor, facade, atrium and large-format LED networks',
    summary:
      'Schedules, plays and proves campaign content on mass-facing screens, including live feeds, HTML5 and data-triggered creative.',
    capabilities: [
      'Drag-and-drop scheduling with day-parting, frequency control and slot or duration booking',
      'Proof-of-play logged per screen and exported for advertiser reporting',
      'Live video, HTML5 and data-driven content alongside ad loops',
      'Remote push to one screen or all screens, with status and offline alerts',
      'Programmatic-ready through SSP and DSP on the same inventory',
    ],
    screens: [
      'Roadside billboards and outdoor LED',
      'Building facades, atrium and concourse LED',
    ],
    tier: 'core',
    accent: 'play',
    evidence: 'supplied',
  },
  {
    id: 'cs-play-ssn',
    name: 'CS Play SSN',
    role: 'CMS for indoor small-screen networks',
    audience: 'Kiosks, lift lobbies, escalator panels, supermarkets and in-store screens',
    summary:
      'Books and runs commercialised indoor screens by site, zone, level or format, with venue content and paid advertiser loops side by side.',
    capabilities: [
      'Group screens by site, zone, level or format and book a package in one action',
      'Paid advertiser loops alongside venue and tenant house content',
      'Portrait and landscape layouts with video, image and HTML5',
      'Per-screen proof-of-play for advertiser reports',
      'Remote monitoring across all sites from one login',
    ],
    screens: [
      'Indoor panels, lift lobbies and escalators',
      'Ad kiosks, retail and supermarket screens',
    ],
    tier: 'core',
    accent: 'ssn',
    evidence: 'supplied',
  },
  {
    id: 'cs-sign-hub',
    name: 'CS Sign Hub',
    role: 'CMS for in-house, non-advertising screens',
    audience: 'Retail, F&B, hospitality and corporate premises',
    summary:
      'Manages menus, directories and corporate screens. Cloud SaaS by default, with an on-premise option, on Windows and Android players.',
    capabilities: [
      'Menus, directories and corporate screens',
      'Cloud SaaS by default, on-premise available',
      'Runs on Windows and Android players',
    ],
    tier: 'separate',
    accent: 'hub',
    evidence: 'supplied',
  },
  {
    id: 'omnibuy-dsp',
    name: 'OmniBuy DSP',
    role: 'Programmatic planning and buying',
    audience: 'Brands and agencies buying digital out-of-home',
    summary:
      'Plans and buys screen inventory programmatically, with site selection, impression data and dynamic creative.',
    capabilities: [
      'Site selection by city, point of interest and audience affinity',
      'Real-time impressions by hour, day, week and month',
      'Real-Time Bidding and Programmatic Guaranteed',
      'Dynamic Creative Optimisation for DOOH',
    ],
    tier: 'supporting',
    accent: 'signal',
    evidence: 'supplied',
  },
  {
    id: 'ssp',
    name: 'CS Context',
    role: 'Supply-side platform (SSP)',
    audience: 'Media owners connecting inventory to programmatic demand',
    summary:
      'Connects screen inventory to programmatic buyers, with dynamic pricing, availability, creative approval and billing.',
    capabilities: [
      'Dynamic pricing, availability and buyer access in real time',
      'Programmatic-ready inventory management',
      'Creative approval requests from agencies and clients',
      'Billing for successful programmatic campaigns',
    ],
    tier: 'supporting',
    accent: 'signal',
    evidence: 'supplied',
  },
  {
    id: 'measurement',
    name: 'Measurement',
    role: 'Audience measurement and campaign proof',
    audience: 'Media owners and advertisers',
    summary:
      'Ties audience measurement to CMS spot data, so a campaign shows who was there when it played.',
    capabilities: [
      'ATMD — on-site Wi-Fi sensing counts devices passing a screen',
      'Aidiencer — camera-based footfall with age and gender, without personal identification',
      'CS Edge Insights — dashboards joining audience data to spot logs',
    ],
    tier: 'supporting',
    accent: 'proof',
    evidence: 'supplied',
  },
  {
    id: 'data-partnerships',
    name: 'Data partnerships',
    role: 'Third-party audience data and activation',
    audience: 'Brands and agencies',
    summary:
      'Brings local audience data and activation partners into the planning layer. Current partnerships and permitted claims require verification.',
    capabilities: [
      'First-party audience data through on-site Wi-Fi sensing',
      'Third-party audience data through local partners',
      'Mobile Advertising ID capture for retargeting and attribution',
      'Geo-fenced and routine-based targeting',
    ],
    tier: 'supporting',
    accent: 'signal',
    evidence: 'supplied',
  },
]

export const coreProducts = products.filter((product) => product.tier === 'core')
export const supportingProducts = products.filter((product) => product.tier === 'supporting')

export const platformRows = [
  { asset: 'Roadside billboards and outdoor LED', play: true, ssn: false, deals: true },
  { asset: 'Building facades, atrium and concourse LED', play: true, ssn: false, deals: true },
  { asset: 'Indoor panels, lift lobbies and escalators', play: false, ssn: true, deals: true },
  { asset: 'Ad kiosks, retail and supermarket screens', play: false, ssn: true, deals: true },
  { asset: 'Partner or third-party operated screens', play: true, ssn: true, deals: true },
  { asset: 'Static lightboxes, banners and wraps', play: false, ssn: false, deals: true },
] as const

export const commercialFlow = [
  { step: 'Sell', system: 'CS Deals', detail: 'Package inventory across sites, issue the proposal, confirm the booking.' },
  { step: 'Schedule', system: 'CS Play / SSN', detail: 'The booking flows to the CMS; creative is loaded and day-parted per screen.' },
  { step: 'Play', system: 'CS Play / SSN', detail: 'Content goes live remotely; network health is monitored centrally.' },
  { step: 'Prove', system: 'Proof-of-play + Edge Insights', detail: 'Spot logs and audience data back up every campaign.' },
  { step: 'Bill', system: 'CS Deals', detail: 'Invoice against the confirmed booking and proof, then report.' },
] as const

export const deliverySteps = [
  { step: '01', name: 'Discovery & audit', detail: 'Capture every screen, its PC or media player, controller and resolution.' },
  { step: '02', name: 'Compatibility & design', detail: 'Confirm what runs as-is, what needs a new player, and design the network structure and packages.' },
  { step: '03', name: 'Pilot', detail: 'Deploy at one site to prove workflows, reporting and a first innovative format.' },
  { step: '04', name: 'Rollout & support', detail: 'Phase the remaining sites, train sales and operations teams, and support under SLA.' },
] as const

export interface CaseStudy {
  readonly id: string
  readonly client: string
  readonly title: string
  readonly category: CaseCategoryId
  readonly where: string
  readonly brief: string
  readonly did: readonly string[]
  readonly why: string
  readonly systems: readonly string[]
  readonly image?: { readonly src: string; readonly alt: string }
  readonly featured?: boolean
}

export type CaseCategoryId = 'retail-malls' | 'medical-pharma' | 'out-of-home-advertisers' | 'fmcg-others'

export const caseCategories: readonly {
  id: CaseCategoryId
  label: string
  route: string
  line: string
}[] = [
  {
    id: 'out-of-home-advertisers',
    label: 'Outdoor & live',
    route: '/case-studies-out-of-home-advertisers/',
    line: 'Landmark LED, live broadcasts and audience participation.',
  },
  {
    id: 'retail-malls',
    label: 'Retail & enterprise',
    route: '/case-studies-retail-malls/',
    line: 'Store networks, experience centres and corporate AV.',
  },
  {
    id: 'medical-pharma',
    label: 'Healthcare',
    route: '/case-studies-medical-pharma/',
    line: 'Hospital screen networks with directories, wayfinding and queue integration.',
  },
  {
    id: 'fmcg-others',
    label: 'Brands & FMCG',
    route: '/case-studies-fmcg-others/',
    line: 'Point-of-decision displays and interactive product experiences.',
  },
]

export const caseStudies: readonly CaseStudy[] = [
  {
    id: 'maxis',
    client: 'Maxis',
    title: 'Maxis retail network: every screen on one CMS',
    category: 'retail-malls',
    where:
      'Maxis Centres, enterprise partners and dealerships nationwide, plus MC+ flagships at KLCC, Sunway Pyramid, The Gardens, Queensbay, Taman Molek and TRX',
    brief:
      'Maxis wanted one end-to-end solution for the digital screens, queue displays and LED across its Maxis Centres, enterprise partners and dealerships, with every screen managed from one CMS.',
    did: [
      'Six MC+ flagship stores: LED sized to each pillar and wall, installed on store-opening timelines',
      'CMS and content services across Maxis Centres, enterprise partners and dealerships',
      'Integration with the queue system, so live queue numbers play alongside content',
      'Supply and maintenance of all media players, with installation and cabling',
      'KLCC’s dual-sided LED runs from a single player and licence',
    ],
    why: 'One partner across hardware, installation, CMS and queue integration, for every screen in the retail estate.',
    systems: ['CS Play', 'LED', 'Media players', 'Queue integration'],
    image: {
      src: '/media/maxis-store.jpg',
      alt: 'Hanging LED screen above a Maxis MC+ store display.',
    },
    featured: true,
  },
  {
    id: 'mbic',
    client: 'Maxis',
    title: 'Maxis Business Innovation Centre: one console for a showcase',
    category: 'retail-malls',
    where: 'Maxis Business Innovation Centre (MBIC), Kuala Lumpur',
    brief:
      'MBIC is where Maxis shows enterprise clients its 5G and digital solutions, across LED walls, projection, interactive displays and a city-model centrepiece. It needed a clear view of the estate’s health and a simpler way to run it.',
    did: [
      'Ran a full system health check across AV, LED, video conferencing, infrastructure and CMS',
      'Presented CS Sign Hub with a live demo on MBIC’s own screens',
      'Built a microsite control panel, served through the CMS, to replace tablet-button controls',
      'Cloud hosting cleared Maxis IT security compliance, with on-premise as an option',
    ],
    why: 'A showcase has to work on every visit; one console and a documented health baseline make that repeatable.',
    systems: ['CS Sign Hub', 'AV audit', 'CMS'],
  },
  {
    id: 'maxis-hq',
    client: 'Maxis',
    title: 'Maxis HQ and network offices: AV that keeps running',
    category: 'retail-malls',
    where:
      'Maxis headquarters, regional offices and the Subang HiTech security operations centre (SOC)',
    brief:
      'Maxis needed one accountable partner to maintain the AV and office control systems across its headquarters, regional offices and operations centre.',
    did: [
      'Preventive maintenance by site class: critical rooms three times a year, the SOC twice a year, other sites on call',
      'Look after the SOC’s 32-screen video wall estate (eight 2x2 walls), including on-site diagnostics',
      'Support collaboration spaces such as curved video walls and VC rooms, including upgrade advice',
      'Work at the SOC runs through Maxis’ change-request process, keeping monitoring capacity live',
    ],
    why: 'Boardrooms, VC rooms and the SOC stay up, with one team that knows the estate and works inside Maxis’ own processes.',
    systems: ['AV maintenance', 'Video walls', 'VC rooms'],
  },
  {
    id: 'cheras',
    client: 'Cheras LeisureMall',
    title: 'Cheras LeisureMall: the indoor network, maintained',
    category: 'retail-malls',
    where: 'Cheras, Kuala Lumpur',
    brief:
      'A neighbourhood mall’s indoor screen network needed to be run and maintained, not just installed.',
    did: [
      'Mall screens run on CS Play SSN',
      'Annual SLA covering monitoring, support and software updates',
      'Renewed into a further 12-month term from October 2026',
    ],
    why: 'One annual agreement keeps the mall’s screens monitored, supported and current.',
    systems: ['CS Play SSN', 'SLA'],
    image: {
      src: '/media/cheras-mall.jpg',
      alt: 'Mall LED screen running a PLACE campaign beside an escalator.',
    },
    featured: true,
  },
  {
    id: 'triumph',
    client: 'Triumph',
    title: 'Triumph Flex Smart: in-store games that drive vouchers',
    category: 'retail-malls',
    where: 'Triumph stores at Pavilion Kuala Lumpur and Pavilion Bukit Jalil',
    brief:
      'For the launch of its Flex Smart bralette campaign, Triumph wanted modular, interactive digital games that would catch younger shoppers’ attention.',
    did: [
      'Provided mobile interactive kiosks for the campaign',
      'Developed an interactive puzzle game and a Kinect-enabled dance game',
      'Built HTML triggers and a web app that emailed each player a voucher',
      'Ran the activation and campaign management during the event',
    ],
    why: 'Play turned into purchases, as participants claimed their vouchers in-store at both Pavilion stores.',
    systems: ['Interactive kiosks', 'Kinect', 'Web app'],
  },
  {
    id: 'rollti',
    client: 'Rollti',
    title: 'Rollti: menu boards that change by day and hour',
    category: 'retail-malls',
    where: 'Rollti outlets across its franchise network',
    brief:
      'Rollti runs different promotions in different weeks and at different times of day, and wanted to update and synchronise content across its franchise stores remotely.',
    did: [
      'Supplied and installed digital signage at each outlet',
      'Set up the CMS to run different menus and promotions by day and time',
      'Synchronised screens into one composite display for special promotions',
      'Content updates pushed remotely across every store',
    ],
    why: 'A digital menu board across the chain, with every outlet updated from one place.',
    systems: ['CS Sign Hub', 'Menu boards', 'Composite sync'],
  },
  {
    id: 'motogp',
    client: 'Big Tree Outdoor',
    title: 'MotoGP KL26 launch: live on Kuala Lumpur’s giant LED',
    category: 'out-of-home-advertisers',
    where: 'L-shaped giant LED at Menara LGM facing KLCC, Kuala Lumpur, 2026',
    brief:
      'Big Tree Outdoor wanted the MotoGP KL 2026 season launch broadcast live onto its L-shaped giant LED, framed inside the launch’s own branded creative.',
    did: [
      'Took the broadcaster’s camera feed at a clean HDMI handover and captured it into CS Play via capture card and media player',
      'Built an HTML-based live-feed layout so the stream played inside the KL26 launch creative',
      'Ran on-site testing and configuration before the event, with a technical team on-site through the broadcast',
      'The same setup has since been re-booked for the FIFA World Cup 2026 Final and a live concert broadcast',
    ],
    why: 'A live event becomes premium screen content, on a repeatable setup with a clear handover between broadcaster and screen.',
    systems: ['CS Play', 'Live capture', 'HTML layout'],
  },
  {
    id: 'cubig',
    client: 'Big Tree Outdoor',
    title: 'The OOH City Tour: the city hears you on CuBig KLCC',
    category: 'out-of-home-advertisers',
    where: 'CuBig KLCC, the giant LED at Menara LGM facing KLCC Junction, Kuala Lumpur',
    brief:
      'Big Tree Outdoor wanted guests on its OOH city bus tour to see their own photo and message go up on its landmark CuBig KLCC screen the same evening.',
    did: [
      'Built a QR-linked microsite where guests uploaded a photo and a short message during the tour',
      'AI turned each photo into a campaign visual, with pose and backdrop reacting to the guest’s message',
      'Every submission passed a moderation page before it could reach the screen',
      'Approved visuals aired with each guest’s name and message, closing on a mosaic of all 58 messages',
      'Handled 40 to 50 guests submitting at the same time',
    ],
    why: 'Audience-made, AI-personalised content on a landmark public screen, live the same evening, with the media owner approving everything that goes on air.',
    systems: ['CS Play', 'Moderation', 'AI visuals'],
    image: {
      src: '/media/outdoor-street.jpg',
      alt: 'Street-level LED screen at a pedestrian crossing in Kuala Lumpur.',
    },
    featured: true,
  },
  {
    id: 'big-tree',
    client: 'Big Tree Outdoor',
    title: 'Big Tree Outdoor: technology partner behind the screens',
    category: 'out-of-home-advertisers',
    where: 'Big Tree digital screens nationwide, including the CuBig landmark LED network',
    brief:
      'Big Tree is one of Malaysia’s largest OOH and D-OOH operators. It needed a reliable partner for the software and hardware that power its digital screens across the country.',
    did: [
      'Media players and CS Play CMS deployed across its digital screens',
      'Activation ideation as a sales-enhancement partner, with content management on selected activations',
      'Dynamic triggers built on weather, ultrasonic, sound and news API inputs',
      'HTML site-link and reader development for live and web-based content',
      'CMS and CRM tailored to how Big Tree’s teams work',
    ],
    why: 'A long-running partnership where new formats are ideated, built and run on one managed stack.',
    systems: ['CS Play', 'Media players', 'Data triggers'],
    image: {
      src: '/media/outdoor-network.png',
      alt: 'Outdoor LED network structure at street level.',
    },
  },
  {
    id: 'kpj2',
    client: 'KPJ Damansara Specialist Hospital 2',
    title: 'KPJ DSH2: wayfinding and queues on one screen network',
    category: 'medical-pharma',
    where: 'Lobbies, clinic areas and corridors across KPJ Damansara Specialist Hospital 2',
    brief:
      'KPJ Damansara Specialist Hospital 2 wanted one system for its screens and video walls: a hospital information channel, a doctors’ directory, static and interactive wayfinding, all linked to its queue system.',
    did: [
      'Turnkey digital signage and LED, with custom framing for the digital kiosks',
      'Media players and CMS running the hospital information channel',
      'Installation, cabling and integration with the hospital queue system',
      'Content for the doctors’, clinic and pharmacy directories, plus interactive wayfinding',
      'Electronic signage linked to the opening’s guest invite list',
    ],
    why: 'Patients find their way and follow their queue on the same screens, which also opens up space for commercial playback.',
    systems: ['CS Sign Hub', 'CMS', 'Queue integration'],
    image: {
      src: '/media/kpj2-lobby.jpg',
      alt: 'Hospital lobby with a wall-mounted directory and video wall.',
    },
    featured: true,
  },
  {
    id: 'kpj-opening',
    client: 'KPJ Damansara Specialist Hospital 2',
    title: 'KPJ DSH2 opening: a digital welcome for guests',
    category: 'medical-pharma',
    where: 'KPJ Damansara Specialist Hospital 2, Damansara',
    brief:
      'The hospital opening needed one connected guest journey: sign in, carry the programme, and understand what the new hospital stands for.',
    did: [
      'Digital e-signing, linked to the opening’s invite list',
      'A QR code synced the e-invite and itinerary to each guest’s phone',
      'An interactive projected wall explored the launch, vision and mission of KPJ2',
    ],
    why: 'Guests moved from invitation to sign-in to the story of the hospital in one connected experience.',
    systems: ['Digital signing', 'QR e-invite', 'Projection'],
  },
  {
    id: 'pantai',
    client: 'Pantai Hospital',
    title: 'Pantai Hospital: an interactive guide to every facility',
    category: 'medical-pharma',
    where: 'Lobbies, clinic waiting areas and public spaces across the hospital',
    brief:
      'Pantai Hospital wanted one solution for its screens and video walls: a hospital information channel, a doctors’ directory on a video wall and wayfinding, linked to its queue system.',
    did: [
      'Supplied digital signage, media players and the CMS to manage content',
      'Built an interactive guide with animated paths to clinics, F&B and key facilities',
      'Installation, cabling and integration with the hospital queue and information systems',
      'Built a doctors’ directory searchable by name or specialty',
    ],
    why: 'Visitors find their way without asking, and queue integration lets the same screens carry information and commercial playback.',
    systems: ['CMS', 'Queue integration', 'Wayfinding'],
  },
  {
    id: 'btmc',
    client: 'Bukit Tinggi Medical Centre',
    title: 'Bukit Tinggi Medical Centre: one integrated screen network',
    category: 'medical-pharma',
    where: 'Bandar Bukit Tinggi, Klang, Selangor',
    brief:
      'BTMC wanted its screens and video walls to carry a hospital information channel, a doctors’ directory and wayfinding, all linked to its queue system.',
    did: [
      'Turnkey delivery of screens, media hardware and CMS software',
      'Cabling and installation across the hospital',
      'Integration with the hospital management and queue system',
      'Content development and ongoing content management',
    ],
    why: 'One partner across hardware, software, content and integration, so the hospital deals with a single team.',
    systems: ['CMS', 'HMS integration', 'Content'],
  },
  {
    id: 'loreal',
    client: 'L’Oréal',
    title: 'L’Oréal Paris: interactive shop-in-shop counters',
    category: 'fmcg-others',
    where: 'L’Oréal Paris shop-in-shop counters in pharmacies across Malaysia and Singapore',
    brief:
      'L’Oréal wanted to lift its L’Oréal Paris shop-in-shop experience in pharmacies, from digital signage to interactive formats such as Lift & Learn and virtual try-on.',
    did: [
      'Built and installed the framing for edutainment, Lift & Learn, virtual try-on (AR) and digital screens',
      'Fitted RFID, magnetic and motion sensors, so picking up a product triggers its content',
      'Supplied the media players and signage for information and interaction',
      'Developed the content and workflow behind each interaction',
    ],
    why: 'Shoppers learn how to use a product, and what is in it, right at the shelf, which keeps them at the counter longer.',
    systems: ['Interactive', 'RFID + motion', 'Content'],
    featured: true,
  },
]

export const featuredCases = caseStudies.filter((study) => study.featured)

export function casesForCategory(category: CaseCategoryId): readonly CaseStudy[] {
  return caseStudies.filter((study) => study.category === category)
}

export interface ServiceContent {
  readonly routeId:
    | 'marketingCommunicationStrategy'
    | 'projectManagement'
    | 'consumerJourneyMapping'
    | 'digitalSignageSolutionsMapping'
    | 'contentMapping'
    | 'dataAnalytics'
    | 'interactiveSolution'
  readonly scope: readonly string[]
  readonly limit: string
}

export const serviceContent: readonly ServiceContent[] = [
  {
    routeId: 'marketingCommunicationStrategy',
    scope: ['Creative and messaging direction', 'Digital screen formats', 'Technology advisory'],
    limit: 'No campaign performance figures are published. Results require client approval and measurement evidence.',
  },
  {
    routeId: 'projectManagement',
    scope: ['Consultancy and ideation', 'Training and development', 'Network management', 'End-to-end project management'],
    limit: 'Delivery scope is agreed per project. No client list is implied by this page.',
  },
  {
    routeId: 'consumerJourneyMapping',
    scope: ['Touch-point mapping across the visitor journey', 'Placement and dwell-time planning'],
    limit: 'The source material for this service is thin. The page describes a method, not a guaranteed outcome.',
  },
  {
    routeId: 'digitalSignageSolutionsMapping',
    scope: ['Screens and displays', 'Media players', 'CMS and interactive', 'DOOH and indoor advertising software'],
    limit: 'Hardware recommendations depend on a site survey. No vendor or model is promised before that audit.',
  },
  {
    routeId: 'contentMapping',
    scope: ['Idea and strategy', 'Concept and content design', 'Content development', 'Content management'],
    limit: 'No client creative is shown without permission. Formats depend on the screen and the CMS in place.',
  },
  {
    routeId: 'dataAnalytics',
    scope: ['Dashboard access', 'Customisable dashboards', 'Insights and recommendations', 'ATMD, Aidiencer and CS Edge measurement'],
    limit: 'No data volumes, accuracy figures or audience guarantees are claimed.',
  },
  {
    routeId: 'interactiveSolution',
    scope: ['Interactive experiences', 'Custom development', 'Custom programming', 'Sensor and kiosk integration'],
    limit: 'Examples are limited to approved deployments: L’Oréal, Triumph and KPJ2.',
  },
]

export function serviceFor(routeId: ServiceContent['routeId']): ServiceContent {
  const service = serviceContent.find((entry) => entry.routeId === routeId)
  if (!service) throw new Error(`Unknown service: ${routeId}`)
  return service
}

export const company = {
  name: 'CLICK IX Sdn Bhd',
  city: 'Kuala Lumpur, Malaysia',
  market: 'Malaysia, Southeast Asia and the Middle East',
  incorporated: '2022',
  teamExperience: 'More than two decades of industry experience across the team.',
  positioning: 'The software that runs, sells and proves digital screen networks.',
  tagline: 'Smarter Screen. Smarter Business.',
  summary:
    'Click iX builds and operates the software behind digital screen networks: the CMS that plays content, the ERP and CRM that sell and bill inventory, the programmatic pipes that bring in demand, and the measurement that proves an audience was there. Every layer is built and maintained in-house.',
  leaders: [
    {
      name: 'Michael Tan',
      role: 'Managing Director',
      focus: 'Digital signage, communications strategy, out-of-home, retail and healthcare.',
      image: '/team/michael-tan.png',
    },
    {
      name: 'Lexus Gan',
      role: 'Associate Director, Business Development',
      focus: 'Business development, partnerships and market entry.',
      image: '/team/lexus-gan.png',
    },
    {
      name: 'Vicky Yip',
      role: 'After Sales & Operations Director',
      focus: 'After-sales, operations and service delivery.',
      image: '/team/vicky-yip.png',
    },
  ],
} as const
