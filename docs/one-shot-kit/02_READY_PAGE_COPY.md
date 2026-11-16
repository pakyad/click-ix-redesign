# CLICK IX — READY-TO-REVIEW PAGE COPY
Written for the visual board "CLICK IX_ Immersive Screen Networks.png".
Source of facts: repository main src/lib/content.ts, src/lib/routes.ts, src/app/page.tsx and active components inspected 2026-11-16.
STATUS: EDITORIAL DRAFT. Company publication approval required. Never treat the content as a legal/claims authorization.
Markers: [VERIFIED IN REPO] = present in current repository content; [PROPOSED COPY] = an editorial articulation of repository facts; [APPROVAL REQUIRED] = permission/legal/content review before launch; [ASSET REQUIRED] = authentic media not verified in repo.

## HOME — CANONICAL ROUTE /

### H01 — Announcement banner
[VERIFIED IN EXISTING PAGE CONTEXT]
Copy: "Click iX presents City Screen in APAC"
Action: "Visit page"
Implementation: retain current announcement and real destination; do not invent a City Screen URL or award credential.

### H02 — Hero
[VERIFIED IN REPO]
Primary headline: "Smarter Screen. Smarter Business."
Supporting line: "The software that runs, sells and proves digital screen networks — and the displays, players and installation that carry it. One team, Kuala Lumpur."
Action 1: "Explore our services" -> /our-services/
Action 2: "See the work" -> /case-studies/
Scope labels: "Screens" / "Players" / "Software" / "Measurement"
Evidence: real /media/hero.mp4, /media/hero-poster.jpg, caption currently reads "Installation film · MotoGP KL26 launch"
Visual: do not swap the actual film for AI street scene; do not change logo lockup.
Narrative goal: identify CLICK IX as the team combining software and the physical displays it supports.

### H03 — Client evidence
[VERIFIED IN REPO; APPROVAL REQUIRED FOR MARK DISPLAY]
Eyebrow/label: "Trusted by teams at"
Use the existing src/lib/clients.ts registry only, with company approval for current relationships. Avoid unapproved logo names from the concept image. Do not invent client testimonials or screen totals.
Narrative goal: credibility from real relationships, without a marketing-count claim.

### H04 — One partner
[PROPOSED COPY, adapted from current repo]
Eyebrow: "WHAT WE DO"
Headline: "One partner for your screen network."
Body: "From screen planning and installation to content operations and reporting, we connect the hardware, software and people behind each deployment."
Primary link: "Explore our services" -> /our-services/
Capability mapping:
  Hardware — "LED screens, displays and the physical systems around them."
  Software — "Platforms for scheduling, screen operations and media inventory."
  Installation — "Site assessment, configuration and coordinated deployment."
  Content — "Campaign delivery and screen-specific content management."
  Measurement — "Playback evidence and audience-related reporting capabilities."
Note: capability descriptions summarize available company content, not universal warranty or quantified results.
Visual: mostly quiet white/paper surface; use real media only when relevant.

### H05 — A connected ecosystem
[PROPOSED COPY grounded in product catalogue]
Eyebrow: "THE SYSTEM BEHIND THE SCREEN"
Headline: "A connected system. From screen to proof."
Body: "A digital screen is only what people see. Content, scheduling, inventory and reporting sit behind it — supported by tools built for different jobs across the network."
Three buyer chapters:
  01 / Screen network — "Physical displays, media players and the environments they serve."
  02 / Content operations — "Software organizes campaigns, content and playback."
  03 / Proof and measurement — "Playback logs and audience-related data can support campaign reporting."
Link: "Explore the software" -> /software/
Visual approach: photographed deployment -> actual authorized software interface or accurate labelled diagram -> factual proof-of-play/report format. [ASSET REQUIRED: real dashboard screenshots]
Fallback: if screenshots unavailable, factual diagrams and copy only, not fake UI.

### H06 — Software ecosystem
[VERIFIED PRODUCT ROLES + PROPOSED PRESENTATION]
Eyebrow: "THE PLATFORMS"
Headline: "The software behind every screen."
Supporting copy: "Each platform handles a particular part of the network, from commercial inventory and content delivery to programmatic buying and measurement."
Products and blurbs (roles adapted from src/lib/content.ts):
  CS Deals — "Media-owner inventory, commercial workflow, bookings and invoicing."
  CS Play — "Content scheduling and playback for large-format and public-facing screens."
  CS Play SSN — "Indoor commercial screen networks and grouped display operations."
  CS Sign Hub — "Menus, directories and in-house screens."
  OmniBuy DSP — "Digital out-of-home campaign planning and programmatic buying."
  CS Context — "Supply-side screen inventory, access and pricing."
  Measurement — "Audience measurement and campaign proof connected to playback data."
  Data Partnerships — "Supporting audience data and activation capabilities; partnership specifics require confirmation."
