# A — OPENCODE MASTER IMPLEMENTATION BRIEF
## CLICK IX | Reference-board implementation | 16 November 2026

**Repository:** https://github.com/pakyad/click-ix-redesign
**Source branch:** main (inspect current branch before editing)
**Design reference:** the user-supplied three-column image, "CLICK IX_ Immersive Screen Networks.png" (attach it to OpenCode)
**Handoff companion files:** 02_ASSET_MANIFEST.csv and 03_READY_COPY_DECK.md in this directory.

### 0. Mission and interpretation

Act as a principal creative engineer, art director, accessibility engineer and Next.js maintainer.

Implement the visual DESIGN SYSTEM of the supplied reference board as closely as practical, but replace all reference-board branding, imaginary visuals, fabricated dashboard data and unsourced copy with actual CLICK IX content and repo assets. This is a high-fidelity reconstruction from a composite **art-direction image**, not a literal copy of a deployed website. The three columns in the board describe (1) home, (2) ecosystem/process/interior modules, and (3) CS Play plus a case-study example. They are not three independently scrollable pages as pictured.

**Goal:** one coherent premium B2B design with dark photographic openers, white documentary reading bands, oversized but controlled editorial typography, restrained brand blue, one layered ecosystem story, a dark linear process sequence, authentic deployments and useful contact pathways.

**Nonnegotiable**: do not substitute generated logos or generated project photos. Do not draw pretend live software dashboards and present them as real. Real artifacts are more important than matching a fictitious detail in the reference.

### 1. Repository facts discovered before this handoff

- Stack: Next.js 15, React 19, TypeScript, CSS Modules, GSAP 3.15 already installed.
- Main is static and has **flat routes** with trailing slashes. See src/lib/routes.ts. Do not silently add /software/cs-play/ or /case-studies/maxis/; neither currently exists.
- Existing target routes:
  - Home: /
  - CS Play: /cs-play/
  - Maxis story: /case-studies-retail-malls/#maxis
  - Category listing: /case-studies-retail-malls/
  - Product directory: /software/
  - Process: /our-process/
  - Services: /our-services/
- Existing homepage: src/app/page.tsx, HeroCinematic, ClientRow, SystemLoop, SoftwareBand, WorkRail.
- Product template: src/components/product/ProductDetail.tsx.
- Case template: src/components/interior/CaseCategoryPage.tsx. It renders <article id="maxis"> from src/lib/content.ts.
- One true contact method already wired: src/lib/contact.ts; preserve mailto() rather than inventing a demo booking or a contact form.
- Source of company claims: src/lib/content.ts. Some entries have evidence: 'supplied' and are **not publication-approved facts**.
- Logo source: public/brand/click-ix-horizontal-black.png and click-ix-horizontal-white.png, untouched.
- Supplied product marks: public/brand/cityscreen/. Use the appropriate approved variant; do not recolour, crop or recreate.
- Current hero media: public/media/hero.mp4, hero-poster.jpg. Current caption identifies MotoGP KL26 launch. Do not mislabel as Pavilion KL Fashion Week.
- Repository AGENTS.md/README.md currently favor a paper/white site and prohibit decorative cards and shadows. The user has *now explicitly selected a dark/photo-led reference board*. Treat this task as a **scoped art-direction change proposal**, not permission to rewrite all 25 pages or silently break the existing rules. Record which visual rules are proposed exceptions, keep source-of-truth content and route policies intact, and implement on a review branch.

### 2. Exact visual translation of reference board

Build with the reference attached and visually compare side by side. Preserve approximate hierarchy, proportions and rhythm; avoid generic redesign.
 
**Shared header**
- Preserve supplied black/white official lockups exactly. Never type a replacement wordmark.
- Use a compact white or translucent-white navigation capsule over the dark hero where contrast permits.
- Reuse existing Header, PromoBar, navigation registry and Get a quote mailto link. Announcement bar uses existing approved copy and artwork.
- Maintain keyboard and touch navigation; do not overlay controls on text.

**Home hero**
- Dark photographic opener with real hero.mp4/poster. Layout inspired by left-aligned large display title beside the dominant real screen visual. Retain the brand line "Smarter Screen. Smarter Business." as the durable message; "Immersive experience" may be a subordinate brand subline. Do not claim the reference-board slogan is approved.
- Strong single CTA and secondary link; do not invent a Get a Demo service. Use Get a quote or Explore services and See the work.
- Slight camera-motion atmosphere may be created using approved film frames *only*; preserve legible real screen and avoid fabricated buildings, screen imagery or advertiser creatives.
- Pixel-cell reveal can stay if it complements the art direction. Stop all extra choreography when content is ready.

