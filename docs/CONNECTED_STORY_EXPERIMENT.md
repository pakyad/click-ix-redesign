# Connected-screen narrative · design experiment

**Branch:** `design/connected-screen-story`  
**Base:** `main`  
**Status:** Review-only prototype. Do not merge until visual QA and company sign-off.

## Intent

Turn the approved “screens + software + reporting” reference into an actual, responsive, keyboard-operable website section. Borrow the *narrative logic* of Serko's platform page (demonstrate → explain architecture → reveal features) without copying Serko's layout, branding, code, or imagery.

## What changed

- Homepage now mounts `ConnectedStory` where the previous `SystemLoop` appeared.
- The old `SystemLoop` remains intact for comparison and easy rollback.
- The original header, hero installation film, client row, software band, case studies, and final CTA remain untouched.
- Added a three-layer explainer with user-controlled states: **screen network, content operations, measurement**.
- Added a five-stage workflow controlled by buttons, using the *existing* `commercialFlow` content: **Sell → Schedule → Play → Prove → Bill**.
- All interaction is initiated by the visitor, rather than autoplay or scroll-jacking.

## Official asset provenance

**Never generate or re-create the Click iX logo.** The existing shared header references the repository's exact supplied artwork:

- `public/brand/click-ix-horizontal-black.png`
- `public/brand/click-ix-horizontal-white.png`

The new feature uses the existing `ProductMark` component and supplied CityScreen artwork (`cs-play-*.svg`, `cs-deals-*.svg`).

All photographic imagery comes from `public/media/` already tracked in this repository:

- `hero-poster.jpg`
- `maxis-store.jpg`

The UI pieces are **deliberately illustrative**, and marked so in visible copy. They are *not* represented as actual software screenshots or real customer account data. No fabricated performance metrics, screen statuses, or financial results are included.

## Creative and behavioral direction

- Headline first, evidence second; strong editorial hierarchy, no decorative SaaS card grid.
- Use original installation photography as the physical anchor.
- Let small, purposeful controls reveal what the software does; don't animate data simply to impress.
- Preserve the established pale paper, charcoal and desaturated corporate blue tokens.
- Do not introduce new dependencies or routes.
- Respect reduced-motion preferences. Keep content readable without JavaScript.
- Preserve mobile reading order, semantic buttons, and visible focus.

## Validation and limits

- Local source passed TypeScript transpilation/syntax parsing and CSS parsing.
- The existing **29 repository tests** passed after resolving the local TypeScript CLI from the global installation.
- The separate static HTML *visual study* was reviewed at 1440px and 390px; it is not a complete Next.js runtime screenshot.
- The full `next build` and `npm run typecheck` were **not run**, because this work environment lacks installed Next.js/React packages and cannot fetch npm dependencies. Review the CI checks and perform a real browser QA before merging.
- The actual homepage should be checked against the established hero, following software band and at 390px, 768px, 1024px, and 1440px.

## Suggested next review

1. Confirm the system narrative complements, rather than repeats, the existing software band.
2. Replace illustrative interface states only when approved product screenshots are supplied.
3. Check images are deployed with the correct project attribution and approved usage.
4. Confirm keyboard navigation, focus visibility, reduced motion and contrast in the actual Next.js build.
5. Merge only after visual review and content approval.
