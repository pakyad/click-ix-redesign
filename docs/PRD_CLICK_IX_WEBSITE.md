# CLICK iX Website — Product Requirements Document

| Field | Value |
| --- | --- |
| Document | `docs/PRD_CLICK_IX_WEBSITE.md` |
| Version | 1.0 |
| Date | 2026-11-03 |
| Owner | Click iX (product owner to be named) |
| Build | Next.js App Router, existing repository `feature/task-04a-visual-foundation` |
| Status | **Draft for sign-off.** Implementation may start on approved sections; publication is gated by §19. |
| Supersedes | Ad-hoc page briefs in `.opencode/plans/` where they conflict |
| Evidence base | `source-data/` intake of 2026-11-02, `handoff/STATUS_AND_GAPS.md`, `specs/VISUAL_SYSTEM.md` |

---

## 0. How to read this document

Every factual statement about Click iX in this PRD carries an evidence tier. The same tiers must appear in the built site's content and must never be mixed silently.

| Tier | Meaning | May publish? |
| --- | --- | --- |
| **T1 — Verified** | Company-supplied and internally consistent, or explicitly confirmed in writing by the owner. | Yes |
| **T2 — Supplied, unapproved** | Present in company material but not confirmed for public use (capabilities, partner claims, contact details, client names, photos). | Only with named approval |
| **T3 — Editorial** | Written by the site team to explain a problem or a decision. Contains no factual claim about Click iX. | Yes, never presented as company fact |
| **T4 — Illustrative** | Demo interfaces, diagrams, synthetic imagery. Looks like a product or a place but is not one. | Yes, only with a visible label |

**Rule:** a page may not look more certain than its evidence. No metric, logo, testimonial, photograph, integration or partnership appears on the site without a row in the claims register (§11.3).

---

## 1. Summary

Click iX is a Malaysian AdTech company that builds and runs the software behind digital screen networks: the CMS that plays content, the ERP/CRM that sells and bills inventory, the programmatic pipes that bring in demand, and the measurement that proves an audience was there. The company was incorporated in 2022, is based in Kuala Lumpur, and its operating team brings more than two decades of industry experience.

The current site is an honest, well-built shell: 20 canonical routes, a working design foundation, and explicitly labelled placeholders where evidence is missing. It under-sells the company because it describes *services* rather than the *system* Click iX actually operates.

This PRD defines the replacement: a software-led site organised around one connected stack, one commercial flow (`Sell → Schedule → Play → Prove → Bill`), and proof drawn only from approved work. It also defines the colour system derived from the official Click iX identity, because colour is currently the weakest link between the brand's own assets and the website.

**The single sentence the site must land:** *Click iX is the software layer that makes a screen network run, sell and prove itself.*

---

## 2. Context and evidence

### 2.1 What exists

- 20 implemented flat routes with trailing slashes, one `<main id="main-content">` per page, keyboard-accessible mobile menu, reduced-motion support, 15 passing tests, clean typecheck and a clean production build.
- A working dark/light section system with cyan, lime and teal accents inherited from an earlier concept.
- Official Click iX logo available **only as raster PNG**, including a white horizontal lockup for dark surfaces and a yellow knot mark.
- Official CS product logos as vector SVG.
- Eight documented offerings, a platform-to-screen-type map, a four-step delivery method, a five-step commercial flow, three leaders, 12 case narratives, 10 inspected photo sets, and a long list of unverified names and claims.

### 2.2 What is missing

- Official vector logo, brand guidelines, clear-space rules, minimum sizes, official typefaces and their web licences.
- An approved general enquiry channel (email, phone, WhatsApp, address, social profiles).
- Client publication approval and image rights for every case study.
- Any outcome metrics. There are none in the source pack, so the site will not have any.
- A sanitised CS Sign Hub interface screenshot. The current demo is illustrative and stays labelled as such.
- A decision on whether `/products/` and `/platform/` are added to the route set.

### 2.3 The strategic problem

The supplied material contains two different companies:

1. A **2026 software-led AdTech business** (25-page deck): eight offerings, three core platforms, programmatic and measurement, `Sell → Schedule → Play → Prove → Bill`.
2. An **older end-to-end solutions business** (77-page deck): hardware, content, events, interactive builds, a country list, a nine-year AdTech Systems footprint.

Both are real parts of the history. A website that presents them as one undifferentiated list reads as a generalist integrator and loses the only defensible claim: Click iX owns the whole software chain, in-house, and can prove a campaign ran.

**Decision:** the 2026 deck is the primary narrative. The legacy deck supplies supporting scope and service detail. The site leads with software, proves it with deployments, and offers hardware and services as the delivery layer, not the headline.

---

## 3. Goals, non-goals, success metrics

### 3.1 Goals

| ID | Goal | Measure of success |
| --- | --- | --- |
| G1 | Explain the product stack in under 60 seconds | A first-time visitor can name the three core platforms after one screen of scrolling |
| G2 | Make the commercial flow legible | The `Sell → Schedule → Play → Prove → Bill` model appears on the homepage, the products page and the process page, consistently |
| G3 | Replace generic service copy with sourced scope | Every service page states what Click iX actually does, with no invented capability |
| G4 | Publish only defensible proof | Every case study has a named approval and a rights-cleared image or no image |
| G5 | Establish a brand-accurate visual system | Official yellow, logo lockups and product colours are used by rule, not by accident, and every text pair passes contrast |
| G6 | Convert without over-promising | A visitor can start a compatibility review or a platform walkthrough in two interactions, with no fake urgency |
| G7 | Stay maintainable | Content lives in typed data modules; adding an approved case requires no layout work |

### 3.2 Non-goals (this release)

- Not an e-commerce store, quote calculator or login portal.
- Not a programmatic self-serve buying interface.
- Not a CMS migration. Content stays in typed local modules for this release.
- Not a blog, newsroom or resource hub. No empty "Insights" section.
- Not a redesign of the official logo or a new brand identity.
- Not a route restructure without explicit sign-off (§6.4).
- No Three.js, WebGL, 3D scenes, particle systems, fabricated building renders or stock "technology" imagery.

