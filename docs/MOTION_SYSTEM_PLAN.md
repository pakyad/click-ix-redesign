# CLICK iX motion system plan — "Signal Flow"

Planning note, 2026-11-03. Companion to `docs/DESIGN_DIRECTION.md`. This document describes how to bring the *feel* of a highly polished site to Click iX without copying its look, and where the Click iX version can be better.

Reference studied: `darencurtis.sk/en/` (research captures only, `evidence/reference-darencurtis/`, git-ignored). Nothing from that site is used as artwork, copy, layout or code.

> Scene-level decisions for the supplied `Click_iX_Animation_Atlas.html` live in `docs/ANIMATION_ATLAS_STRATEGY.md`. That document decides which of the 32 studies ship, where, and under what colour and timing rules. This document remains the system that governs them.

---

## 1. What actually makes the reference feel smooth

Measured on the live page, not guessed:

| Observation | Measurement |
| --- | --- |
| Scroll handler | `scroll-behavior: smooth` only. No Lenis, no Locomotive, no ScrollTrigger, no parallax transforms on any image or video. |
| Motion vocabulary | 91 transition declarations, overwhelmingly `0.2s ease-out` and `0.3s ease-out`. One curve family, one duration family, everywhere. |
| Scroll cost | Nothing animates on scroll itself. Sections simply pass the viewport. |
| Section rhythm | Ten blocks, 335–1948 px tall, butting directly against each other with hard colour-field cuts. |
| Continuity devices | Two 140 px marquee bands at 8.76 s per loop and wave dividers between colour fields. |
| Hero | Fixed transparent header over full-bleed video with a 26 % brand-colour overlay, one 8-rem headline, one button. |
| Micro-interaction | `button-hover-magnet` on CTAs, custom SVG cursors. |
| Surface language | 8–24 px radii, pill buttons, saturated flat colour fields. |

The smoothness is not a scroll library. It is four habits: **one easing family**, **no motion competing with reading**, **deliberate section-to-section transitions**, and **interactions that answer within 200 ms**.

---

## 2. What we take, adapt and reject

| Reference move | Click iX decision | Why |
| --- | --- | --- |
| Single easing/duration family | **Adopt** — formalise it as tokens | The main source of the "smooth" feel |
| Native smooth scroll, no hijack | **Adopt** | Accessibility, INP, reduced motion |
| Hard section colour cuts | **Adopt, with a seam** | Our palette is navy/paper; cuts need a reason |
| Continuous bands | **Adopt, one per page** | Already proven by the ticker |
| Reveal on scroll, small travel | **Adopt, tighter** | 12–32 px, never 80 px slides |
| Fixed header over hero | **Adapt** — condense on scroll, add progress hairline | Fits an information-dense site |
| Magnetic buttons | **Adapt** — 2 px lift + 4 px arrow slide, no cursor chase | Magnetism reads consumer; corporate needs restraint |
| Wave dividers | **Replace** — 1 px "signal seam" | Waves are their signature shape; we need our own |
| Video hero with people | **Reject** | No rights-cleared footage exists |
| Custom cursors | **Reject** | Accessibility and gimmick risk |
| 24 px rounded cards, stickers, doodles | **Reject** | Off-brand; the knot identity is hard pixels |
| 8.76 s marquee | **Reject** | Too fast for a B2B reader; ours stays 28–44 s |
| Bouncy/elastic easing | **Reject** | Playful, not instrument-grade |

No shape, colour pairing, illustration, copy pattern or layout from the reference is reused.

---

## 3. The concept: Signal Flow

> The page behaves like signal travelling through a network: everything enters from the direction of travel, on one of three curves, at a speed proportional to its weight.

Where the reference is playful, Click iX is **instrument-grade**: motion confirms state, sequence and liveness, never personality.

**Three curves, nothing else**

| Token | Value | Use |
| --- | --- | --- |
| `--ease-signal` | `cubic-bezier(0.22, 1, 0.36, 1)` | Entrances, reveals, drawers |
| `--ease-switch` | `cubic-bezier(0.65, 0, 0.35, 1)` | Cross-fades, colour fields, page change |
| `--ease-mech` | `cubic-bezier(0.2, 0.7, 0, 1)` | Hover, press, focus, small state |

**Five durations, nothing else**

`120` micro · `180` state · `260` surface · `420` block · `720` editorial · `28s` continuous band.

**Two laws**

1. Nothing moves more than 32 px on entrance, 48 px on route change.
2. Motion is only ever `transform` and `opacity` (plus `clip-path` on two moments). No layout properties, no filters, no box-shadows.

---

## 4. The ten patterns

Cost is implementation weight, not runtime cost — every one of these is CSS plus at most one `IntersectionObserver`.

### P1 · Curtain reveal for display type — *high impact, low cost*
Section titles and the H1 sit inside an overflow-clipped line box and rise 100 % from below. Two lines = two 60 ms offsets. Replaces the current fade-up on hero and section heads.
Why better than the reference: theirs scales and fades; a curtain reads as editorial typesetting, which suits a 122 px H1.

