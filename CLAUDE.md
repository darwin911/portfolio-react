# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
yarn dev          # Start local dev server at http://localhost:3000
yarn build        # Production build
yarn lint         # Run ESLint
```

No test suite is configured — verify changes by running the dev server and checking pages manually.

If `sharp` fails to install on macOS: `xcode-select --install`.

## Architecture

This is a **Next.js 15 App Router** portfolio site with no backend — all content is static or client-rendered.

**Routing** follows the App Router convention under `app/`:
- `/` → `app/page.tsx` (home/hero, `force-static`)
- `/projects` → `app/projects/page.tsx`
- `/contact` → `app/contact/page.tsx`
- `app/layout.tsx` wraps all pages with `ThemeProvider` and `MainNav`

**Shared data** lives in `components/shared/shared.ts` — this is where nav links (`MAIN_NAV_LINKS`) and project content (`PROJECTS`) are defined. Adding a new project means adding an entry to the `PROJECTS` array there and dropping an image in `public/`.

**UI components** in `components/ui/` are shadcn-style primitives (`Button`, `Card`) using `class-variance-authority`. The `Carousel` component in `components/carousel.tsx` is a client component that manages its own slide state and injects `current`/`setCurrent` props into children via `React.cloneElement`.

**Styling** uses Tailwind CSS v4 (`@import "tailwindcss"` in `globals.css`). Theme tokens are defined as CSS custom properties in `globals.css` (not a `tailwind.config.ts`). Custom variants include height breakpoints (`h-lg`, `h-md`, `h-sm`) for viewport-height-based responsive adjustments. Dark mode is managed by `next-themes` with `attribute="class"`.

**Deployment** is on Netlify — pushing to `master` triggers an automatic build.
