# AgentBlit Docs

Documentation site for AgentBlit, built with [Fumadocs](https://fumadocs.dev) and [Next.js](https://nextjs.org).

## Requirements

- Node.js 22+
- [pnpm](https://pnpm.io/installation)

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Documentation lives at [http://localhost:3000/docs](http://localhost:3000/docs).

## Writing docs

Add MDX files under `content/docs/`. See [Fumadocs page conventions](https://fumadocs.dev/docs/page-conventions) for slugs, frontmatter, and sidebar structure.

## Project layout

| Path | Purpose |
| --- | --- |
| `content/docs/` | MDX documentation pages |
| `lib/source.ts` | Fumadocs content loader |
| `lib/layout.shared.tsx` | Shared layout options (nav title, GitHub link) |
| `lib/shared.ts` | App name and GitHub config |
| `app/docs/` | Docs layout and catch-all route |
| `app/api/search/route.ts` | Full-text search (Orama) |
| `source.config.ts` | Fumadocs MDX configuration |

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run ESLint |
| `pnpm types:check` | Typecheck MDX and TypeScript |

## Learn more

- [Fumadocs documentation](https://fumadocs.dev/docs)
- [Fumadocs GitHub](https://github.com/fuma-nama/fumadocs)
