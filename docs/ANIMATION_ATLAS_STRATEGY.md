# Animation Atlas — production strategy

Decision record, 2026-11-03.
Source asset: `D:\Download\Click-IX Website\Click_iX_Animation_Atlas.html` (32 studies, read-only reference).
Companion: `docs/MOTION_SYSTEM_PLAN.md` (Signal Flow tokens and patterns P1–P10). This document does not repeat it; it decides what the atlas contributes to it.

Evidence: `evidence/design-v2/atlas/` — all 32 studies captured, two contact sheets, eight brand-recolour tests.

---

## 1. Verdict

**The atlas is a sketchbook, not a component library. Ship eight scenes, not thirty-two.**

The work in the atlas is genuinely good: it is original, drawn in our own medium (flat vector, no photography), and its subjects are the actual business — screens, controllers, publishing, networks. That is rare and it should be used.

But it was drawn as a *demonstration*. Every scene is a 1000×580 slide with its own headline, footer label and caption, paced for a viewer clicking through a gallery. Dropped into a 20-route corporate site unchanged, it would produce the exact failure mode we have been avoiding: a site that performs at you, where every scroll position has an animation and none of them mean anything.

So the rule is:

> **One page, one instrument.** Each route gets at most one animated diagram, and that diagram exists to explain something that is otherwise hard to say. Everything else on the page is typography.

The atlas supplies the *vocabulary* — traced boundaries, signal paths, state sequences, layered hardware. We supply the *grammar*: when it fires, how long it lives, what colour it is allowed to be, and what it is not allowed to claim.

And the single best idea in the atlas is not any one scene. It is the relationship between studies 21, 22 and 28: **a system shown as a sequence of states rather than a picture of a system.** That becomes the spine of how this site shows the company's work.

---

## 2. What the atlas actually is (technical audit)

| Property | Finding | Consequence |
| --- | --- | --- |
| Scenes | 32, in 5 chapters, registered through one `add()` call each | Individually extractable |
| Construction | SVG built by JS string helpers (`R`, `L`, `P`, `C`, `T`, `K`), injected via `innerHTML` | Not portable as-is; the 7 chosen scenes get hand-written JSX |
| Stage | `viewBox="0 0 1000 580"`, `preserveAspectRatio` fill, rendered at ~1055×612 | Fixed design canvas — needs a responsive strategy, see §6 |
| Motion | Pure CSS: 28 `@keyframes`, ~12 utility classes (`.draw`, `.appear`, `.rise`, `.grow`, `.packet`, `.scan`, `.blink`, `.aperture`…), staggered with a `--delay` custom property | Portable to our CSS almost 1:1 |
| JavaScript | None per scene. No `IntersectionObserver`, no timers, no rAF | Cheapest possible motion; no runtime cost per scene |
| Tempo | 0.5 s (`.pop`) to 6 s (`railMove`), most loops 2.4–4 s | **Wrong tempo for production** — see §5 |
| Palette | ink `#071720`, panel `#102732`, paper `#f4f5f1`, cyan `#31c6d1`, lime `#c9f18d` | Not our palette; cyan and lime are used liberally |
| Type | Arial, inline SVG `<text>` | Not our fonts; SVG text is not selectable, translatable or readable as document text |
| Accessibility | `role="img"` + `aria-label="Animated concept study"` on the SVG; stage label carries scene title; `button:focus-visible` is defined | Labels present but generic. SVG text is invisible to AT |
| Reduced motion | One block: `animation:none!important; transition:none!important` on `.stage.go *` | **Partially broken** — see §7 |

**Two defects to fix rather than inherit**

1. `.aperture` has a base `clip-path: inset(30% 43% 30% 43%)` with the animation providing the open state. Under reduced motion the animation is removed, so the element stays cropped to a narrow vertical strip — the content is hidden, not frozen. Studies 25 and 27 are unusable for anyone with reduced motion on.
2. Every scene carries its own poster frame — a `K()` kicker at top, a `sectionFoot()` label at bottom. That is gallery chrome. In production it would compete with the page's own section header and caption.

---

## 3. The colour rule (the one that will be got wrong)

