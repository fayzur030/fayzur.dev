# fayzur-portfolio

Next.js 16 + Tailwind v4 personal portfolio (`fayzur.dev`), scaffolded from create-next-app with the App Router.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- `npm run dev` / `npm run build` — Turbopack is the bundler (wired in `next.config.ts`).
- `npm run lint` — bare `eslint` (ESLint 9 flat config; assumes current dir or pass a path, e.g. `npm run lint -- src`).
- No test or typecheck script. For types: `npx tsc --noEmit`. Note `tsconfig.json` includes `.next/types` and `.next/dev/types`, so run `next dev`/`next build` once in a fresh checkout before typechecking.

## Stack quirks

- Tailwind v4: no `tailwind.config` file — theme tokens, dark variant, and animation utilities all live in `src/app/globals.css` (`@theme inline` + CSS variables, plus `shadcn/tailwind.css` and `tw-animate-css` imports). Change styles there, not in a JS config.
- shadcn (style `base-nova` in `components.json`) builds on `@base-ui/react` (Base UI), **not** Radix. Added components land in `src/components/ui`. The Button has custom `aqua` / `aqua-outline` variants (sea-glass styling in `globals.css`) — use these for primary/secondary CTAs; for anchor CTAs apply `buttonVariants({ variant: "aqua" })` to the `<a>` directly.
- `cn` comes from the `cn` package via re-export in `src/lib/utils.ts` — import from `@/lib/utils`.
- Path alias `@/*` → `src/*`.
- `LayoutProps<"/">` in `src/app/layout.tsx` is a globally generated Next.js type — no import needed.
- Everything is a one-pager in `src/app/page.tsx`; do not add routes — sections live in `src/components/sections/*` and shared effect/UI components in `src/components/website/*`.
- **All site content (name, links, skills, projects, experience) comes from `src/lib/portfolio.ts`** — edit that file, not the section components. Empty-string links render hidden/placeholder states by design.
- Lucide in this project is v1.x: brand icons (GitHub/LinkedIn) were removed — use `src/components/website/brand-icons.tsx`, and verify icon names against `node_modules/lucide-react/dist/esm/icons/` before importing (several legacy names like `Code2`, `Briefcase2` no longer resolve).
- Theme system is hand-rolled (no next-themes): inline script in `layout.tsx` sets `.dark` pre-paint (localStorage `folio-theme`, else system), `ThemeToggle` is stateless, icons toggle purely via CSS off `html.dark`. Don't add a competing solution.
- Particles (`particle-field.tsx`), cursor + mouse glow (`custom-cursor.tsx`), and scroll reveal (`reveal.tsx`) are all rAF/observer client components with strict cleanup + `prefers-reduced-motion` branches; reveal visibility is gated behind `html.js` so no-JS users still see content. Keep those properties intact when editing.
