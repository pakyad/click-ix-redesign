# CLICK IX — ONE-SHOT HIGH-FIDELITY IMPLEMENTATION HANDOVER
Version: 2026-11-16
Repository: https://github.com/pakyad/click-ix-redesign
Source snapshot: main, inspected 2026-11-16
Visual target: conversation attachment "CLICK IX_ Immersive Screen Networks.png" (three-column Home / Ecosystem / Product / Case board)
Status: SPECIFICATION ONLY. NO IMPLEMENTATION APPROVED OR MERGED.

## IMPORTANT FIRST READ
Treat the supplied reference image as a HIGH-FIDELITY ART-DIRECTION TARGET, not a source of genuine company photographs, actual product UI, verified case metrics, or official logos. The generated reference board contains illustrative imagery and potentially incorrect marks. In final code use the repository's supplied logo files as exact unchanged media and real company photos only.

This handover consists of:
1. 00_READ_ME_FIRST.md — this brief and implementation handoff.
2. 01_ASSET_MANIFEST.csv — repo-verified file paths, role, classification and approval blockers.
3. 02_READY_PAGE_COPY.md — production-oriented content for Home / CS Play / Maxis case, based on src/lib/content.ts, with approval flags.
4. 03_OPENCODE_MASTER_PROMPT.txt — executable instruction to OpenCode after the image is attached.

## HARD GATES
- Do not rewrite the application before auditing it.
- Preserve 25-route flat path strategy and trailing slashes. CS Play is at /cs-play/; Maxis currently appears as article #maxis on /case-studies-retail-malls/. No /software/cs-play/ or /case-studies/maxis/ routes exist.
- Existing website is Next.js 15 + React 19 + TS + CSS Modules + GSAP 3.15.0. The app is a static export. No new dependencies unless justified.
- Repository AGENTS.md is authoritative for implementation rules. Inspect it immediately: it explicitly protects supplied logo files, defines surface palette, bans fabricated data and prioritizes accessible static rendering. Some old notes in docs/TASK_05_ASSET_AUDIT.md describe a past state and do not override the actual current asset inventory.
- Approved palette as expressed in AGENTS.md: paper #f6f7f9; ink #0b0f14; blue #1d4e7a. Cyan/teal are reserved for LED artwork. The reference board is visually darker than main; do NOT silently change the approved entire site to dark. For the desired reference composition, propose a LIGHT-PAPER / DARK-MEDIA balanced adaptation and get sign-off on substantial art-direction changes.
- No invented numbers, claims, testimonials, case outcomes, app screens, screen states, or software capabilities.
- Do not create substitute client images with generative AI. If the reference has no real corresponding asset, note the missing item.
- A beautiful responsive static page must exist before JS motion. JS-off, keyboard, reduced motion and mobile are release gates.
- Target budget: LCP <2.5s on tested mobile 4G; CLS <0.05; INP <200ms. Measure, do not claim success based on code inspection.

## WHAT THE REFERENCE BOARD SHOWS
- Home (left column): immersive full-bleed film; editorial title; minimal pill CTA; client evidence row; quiet white one-partner statement; 3D-style hardware/software/operations panels; real-world location close.
- Interior middle: light ecosystem overview with a layered product stack; one dark process timeline; image-led case feature; small editorial insights.
- Right: a CS Play product opening with real product specimen space; product tab navigation; overview + capabilities; case-study opening with full-bleed real-photo emphasis and a challenge/solution explanation.
- The board is visual reference, not a literal screenshot of code. Match hierarchy, crop, spacing, aspect ratios and narrative transitions before adding effects. Replace made-up imagery and UI with actual authorized assets.
- DO NOT replicate a fake invented "CS Play dashboard" from the board.

