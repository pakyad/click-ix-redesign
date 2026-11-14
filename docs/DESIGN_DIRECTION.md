# CLICK iX design direction

Implementation note, 2026-11-03. Supersedes the visual guidance in `docs/PRD_CLICK_IX_WEBSITE.md` §9 where the two disagree; the colour contract in §10 is unchanged.

## Thesis

**Design the network, not a brochure.** The site should behave like the product it sells: a set of screens, a schedule, a commercial flow and a proof layer. Corporate credibility comes from information design, not decoration.

Working name: **Control Room Editorial** — technical composition, editorial scale, restrained material palette.

## Surfaces

| Layer | Use | Tokens |
| --- | --- | --- |
| Control room | Hero, product and process bands, footer | `--navy-900`, `#08151f`, `#0d2133` |
| Document | Long reading, stack and work sections | `--paper-50`, `#ffffff` |
| Signal | Primary action, live state, active nav, progress | `--yellow-500` |
| Product identity | CS Play blue, CS Sign Hub grey | `--blue-500`, `--grey-500` |

Yellow is never body text on paper (1.40:1). Cyan and lime remain signal-only. No gradients, glass, rounded cards or drop shadows.

## Typography

- **Archivo** variable (100–900 weight, 62–125 width), Latin subset, `font-display: swap`. Display type runs at 104–110% width; body at 100%.
- **IBM Plex Mono** 400/500 for labels, data, timecodes, table meta and small caps.
- Scale: poster H1 up to 122 px, section titles 38–64 px, body 14–16 px, mono labels 8.5–11 px with 0.1–0.14em tracking.
- Both families are self-hosted stand-ins in `public/fonts/` under the SIL Open Font License. Replace with licensed brand fonts when supplied.

## Composition patterns

1. **Poster headline over a bleeding object.** Full-width H1, indented second line, then copy left and a screen wall that runs to the viewport edge.
2. **Visible system grid.** Hairline 96 px grid on the dark hero; 1 px rules elsewhere. Layout is asymmetric: 0.8/1.2 hero split, 1.35/0.65 section heads.
3. **Screen wall.** Four illustrative surfaces (menu, campaign, wayfinding, proof) with product labels and a live-loop chrome. Always captioned as illustrative.
4. **Capability ticker.** One yellow band of product names. Brand energy without client-logo theatre.
5. **Stack rows.** Editorial rows, not cards: index, product name, role, summary, three sourced capabilities, accent tick on hover.
6. **Work ledger.** Client in mono, narrative in display type, systems as small caps. No photography until rights and consent are approved.
7. **Process track and flow strip.** Sequence is information, not decoration; step numbers only where order matters.

## Motion

- Entry rise on the hero (0.6–0.8 s, `cubic-bezier(0.2, 0.7, 0, 1)`), staggered by 80–100 ms.
- Continuous product ticker, 44 s linear loop; paused entirely under reduced motion.
- Live dots pulse at 2.6 s. Nothing else loops.
- No scroll hijacking, cursor followers, parallax or autoplay video.
- `prefers-reduced-motion: reduce` removes animation, leaves content at full opacity and restores native scrolling.

## Rules

- One bold gesture per section. The rest is precision.
- Every visible claim must match `src/lib/content.ts` and the truth tiers in the PRD.
- Illustrative interfaces stay labelled. No fake product screenshots or invented metrics.
- No stock photography or AI-generated buildings, screens or people.
- Yellow is a checkpoint, not a surface.

## Rollout

| Surface | Status |
| --- | --- |
| Homepage | Implemented as the visual lab |
| Products `/software/` | Next: replace the current card blocks with the stack/ledger language |
| Service detail template | Next: poster header, capability ledger, editorial prompts |
| Case hub and categories | Next: apply the work-ledger typography and sector indexing |
| About, Process, Hardware, CS Sign Hub, Contact | Next: apply the shell, type scale and surface rhythm |

Each page keeps the existing content boundaries, route registry, metadata, one `<main>`, keyboard focus and reduced-motion behaviour.
