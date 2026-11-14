# Repository instructions

## What this is

The public website for CLICK IX Sdn Bhd: a static Next.js 15 App Router site, 25 routes,
TypeScript, CSS Modules, one GSAP scroll gesture. `README.md` explains how to run it and
where things live. This file records the rules the code depends on.

## Sources of truth, in order

1. `README.md` — how to run, file map, verification commands.
2. `src/lib/content.ts` — every fact on the site. If a claim is not here, it is not published.
3. `src/lib/routes.ts` — the route registry. Navigation, metadata and `sitemap.xml` derive from it.
4. `src/app/globals.css` — design tokens and the shared type scale.
5. `docs/` and `specs/` — product and design background.

## Brand and appearance

- **Logo and product marks are supplied artwork.** `public/brand/` is used unchanged: never
  redraw, trace, recolour, crop or rebuild a mark, and never substitute an invented icon or
  a text wordmark.
- **Palette:** paper `#f6f7f9`, ink `#0b0f14`, blue `#1d4e7a`, with cyan `#1bc8ed` and teal
  `#20c9b9` reserved for LED artwork. Every colour is a token in `:root`; no literal colours
  in components.
- **Three grounds, alternating:** paper, white, and one ink band per page at the close.
- **One display scale per page.** A section carries an artefact — photograph, table, chart or
  product specimen — or is deliberately quiet. No card grids, no shadows, no decorative
  numbering, no gradients except the supplied APAC banner.
- **Motion** is one family: cells switch on, lines rise, panels settle. `transform` and
  `opacity` only. No pinning, no scroll hijack, no bounce, no parallax. Every animation needs
  a `prefers-reduced-motion` state and must leave content visible without JavaScript.

## Routes

Flat top-level paths with trailing slashes, exactly as in the registry. Never nest service or
case-study slugs. Do not add, remove or redirect a route without an explicit decision — the
sitemap and every internal link follow the registry.

## Content integrity

- Never invent a client, a testimonial, a metric, a phone number, an email address, a screen
  count or a capability. Missing facts stay missing.
- Photography is company-supplied; do not substitute stock images or fabricate installations.
- Product interface imagery is illustrative and must be labelled as such.
- The only published contact is the address in `src/lib/contact.ts`. There is no contact form.

## Engineering

- No new dependencies unless a task genuinely requires one.
- One `<main id="main-content">` per page. Semantic headings, keyboard focus visible, no
  horizontal overflow at 390 or 1440.
- Before handing work back: `npm run typecheck`, `npm test`, `npm run build`.
- Content and routes are data. Do not hard-code a fact into a component.
