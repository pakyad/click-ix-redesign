# Task 06 content provenance

Audit: 2026-10-31. Implementation baseline: `54840d6`.

| Material | Source | Status / permitted use |
| --- | --- | --- |
| Original route names, eight service categories, four case-study categories | `https://click-ix.com/` navigation; preserved in `docs/ARCHITECTURE_AUDIT.md`, audited 2026-10-29 | Historically verified navigation, not a verified service scope or project inventory. Retain exact names and flat paths. |
| Slogan and six homepage topics | User-provided source archive, `handoff/STATUS_AND_GAPS.md`, Task 05 implementation | Existing project material, preserved. No new company claims inferred. |
| CS Sign Hub name and separate route | Original navigation audit; `https://click-ix.com/cs-sign-hub/` | Name/route historically verified. Feature list, UI and relationship to other products NOT VERIFIED. |
| CS Play | Explicit Task 06 user instruction; original reference requested: `https://click-ix.com/software/` | Product name supplied by user. Actual capabilities, current availability and relationship to CS Sign Hub pending original documentation. Never identify it as Sign Hub or assign demo capabilities to it. |
| Other software offerings | `https://click-ix.com/software/` | Inventory unavailable. Do not invent product names or claim the displayed products are exhaustive. |
| Plan / Design / Deploy / Manage | Existing Task 05 process component | Existing editorial workflow; detailed checklists are general discussion guidance, not contractual service promises. |
| Company background, leadership, credentials, office/contact details | Requested original source: `https://click-ix.com/about/`, homepage | Unavailable. No people, biographies, dates, certifications, address, email or telephone inferred. |
| Client work and photographs | Four original category URLs in route registry; local approved-project registry | No approved project records/media. Category pages are empty-state editorial guides, never evidence of installations. |
| Official production logo | `https://click-ix.com/wp-content/uploads/2023/10/Click-IX-box.png` | Not verified; retain explicit placeholder. Reference screenshots are not production artwork. |
| Service explanations, questions, diagrams, brief tool | Original editorial implementation for Task 06 | General planning guidance, explicitly labeled. Not quotations from the original site or confirmed delivery scope. Original editable SVG, not project photography. |

## Current source-access evidence

On 2026-10-31, requests to the original homepage, `/software/` and supplied logo through the configured session proxy returned `<urlopen error Tunnel connection failed: 403 Forbidden>`. The enforced policy has no custom destination grants. No proxy bypass or alternate-source attribution was attempted. Historical route verification is not fresh verification of page copy.

No approved production logo, leadership portraits/biographies, real project photography or sanitized product UI is present locally. These remain publication dependencies. The project is completed with explicit pending-content states and useful editorial tools, as authorized by Task 06; it must not be described as fully company-content-approved.

The Contact brief stays in the browser until the visitor explicitly downloads it. It is not submitted, stored remotely or emailed. The software demonstration remains a local illustrative simulation and is not a product feature statement.

## 2026-11-02 supplied source pack

The user supplied a second, richer pack from `D:\Download\Click-IX Website`. It has been ingested into `source-data/` and analysed in `source-data/analysis/`.

Newly available:

- Official Click iX PNG lockups and knot mark in `source-data/brand/click-ix/`. Vector master still missing.
- Official CS Play, CS SignHub, CS Deals, CS Context and City Screen SVG logos in `source-data/brand/platforms/`.
- Two company profiles: a software-led 25-page 2026 deck and an older 77-page solutions profile.
- Eight documented offerings: CS Deals, CS Play, CS Play SSN, CS Sign Hub, OmniBuy DSP, SSP, Measurement and Data Partnerships.
- Three leaders and roles: Michael Tan, Lexus Gan, Vicky Yip.
- Twelve case-study narratives; ten have clear inspected photography and two have attribution caveats.
- Original sitemap, visitor-flow diagram and page-linking note.

Still pending:

- Canonical positioning choice between the two decks.
- Product architecture decision: `/software/` vs new `/products/` and `/platform/` routes.
- Client, photo, advertiser and privacy approvals.
- Product-owner confirmation of CS Sign Hub, SSP, measurement and data-partner capabilities.
- Vector logo, brand fonts and web palette.
- General enquiry email, phone, WhatsApp, address and social URLs.
- Case-study outcomes; both decks leave Outcome/Results blank.

No website route, copy or component was changed during this intake. The earlier provenance statements above remain historically accurate for the Task 06 build.

## 2026-11-03 PRD and redesign

`docs/PRD_CLICK_IX_WEBSITE.md` is the authoritative product and design specification for the current build. `src/lib/content.ts` is the single content model derived from the ingested pack; no text in it should be read as company-approved copy.

| Material | Source | Status / permitted use |
| --- | --- | --- |
| Colour system | Supplied brand assets in `source-data/brand/`; sampled values documented in PRD section 10 | Official yellow, CS Play blue and CS Sign Hub grey sampled from the supplied files. Navy, paper, cyan and lime are project decisions, not company brand standards. |
| Header logo | `source-data/brand/click-ix/` white horizontal PNG, copied to `public/brand/click-ix-horizontal-white.png` | Company-supplied raster lockup used unmodified. Vector master and brand guidelines still missing; do not trace, recolour or substitute. |
| Product architecture | 2026 software-led deck, eight documented offerings, plus the approved decision to keep `/software/` as the URL | Offering names and grouping are sourced. Capability detail, licensing, availability and CS Play scope remain unconfirmed. |
| Services | Original flat service route names plus the 2026 deck's scope language | Route names are historically verified. Each page separates a sourced scope line from explicitly editorial planning questions and limits. |
| Case narratives | Twelve documented stories in the 2026 deck; ten published, two held back | Client names and sector placement follow the supplied narratives. No outcome metric, testimonial or attribution was added. Two stories (Big Tree × Dove, Big Tree × TikTok Live) and four client records remain unpublished pending attribution and approval. |
| Photography | `source-data/analysis/` image index | Not used. No installation, event or product photograph appears on the site; client, photo, advertiser and privacy clearance is outstanding. Case pages are typographic narratives only. |
| CS Sign Hub interface | Local illustrative simulation | Visibly labelled illustrative in every instance. Never described as a product screenshot or a verified feature list. |
| Contact | Local brief builder | No email, telephone, WhatsApp, address or social URL is published, because none is confirmed. The brief is generated and downloaded in the browser only. |

The 2026-11-02 pack's open questions are resolved as follows: the software-led deck drives the narrative; `/software/` remains the Products URL with no new `/products/`, `/platform/` or `/ad-tech/` routes; CS Play and CS Sign Hub stay separate; and no case-study outcome is claimed because both decks leave results blank.
