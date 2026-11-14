# Click iX — website

The public website for CLICK IX Sdn Bhd, a Kuala Lumpur company that builds and runs the
software behind digital screen networks. Twenty-five pages: the company, the products, the
services, the process and the documented deployments.

Next.js 15 (App Router) · React 19 · TypeScript · CSS Modules · GSAP for one scroll gesture.

---

## Run it

```bash
npm ci
npm run dev          # http://localhost:3000
```

| Script | What it does |
|---|---|
| `npm run dev` | Development server with fast refresh |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | `tsc --noEmit` |
| `npm test` | The 29 content, routing and design-system checks |

No environment variables are required. The contact route is an email address, not a form, so
there is no mail backend to configure.

---

## Where things live

```
src/
  app/                 routes; one folder per page
    page.tsx           home
    software/          products index
    case-studies*/     the archive and four sector chapters
    our-services/      services
    our-process/       delivery method
    about/  hardware/  company pages
    sitemap.ts  robots.ts
  components/
    brand/             official product marks (never redrawn)
    home/              hero, clients, the five-screen wall, software band, work rail
    interior/          shared page furniture, case category template
    layout/            page header used by every interior route
    motion/            reveal root and the route change
    product/           product detail template and the flow line
    work/              work trace
  lib/
    content.ts         every fact on the site: products, cases, services, company
    routes.ts          the route registry — navigation, metadata, sitemap
    contact.ts         the one published address
    navigation.ts      menus derived from the registry
  app/globals.css      design tokens, type scale, shared components
```

**Content is data.** Product copy, case studies, services and company facts live in `src/lib/content.ts`.
Never type a fact twice; never add a claim that is not in that file.

**Routes are data.** `src/lib/routes.ts` drives the header, the footer, metadata and
`sitemap.xml`. A route that is not implemented cannot appear in the sitemap.

---

## Design rules that the code depends on

- Paper `#f6f7f9`, ink `#0b0f14`, blue `#1d4e7a`. Every colour is a token in `:root`.
- Three grounds, alternating: paper, white, and one ink band per page at the close.
- One display scale per page. A section carries an artefact — photograph, table, chart or
  product specimen — or is deliberately quiet.
- No shadows, no cards, no gradients except the supplied APAC banner.
- Motion: cells switch on, lines rise, panels settle. `transform` and `opacity` only. Every
  animation has a reduced-motion state and a no-JavaScript state.
- One `<main id="main-content">` per page; flat routes with trailing slashes.

---

## Assets

`public/brand/` holds the official lockups and CityScreen product marks — used unchanged, never
recoloured or traced. `public/media/` holds the deployment photography and the installation film.
Photography is company-supplied; do not substitute stock images.

## Notes

- The site is fully static. `next build` prerenders every route.
- `npm test` covers route policy, content honesty, design tokens and the shared shell. It does not
  run a browser.
- Internal working material (source decks, evidence captures, design handoff) is intentionally not
  part of this repository.