A mechanical find-and-replace of the atlas palette into brand tokens **inverts meaning**. That is not a theory: the first test pass turned study 29's CTA disk from the accent colour into cyan, because both `#31c6d1` and `#c9f18d` were mapped positionally. In the atlas, a saturated colour means "this is the subject" in one scene and "this is live signal" in another. Swap the hex and the scene argues the wrong thing.

The fix is to recolour **by role, per scene**, never by hex.

| Role | Meaning in a scene | Token |
| --- | --- | --- |
| Ground | The field behind everything | `--navy-900` (dark) / `--paper-50` (light) |
| Panel | A raised surface, a screen body, a card | `--navy-800` / `--navy-700` / `--paper-0` |
| Structure | Rules, frames, wiring, dividers | `--slate-600` / `--border-dark` / `--border-light` |
| Text, primary | The thing being read | `#fff` / `--navy-900` |
| Text, secondary | Labels, meta, captions | `--slate-400` / `--slate-500` |
| **Signal, live** | Currently moving or in flight | `--cyan-500` |
| **Signal, proof** | Confirmed / delivered | `--lime-500` |
| **Signal, action** | The one element the scene is arguing for | `--yellow-500` |
| Product surface | CS Play / CS Sign Hub identity | `--blue-500` / `--grey-500` |

**Three hard limits per scene**

1. **One yellow.** If two things are yellow, nothing is the subject. The yellow element must be the thing the caption is talking about.
2. **One cyan motion.** A single travelling or pulsing element. Not a network of them.
3. **Everything else is neutral.** No decorative colour. Study 24's eight-colour ecosystem becomes a two-colour diagram or it does not ship.

This is stricter than the atlas, and it is the difference between "animated explainer" and "instrument panel".

---

## 4. Decision: all 32 studies

Legend — **Adopt** (build close to the original), **Adapt** (keep the idea, rebuild the execution), **Component** (the idea belongs in CSS/UI, not in a scene), **Reject**, **Blocked** (right idea, wrong asset).

### Chapter 01 — Entry & real-world screens

| # | Study | Decision | Destination | Reason |
| --- | --- | --- | --- | --- |
| 01 | Screen-outline arrival | **Adapt** | Scene *Boot*, homepage hero, first 900 ms only | A traced boundary becoming a screen is the strongest one-line statement of "smarter screen". Rebuild: only two edges draw, then content snaps on at 420 ms. Not a looping outline. |
| 02 | Architectural LED façade | **Reject** | — | Requires a building. Any building we draw is an invented installation presented as company work. |
| 03 | Outdoor billboard activation | **Reject** | — | Same problem. We do OOH (Big Tree Outdoor) — drawing a generic billboard would misrepresent it. Use approved photography or nothing. |
| 04 | Storefront before/after | **Reject** | — | Invented storefront, and the toggle affordance reads as a demo. |
| 05 | Retail video-wall choreography | **Adopt** | Hero wall, all routes that show the network | Already the strongest element of the built homepage. Formalise it as P4: one tile advances one state every 6 s, never text, never all four at once. |
| 06 | Campaign pixel exchange | **Reject** | — | Pixel-mask reveal is a demo trick; also duplicates 05/23. |
| 07 | Vertical signage / directory | **Adapt** | Scene *Board*, `/cs-sign-hub/` | 9:16 reflow shown honestly — a portrait display is a different composition, not a squashed 16:9. Recolour: Sign Hub grey, not yellow. |
| 08 | Editorial headline mask | **Component** | `P1` curtain reveal | This *is* P1. Merge into the motion system; do not build twice. |
| 09 | Hero → Services canvas handoff | **Reject** | — | Shared-element travel over several screens is fragile, competes with P5, and breaks focus. Keep as a note for a future View Transition, not a scroll animation. |

### Chapter 02 — Services & physical operations

