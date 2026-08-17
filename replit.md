# HACKEX’26 Event Website

A premium, responsive event website for HACKEX’26, the national-level hackathon organized by Excel Engineering College.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/hackex26/src/App.tsx` — single-page event experience, content, interactions, and registration flow
- `artifacts/hackex26/src/index.css` — event visual system, responsive layout, motion, circuitry, and card treatments
- `attached_assets/WhatsApp_Image_2026-08-17_at_12.39.44_PM_1786957997551.jpeg` — official poster reference
- `artifacts/api-server` — shared API service scaffold; the event site currently runs as a frontend-first artifact

## Architecture decisions

- The event site is presentation-first and keeps the first release lightweight; the hero laptop and theme visuals use CSS/SVG treatments instead of a heavy 3D runtime.
- Registration is a five-step client-side flow with localStorage persistence and an optional Google Apps Script POST adapter.
- Without `VITE_GOOGLE_APPS_SCRIPT_URL`, the site completes a transparent local-only demo flow rather than pretending an external sheet submission succeeded.

## Product

- Visitors can explore official event details, themes, timeline, prizes, judging criteria, rules, coordinators, and FAQs.
- Teams can submit a Round 1 registration, review their entries, receive a generated registration ID, and save a confirmation copy.

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Set `VITE_GOOGLE_APPS_SCRIPT_URL` in the frontend environment when the organiser’s Google Apps Script endpoint is ready; the UI states clearly when the endpoint is not configured.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
