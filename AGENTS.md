# fayzur-portfolio

Next.js 16 (App Router) + Tailwind v4 one-pager for `fayzur.dev`. React 19, TypeScript strict.

## Commands
- `npm run dev` / `npm run build` / `npm run start` — Turbopack wired in `next.config.ts`.
- `npm run lint` — ESLint 9 flat config (`eslint.config.mjs`). Pass paths (e.g. `npm run lint -- src`).
- Types: `npx tsc --noEmit`. `tsconfig.json` includes `.next/types` and `.next/dev/types` — run `npm run dev` or `npm run build` once in a fresh checkout before typechecking.

## Architecture
- **Single page only.** Rendered from `src/app/page.tsx`. Do not add routes. Sections in `src/components/sections/*`, shared effects/UI in `src/components/website/*`, primitives in `src/components/ui/*`.
- **Content source of truth:** `src/lib/portfolio.ts` holds all copy (name/roles/links/skills/projects/experience/nav). Edit there, not section components. Empty strings render hidden/placeholder states.
- **Imports:** `@/*` → `src/*`. `cn` from `@/lib/utils` (re-export of `cn` package). `LayoutProps<"/">` in `src/app/layout.tsx` is globally generated (no import).

## Stack Quirks
- **Tailwind v4:** No `tailwind.config.*`. Tokens, dark variant, animations in `src/app/globals.css` (`@theme inline` + CSS variables) with `shadcn/tailwind.css` and `tw-animate-css`. Edit styles there.
- **shadcn/UI:** Style `base-nova` (`components.json`) on `@base-ui/react` (not Radix). Components go in `src/components/ui`. Button has custom `aqua` / `aqua-outline` variants in `globals.css` — use for primary/secondary CTAs. For anchor CTAs, apply `buttonVariants({ variant: "aqua" })` directly to `<a>`.
- **Icons:** Lucide v1.x. Brand icons (GitHub/LinkedIn) removed — use `src/components/website/brand-icons.tsx`. Verify icon names against `node_modules/lucide-react/dist/esm/icons/` (e.g. `Code2`, `Briefcase2` may not resolve).
- **Theme:** Hand-rolled (no `next-themes`). Inline script in `src/app/layout.tsx` sets `.dark` pre-paint from `localStorage` `folio-theme` or `prefers-color-scheme`; `document.documentElement.classList.add("js")`. `ThemeToggle` is stateless; icons toggle via CSS off `html.dark`. Don't add competing theme logic.
- **Effects:** `particle-field.tsx`, `custom-cursor.tsx`, `reveal.tsx` are rAF/observer client components with strict cleanup and `prefers-reduced-motion` branches. Reveal gated by `html.js` for no-JS visibility. Preserve these behaviors.
- **Fonts:** `Space_Grotesk`, `Inter`, `JetBrains_Mono` via `next/font` in `src/app/layout.tsx`.