| # | Study | Decision | Destination | Reason |
| --- | --- | --- | --- | --- |
| 10 | Marketing strategy → screen plan | **Adapt** | `/marketing-communication-strategy/` | Brief → channel map → physical destinations is a real service story. Rebuild without the fake dashboard; end on a screen list, not a chart. |
| 11 | Project management milestones | **Component** | `P8`-adjacent step rail, `/project-management/`, `/our-process/` | The milestone logic belongs in the DOM as an ordered list that fills as steps enter view. Not an SVG. |
| 12 | Consumer journey mapping | **Adapt** | `/consumer-journey-mapping/` | A route line with touchpoints is the right metaphor. Must carry no counts, no dwell time, no measured footfall — it is a map of *where*, not *how many*. |
| 13 | Screen placement & aspect mapping | **Adopt** | Scene *Format*, `/digital-signage-solutions-mapping/` | Best study in the atlas. One source, four aspect ratios, geometric and true. Nothing to change but colour and tempo. |
| 14 | LED panel exploded view | **Adopt** | Scene *Stack*, `/hardware/` | Genuinely informative, no photography needed, and hardware is what we actually specify. Panel / receiver / frame / content is a real layer stack. |
| 15 | Mini PC → controller → display | **Adopt** | Scene *Stack* (lower half), `/hardware/` | The clearest possible answer to "how does the signal get there". Keep it literal. |
| 16 | Video-wall content tiling | **Adapt** | Scene *Stack* (tiling variant) | One video across four panels is real, but four panels is a claim about a specific install. Show the *principle* with an unlabelled array. |
| 17 | Content composition & reformatting | **Adopt** | Scene *Format* (variant), `/content-mapping/` | Type + image + motion modules reflowing into a publish-ready frame. Directly explains content mapping. |
| 18 | Analytics / signal insights | **Reject as drawn** | — | "Abstract activity and trend visualization" reads as performance data. We have no verified client metrics, so any trend line is a fabrication by implication. `/data-analytics/` ships typographic with a written explanation of what is measured and what is not. |
| 19 | Interactive touch kiosk | **Adapt** | `/interactive-solution/` | Keep the state change; make the trigger a real `<button>`, not an SVG hit area. No touch, no keyboard trap. |

### Chapter 03 — Software, campaigns & network

| # | Study | Decision | Destination | Reason |
| --- | --- | --- | --- | --- |
| 20 | Content → screen publishing | **Adapt** | Scene *Publish*, `/software/` | The workflow is the product. Rebuild as a three-step sequence the reader can step through, with an explicit "illustrative" label. |
| 21 | Queued → published → delivered | **Adopt — flagship** | Scene *Publish*, `/software/` | The most honest animation in the atlas: it distinguishes three states most vendors blur. This is the scene the site is built around. |
| 22 | Synchronized screen network | **Adapt** | Scene *Trace*, `/case-studies/` + homepage work | One source, several independent physical screens. Rebuild as the Work Trace, §5. |
| 23 | CS Play / ad-slot rotation | **Component** | Hero wall campaign tile | Same grammar as 05. Do not build a second rotation scene. |
| 24 | Connected media ecosystem | **Adapt** | `/about/` or `/software/`, static + entry | Eight-colour node cloud would violate the one-yellow rule. Reduce to our actual stack, two colours, no looping. |

### Chapter 04 — Projects & image transitions

| # | Study | Decision | Destination | Reason |
| --- | --- | --- | --- | --- |
| 25 | Project aperture reveal | **Blocked** | `/case-studies/` (later) | Needs licensed photography. The aperture motion is good; it has nothing to reveal. Revisit only with approved images. |
| 26 | Controlled horizontal gallery | **Reject** | — | Horizontal scroll hijack, and no photography. Also fights the flat, vertical editorial rhythm. |
| 27 | Architectural image-mask transition | **Blocked** | — | Photography-dependent, and inherits the `.aperture` reduced-motion bug. |

### Chapter 05 — Process & controls

| # | Study | Decision | Destination | Reason |
| --- | --- | --- | --- | --- |
| 28 | Plan → Design → Deploy → Manage | **Adopt** | Scene *Route*, `/our-process/`, homepage process | One continuous line becoming four states is exactly our delivery method. Retime for a rail, not a loop. |
| 29 | Signal pill / CTA hover | **Component** | `.btn` | Directional response on hover: 2 px lift, 4 px arrow slide, 180 ms. Belongs in the button, not in a scene. |
| 30 | Trace link | **Component** | `.link-arrow` | The rule that draws under a link is a good, quiet idea. Adopt at 180 ms, `--ease-mech`. |
| 31 | Navigation screen-mask overlay | **Adapt** | Mobile menu | The mask is good; the layout is not ours. Ours already exists — add the reveal, keep the focus handling that is already correct. |
| 32 | Footer signal convergence | **Adapt** | Scene *Converge*, `/contact/` | Lines converging into one action is the right closing gesture. Reduce to a 120 px band above the form, not a full-bleed scene. |