### 3.3 Success metrics (post-launch, privacy-safe)

| Metric | Target | Instrumentation |
| --- | --- | --- |
| Qualified enquiry rate | Baseline in first 30 days, then +20% at 90 days | `cta_click`, `brief_submit` events |
| Product page depth | ≥ 55% of product visitors reach the flow section | Scroll-depth event at 75% |
| Case study engagement | ≥ 40% of case visitors open a second case | `case_open` event |
| Bounce on homepage | ≤ 55% | Pageview + engagement time |
| Core Web Vitals | LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at p75 | Field data |
| Accessibility | Zero critical axe violations; keyboard pass on all 20 routes | Manual + automated audit |

No metric is displayed publicly. These are internal targets only.

---

## 4. Audiences and jobs

| Audience | What they are deciding | What they need from the site | Primary route |
| --- | --- | --- | --- |
| **Media owner / mall operator** | "Can this software run my mixed screen estate and help me sell it?" | Asset coverage, hardware compatibility, ERP + CMS + proof, SLA | `/software/`, `/our-process/`, `/case-studies-retail-malls/` |
| **Retail / F&B / hospital operator** | "Can I run my own screens without an ad sales team?" | Non-advertising CMS, menus, directories, queue integration | `/cs-sign-hub/`, `/case-studies-medical-pharma/` |
| **Brand / agency** | "Can I buy this inventory programmatically and prove it worked?" | DSP, audience data, measurement, reporting | `/software/`, `/data-analytics/`, `/case-studies-out-of-home-advertisers/` |
| **Partner / integrator** | "Is this a real platform or a reseller?" | In-house build, hardware-agnostic claim, deployment method | `/about/`, `/our-process/` |
| **Prospective hire / press** | "Who is this company?" | Leadership, origin, location, category | `/about/` |

### 4.1 Jobs to be done

1. When my screens come from five vendors, I want one system that sees all of them, so I stop reconciling spreadsheets.
2. When I sell a campaign, I want to schedule it once and prove it played, so I get paid without argument.
3. When I add programmatic demand, I want it on the same inventory, so I do not run a second business.
4. When I need screens installed, I want a partner who has done it, so the software is not blamed for the hardware.
5. When I evaluate a vendor, I want to see real deployments, so I can judge whether the claim is true.

---

## 5. Positioning and messaging

### 5.1 Positioning statement

> For media owners, retailers and advertisers running digital screen estates, Click iX is the in-house software layer that runs, sells and proves the network — from content playback and inventory booking to programmatic demand and audience measurement — on hardware you already own.

### 5.2 Message hierarchy

| Level | Message | Where |
| --- | --- | --- |
| Brand line | **Smarter Screen. Smarter Business.** | Header lockup area, footer, metadata suffix. Punctuation pending confirmation. |
| Primary promise | The software that runs, sells and proves digital screen networks. | Homepage H1, About, OG description |
| Mechanism | One stack. Three core platforms. One commercial flow. | Homepage solution section, `/software/` |
| Proof | Real deployments across retail, healthcare and out-of-home. | Homepage projects, case categories |
| Method | Discover, prove compatibility, pilot, roll out. | `/our-process/` |
| Action | Start a compatibility review. | Every page end-cap |

### 5.3 Voice

- Plain, specific, operational. Write like an engineer explaining a system to a commercial colleague.
- Short declaratives. One idea per sentence. No adjective stacking.
- **Banned:** "cutting-edge", "revolutionary", "seamless", "world-class", "unlock", "elevate", "transform your business", "trusted by leading brands".
- Say "screens" or "the network", not "digital experiences".
- Never claim a result that is not in the claims register.
- Editorial guidance is written in the second person and clearly framed as advice, not as delivered scope.

### 5.4 Proof language rules

- Client names only from Tier 1 or with written approval.
- No invented numbers. Screen counts appear only where the source states them (for example, the Maxis Subang wall) and carry a source note.
- No "up to", no "over 100", no percentages without a source.
- No testimonial unless a named person has approved the exact quote.
- Logo walls require per-logo rights. Until then, case cards carry type, not client logos.

---

## 6. Information architecture

### 6.1 Route principles (locked)

1. Flat top-level routes with trailing slashes. No nesting of service or case-study slugs.
2. The 20 implemented routes are canonical. No redirects and no new routes without sign-off.
3. One `<main id="main-content">` per page. One `<h1>`.
4. Every route is reachable from the footer, and every primary route from the header.
5. A route that cannot say something true says less, visibly — never filler.

### 6.2 Route register

`P` = primary navigation. Surface rhythm uses D = dark navy, L = light paper.

| # | Route | Role | Template | H1 | Surface rhythm | Indexable |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `/` | Positioning + proof + action | Home | Smarter Screen. Smarter Business. | D L D L D L | Yes |
| 2 | `/about/` | Company, people, origin | Editorial | The company behind the screens | D L D L | Yes |
| 3 | `/software/` | Full product family (**nav label: Products**) | Product family | One stack for the whole screen network | D L D L D | Yes |
| 4 | `/cs-sign-hub/` | Non-advertising CMS product | Product detail + demo | CS Sign Hub | D L D L | Yes |
| 5 | `/hardware/` | Screen and player catalogue | Catalogue | Screens, players and the parts between | D L D L | Yes |
| 6 | `/our-services/` | Service index (7 sourced services) | Index | Services around the software | D L D L | Yes |
| 7 | `/our-process/` | Delivery + commercial flow | Process | From first audit to live network | D L D | Yes |
| 8 | `/case-studies/` | Proof hub, four categories | Proof index | Work that is running now | D L | Yes |
| 9 | `/contact/` | Enquiry + brief builder | Contact | Start with your screen list | D L | Yes |
| 10 | `/marketing-communication-strategy/` | Service detail | Service | Marketing & communications strategy | D L D | Yes |
| 11 | `/project-management/` | Service detail | Service | Project management | D L D | Yes |
| 12 | `/consumer-journey-mapping/` | Service detail (thin source) | Service | Consumer journey mapping | D L D | Yes |
| 13 | `/digital-signage-solutions-mapping/` | Service detail | Service | Digital signage solution mapping | D L D | Yes |
| 14 | `/content-mapping/` | Service detail | Service | Content mapping | D L D | Yes |
| 15 | `/data-analytics/` | Service detail + measurement products | Service | Data, measurement and reporting | D L D | Yes |
| 16 | `/interactive-solution/` | Service detail | Service | Interactive builds | D L D | Yes |
| 17 | `/case-studies-retail-malls/` | Category | Case category | Retail & malls | D L | Yes |
| 18 | `/case-studies-medical-pharma/` | Category | Case category | Medical & pharma | D L | Yes |
| 19 | `/case-studies-out-of-home-advertisers/` | Category | Case category | Out-of-home advertisers | D L | Yes |
| 20 | `/case-studies-fmcg-others/` | Category | Case category | FMCG & others | D L | Yes |

