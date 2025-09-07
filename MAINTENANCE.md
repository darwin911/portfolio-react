# Maintenance Guide

This document captures the recurring steps and gotchas for setting up, returning to, and maintaining this Next.js portfolio.

## Overview

- Framework: Next.js 15 (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Images: Next/Image with sharp
- Deployment: Netlify (auto-deploys from Git)

## First-Time Setup

1. Install a recent Node LTS (e.g., 20.x or 22.x).
2. Install dependencies:
   - Yarn: `yarn install`
   - npm: `npm install`
3. Start the dev server:
   - Yarn: `yarn dev`
   - npm: `npm run dev`
4. Visit `http://localhost:3000`.

Notes:

- If sharp fails to install on macOS, ensure Xcode Command Line Tools are installed: `xcode-select --install`.

## Coming Back After a Break (Checklist)

- Pull latest default branch: `git pull`.
- Install deps in case of updates: `yarn install`.
- Run locally: `yarn dev`.
- Run linter: `yarn lint` and fix warnings where reasonable.
- Verify pages:
  - `/` loads and background assets render.
  - Social links open correctly.
  - Images render with expected quality/perf.
- Smoke check responsive layouts (mobile → desktop).

## Project Scripts

- `yarn dev` – Run local dev server.
- `yarn build` – Production build (CI will run this).
- `yarn start` – Start production server locally (rarely needed with Netlify).
- `yarn lint` – Lint codebase.

## Branching and Commits

- Create feature branches off `master`.
- Commit message rule: prefix the title with the branch/ticket name.
  - Example: `QR-123: Update hero section copy`
- Keep commits focused and descriptive.

## Deployment (Netlify)

- Deploys are automated from the Git host. Pushing to the default branch triggers a new build.
- Netlify dashboard: see deploy history and logs.
- If a deploy fails:
  - Re-run the build from Netlify or push a small change to trigger a fresh build.
  - Check build logs for Next/TypeScript/Tailwind errors.

## Dependencies and Updates

- Audit and update periodically:
  - `yarn outdated` to see available updates.
  - `yarn upgrade-interactive --latest` (if enabled) or update versions in `package.json` then `yarn install`.
- After updates:
  - `yarn build` to catch breaking changes.
  - Manually test critical paths and images.

## Assets and Content

- Public assets live in `public/` (e.g., background, icons, images, resume PDF).
- Keep binary sizes reasonable; prefer optimized images (use `sharp` locally or an image tool).
- When replacing the resume, keep the filename stable (or update links if you rename it).

## Styling and Theming

- Tailwind is configured in `tailwind.config.ts`.
- Dark mode is handled by `next-themes`; verify both themes after styling changes.

## Common Issues and Fixes

- Port already in use: change port `PORT=3001 yarn dev` or free port.
- ESLint/Tailwind plugin errors: ensure plugin versions match the Next/Tailwind versions; reinstall node_modules.
- `sharp` install/build errors on macOS: ensure CLT installed; try `rm -rf node_modules && yarn install`.
- TypeScript types drift after upgrades: run `yarn build` to surface type errors, then fix.

## Quality Checks Before PR/Merge

- Lint clean: `yarn lint`.
- Build passes: `yarn build`.
- Manual responsive check on key breakpoints.
- External links verified (GitHub, LinkedIn, resume).

## Release Notes (Optional Template)

- Summary: one-liner of what changed.
- UI/Content changes: bullets.
- Technical changes: packages updated, config changes.
- Risks/Mitigations: any potential regressions.

## Local Notes

- Dev machine: macOS (Darwin 24.x). No special env vars required.
- This site does not rely on a backend; static content and client-side logic only.

## When Adding New Pages/Components

- Place routes under `app/`.
- Co-locate small components under `components/`, keep shared UI in `components/ui/`.
- Favor accessibility (alt text, semantic tags, focus states).

---
Last updated: keep this section current when processes change.