**Tally:** 6 adopt · 12 adapt · 5 component · 7 reject · 2 blocked = 32.

---

## 5. The eight production scenes

| Scene | Built from | Route | What it explains | Ambient? |
| --- | --- | --- | --- | --- |
| **Boot** | 01 | `/` hero | The frame becomes a screen | No — plays once, 900 ms |
| **Board** | 05, 07, 23 | `/`, `/cs-sign-hub/` | Four screen types, each doing its own job | Yes — one tile at a time, 6 s |
| **Publish** | 20, 21 | `/software/` | Queued ≠ published ≠ delivered | Only while in view |
| **Format** | 13, 17 | `/digital-signage-solutions-mapping/`, `/content-mapping/` | One source, many formats | No — steps on scroll |
| **Stack** | 14, 15, 16 | `/hardware/` | Panel → receiver → frame → content | No — steps on scroll |
| **Route** | 28, 11 | `/our-process/`, `/project-management/` | Four states, one line | No — fills per step |
| **Trace** | 22, 15 | `/case-studies/` + 4 categories, homepage work | What one deployment actually runs on | Yes — one layer at a time on interaction |
| **Converge** | 32 | `/contact/` | Everything ends in one action | No — plays once |

**Four sequences, no new component.** Studies 10, 12, 19 and 24 are not scenes — they are existing rows and nodes highlighting in order, reusing the reveal and row grammar. They carry no bespoke artwork, so they cost almost nothing and cannot drift into a second illustration language.

**Coverage.** Fourteen routes carry one scene, four carry a sequence (`/about/`, `/marketing-communication-strategy/`, `/consumer-journey-mapping/`, `/interactive-solution/`), and **two routes — `/our-services/`, `/data-analytics/` — carry nothing beyond the seam and the reveals.** That last number is a decision, not an omission. `/our-services/` is an index and should read as one; `/data-analytics/` must stay typographic, because any diagram there becomes a claim about measurement.

Above all, the rule survives: exactly **one** instrument on screen at a time. Where `/` carries three (`Boot`, `Board`, `Trace`), only `Board` is ambient — `Boot` finishes in 900 ms and `Trace` waits for interaction.

### The Work Trace — the original idea

The atlas animates *concepts*. The thing it cannot do is animate *this company's actual work*, because that requires knowing what was in scope.

So the case section stops being a list and becomes a trace. Four layers, always the same four:

```
Inventory   →  Content      →  Screens       →  Commercial
where          what runs        what shows       what is sold
```

Each case lights only the layers its documented scope supports — Maxis is inventory + content + screens; Cheras LeisureMall is screens + commercial; KPJ2 is content + screens. A layer we cannot verify stays visibly dark and reads **not in scope** rather than being quietly omitted or, worse, filled in.

Three properties make this better than anything in the atlas:

1. **It is honest by construction.** The absence of a layer is the design, not an edge case.
2. **It scales.** Four case categories, four traces, one grammar — no new illustration per client.
3. **It is not a picture of a product.** It is a picture of a scope of work, which is what a case study is actually about.

One rejected variant worth recording: showing a per-case layer *count* (`3 of 4`) next to each client. It was cut because it reads as a score. A client seeing "2 of 4" will assume the design is grading them, when the truth is that the layer was out of scope and the other supplier did it. The dark layer says **not in scope** in words, which is accurate. A number says "incomplete", which is not.

Rendered as real HTML/CSS (not SVG), so the labels are text: selectable, translatable, screen-readable. Prototype: `evidence/design-v2/plan/worktrace-preview.html` (static composition; the selection is not wired yet).

---

## 6. Editing rules for every adopted scene

**Tempo.** The atlas is gallery-paced: 2.4 s loops, 6 s rail moves, 1.7 s traces. Production is instrument-paced.

| Atlas | Production |
| --- | --- |
| 1.7 s line trace | 720 ms, `--ease-signal`, once |
| 0.85 s rise | 420 ms, 60 ms stagger, max 4 items |
| 2.4 s infinite pulse | 2.4 s loop, opacity only, one element, paused off-screen |
| 3.2 s packet travel | 720 ms per hop, 180 ms hold at each node |
| 6 s rail move | 420 ms per step, driven by intersection, not a loop |
| — | Nothing continuous faster than 2 s. Nothing entrance longer than 720 ms. |

