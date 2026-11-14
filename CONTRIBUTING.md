# Working on this repository

## Before you start

- Node 20.9 or later (`.nvmrc`), `npm ci`, then `npm run dev`.
- Read `README.md` for the file map and `AGENTS.md` for the rules the code depends on.

## The loop

```bash
npm run typecheck
npm test
npm run build
```

CI runs the same three on every pull request. A change that fails any of them is not ready.

## Where to change what

| You want to change | Edit |
|---|---|
| Copy, products, case studies, services | `src/lib/content.ts` |
| A route, its title or description | `src/lib/routes.ts` |
| Colour, type scale, shared components | `src/app/globals.css` |
| One page's layout | its folder under `src/app/` and its `*.module.css` |
| The contact address | `src/lib/contact.ts` |

Never type a fact into a component. If it is not in `content.ts`, it is not published.

## Commit style

Conventional commits, imperative, one change per commit:

```
feat(products): set the index rows at reading scale
fix(contact): keep the address visible on ink
chore(repo): add CI
```

Mention the reasoning in the body when the change is not obvious from the diff.

## What not to do

- Do not add a dependency for something CSS can do.
- Do not invent clients, metrics, testimonials, contact details or capabilities.
- Do not redraw or recolour a supplied brand mark.
- Do not add routes or redirects without an explicit decision.
- Do not introduce motion that pins, hijacks scrolling, or hides content without JavaScript.