**Not built:** `/ad-tech/` (header mention only, no definition — do not invent), `/products/`, `/platform/` (see 6.4), any nested case-study slug.

### 6.3 Navigation

**Header (desktop):** logo lockup · About · Products · Services · Case Studies · Process · Contact · primary CTA "Start a review".
**Header (mobile):** logo · menu button → full-height sheet with the same order, CTA at the end, Escape closes, focus returns to the button, body scroll locks.
**Footer:** four columns — Products (5 links), Services (7), Company (About, Process, Case Studies, Contact), Contact block. Legal row: copyright, privacy, "Smarter Screen. Smarter Business."

**Naming rule:** the URL `/software/` stays; the visible label is **Products**. This resolves the label mismatch without adding routes or redirects. `aria-current="page"` marks the active route; `/software/` remains active on `/cs-sign-hub/` and `/hardware/` because they are product children.

### 6.4 Open IA decisions

| ID | Decision | Recommendation | Owner | Impact if unresolved |
| --- | --- | --- | --- | --- |
| D-01 | Add `/products/` overview and `/platform/` comparison? | **No for launch.** Keep 20 routes; present `/software/` as Products with the full eight-offering stack. Revisit after launch with a redirect-free migration plan. | User | Nav label vs URL mismatch; acceptable and documented |
| D-02 | Are there 7 services or 8? | **7 services**, with Hardware moved under Products. `/hardware/` remains a flat route. | Company | Service index credibility |
| D-03 | Does "Ad Tech" deserve a page? | **No.** Use the category in copy on About and Products. | Company | A nav item with no content |
| D-04 | Where does L'Oréal live? | **FMCG & others.** Do not duplicate in Retail. | Company | Duplicate proof |
| D-05 | Publish `lexus@click-ix.com` / `+60 10-225 9528`? | Publish only after written confirmation; until then the contact page uses the brief builder with no fake channel. | Company | Contact page cannot convert |

---

## 7. Page requirements

Each page ends with a single action band. No page ends on a dead paragraph. Maximum three CTAs per page, one primary.

### 7.1 Home

**Job:** in one screen, say what Click iX is; in three, prove it; in six, offer a next step.

**Section sequence (locked):**

1. **Hero (dark).** Brand line as H1. Supporting line: "The software that runs, sells and proves digital screen networks." Two actions: "Explore the stack" (primary, yellow) and "See the work" (secondary, outline). Right side: composed screen/stack graphic built from CSS and real product-logo shapes — not a photo, not a 3D render. Logo lockup present in the header only.
2. **The stack (light).** Three core platforms — CS Deals, CS Play, CS Play SSN — as a connected diagram, plus a secondary row of the five supporting offerings. Each links to `/software/`. No card grid of eight equal boxes; the hierarchy must be visible.
3. **CS Sign Hub (dark).** Separate offering, separate colour (grey), separate job: in-house, non-advertising screens. Explicit demo label. Link to `/cs-sign-hub/`.
4. **Real projects (light).** Five approved stories: Maxis, Cheras LeisureMall, CuBig, KPJ2, L'Oréal. Text-forward cards with one real image each where rights allow; otherwise a typographic card. No invented metrics.
5. **Process (dark).** Four delivery steps + the five-step commercial flow as a compact horizontal rail. Link to `/our-process/`.
6. **Action (light).** "Start with your screen list." Compatibility review, platform walkthrough, pilot. Link to `/contact/`.

**States:** cases with no approved image render a typographic card, never a placeholder photo. Empty proof state must never appear on the homepage; if fewer than three cases are approved, the section shows two and adjusts, no "coming soon".

**Acceptance:** message understood without scrolling past the hero on 390 px; all six sections present; exactly five case links; no fabricated number anywhere.

### 7.2 Products (`/software/`)

**H1:** One stack for the whole screen network.

**Sections:** the problem (mixed estate, disconnected sales and playback) → the three core platforms, each with role, audience, 4–6 verified capabilities and the screen types it covers → the platform map table (asset type × CS Play / CS Play SSN / CS Deals) → supporting layer (OmniBuy DSP, SSP/CS Context, Measurement, Data partnerships) → commercial flow → CS Sign Hub cross-link → action band.