### P2 · The signal seam — *the original idea*
Replace hard light/dark cuts with a 32 px seam strip: a 1 px `--border` rule, a 2 px yellow segment that draws left-to-right when the seam enters view, and a mono label naming the next section (`03 / WORK`).
This is the connecting tissue the reference gets from waves, expressed in our own language: a bus line, not a blob. One reusable component, used at every section boundary on every route.

### P3 · One continuous band per page — *already half-built*
Keep exactly one ticker per page: 28 s loop on the homepage, slower on interior pages, static under reduced motion. Pause on hover and on keyboard focus, so it never fights a reader.

### P4 · The wall actually runs — *the signature moment*
The four-tile hero wall advances one content state every 6 s: menu rotates a category, campaign bar shifts, directory level changes L1→L2, proof bars re-sort. One tile at a time, 420 ms, no loops on text. Caption stays "illustrative". Reduced motion freezes the first frame.
This is our answer to their video hero, built from the product instead of stock footage.

### P5 · Channel change between routes — *the differentiator*
Where the browser supports View Transitions and Next's flag is enabled: the screen wall tile becomes the destination page's header panel; everything else cross-fades in 180 ms. Unsupported or reduced-motion: instant navigation, no fade.
Gated behind `experimental.viewTransition`, measured, and removable in one commit if INP regresses.

### P6 · Header as instrument — *low cost, high perceived quality*
56 → 64 px condense on scroll, hairline scroll-progress rule under the header, active section marked from the existing route registry, mobile menu already keyboard-correct.

### P7 · Rows, not cards — *consistency pass*
Stack rows, work ledger and service lists get the same hover grammar: 3 px accent bar grows over 180 ms, 2 % surface tint, no lift, no shadow. Focus-visible gets the same bar in yellow.

### P8 · Sticky index rail — *desktop only*
On `/software/` and service details, a mono index sticks while the body scrolls, with a 1 px progress line. Under 900 px it collapses to the existing flow.

### P9 · State transitions that explain themselves — *form and CTA*
Input focus: 120 ms underline grow. Validation: message slides 6 px and fades in 180 ms. Success panel replaces the form with a 420 ms height-preserving cross-fade so the footer never jumps.

### P10 · Discipline layer — *the part nobody sees*
One focus ring, one skip-link behaviour, `prefers-reduced-motion` honoured at token level, `html.no-js` gate so no content is ever hidden without JavaScript, and a test that fails the build if a transition exceeds 500 ms outside the band.

---

## 5. Where Click iX can be better than the reference

1. **Motion carries meaning.** Theirs decorates; ours encodes sequence (process), liveness (wall), and state (rows, forms). Every animation can answer "what did that tell the user?"
2. **Budgeted, not vibes.** A test asserts easing/duration vocabulary and catches drift. Reference has 91 ad-hoc transitions; we will have ~10 tokens.
3. **Cheaper.** Their page ships video plus per-block scripts and a slider library. Ours: no new dependencies, no video, ~40 lines of JS.
4. **Accessible by construction.** No cursor replacement, no scroll hijack, no motion that outlives its purpose; reduced motion is a first-class variant with its own screenshot gate.
5. **Continuous across 20 routes.** A shared seam, a shared reveal, a shared hover grammar — so the site reads as one system, not five templates.

---

## 6. Rollout

### Batch A — foundation and homepage
Tokens in `globals.css`; `Reveal` primitive (one observer, IO + `html.js` gate); signal seam; curtain titles; wall loop; header condense + progress rule; row hover grammar.
Gate: typecheck, tests (new motion assertions), build, Lighthouse, overflow matrix, reduced-motion capture.

### Batch B — product and case templates
`/software/`, service detail template, case hub and four categories: sticky index rail, seam placement, ledger hover, seam-aware section spacing.

### Batch C — remaining routes and route transitions
About, Process, Hardware, CS Sign Hub, Contact: form transitions, process rail, final seam pass. Then the View Transition experiment, measured, revertable.

Estimated: 3 working sessions, one per batch, each ending in a commit.

---

## 7. Risks and how they are handled

| Risk | Handling |
| --- | --- |
| Hidden content without JS | `html.no-js` / `@media (scripting: none)` keeps everything visible; reveals only apply under `html.js` |
| LCP regression from opacity-0 hero | Hero text animates `transform` only; no opacity on the H1 until after first paint |
| CLS from reveals | Travel is translate only, containers keep layout height |
| Too many observers | One shared observer, elements registered by `data-reveal` |
| Route transitions break focus | Focus is restored explicitly; transition never traps or delays keyboard |
| Motion fatigue on long pages | Reveal fires once, `once: true`; nothing re-animates on scroll-up |
| Sweet spot lost | Compare against the current build with screenshots at 3 scroll depths per page; if a pattern does not improve comprehension, cut it |

---

## 8. Decisions needed

1. **Boldness**: restrained (recommended — seams, curtains, condensing header, wall loop) or express (adds section-level horizontal scroll and route transitions by default).
2. **Route transitions**: allow the experimental Next flag with a measured revert, or ship Batch C without it for now.
3. **Process section**: keep it as a static track, or make the four steps scroll-linked with a progress rail (no pinning, no hijack).

Nothing in this plan is implemented yet. The current homepage remains the approved baseline.