**Quiet capability section**
- White/document ground immediately following the hero. One declarative heading: "One partner for your screen network." Short paragraph and a thin five-part role index: hardware, software, installation, content, measurement.
- Use a typographic row or lightly separated track, not generic 5 identical elevated cards.
- No auto-scrolling or unnecessary icon gimmicks.

**Connected ecosystem chapter**
- A layered product or system sequence under a clear headline. Reference-board depth/stack is the spatial language, not a requirement for 3D tilt.
- Lead with physical deployment photo (real), then official product identity and actual/approved software interface, then reporting or a truthful schema. Show cause and effect; no fake numeric performance data.
- Use one primary layer active at a time and discreet next/previous controls, state label, accessible direct selection. Inactive items should remain recognizable but recede.
- Existing products: CS Deals, CS Play, CS Play SSN, CS Sign Hub; supporting: OmniBuy DSP, CS Context (SSP), Measurement and Data Partnerships. Preserve actual product taxonomy from src/lib/content.ts.
- Build a static fallback; no scroll-hijack, no compulsory pin, no autoplaying navigation.
- Reuse actual ProductMark and existing heroPosters data where suitable.

**Process band**
- One dark band with a linear progression, not another carousel. Copy based on src/lib/content.ts deliverySteps: Discovery & audit → Compatibility & design → Pilot → Rollout & support. If visually shortened to Plan / Deploy / Run / Measure, make clear this is editorial shorthand, not a contractual process statement.
- Thin sequence, typographic labels, no invented completion percentages.

**Featured real work**
- Use real Maxis and/or Cheras photography already present and the case records in content.ts. Provide a factual project teaser, route to the correct existing anchored article. Use real asset alt text and caption.
- Do not manufacture logos for clients that have no approved mark file.

**Insights**
- Reference board includes three insight tiles. The repo has no demonstrated published Insights route or approved article inventory. DO NOT fabricate posts, dates, authors or links. Hide this section until real articles exist, or replace with a simple three-link section to actual existing Products / Process / Case Studies routes after editorial approval.

**Closing**
- Dark concluding band with direct Get a quote link and short, factual request. Optional film-derived photographic texture only if it improves legibility and does not create a new competing animation.