**Rules:** capability bullets come from `source-data/facts/offerings.json`; each block carries a status note where approval is pending. Programmatic partner claims (Touch 'n Go, CelcomDigi volumes) stay unpublished until verified.

**Acceptance:** eight offerings acknowledged, three visually dominant; no offering described with a capability it does not have in the facts file.

### 7.3 CS Sign Hub

**H1:** CS Sign Hub.

Positioning: the CMS for screens that are not for sale. Menus, directories, corporate screens. Cloud by default, on-premise option, Windows and Android players.

**Sections:** what it is → who it is for (retail, F&B, hospitality, corporate) → what it manages → deployment model → illustrative interface demo, clearly banded "Illustrative interface — not a product screenshot" → relationship to CS Play (separate products, no shared feature claims) → action.

**Acceptance:** demo label visible without scrolling inside the demo; no claim borrowed from CS Play; no fabricated UI features.

### 7.4 Hardware

**H1:** Screens, players and the parts between.

**Sections:** stance (hardware-agnostic software; hardware supplied and coordinated when needed) → catalogue by group: outdoor, indoor, speciality, ancillary → compatibility note (CS Play runs on most LED controllers and Android/Windows players; proprietary controllers without external HDMI input are the audit risk) → process link → action.

**Rules:** no product photography until rights exist. Use specification-led typographic entries, not stock images.

### 7.5 Services index + seven details

**Index H1:** Services around the software.

Each detail page uses one template: what this is → when you need it → what Click iX does (sourced scope) → how it connects to the stack → related work → action.

| Route | Sourced scope (T2 until approved) | Honest limit |
| --- | --- | --- |
| Marketing & communications strategy | Creative and messaging, digital screen formats, technology advisory | No campaign results claimed |
| Project management | Consultancy, ideation, training, network management, end-to-end delivery | No client list |
| Consumer journey mapping | Touch-point mapping | Thin source — page states the method, not outcomes |
| Digital signage solution mapping | Screens and displays, media players, CMS and interactive, DOOH and indoor software | No vendor recommendations without approval |
| Content mapping | Idea, strategy, concept and content design, development and management | No sample client creative |
| Data analytics | Dashboards, customisable dashboards, insights and recommendations; ATMD, Aidiencer, CS Edge | No data volumes or accuracy claims |
| Interactive solution | Interactive experiences, custom development and programming | Examples only where approved (L'Oréal, Triumph, KPJ2) |

**Acceptance:** no service page repeats the homepage; each has at least one stack connection and one related case or an explicit "no public case yet" line.

### 7.6 Process

**H1:** From first audit to live network.

Two rails: delivery (Discover & audit → Compatibility & design → Pilot → Rollout & support) and commercial (Sell → Schedule → Play → Prove → Bill). Each step states the input, the output and the system involved. Hardware note included. Action: book a compatibility review.

### 7.7 Case studies

**Hub:** four categories, then approved stories. Cards carry client, sector, what was deployed, and the systems used. No results, no quotes, no logos until approved.

**Category pages:** intro (one paragraph, T3), then stories, then a cross-link to the other categories. If a category has fewer than two approved stories, it shows what exists and one honest line about the archive — never eight empty cards.

**Story content (per case):** context → requirement → what was deployed → systems used → status/attribution note where needed. Images only from the inspected, rights-cleared set in `source-data/analysis/MEDIA_HIGHLIGHTS.md`.

**Hold list (do not publish):** Mandarin Oriental, Sunway Medical Centre, Colgate-Palmolive, Proton, Big Tree × Dove, Big Tree × TikTok Live, and the two attribution-ambiguous photo sets (film premiere, live broadcast) until confirmed.

**Acceptance:** zero unapproved client names; every image has a caption that does not overclaim; no outcome metrics.

### 7.8 About

**H1:** The company behind the screens.

Company facts (2022, Kuala Lumpur, Malaysia/SEA/Middle East, in-house software, 20+ year team experience) → what Click iX believes about screen networks → leadership (Michael Tan, Lexus Gan, Vicky Yip) with portraits only when supplied → how the company works → action.

**Rules:** no mission/vision copy invented on the company's behalf; no founding story; no country map until the footprint claim is clarified (the nine-year figure refers to AdTech Systems, not Click iX's incorporation).

### 7.9 Contact

**H1:** Start with your screen list.

Two paths: (a) short brief builder — estate size band, screen types, current CMS, goal, timeline, contact — with a local download and a clearly labelled submission status; (b) direct contact block, published only when approved.

**States:** idle, invalid, submitting, success, failure, offline. No fake success. If no endpoint is configured, the page says the brief is prepared locally and offers the approved channel; it does not pretend to send.

**Acceptance:** every field labelled, errors announced, no data leaves the browser without explicit action, keyboard-complete.

---

## 8. Components and states

| Component | Variants | Required states |
| --- | --- | --- |
| `SiteHeader` | dark, light-on-scroll | default, scrolled, menu open, current route |
| `MobileMenu` | full sheet | closed, open, focus trapped, Escape, reduced motion |
| `Button` | primary (yellow on dark / navy on light), secondary outline, quiet link, icon | default, hover, focus-visible, active, disabled, loading |
| `SectionHeading` | display, standard, compact | — |
| `ProductPanel` | core, supporting, hub | default, linked, status-noted |
| `PlatformMap` | table (desktop), stacked list (mobile) | default, focus row |
| `FlowRail` | 5-step, 4-step | static, reduced-motion |
| `CaseCard` | with image, typographic, category | default, hover, focus |
| `CaseMeta` | inline definition list | — |
| `TruthNote` | inline, block | — (never hidden) |
| `DemoFrame` | labelled illustrative frame | static, captioned |
| `BriefBuilder` | form | idle, invalid, submitting, success, error, offline |
| `ActionBand` | dark, light | default |
| `Footer` | minimal | — |
| `SkipLink` | — | focus |

**Component rules:** no card inside a card; no pill unless it is a status; no icon without a label or `aria-label`; no hover-only information; no animation as the only affordance.

---

## 9. Design system

### 9.1 Layout and spacing

- Container: 1200 px max, 24 px gutter mobile, 32 px tablet, 40 px desktop. Full-bleed media may exceed the container; text may not.
- Grid: 12 columns, 24 px gutter desktop, 16 px mobile.
- Spacing scale (px): 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160.
- Section padding: 96 px desktop, 72 px tablet, 48 px mobile.
- Vertical rhythm inside a section: eyebrow 8, heading 16, lede 24, content 40.
- Radius: 0 for surfaces and cards, 2 px for inputs and buttons. The identity is a knot of hard pixels; rounded cards are off-brand.
- Borders: 1 px, `--border-dark` / `--border-light`. Elevation is expressed by surface change, not shadow. No drop shadows except a focus ring.
- Measure: body 62–68 characters; lede 48–56.

### 9.2 Typography

No official brand typeface has been supplied. The current build uses two self-hosted OFL stand-ins and treats both as brand dependencies. See `docs/DESIGN_DIRECTION.md`.

| Role | Family | Size / line (desktop → mobile) | Weight | Tracking |
| --- | --- | --- | --- | --- |
| Display / H1 | Archivo 110% width | 122/90 → 36/32 | 600 | −0.055em |
| H2 | Archivo 106% width | 64/61 → 32/30 | 600 | −0.045em |
| H3 | Archivo 104% width | 38/38 → 28/28 | 600 | −0.035em |
| Lede | Archivo | 19/30 → 16/26 | 400 | −0.01em |
| Body | Archivo | 16/26 → 16/26 | 400 | 0 |
| Small | Archivo | 14/22 | 400 | 0 |
| Labels and data | IBM Plex Mono | 8.5–11/16, uppercase where used | 400–500 | 0.1–0.14em |

- Three `woff2` files, Latin subset, `font-display: swap`, self-hosted in `public/fonts/`.
- Archivo is the only display family; mono is reserved for technical labels and never for long copy.
- Headings use `text-wrap: balance`; body uses `pretty` where supported.
- The earlier Inter Tight target is superseded; the scale and tracking above describe what is actually implemented.

### 9.3 Motion

- Purpose: reveal hierarchy on scroll, confirm interaction, show the flow direction. Nothing else.
- Durations: 180 ms (micro), 420 ms (reveal), 640 ms (section). Easing `power2.out` for enters, `power2.inOut` for state changes.
- Reveal: 16 px translate + opacity, stagger 60 ms, once per element, disabled if the element starts in view.
- GSAP already installed; no new animation library.
- `prefers-reduced-motion: reduce` removes transforms, parallax and autoplay; content is fully visible without JavaScript.
- No autoplaying video with sound. No marquee of client logos. No cursor followers.

---

## 10. Colour system

Colour is where the current build and the company identity diverge. The site uses an invented cyan/lime scheme; the company owns a specific yellow and two product colours. This section defines one system that is unmistakably Click iX, accessible, and impossible to apply accidentally.

### 10.1 Source of colour truth

| Source | Colour | Status |
| --- | --- | --- |
| Click iX knot mark | `#FCD804` | **Official**, sampled from supplied PNG |
| CS Play logo | `#1768CA` | **Official**, sampled from supplied vector |
| CS Sign Hub logo | `#444647` | **Official**, sampled from supplied vector |
| Existing build | `#061321` deep navy | Project token, retained as the control surface |
| Existing build | `#1BC8ED` cyan, `#C7F66B` lime | Project accents, retained **as signal colours only** |
| Proposal | `#F5F1E6` paper | Derived neutral; warm paper keeps yellow from vibrating |
| Missing | Brand guidelines | Do not invent further brand colours |

**Principle:** yellow is the brand. Navy is the control room. Paper is the page. Cyan and lime are signals, not decoration. Product colours belong to products.

### 10.2 Primitive palette

| Token | Hex | Name | Notes |
| --- | --- | --- | --- |
| `--navy-900` | `#061321` | Control | Default dark surface, footer, hero |
| `--navy-800` | `#0A1C2C` | Raised | Panels and bands on dark |
| `--navy-700` | `#102A3D` | Line | Hover surface, table stripe on dark |
| `--paper-50` | `#F5F1E6` | Paper | Default light surface |
| `--paper-0` | `#FFFFFF` | Card | Raised light surface, inputs |
| `--yellow-500` | `#FCD804` | Signal | Brand, primary action on dark |
| `--cyan-500` | `#1BC8ED` | Live | Playback, network, live status |
| `--lime-500` | `#C7F66B` | Proof | Measured, verified, data |
| `--blue-500` | `#1768CA` | CS Play | Product identity only |
| `--grey-500` | `#444647` | CS Sign Hub | Product identity only |
| `--slate-400` | `#8A97A3` | Muted on dark | Secondary text, disabled |
| `--slate-500` | `#4A5661` | Muted on light | Secondary text |
| `--slate-600` | `#2F3B45` | Strong muted | Table headers, captions |

Derived surfaces (never used as text): `#071320` at 4% and 8% over paper for dividers; `#FFFFFF` at 8% over navy for hairlines.

### 10.3 Semantic tokens

```css
:root {
  /* surfaces */
  --surface-dark: var(--navy-900);
  --surface-dark-raised: var(--navy-800);
  --surface-light: var(--paper-50);
  --surface-light-raised: var(--paper-0);

  /* text — dark surfaces */
  --text-dark-primary: #FFFFFF;      /* 18.70:1 */
  --text-dark-secondary: #B9C4CE;    /* 10.55:1 */
  --text-dark-muted: #8A97A3;        /*  5.79:1 — min 14px */

  /* text — light surfaces */
  --text-light-primary: var(--navy-900);   /* 16.57:1 */
  --text-light-secondary: var(--slate-500);/*  6.66:1 */
  --text-light-muted: var(--slate-600);    /* 10.15:1 */

  /* actions */
  --action-dark: var(--yellow-500);        /* fill, navy text */
  --action-dark-text: var(--navy-900);
  --action-light: var(--navy-900);         /* fill, white text */
  --action-light-text: #FFFFFF;
  --action-hover-dark: #FFE23A;
  --action-hover-light: #0A1C2C;

  /* signals */
  --signal-live: var(--cyan-500);
  --signal-proof: var(--lime-500);
  --signal-brand: var(--yellow-500);

  /* product identity */
  --product-play: var(--blue-500);
  --product-hub: var(--grey-500);

  /* lines and focus */
  --border-dark: rgba(255, 255, 255, 0.14);
  --border-light: rgba(6, 19, 33, 0.14);
  --focus-dark: var(--yellow-500);
  --focus-light: var(--blue-500);
}
```

### 10.4 Contrast contract

Measured with WCAG 2.x relative luminance. Ratios are for the exact hex pairs below and must be re-tested if a token changes.

| Foreground | Background | Ratio | Verdict | Permitted use |
| --- | --- | --- | --- | --- |
| `#FFFFFF` | `#061321` | 18.70 | AAA | Body, headings |
| `#B9C4CE` | `#061321` | 10.55 | AAA | Secondary body |
| `#8A97A3` | `#061321` | 6.27 | AA | Meta, min 14 px |
| `#FCD804` | `#061321` | 13.33 | AAA | Headings, links, icons |
| `#061321` | `#FCD804` | 13.33 | AAA | Button label on yellow |
| `#1BC8ED` | `#061321` | 9.38 | AAA | Live labels, diagram strokes |
| `#C7F66B` | `#061321` | 14.98 | AAA | Proof labels, chart marks |
| `#061321` | `#F5F1E6` | 16.57 | AAA | Body, headings |
| `#4A5661` | `#F5F1E6` | 6.66 | AA | Secondary body |
| `#2F3B45` | `#F5F1E6` | 10.15 | AAA | Captions |
| `#F5F1E6` | `#1768CA` | 4.81 | AA | CS Play panels, large text, labels |
| `#FFFFFF` | `#1768CA` | 5.43 | AA | CS Play panels |
| `#FFFFFF` | `#444647` | 9.49 | AAA | CS Sign Hub panels |
| `#444647` | `#F5F1E6` | 8.41 | AAA | CS Sign Hub link/meta on light |
| **`#FCD804`** | **`#F5F1E6`** | **1.40** | **FAIL** | **Never text or icon on paper** |
| **`#FCD804`** | **`#FFFFFF`** | **1.40** | **FAIL** | **Never** |
| **`#1BC8ED`** | **`#F5F1E6`** | **1.77** | **FAIL** | **Never text on light** |
| **`#C7F66B`** | **`#F5F1E6`** | **1.11** | **FAIL** | **Never text on light** |
| **`#1768CA`** | **`#061321`** | **3.45** | Large only | Not body on navy |

**Non-negotiable rules**

1. Yellow is never text or a thin icon on paper or white. On light surfaces, yellow may only appear as a filled block with navy text, a 2 px-plus rule, or a graphic element.
2. Cyan and lime never carry text on light surfaces. They are dark-surface signals or filled marks with navy text.
3. Body text is never a signal colour. Signals label, they do not speak.
4. Product colours do not leak into global UI. A blue button does not mean "primary"; it means CS Play.
5. White text never sits on yellow.
6. Any new pair enters `src/app/tokens.test.ts` before it enters a component.

### 10.5 Usage ratio and section rhythm

Target proportion of painted area per page:

| Role | Share | Where |
| --- | --- | --- |
| Navy (900/800) | 50–55% | Hero, product band, process, footer |
| Paper (50/0) | 30–35% | Solutions, proof, action band |
| White | ≤ 8% | Cards and inputs only, inside paper sections |
| Yellow | 3–5% | Primary CTA, brand mark, one key rule per dark section |
| Cyan + lime | ≤ 3% | Live/proof signals, diagram strokes, one accent per band |
| Product blue/grey | ≤ 4% | Product identity only, co-located with the product |

Rhythm rule: dark and light sections alternate; never two dark bands without a light band between them; never more than one accent colour competing inside a heading block.

### 10.6 Product colour coding

| Product | Colour | Application | Never |
| --- | --- | --- | --- |
| CS Deals | Navy + yellow | ERP/CRM, the layer across everything | Blue or grey |
| CS Play | `#1768CA` | Large-format CMS panels, Play labels | As global link colour |
| CS Play SSN | Blue at 60% tint `#5B9BE0` on light, `#6FA8FF` on dark | Small-screen CMS, paired with Play | Alone without the Play family label |
| CS Sign Hub | `#444647` | Non-advertising CMS, grey panels | Mixed with Play features |
| OmniBuy DSP / SSP | Cyan | Demand layer, programmatic flows | As body text |
| Measurement | Lime | Proof, dashboards, verified marks | As a success message colour only |

The family relationship must be visible: Play and Play SSN share a blue; Deals is the neutral commercial spine; Sign Hub is deliberately grey because it is a different job, not a lesser product.

### 10.7 Forbidden combinations

- Yellow text on paper, white, or any light tint.
- Cyan or lime body text on paper.
- White text on yellow.
- Blue text on navy below 24 px / 700 weight.
- Grey `#444647` as a page background behind body text.
- Gradients as decoration. A gradient is allowed only to represent a real screen or signal, and never behind text.
- More than one accent colour inside a single component.
- Red anywhere. There is no red in this system; error states use a bordered field with a navy label and an icon, plus text — not colour alone.
- Colour as the only carrier of meaning (product identity, status, chart series, required fields).

### 10.8 Data and status

- Chart series order: navy, blue, cyan, lime, grey, yellow — assigned in order, never cycled arbitrarily.
- Adjacent series must differ by ≥ 3:1 or carry a pattern/label.
- Status: live = cyan dot + label; verified/proof = lime mark + label; pending/illustrative = grey outline + label; error = text + icon, no red.
- Illustrative content always carries a visible grey `ILLUSTRATIVE` tag, not a colour-only cue.

### 10.9 Focus, selection, scrollbar

- Focus ring: 3 px, offset 2 px. Yellow on dark, blue on light. Never removed, never `outline: none` without a replacement.
- Selection: navy background, paper text on light; yellow background, navy text on dark.
- Scrollbar: browser default; no custom scrollbar.
- Forced-colors mode: rely on system colours; do not suppress with `forced-color-adjust: none`.

### 10.10 Colour acceptance tests

1. Automated unit test enumerates every foreground/background pair in §10.4 and fails below 4.5:1 for body and 3:1 for UI/large text.
2. No component may reference a primitive token directly; only semantic tokens. Lint rule or review checklist.
3. Screenshot audit at 1440×900 and 390×844 per template, checked against §10.5 ratios.
4. Grayscale check: hierarchy must survive with colour removed.
5. Reduced-motion and forced-colors passes.

---

## 11. Content model and truth ledger

### 11.1 Data modules

| Module | Contents | Typed |
| --- | --- | --- |
| `src/lib/products.ts` | 8 offerings, role, audience, capabilities, status, screen coverage | Yes |
| `src/lib/services.ts` | 7 services, scope, limits, related route | Yes |
| `src/lib/cases.ts` | Approved stories only, with `approval` and `imageStatus` | Yes |
| `src/lib/process.ts` | Delivery and commercial rails | Yes |
| `src/lib/company.ts` | Facts, people, contact publication state | Yes |
| `src/lib/routes.ts` | Existing route registry | Yes (exists) |

Every record carries `evidence: 'verified' | 'supplied' | 'editorial' | 'illustrative'` and, where relevant, `approvedBy` and `approvedOn`. A record without an approval cannot render as fact.

### 11.2 Copy length budgets

| Element | Budget |
| --- | --- |
| H1 | ≤ 9 words |
| Section heading | ≤ 7 words |
| Lede | ≤ 32 words |
| Body paragraph | ≤ 60 words |
| Case card | ≤ 28 words |
| CTA label | ≤ 5 words |
| Meta description | 140–155 characters |

### 11.3 Claims register

Maintained in `source-data/facts/`, one row per public claim:

`id · claim · tier · source file/page · approved by · approved on · page(s) · review date`

Publication gate: a claim without an approver stays T2 and is either removed or visibly qualified.

---

## 12. Accessibility

Standard: **WCAG 2.2 AA**, verified per template, not per page only.

| Requirement | Implementation |
| --- | --- |
| Structure | One `<main id="main-content">`, one `<h1>`, ordered headings, landmarks |
| Skip link | First focusable element, visible on focus |
| Keyboard | Every control reachable; logical order; no traps; Escape closes menu/demo overlays; focus returns to trigger |
| Focus | 3 px ring, ≥ 3:1 against adjacent colours |
| Targets | ≥ 44×44 px, ≥ 24 px spacing |
| Text | 200% zoom, 320 px reflow, no horizontal scroll, no clipped text |
| Contrast | §10.4 contract, no exceptions for "decorative" text |
| Motion | `prefers-reduced-motion`, no autoplay, no flashing |
| Forms | Visible label, programmatic association, inline error text, `aria-describedby`, error summary, no colour-only errors |
| Images | Meaningful `alt`; decorative `alt=""`; illustrative images labelled in text, not only in alt |
| Tables | Real `<table>` with `<caption>` and scoped headers; the platform map stacks to a definition list on mobile |
| Language | `lang="en"`; Malaysian English spelling |
| Screen reader | Tested with NVDA or VoiceOver on home, product, case, contact |
| No-JS | Content and links work; only the brief builder degrades with an explanation |

---

## 13. SEO and metadata

- Canonicals use the trailing-slash form, self-referencing, absolute.
- Titles: `{Page} | Click iX`, home: `Click iX — Smarter Screen. Smarter Business.` (≤ 60 chars).
- Descriptions: 140–155 chars, factual, no keyword stuffing.
- One `og:` image per template, 1200×630, navy ground with the official white lockup and a single line of type. Generated from the design system, not stock.
- JSON-LD: `Organization` (name, url, logo, sameAs only for verified profiles), `WebSite`, `BreadcrumbList` on detail pages. No `AggregateRating`, no `Review`, no `Product` offers.
- `sitemap.xml` and `robots.txt` generated from the route registry. Only indexable routes included.
- 404: helpful, links to products, cases, contact. No redirect chains.
- No keyword landing pages, no doorway pages, no duplicated service copy.

---

## 14. Performance

| Budget | Target |
| --- | --- |
| LCP (p75, mobile) | ≤ 2.5 s |
| INP | ≤ 200 ms |
| CLS | ≤ 0.1 |
| Initial JS (route) | ≤ 180 KB gzip beyond framework baseline |
| Fonts | ≤ 3 woff2 files, ≤ 130 KB total, Latin subset, `swap` |
| Images | AVIF/WebP, explicit dimensions, `sizes`, lazy below fold, `priority` only on the LCP image |
| Third parties | None at launch except consent-gated analytics |
| Animation | Transform/opacity only; GSAP loaded only on routes that animate |
| Build | Static generation for all 20 routes; no client component unless interaction requires it |

Implementation rules: server components by default; `'use client'` only for the menu and brief builder; no layout shift from late-loading logo or fonts; measure with Lighthouse and WebPageTest before launch.

---

## 15. Analytics and privacy

- Privacy-first, cookieless if the chosen provider allows; otherwise consent-gated and off by default.
- No personal data in event names or properties. No form contents. No fingerprinting.
- Events: `cta_click` (location, label), `nav_open`, `case_open` (case id), `product_view` (product id), `brief_start`, `brief_submit`, `brief_error`, `contact_channel_click`.
- Respect Do Not Track / Global Privacy Control where supported.
- Privacy page must name the processor, retention and contact before analytics is enabled.
- No advertising pixels. No session recording. No heatmaps at launch.

---

## 16. Security and integrity

- No secrets in the repository. Contact endpoints via environment variables; absence produces an honest offline state.
- Form submission: server-side validation, rate limiting, honeypot, no file uploads at launch.
- External links: `rel="noopener noreferrer"`; no untrusted embeds.
- Assets: only company-owned or rights-cleared. `source-data/originals/` stays gitignored.
- No customer data, VPN keys, contracts, unredacted screenshots or internal decks in the public build.
- Dependency policy: no new runtime dependency without justification; GSAP remains the only animation library.

---

## 17. QA and definition of done

### 17.1 Per-page definition of done

- [ ] H1, title, description, canonical correct
- [ ] Six-section rhythm respected (or template equivalent)
- [ ] Every claim traced to the register or marked editorial
- [ ] No unapproved client, photo, logo, metric, contact detail
- [ ] Keyboard pass; focus visible; Escape behaviour verified
- [ ] 390 / 768 / 1024 / 1440 / 1920 with no horizontal overflow
- [ ] Reduced motion and no-JS pass
- [ ] Contrast test green; axe clean
- [ ] Lighthouse: performance ≥ 90, accessibility 100, best practices ≥ 95, SEO 100
- [ ] Screenshot captured to `evidence/` at 1440×900 and 390×844
- [ ] Links resolve to implemented routes only; no `#` placeholders

### 17.2 Release gates

| Gate | Requirement |
| --- | --- |
| G0 Content | Claims register complete; approvals recorded; hold list excluded |
| G1 Assets | Logo vector or approved raster at 2×; font licence or documented fallback; every photo rights-cleared |
| G2 Build | `lint`, `typecheck`, `test`, `build` all pass; 20 routes generated |
| G3 Accessibility | axe zero critical; manual keyboard and screen-reader pass |
| G4 Visual | 1440×900 and 390×844 evidence for all templates; colour ratio audit |
| G5 SEO | Metadata, sitemap, robots, JSON-LD validated |
| G6 Sign-off | Product owner and company approver sign the launch checklist |

Any gate not met is reported as **NOT VERIFIED**, never as passed.

---

## 18. Launch plan

| Phase | Work | Exit |
| --- | --- | --- |
| 0 — Approvals | Route decision D-01, contact publication D-05, case list, logo vector request | Written approvals logged |
| 1 — System | Tokens, type scale, grid, primitives, contrast tests | Colour tests green; component gallery reviewed |
| 2 — Shell | Header, mobile menu, footer, skip link, action band | Keyboard + reduced motion verified |
| 3 — Narrative | Home, Products, Process, About | G0 + G2 pass on these routes |
| 4 — Depth | CS Sign Hub, Hardware, 7 services, 4 case categories | All 20 routes complete |
| 5 — Proof | Approved cases and images | Rights file complete |
| 6 — QA | Full matrix, evidence capture, performance | All gates pass |
| 7 — Launch | Deploy, smoke test, monitoring | 24 h clean |

Rollback: the previous build stays deployable until 72 hours after launch. No redirects are introduced during rollback.

---

## 19. Risks, dependencies, approvals

### 19.1 Risks

| Risk | Likelihood | Impact | Mitigation |
| --- | --- | --- | --- |
| Raster logo degrades on high-DPI | High | Medium | Request vector; cap display size at 2× source; use white PNG on navy |
| Yellow used as text on light | Medium | High | Token rules + automated contrast test + review checklist |
| Unverified client/metric slips in | Medium | High | Claims register gate; case data typed with `approval` field |
| Route additions fragment SEO | Medium | Medium | D-01 decision; no redirects; preserve 20 canonicals |
| Product pages become thin | Medium | High | Each page needs sourced scope + stack connection + case or honest gap |
| CS Sign Hub demo mistaken for product | Medium | High | Persistent `ILLUSTRATIVE` band; no real client UI |
| Service count confusion (7 vs 8) | High | Medium | D-02; Hardware under Products |
| Font stand-in becomes permanent | Medium | Low | Named dependency; fallback stack defined |

### 19.2 Approvals required before launch

| ID | Approval | Owner | Blocks |
| --- | --- | --- | --- |
| A-01 | Official logo vector / transparent high-res | Company | Header, OG image |
| A-02 | Brand typeface + web licence | Company | Typography |
| A-03 | Yellow usage and palette sign-off | Company | Whole design system |
| A-04 | Contact publication (email, phone, WhatsApp, address, socials) | Company | Contact, footer |
| A-05 | Case list and per-client publication consent | Company | Case hub and categories |
| A-06 | Photo rights and captions | Company | Case imagery |
| A-07 | CS Sign Hub capability list and interface screenshot | Product owner | CS Sign Hub |
| A-08 | Service count and scope (7 vs 8) | Company | Services |
| A-09 | Tagline punctuation and final brand line | Company | Header, metadata |
| A-10 | Leadership names, roles and portraits | Company | About |
| A-11 | Route decision D-01 | User | Navigation |
| A-12 | Privacy policy and analytics processor | Company | Analytics, consent |
| A-13 | Programmatic/data partner claims | Company | Products |

---

## Appendix A — Token reference (implementation target)

```css
:root {
  --navy-900: #061321;
  --navy-800: #0A1C2C;
  --navy-700: #102A3D;
  --paper-50: #F5F1E6;
  --paper-0: #FFFFFF;
  --yellow-500: #FCD804;
  --cyan-500: #1BC8ED;
  --lime-500: #C7F66B;
  --blue-500: #1768CA;
  --grey-500: #444647;
  --slate-400: #8A97A3;
  --slate-500: #4A5661;
  --slate-600: #2F3B45;

  --surface-dark: var(--navy-900);
  --surface-dark-raised: var(--navy-800);
  --surface-light: var(--paper-50);
  --surface-light-raised: var(--paper-0);

  --text-dark-primary: #FFFFFF;
  --text-dark-secondary: #B9C4CE;
  --text-dark-muted: var(--slate-400);
  --text-light-primary: var(--navy-900);
  --text-light-secondary: var(--slate-500);
  --text-light-muted: var(--slate-600);

  --action-dark: var(--yellow-500);
  --action-dark-text: var(--navy-900);
  --action-light: var(--navy-900);
  --action-light-text: #FFFFFF;

  --signal-live: var(--cyan-500);
  --signal-proof: var(--lime-500);
  --product-play: var(--blue-500);
  --product-hub: var(--grey-500);

  --border-dark: rgba(255, 255, 255, 0.14);
  --border-light: rgba(6, 19, 33, 0.14);
  --focus-dark: var(--yellow-500);
  --focus-light: var(--blue-500);
}
```

## Appendix B — Page-to-surface map

| Template | Rhythm |
| --- | --- |
| Home | D L D L D L |
| Products | D L D L D |
| Product detail | D L D L |
| Service | D L D |
| Process | D L D |
| About | D L D L |
| Case hub | D L |
| Case category | D L |
| Contact | D L |

## Appendix C — Claims register fields

`id`, `claim`, `tier`, `source`, `page`, `approvedBy`, `approvedOn`, `reviewOn`, `notes`.

## Appendix D — Open questions

1. Is `Smarter Screen. Smarter Business.` punctuated exactly as supplied?
2. Seven services or eight, and does Hardware sit under Products?
3. Is `lexus@click-ix.com` / `+60 10-225 9528` the public enquiry channel?
4. Which five case studies are approved first?
5. Does CS Sign Hub have a sanitised screenshot?
6. Is there an official vector logo and brand typeface?
7. Add `/products/` and `/platform/` after launch, or never?
8. Which social profiles, if any, are official?