## ACTUAL REPO BASELINE
- Homepage: src/app/page.tsx
- Homepage sections: HeroCinematic, ClientRow, SystemLoop, SoftwareBand, WorkRail, final CTA.
- Hero assets: /media/hero.mp4 and /media/hero-poster.jpg. Hero text and current slideshow are implemented in src/components/home/HeroCinematic.tsx.
- Main product route: src/app/cs-play/page.tsx, using src/components/product/ProductDetail.tsx and data from src/lib/content.ts.
- Retail case route: src/app/case-studies-retail-malls/page.tsx, using src/components/interior/CaseCategoryPage.tsx.
- Source content: src/lib/content.ts. Product facts include evidence classifications ('supplied', etc.) that are not a formal legal publication approval.
- Client logo registry: src/lib/clients.ts. Its own comment notes that relationships must remain current; inclusion in repo does not independently prove publication approval.
- Route registry: src/lib/routes.ts; primary nav in src/lib/navigation.ts; globals in src/app/globals.css; font files in public/fonts.
- Brand lockups: /brand/click-ix-horizontal-black.png and /brand/click-ix-horizontal-white.png. Products use supplied /brand/cityscreen/*.svg.
- Real media presently stored in public/media: hero.mp4, hero-poster.jpg, maxis-store.jpg, maxis-screen.jpg, cheras-mall.jpg, kpj2-lobby.jpg, building-led.jpg, outdoor-street.jpg, outdoor-network.png and seam variants.
- NOTE: Current SystemLoop contains deliberately illustrative interface samples; it is NOT evidence of an approved CS Play screenshot.

## SCOPE — DO NOT MAKE 25 NEW PAGES
Implement exact visual direction across three EXISTING representative surfaces:
- Home at /
- CS Play at /cs-play/
- Maxis story at /case-studies-retail-malls/#maxis (prefer enhancing the existing article rather than creating a new route)
Preserve all other 22+ routes, links, navigation and data architecture.

## FINAL SITE ART DIRECTION
- Global: preserve real company identity, current original logo, type system and colour tokens.
- Hero: preserve approved structure and existing video; adjust composition only when a precise screenshot comparison shows benefit.
- Image-first: real photos are large, cinematic, and not wrapped in dozens of cards.
- Spacing: fewer chapter boundaries, less decorative labelling, one strong image or table per section, avoid repetitive eyebrow/hairline recipe.
- Section rhythm: media / quiet statement / connected-system demonstration / product index / real case / practical CTA.
- Product story: official CS Play mark and actual product artifacts, approved screens shown inside neutral UI frames only if they exist. Do not generate apps from imagination.
- Case study: actual Maxis project image and verified source content, requirement -> delivered scope -> why it matters.
- One signature motion language only: existing pixel-cell reveal + one deliberate connected-system transformation; no second pinned carousel, global smooth-scrolling, particles, or fake 3D stack if the static state would explain more clearly.
- Accessibility: semantic html headings, focus-visible, button navigation, all content exposed without JS, reduced-motion immediate state changes.
- Responsive: custom framing at 390, 768, 1024, 1440; do not just shrink desktop.

## COMPONENT STRATEGY
Reuse:
- Existing shared Header/Footer and navigation.
- src/lib/content.ts / routes.ts / clients.ts.
- HeroCinematic and its actual video media.
- Current ProductDetail data plumbing and CaseCategoryPage case registry.
Replace or revise locally as needed:
- SystemLoop only if a more focused shared-element story demonstrably improves comprehension.
- SoftwareBand presentation only, never product identifiers.
- Product detail visual composition without changing content facts.
- Retail case layout without inventing new route or content.
Possible new components if needed (not compulsory):
- EvidenceLedIntro, CapabilityIndex, ConnectedStoryStage, ProductSpecimen, CaseProjectHero, CaseFactTable, SectionChapterNav.
No feature should be created merely to match an image decorative shape.

## PAGE MAPPING
HOME:
H01 current navigation/banner -> H02 current hero video/copy -> H03 client/evidence row -> H04 one partner, actual service map -> H05 single connected system narrative -> H06 product ecosystem -> H07 process summary -> H08 selected case studies -> H09 contact close.
CS PLAY:
P01 product hero with official product mark -> P02 overview with plain buyer job -> P03 actual approved interface specimen OR facts/diagram -> P04 capability groups -> P05 scheduling and playback in commercial flow -> P06 supported screen formats -> P07 documented case links -> P08 CTA.
MAXIS:
C01 real-photo case hero -> C02 client + actual locations + verified systems -> C03 requirement -> C04 documented delivery activities -> C05 operational relevance (non-numeric) -> C06 project image gallery only if multiple distinct approved photos exist -> C07 CTA + related work.

## MOTION DESIGN PROTOCOL
- Define key moments and still states in Figma before implementation.
- One state changes the next: physical LED image -> management interface/source-verified diagram -> proof-of-play concept.
- Use GSAP Flip only for true shared elements that change 2D geometry. Otherwise CSS transforms/opacity and a short GSAP timeline are enough.
- All animation states are optional enhancements; static content exists in HTML.
- Use a direct-select stepper for touch and keyboard; never force scroll pin to access important facts.
- Reduce motion: content instantly switches; don't merely slow down the effect.
- Remove the duplicate competing pinned experience if introduced by current local experimental work.

## CONTENT APPROVAL
The copy file is NOT a claim of legal approval: it is a faithful editorial rewrite of repository descriptions. A company owner/manager must review externally publishable client trademarks, dates, case details, permissions, product screenshots and capabilities. Wherever unavailable, the copy file uses [APPROVAL REQUIRED] or [ASSET REQUIRED].

## ONE-SHOT IMPLEMENTATION WORKFLOW FOR OPENCODE
A. Inspect main, read README + AGENTS + src/lib/content.ts + routes + globals + existing page components; do not overwrite unrelated changes.
B. Identify precise reference-to-asset mapping using 01_ASSET_MANIFEST.csv, verify media exists and has expected content.
C. Produce a short existing-vs-target audit in writing; note hard blockers; then implement the best-supported version in a new branch.
D. Implement Home first, then CS Play, then Maxis chapter.
E. Run npm run typecheck, npm test, npm run build; inspect screenshots at four viewports; check reduced motion and no JS.
F. Produce comparison screenshots, modified-file list, missing-asset list, and a draft PR. Do not merge automatically.

## USER SUPPLIES TO OPENCODE
- Attach the original design-board image "CLICK IX_ Immersive Screen Networks.png" to the OpenCode session.
- Point it to this /docs/one-shot-kit/ folder in the implementation branch.
- Provide approved original CS Play screenshots if their authentic display is desired.
- Provide any missing client-approved photos and rights/permissions.
- Confirm whether large dark hero treatment is desired despite the preserved light-house style. Until then, favour preserving existing hero.

## VERIFY AND SHIP
Run:
npm ci
npm run typecheck
npm test
npm run build

Manual:
- Keyboard and screen reader checks for carousel, product tabs, menu and case links.
- View with reduced-motion setting enabled; no motion-dependent inaccessible content.
- 390px, 768px, 1024px, 1440px screenshots.
- JS-disabled HTML retains critical info and links.
- All source logo assets unmodified.
- No missing image, runtime error, unexpected route changes or invented UI.
- Document actual Lighthouse/Web Vitals methodology and results instead of claiming unmeasured success.

## DELIVERABLE TO USER
- Draft pull request with isolated code changes.
- Screenshots before/after at desktop and mobile.
- Exact assets used and missing.
- Test outputs, real build result, remaining gaps versus the reference.
- Simple map of what was changed, preserved and why.