Links: existing /software/ page and the canonical per-product routes in src/lib/routes.ts.
Do not show every product as a fictional software screenshot.

### H07 — Delivery process
[PROPOSED SITE COPY grounded in existing deliverySteps and commercialFlow]
Eyebrow: "HOW THE WORK HAPPENS"
Headline: "From plan to live screen."
Short intro: "Assess the environment, confirm the system, prove it at a pilot site and support the rollout."
Four beats:
  01 / Discover — "Audit existing screens, players and requirements."
  02 / Design — "Confirm compatibility and the operating setup."
  03 / Pilot — "Test the workflow in a real deployment environment."
  04 / Roll out — "Deploy, train and support the network."
Link: "See our process" -> /our-process/
Do not imply a universal service-level agreement or turnaround not stated in signed scope.

### H08 — Real projects
[VERIFIED IN REPO]
Eyebrow: "IN PRACTICE"
Headline: "Real screens. Real installations."
Body: "Store networks, mall screens, street-level LED and hospital wayfinding. Each story explains the work, the systems involved and why it matters."
Featured work possibilities, choose only relevant actual caseStudies:
  Maxis — /case-studies-retail-malls/#maxis
  Cheras LeisureMall — /case-studies-retail-malls/#cheras
  Big Tree Outdoor / CuBig — /case-studies-out-of-home-advertisers/#cubig
  KPJ — find real case ID in content.ts before constructing a link
Action: "All case studies" -> /case-studies/
Use real images with exact project IDs. Avoid adding fake results from the concept board.

### H09 — Local credibility (optional)
[PROPOSED COPY; DO NOT INVENT PHOTO]
Eyebrow: "KUALA LUMPUR"
Headline: "Built here. Operating in real environments."
Body: "A Kuala Lumpur team working across the hardware, software and delivery needs of screen networks."
Visual: approved company photograph only. If a suitable KL/company image is not available, keep this as a quiet typography-only section or omit; do not produce an artificial KL skyline.

### H10 — Closing conversion
[VERIFIED IN CURRENT HOME]
Headline: "Start with your screen list."
Body: "Send what you have — locations, screen types, players, controllers. The first useful answer is a compatibility review, not a sales deck."
Primary action: "Get a quote" via src/lib/contact.ts mailto('Quote')
Secondary action: "See the process" -> /our-process/
Do not invent a form, email, number or service promise.

## PRODUCT — CS PLAY / CANONICAL ROUTE /cs-play/

### P01 — Official product introduction
[PROPOSED HEADLINE + VERIFIED ROLE]
Eyebrow: "CS PLAY / CONTENT MANAGEMENT"
Primary mark: real official supplied CS Play logo (product mark asset from public/brand/cityscreen).
Headline: "Run your screens with confidence."
Body: "CS Play schedules, plays and documents campaign content across large-format digital screens, including support for live feeds, HTML5 content and remote delivery."
Primary CTA: "Discuss CS Play" -> existing mailto('Product enquiry') in src/lib/contact.ts
Secondary CTA: "Explore capabilities" -> #capabilities only if anchor implemented
Visual: real approved CS Play UI screenshot [ASSET REQUIRED]. Without one, use real supported installation imagery plus a factual screen/content diagram, labelled as a diagram.

### P02 — Product positioning
[PROPOSED COPY from source catalogue]
Headline: "One platform for content, scheduling and playback."
Paragraph: "Plan where creative runs, schedule it for the relevant screen and playback window, and review the evidence of delivery. The operating details belong in the software, not in disconnected manual steps."
Do not promise API integrations or capabilities that are not in src/lib/content.ts.

### P03 — Core capabilities
[VERIFIED IN REPO]
Headline: "Built for the practical work behind live screens."
Capabilities:
  Scheduling — "Drag-and-drop scheduling with day-parting, frequency control and slot or duration booking."
  Delivery — "Remote push to a selected screen or a wider network."
  Creative formats — "Live video, HTML5 and data-driven content alongside scheduled advertising loops."
  Visibility — "Screen status and offline alerts support remote operations."
  Proof of play — "Playback is recorded per screen and can be exported for advertiser reporting."
  Programmatic readiness — "Inventory can be connected with supply-side and demand-side workflows."
Use authentic screenshots if available; otherwise show an approved text/table list, not fictional dashboards.

### P04 — Screen environments
[VERIFIED IN REPO]
Headline: "Where CS Play is used."
Intro: "CS Play is designed for public-facing and large-format display environments."
Actual supported categories in src/lib/content.ts:
  - Roadside billboards and outdoor LED
  - Building facades, atrium and concourse LED
Visual: corresponding approved installation photos, not invented 3D screens.
Follow current platformRows rather than adding unverified screen-type compatibility.

