# CLICK IX — one-shot reference-board handoff

Created 16 November 2026. Documentation-only branch; no production components or routes were modified.

## Start here

1. Download or copy **ALL_IN_ONE_OPENCODE_HANDOFF.txt**.
2. Attach the user's original design image ("CLICK IX_ Immersive Screen Networks.png") directly to OpenCode. It is **not** included in this GitHub branch.
3. Ask OpenCode to inspect main and implement on a new feature branch. This handoff branch contains documentation only.
4. Give OpenCode clear permission to apply the user-selected dark/photo-led board **only within the scoped 3-template design experiment**, while preserving original logos, data integrity, route policy and accessibility.
5. Compare actual local screenshots to the user image before approving any merge.

## Files

- **ALL_IN_ONE_OPENCODE_HANDOFF.txt** — one-file handoff containing A+B+C and the PowerShell asset builder.
- **01_OPENCODE_MASTER_PROMPT.md** — exact target, visual hierarchy, components, motion, source-of-truth constraints, verification and done criteria.
- **02_ASSET_MANIFEST.csv** — 70 existing repository brand/media/font paths plus 13 unverified/missing requests, each with a publication gate. **Fonts are inventoried only; no font files are redistributed.**
- **03_READY_COPY_DECK.md** — source-grounded editorial draft for Home, CS Play, Maxis, and optional Cheras.
- **04_BUILD_ASSET_PACK.ps1** — copy only curated existing visual assets from the local repo into a safe asset folder and create a ZIP locally; excludes fonts and secrets.

## One-command asset collection (PowerShell, from any current directory)

Open PowerShell in your local clone and run:

    powershell -ExecutionPolicy Bypass -File .\docs\one-shot-reference-board\04_BUILD_ASSET_PACK.ps1

This creates CLICK_IX_one_shot_assets.zip at your local repository root.
The script cannot access the original conversation image or missing product screenshots.
Only run after checking the asset rights and the expected file list.

## Verified route corrections

- Home: /
- Product: /cs-play/ (NOT /software/cs-play/)
- Case: /case-studies-retail-malls/#maxis (NOT /case-studies/maxis/)
- Products index: /software/
- The repo has one shared 25-route system; do not silently create new nested routes.

## Rights and evidence

- Use exact original public/brand/click-ix-horizontal-*.png logos; do not generate alternatives.
- Company photos and client marks in the repo still need appropriate publication/advertiser approval.
- src/lib/content.ts includes evidence status 'supplied': this is documentation provenance, not final sign-off.
- Real CS Play dashboard screenshots were not identified among verified public assets. **Do not fabricate them.**
- The reference board is art direction, not factual proof of a real screen, product interface, brand mark or case metric.
- No invented insights articles, quotes, numerical performance metrics, demo booking routes or installation photos.

## Current branch protection

This handoff was prepared on handoff/one-shot-reference-board, based on main.
No commits were applied to main. The implementation work should happen in a separate feature branch, with a draft PR and screenshot review before merge.

## Source files inspected

AGENTS.md, README.md, package.json, src/lib/routes.ts, src/lib/content.ts, src/lib/clients.ts, src/lib/heroPosters.ts, src/app/page.tsx, src/app/cs-play/page.tsx, src/app/case-studies-retail-malls/page.tsx, src/components/home/HeroCinematic.tsx, src/components/home/SystemLoop.tsx, src/components/home/SoftwareBand.tsx, src/components/home/WorkRail.tsx, src/components/product/ProductDetail.tsx, src/components/interior/CaseCategoryPage.tsx, src/components/Header.tsx, src/components/PromoBar.tsx, src/lib/contact.ts and existing design documentation.

Note: asset presence and source code were verified using the GitHub repository's main branch. This was NOT a runtime browser QA or an approval audit of external client/media rights.