**CS Play /cs-play/**
- Dark hero with official CS Play mark, authentic deployment photography and factual product promise; actual CS Play screenshot only when approved.
- Following page returns to white/paper technical reading environment.
- A real feature matrix, compatible-screen list, and a clear Scheduling → Playback → Proof explanation sourced from product.capabilities and commercialFlow in content.ts.
- Product sections can use tabs or master-detail, but never hide meaningful information without JS.
- Related work must lead to existing real case anchors. The current ProductDetail template already handles related case names; improve layout without losing this behavior.

**Maxis case chapter**
- Source from the exact 'maxis' record in src/lib/content.ts. Use /media/maxis-store.jpg and/or /media/maxis-screen.jpg as available. Do not assume extra gallery photos exist.
- Project opener: real store image; label Maxis and exact sourced story title.
- Challenge: the source 'brief'; Delivery: actual listed 'did' items; Why it matters: the source 'why'; systems: from 'systems'; location: from 'where'.
- If reference-board layout uses a dedicated case page, keep the existing category route and article anchor unless route change is separately approved. Create a component-level feature chapter inside current template if needed.
- No invented outcome statistics or testimonials. Never put a client logo into a scene as if it were deployment photography.

### 3. Layout system (start values to tune against screenshot)

- Base width: existing .wrap; avoid arbitrary max-width changes across whole site.
- Desktop: 12-column grid; 5/7 or 4/8 editorial splits.
- Hero: 80–100vh visual impression on desktop, but avoid hiding content on short screens.
- Display headline: responsive clamp; use existing licensed/self-hosted type. Keep optical line breaks controlled. No invented fonts.
- White text panels: meaningful 80–140px section spacing depending on viewport and density.
- Product stack: one dominant visual (about 60% width), 2–3 supporting offsets, clear role label; avoid decorative blur/glass on all elements.
- Mobile: single-column reading order, native product chapter selectors, full-size images and readable labels.
- Brand: use src/app/globals.css tokens. Dark hero may use existing ink/navy tokens; do not invent new colour constants per component.
- Strong image crop and consistent baseline, rather than a global shadow system.

### 4. Motion grammar (strict budget)

Keep 3 families:
1. **Pixel-cell staged reveal** in hero, only once.
2. **Shared-element / measured 2D transitions** between the connected-story states; GSAP Flip only if justified by real shared geometry.
3. **Short UI state feedback** for tabs, filters and arrows (opacity + transform, no bounce).

Avoid extra pinned carousels, horizontal-on-scroll, global Lenis, arbitrary stagger on every section and custom cursors. Existing GSAP is sufficient; no new animation dependency.
Initial motion targets: 160–240ms for microstate, 450–750ms for one editorial chapter; refine visually.
Animation must not alter document reading order, cause layout shift or block keyboard controls.
Use prefers-reduced-motion to remove movement and show complete static content.
If no JS, textual explanations, labels, links, images and case facts remain visible.

### 5. Engineering policy

- Make a NEW implementation branch from the latest main. Do not edit main directly.
- Read AGENTS.md, README.md, src/lib/content.ts, src/lib/routes.ts, CSS design tokens, product and case templates, all tests.
- Audit existing styles/components first; reuse and refactor rather than creating a parallel component system.
- Do not add new top-level routes. Metadata and sitemap must stay correct.
- No unapproved content and no generated logos/brand marks. No photos sourced from internet without rights approval.
- Do not introduce a real contact form or fake booking endpoint.
- Respect Next static build constraints and trailing slash routes.
- Use local responsive media. Reserve dimensions to avoid CLS.
- Preserve one main per page, semantic heading sequence, visible focus and WCAG AA contrast.
- Prefer the current installed stack. New dependency allowed only with one-sentence benefit and explicit approval.
- LCP target <2.5s, CLS <0.05, INP <200ms under representative mobile network and hardware; measure instead of claiming.

### 6. Exact execution plan

**Step A — preflight audit, no mutation**
- List existing assets and record their dimensions, formats and truthful attribution.
- Compare all assets and statuses against 02_ASSET_MANIFEST.csv.
- Determine whether there is an approved CS Play UI screenshot. If absent, use a factual diagram or hide the speculative visual instead of generating a dashboard.
- Confirm the real URLs from routes.ts and project anchors from CaseCategoryPage.
- Identify which repo design constraints need proposed changes to match the newly approved reference.

**Step B — static visual first**
- Implement shared dark/photo hero, white info sections, connected ecosystem, process band, evidence section and CTA with native content.
- Implement CS Play and Maxis case template treatments.
- No motion until static screenshots are approved locally.

**Step C — interactive polish**
- Add ONE user-controlled connected-story interaction and optional hero pixel reveal.
- Test rapid forward/back navigation, resize, reduced motion and no-JS.
- Do not add a second motion signature because the image board looks cinematic.

**Step D — verification**
- Run npm ci, npm run typecheck, npm test, npm run build.
- Capture actual browser screenshots for Home, /cs-play/, and /case-studies-retail-malls/#maxis at 1440x900, 1024x768, 768x1024, 390x844.
- Capture one brief screen recording for the signature interaction.
- Check links, route registry, sitemap, keyboard navigation, focused controls, reduced motion and all factual attributions.
- Compare to the attached design board: layout/contrast/hero proportion/type scale/layer positioning/section rhythm.
- Provide a visual difference log and explain every deviation caused by missing verified assets or technical/accessibility requirements.
- Produce a **draft** PR, leave main unchanged, and report what was actually tested.

### 7. Definition of done

- Exact original official CLICK IX branding, no AI replacement.
- Art direction distinctly resembles the provided board in visual rhythm and hierarchy.
- The three pages feel part of ONE design system.
- Real local installation media used for hero and project evidence.
- No fake CMS UI screenshots, case results, articles, or client logos.
- Existing routes and navigation work; 25-route architecture preserved.
- Accessibility and reduced-motion states are fully functional.
- No regression against the existing verification commands.
- Where reference-board visuals are unimplementable with supplied proof, the result is deliberately quiet and truthful, not made-up.

**Final instruction:** This is not a generic inspirational redesign. Treat the reference board as a strict compositional goal and the repository as the strict factual/brand source of truth. When they conflict, preserve factual accuracy and brand integrity.