### P05 — Commercial workflow
[VERIFIED IN REPO; SELECTIVE]
Eyebrow: "A PLACE IN THE WORKFLOW"
Headline: "From schedule to proof of play."
Steps:
  Schedule — "Load creative and set the right time and screen."
  Play — "Deliver content remotely and monitor the display's operating state."
  Prove — "Use playback records as a basis for campaign reporting."
Note: This is an explanatory subset of the company commercialFlow; CS Deals is involved in booking/invoicing and measurement offerings extend proof. Do not claim every step belongs exclusively to CS Play.
Visual: simple labelled system diagram or product screenshots, without invented report figures.

### P06 — Related real deployments
[VERIFIED IN REPO]
Headline: "Where the software meets real screens."
Intro: "Explore documented installations and the systems used to deliver them."
Link to actual cases whose systems include CS Play, e.g. Maxis retail (see source caseStudies) and appropriate outdoor projects.
No fabricated testimonial or rollout percentage.

### P07 — Technical reassurance
[PROPOSED COPY]
Headline: "Start with the screens you have."
Paragraph: "Share your display types, playback hardware and content requirements. We can review the operating setup and identify the questions that matter before implementation."
Primary CTA: "Start a review" -> existing mailto('Product enquiry')
Secondary link: "Compare the stack" -> /software/
No unsupported compatibility guarantees.

## CASE STUDY — MAXIS / CURRENT ARTICLE AT /case-studies-retail-malls/#maxis

### C01 — Hero
[VERIFIED IN REPO]
Client: "Maxis"
Category: "Retail & enterprise"
Headline: "Maxis retail network: every screen on one CMS"
Short intro: "An end-to-end screen-network assignment spanning displays, CMS, content services, media players and operational support across Maxis retail environments."
Hero media: public/media/maxis-store.jpg (plus maxis-screen.jpg if context is verified).
Do not use the generated board's invented exterior building photo.

### C02 — Scope at a glance
[VERIFIED IN REPO]
Where: "Maxis Centres, enterprise partners and dealerships nationwide, plus MC+ flagship stores at KLCC, Sunway Pyramid, The Gardens, Queensbay, Taman Molek and TRX."
Systems listed for this case: CS Play; LED; media players; queue integration.
Buyer-facing heading: "One partner across the screen estate."
Do not add a screen count beyond the documented six MC+ flagship stores without separate verified source.

### C03 — Client requirement
[VERIFIED IN REPO]
Heading: "The requirement"
Body: "Maxis wanted one end-to-end solution for digital screens, queue displays and LED across its Maxis Centres, enterprise partners and dealerships, with screens managed from one CMS."

### C04 — What CLICK IX delivered
[VERIFIED IN REPO]
Heading: "The work"
Bullets:
  - "LED designed to fit the physical pillars and walls of six MC+ flagship stores, aligned with store-opening timelines."
  - "CMS and content services across Maxis Centres, enterprise partners and dealerships."
  - "Integration with the queue system so live queue numbers appear alongside scheduled content."
  - "Media-player supply and maintenance, including installation and cabling."
  - "A dual-sided LED configuration at KLCC operated from a single player and licence."
These statements exist in repository caseStudy data and remain subject to company approval for public publication.

### C05 — Why it matters
[VERIFIED SOURCE IDEA, EDITORIALLY POLISHED]
Heading: "One team, from installation to operation."
Body: "The project brings hardware, installation, content management and queue integration under one delivery responsibility, reducing the number of disconnected systems involved in the screen estate."
The final clause is an inference about operational simplicity and should be reviewed. If unapproved, replace with the source's exact safe statement: "One partner across hardware, installation, CMS and queue integration, for every screen in the retail estate."

### C06 — Project gallery
[ASSET PERMISSIONS REQUIRED]
Use existing /media/maxis-store.jpg and /media/maxis-screen.jpg if distinct and correctly attributable. Add more only from an approved genuine asset pack. Each caption must say what the viewer is actually seeing. No generative interiors/exteriors.

### C07 — Related cases
[VERIFIED IN REPO]
Heading: "More real environments."
Related: Cheras LeisureMall /case-studies-retail-malls/#cheras and relevant other retail cases with actual registry entries. Avoid mixing claims between projects.

### C08 — Closing CTA
[PROPOSED COPY]
Heading: "Planning a multi-site screen network?"
Body: "Share the locations, screen formats and operating requirements. Start a discussion around the infrastructure and software the network needs."
Action: existing contact mailto('Enquiry'); do not invent a form.

## TONE AND REVIEW CHECKLIST
- Prefer "documented" to "proven results" when there are no numeric results.
- Do not say "nationwide" for every client; the Maxis content specifically supports it for that case.
- Never write fake dates, case metrics, customer quotes or deployment counts.
- Do not represent an illustrative CS Play panel as an actual application screenshot.
- Company must approve all externally-facing product, client and installation facts.
- Every CTA href uses the real src/lib/routes.ts registry or src/lib/contact.ts.
- Keep the case article in its current category route unless the owner explicitly authorizes a new detail route.
