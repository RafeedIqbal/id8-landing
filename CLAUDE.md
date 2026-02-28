# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Layout

The main application lives in `id8-src/` — a Next.js 16 (App Router) project. The root directory contains MCP configuration and id8 installer metadata.

```
WealthSimple/
├── id8-src/        # Next.js app — work here
├── supabase/       # Backend (empty; add migrations here)
├── .mcp.json       # MCP server definitions (GitHub, Stitch, Supabase, Vercel, Context7)
└── .env.example    # Auth mode and API key config
```

## Commands (run from `id8-src/`)

```bash
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build
npm run lint    # ESLint (Next.js core-web-vitals + TypeScript rules)
npm start       # Start production server
```

No test framework is configured yet.

## Stack

- **Next.js 16** App Router, **React 19**, **TypeScript 5** (strict)
- **Tailwind CSS v4** via `@tailwindcss/postcss`
- **Supabase** for backend (not yet implemented)
- **Vercel** for deployment
- Path alias: `@/*` → project root

## MCP Integrations

Five MCP servers are available for AI-assisted development:

| Server | Purpose |
|--------|---------|
| `context7` | Library docs & code examples |
| `github` | Repo management (token-auth) |
| `stitch` | AI UI design generation |
| `supabase` | Backend-as-a-service |
| `vercel` | Deployment |

## id8 Workflow

Use `/id8` to run the full PRD-to-deploy pipeline:
1. PRD generation → Context7 planning → Stitch design (optional)
2. Supabase backend → Next.js frontend → local validation
3. GitHub push → Supabase deploy → Vercel deploy → verification

## Environment

Copy `.env.example` to `.env.local`. Auth for Vercel and Supabase defaults to OAuth; GitHub and Stitch require API tokens (`ID8_GITHUB_TOKEN`, `ID8_STITCH_API_KEY`).
