# Click iX Multi-Page Architecture Audit

> Historical Task 01–03 audit, preserved as original-navigation evidence. Task 06 now implements all 20 flat canonical routes and connects their directories. The route registry, `PROGRESS.md` and `evidence/TASK_06_REPORT.md` describe current implementation; statements below about missing pages refer to the earlier audit.

## Current implementation

### Next.js route inventory

| Route | Source | Status |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Implemented static homepage |
| `/about/` | `src/app/about/page.tsx` | Scaffolded Task 02 shell |
| `/our-services/` | `src/app/our-services/page.tsx` | Scaffolded Task 02 shell |
| `/software/` | `src/app/software/page.tsx` | Scaffolded Task 02 shell |
| `/case-studies/` | `src/app/case-studies/page.tsx` | Scaffolded Task 02 shell |
| `/our-process/` | `src/app/our-process/page.tsx` | Scaffolded Task 02 shell |
| `/contact/` | `src/app/contact/page.tsx` | Scaffolded Task 02 shell |
| `/_not-found` | Next.js default | Framework-generated |

`src/app/layout.tsx` is the sole shared App Router layout. It renders the shared `Header` and `Footer` around page content. Every implemented page owns exactly one `<main id="main-content">`; the layout does not introduce a nested main landmark. `next.config.mjs` sets `trailingSlash: true`.

No nested routes, dynamic segments, redirects, route handlers, or CMS/data layer exist. The six scaffolded pages export route metadata.

### Current navigation

`Header` is a client component that reads the current pathname and maps the six `inPrimaryNav` destinations from `src/lib/routes.ts` through `next/link`: About, Services, Software, Case Studies, Process, and Contact. The logo placeholder is a Home link. The current destination receives `aria-current="page"`. The mobile menu uses a disclosure button with `aria-expanded` and `aria-controls`; it closes on link activation, route change, Escape with focus returned to the button, and desktop resize. The Hero CTA and homepage contact CTA target `/contact/`. Planned routes are not linked.

## Reusable components

| Existing component | Keep as |
| --- | --- |
| `Header`, `Footer` | Shared site shell rendered once by the root layout |
| `Hero` | Homepage-only introduction |
| `Solutions` | Homepage service preview; not the complete directory |
| `CsSignHub` | Homepage software/product preview |
| `FeaturedProjects` | Homepage case-study preview |
| `Process` | Homepage process preview and source for the dedicated process page |
| `ContactCta` | Homepage CTA and source for the dedicated contact page |
| `globals.css` | Existing token and baseline styling source |

All components are static and presentational. They currently use placeholders and should remain so until approved original assets and verified claims are supplied.

## Approved canonical sitemap

Approved policy: preserve verified original Click iX paths as **flat top-level routes** with trailing slashes. Do not nest service or case-study slugs under `/our-services/` or `/case-studies/`. Do not add redirects. `/our-process/` and `/contact/` are the two approved new routes.

```text
/
/about/
/our-services/
/software/
/cs-sign-hub/
/case-studies/
/marketing-communication-strategy/
/project-management/
/consumer-journey-mapping/
/digital-signage-solutions-mapping/
/hardware/
/content-mapping/
/data-analytics/
/interactive-solution/
/case-studies-medical-pharma/
/case-studies-retail-malls/
/case-studies-out-of-home-advertisers/
/case-studies-fmcg-others/
/our-process/
/contact/
```

### Scaffolded in Task 02

- `/`
- `/about/`
- `/our-services/`
- `/software/`
- `/case-studies/`
- `/our-process/`
- `/contact/`

### Preserved but not yet scaffolded

- `/cs-sign-hub/`
- All eight service-detail routes
- All four case-study category routes

The typed registry in `src/lib/routes.ts` records every canonical path and distinguishes `implemented` from `planned` routes. `/software/` and `/cs-sign-hub/` remain separate top-level routes.

## Original website route evidence

Verified from the public `https://click-ix.com/` navigation on 2026-10-29:

| Group | Verified routes |
| --- | --- |
| Core | `/`, `/about/`, `/our-services/`, `/software/`, `/cs-sign-hub/`, `/case-studies/` |
| Services | `/marketing-communication-strategy/`, `/project-management/`, `/consumer-journey-mapping/`, `/digital-signage-solutions-mapping/`, `/hardware/`, `/content-mapping/`, `/data-analytics/`, `/interactive-solution/` |
| Case studies | `/case-studies-medical-pharma/`, `/case-studies-retail-malls/`, `/case-studies-out-of-home-advertisers/`, `/case-studies-fmcg-others/` |

The public homepage links to original images and software visuals. They are candidates for a rights-and-source audit only; none were downloaded, copied, modified, or approved by this audit. No exhaustive crawl was performed. Individual case-study detail routes, asset licensing, contact-route availability, process-route availability, redirects, canonical tags, and the production domain remain unverified.

## Missing architecture and migration considerations

- Missing: `/cs-sign-hub/`, all service-detail pages, and all case-study category pages. Footer navigation is intentionally deferred; the Footer remains minimal.
- The six Task 02 shells are intentionally minimal. They now share the site shell and route-aware navigation but must not be treated as finished pages.
- The route registry includes planned routes without page files. Do not scaffold a planned route until its content and approval status are defined.
- Current components rely on inline styles and hard-coded preview content. Introduce a small immutable content registry only when building the directory; do not treat the six solution cards as the full service taxonomy.
- Preserve the current navy, paper, cyan, lime, and teal token system; use the official logo only after a clean approved source is delivered.
- Before asset migration, inventory each original-site asset with its source URL, owner/rights status, intended route, and approval state. Do not reuse it solely because it is publicly accessible.
- Existing package versions are Next.js 15 / React 19 / TypeScript 5. No package installation is indicated for the route migration.

## Implementation tasks

1. **Done:** approve canonical flat route policy, trailing-slash behavior, and no-redirect rule.
2. **Done:** moved the shared shell into the root layout, converted primary navigation to route links, added the logo Home link, and provided accessible desktop/mobile navigation states.
3. **Done:** scaffold the six approved top-level App Router pages with route metadata and honest placeholders.
4. **Pending:** add `/cs-sign-hub/`, the verified service-detail routes, and the case-study-category route shells with approved content.
5. **Deferred:** extract shared preview/card primitives from the existing homepage only where duplication is proven.
6. **Pending:** complete the asset-rights inventory before integrating any original photographs, illustrations, animations, or product visuals.
7. **Complete for current scope:** route-registry, shared-shell, navigation, source, typecheck, build, direct-route, desktop/mobile layout, keyboard, active-state, and screenshot checks are recorded in `evidence/TASK_03_REPORT.md`. Human visual review of screenshots remains pending.