**Type.** SVG `<text>` is replaced by HTML labels wherever a label must be read. The SVG keeps geometry and motion only. This fixes crispness at every DPR, makes labels translatable, and stops the diagram from having its own type scale.

**Frame.** Delete `K()` kickers and `sectionFoot()` labels from the artwork. The page provides:

```
┌ 1px border, no radius ──────────────────────┐
│ MONO LABEL                    STATE · LEGEND│  ← chrome bar, 1px rule
│                                             │
│   [ scene ]                                 │
│                                             │
└─────────────────────────────────────────────┘
Illustrative system diagram. Not an actual deployment.   ← caption, always
```

The caption is not optional and not conditional. Any scene that would need a different caption to be true is a scene we should not build.

**Responsive.** A 1000-wide SVG at 340 px viewport renders 12 px type at 4 px. Below 720 px, scenes do **not** shrink — they switch to a stacked HTML list with the same words, or they hide and leave the caption. Squashed diagrams are worse than absent ones.

**Density.** Maximum 12 labelled nodes per scene. Above that it becomes a poster and stops explaining.

**Interaction.** Anything interactive is a real `<button>` with a visible label. No invisible SVG hit areas, no hover-only affordances, no drag.

---

## 7. Accessibility and failure states

| Requirement | Implementation |
| --- | --- |
| Reduced motion | Scenes must resolve to their **complete** composition, not their first frame. This is the `.aperture` bug: the opened state is provided by the animation, so removing the animation hides content. Every scene ships with an explicit `prefers-reduced-motion` end state, and a test that asserts it. |
| No JavaScript | Scenes are static SVG/HTML at final state under `html.no-js`. No content depends on an animation having run. |
| Screen readers | Decorative scenery: `aria-hidden="true"`. Explanatory scene: `role="img"` + a real `<title>`/`<desc>` naming what it shows, plus the caption in text. Never rely on SVG `<text>` for meaning. |
| Focus | Scene controls take focus in DOM order; the panel never traps focus; route transitions restore focus explicitly. |
| Contrast | Every recoloured element re-checked against §3. Yellow on paper (1.40) stays forbidden; yellow on navy (13.33) is the pairing. |
| Off-screen | Ambient loops use `animation-play-state: paused` when out of view and on `:hover`/`:focus-within`. No loop runs behind a reader's cursor. |
| Overflow | Every scene tested at 1440/1024/768/430/390/360/320 — measured, `scrollWidth − clientWidth = 0`. |

---

## 8. Build batches

Each batch ends in a green gate and one commit. Nothing merges to `main`.

### Batch A — foundation (no scenes)
Motion tokens in `globals.css` (`--ease-signal/switch/mech`, five durations, one band). `Reveal` primitive — one shared, rAF-throttled reveal pass that disarms itself, `html.js` gate. Signal seam (P2). Curtain titles (P1). Scene shell component with chrome, caption and reduced-motion contract. Button and link-arrow micro-interactions (29, 30).
*Nothing visible moves yet except the seam and the reveals. That is correct.*

### Batch B — the work (highest value)
`WorkTrace` component in real HTML. Homepage work section rebuilt on it. Four case-category pages on it. This is the batch the user actually asked for.
Gate: 4 categories × 2 viewports screenshots, keyboard walkthrough, reduced-motion capture, honesty check (no layer lit without a documented scope line in `content.ts`).

### Batch C — products and hardware
`Publish` (21) on `/software/`. `Stack` (14, 15, 16) on `/hardware/`. `Board` (07) on `/cs-sign-hub/`. `Boot` (01) on the hero if the wall loop alone is not enough.
Gate: LCP unchanged, one ambient loop per route, contrast re-check on every recoloured element.

### Batch D — services, process, close
`Format` (13, 17) on the two mapping services. `Route` (28) on `/our-process/` and `/project-management/`. Sequences from 10, 12, 19, 24 on the four remaining routes. `Converge` (32) on `/contact/`.
Gate: full 20-route sweep, overflow matrix, reduced-motion matrix, Lighthouse on the four heaviest routes.

Estimated: four sessions, one batch each. Batches A and B carry most of the value.

