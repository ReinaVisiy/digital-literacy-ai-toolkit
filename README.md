# Digital Literacy & AI Toolkit

A practical, searchable guide to AI and digital tools for learning, research, productivity,
career development and everyday work — built to teach digital literacy, not just list products.

Created by **Reina Visiy**. Independent personal project — not affiliated with or endorsed by
any organization.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Frontend only — no backend, no database, no auth, no API calls. All search/filtering is
  client-side.

## Adding a new category

1. Add an entry to `src/data/categories.ts` (set `comingSoon: false` once it has real data).
2. Create `src/data/tools/<category-slug>.ts` exporting an array of `Tool` objects
   (see `src/data/types.ts` for the schema).
3. Import and spread it into `allTools` in `src/data/tools/index.ts`.

No component changes are needed — `/category/[slug]` is a single reusable route that renders
any category from its data.

## Adding a new tool to an existing category

Add an entry to that category's file in `src/data/tools/`. Only include a `testNote` if the
tool has actually been tested — it renders as a clearly separated "Reina's Experience" section,
distinct from factual product details.

## Development

```bash
npm install
npm run dev
```

## Deployment

Ready to deploy on Vercel as-is: import the repository, no environment variables required.