---

## 9. What not to do

- Do not port all 32 scenes "because they exist". Seven rejects and two blocked are in this document on purpose.
- Do not recolour by hex. Role first, then token.
- Do not let a scene carry its own headline, kicker or footer label.
- Do not animate a metric, a client name, or a screen count anywhere.
- Do not build scene 02, 03, 04, 06, 09, 18 or 26 under any framing.
- Do not fetch a stock building and call it a façade study.
- Do not add a scroll library. Everything here is CSS plus one observer. GSAP is already installed; it stays unused unless a scene genuinely cannot be expressed in CSS, and that would need its own justification before it ships.
- Do not ship study 25 or 27 before photography is licensed and approved.

---

## 10. Dependencies

Permission is settled: this work is commissioned by the company, and the client has granted full authority over content, imagery and branding. Nothing below is waiting on approval. Each line is waiting on an **input** that only the company can physically supply, and until it arrives the site says so in words rather than filling the gap.

| Item | State | What would close it |
| --- | --- | --- |
| Scenes 25, 27 (photography reveals) | Approved, asset missing | The installation originals, plus which client and venue each one shows. Rights and consent are now a client matter, not a design blocker. |
| Any number in a scene or caption | Approved, data missing | Supplied campaign results, screen counts or occupancy figures. No figure is written from memory or inference. |
| CS Sign Hub screenshot | Approved, file missing | One sanitised capture of the real interface. Illustrative layouts remain until it exists. |
| Official mark | Approved, file missing | Vector logo or transparent PNG. The raster placeholder stays until then. |
| Brand type | Approved, files missing | Licensed font files for the committed pairing. Archivo + IBM Plex Mono are stand-ins. |
| Contact channels | Approved, values missing | The phone number and email address that should appear publicly. |

Until an input lands, the affected surface stays explicit: illustrative software is labelled illustrative, the photograph-free case studies say why, and no metric appears anywhere.

---

## 11. Implemented

### Batch A — foundation

| Piece | Where | Note |
| --- | --- | --- |
| Motion tokens | `src/app/globals.css` | Three curves, five durations, one travel distance. Asserted by `tests/work-trace.test.mjs`. |
| Reveal | `src/components/motion/MotionRoot.tsx` | `data-reveal` / `data-curtain`, one route-scoped pass, disarms its own listeners. |
| No-JS gate | `src/app/layout.tsx` | Inline script sets `html.js` before the body parses; nothing is hidden without it. |
| Curtain | Homepage H1 | Two lines, 60 ms apart, `--dur-editorial`. Transform only — the route title never starts at opacity 0. |
| Button / link response | `.btn`, `.link-arrow` | 2 px lift, 4 px arrow slide, 180 ms, `--ease-mech`. |

Two deviations from the plan, both deliberate:

1. **Reveal uses a rAF sweep, not an `IntersectionObserver`.** An observer never fires for an element that jumps from below the viewport to above it in one frame — an anchor link or a restored scroll position leaves that element invisible permanently. The sweep reads then writes, runs at most once per frame, and removes its listeners as soon as every node is revealed. Verified by jumping to the page bottom from a cold load: 0 of 9 hidden.
2. **Curtain is reserved for the route title.** Six clipped heading boxes per page would be noise. Section titles get the plain reveal.

### Batch B — the work

`src/lib/workTrace.ts` + `src/components/work/WorkTrace.tsx`, mounted on `/case-studies/` (five featured deployments) and on all four sector pages (that sector's deployments).

The composition changed from the dark prototype: the boxed node diagram became a **row table with a citation column**. Boxes looked better in isolation, but they had nowhere to put the evidence, and the evidence is the entire point. Each covered layer now prints the verbatim sentence it rests on. An uncovered layer reads `Not in scope` — not blank, not zero, not a score.

The citation is enforced, not trusted: `tests/work-trace.test.mjs` fails if a source string cannot be found in that case's record.

Verified: typecheck 0, tests 29/29, build 0; Lighthouse `/` and `/case-studies/` both 0.97 performance, 1.0 accessibility, best practices and SEO, zero failing audits; 0 px horizontal overflow at 1440/1024/768/430/390/360/320 across six routes; keyboard tab navigation with arrow keys, Home and End; reduced motion resolves every reveal and curtain to its end state.
