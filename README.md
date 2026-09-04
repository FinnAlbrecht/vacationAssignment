# Vacation Assignment 🏖️

![GitHub last commit](https://img.shields.io/github/last-commit/FinnAlbrecht/vacationAssignment)
![GitHub repo size](https://img.shields.io/github/repo-size/FinnAlbrecht/vacationAssignment)
![GitHub top language](https://img.shields.io/github/languages/top/FinnAlbrecht/vacationAssignment)
![GitHub language count](https://img.shields.io/github/languages/count/FinnAlbrecht/vacationAssignment)
![GitHub issues](https://img.shields.io/github/issues/FinnAlbrecht/vacationAssignment)
![GitHub pull requests](https://img.shields.io/github/issues-pr/FinnAlbrecht/vacationAssignment)
![GitHub repo stars](https://img.shields.io/github/stars/FinnAlbrecht/vacationAssignment?style=social)
![GitHub forks](https://img.shields.io/github/forks/FinnAlbrecht/vacationAssignment?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/FinnAlbrecht/vacationAssignment?style=social)

---
**Project date:** October 2024
**Goal:** Build a small web app ("ToDoodle") for managing vacation/todo assignments during the apprenticeship.

This README reflects the current state of the codebase in this repository: tech stack, features, project structure, setup, and known limitations.

---

## Project at a glance

- **Purpose:** A todo/task manager ("ToDoodle") with login, registration and full CRUD for tasks (create, read, update, delete), built with Next.js.
- **Status:** Development / school project. Authentication and the data store are intentionally simple mock implementations (see [Backend & data](#backend--data) below) — not production-ready.

---

## Tech stack

| Package | Version (declared in `package.json`) | Purpose |
|---|---:|---|
| Node.js | 18+ recommended | runtime |
| Next.js | ^16.1.4 (Turbopack dev server) | React framework / routing / API routes |
| React | ^18.3.1 | UI library |
| react-dom | ^18.3.1 | DOM rendering for React |
| jotai | ^2.16.1 | state management (session state) |

Scripts defined in `package.json`:

| Script | Command | Description |
|---|---|---|
| `npm run dev` | `next dev -p 3001` | Starts the dev server on **port 3001** |
| `npm run build` | `next build` | Production build |
| `npm start` | `next start` | Serve the production build |
| `npm run lint` | `next lint` | Linting |
| `npm run seed` | `node scripts/seed.js` | Adds sample todos to `lib/todos.json` |

---

## Features

- **Auth flows:** register (`/register`) and login (`/login`) pages backed by mock API routes under `pages/api/`.
- **Todos:** list (`/todos`), detail (`/todos/[id]`), create (`/todos/create`) and edit (`/todos/[id]/edit`) — full CRUD against a small file-backed JSON store.
- **Notifications:** toast-style success/error notifications (`components/Notification*`, `NotificationContainer`) instead of native browser alerts.
- **Landing page:** marketing-style homepage (`/`) with hero, feature grid and call-to-action sections.
- **Responsive layout:** collapsible sidebar navigation, CSS Modules per page/component.
- **Placeholder pages:** a number of routes (`/about`, `/blog`, `/calendar`, `/community`, `/contact`, `/features`, `/help`, `/helpcenter`, `/impressum`, `/pricing`, `/privacy`, `/profile`, `/reminder`, `/roadmap`, `/settings`, `/statistics`, `/support`, `/terms`, `/tutorials`) exist as simple "coming soon" pages (see `pages/coming-soon.module.css`) — they render but have no functionality yet.

---

## Backend & data

There is no external/real backend. Everything runs inside the Next.js app itself:

- **Auth (`pages/api/login.js`, `pages/api/register.js`):** mock implementation — it accepts **any** email/password and always returns a fake user + `mock-token`. There is no password check and no real user database.
- **Todos (`pages/api/todos/`, `lib/todos.js`):** a tiny file-backed store that reads/writes `lib/todos.json` directly on disk. This works for local development but **is not suitable for production** (no concurrency handling, resets are manual, and it won't work on read-only/serverless deployments).
- **Session (`lib/hooks/session.js`):** the logged-in user/token is kept in `localStorage` via `jotai`, no cookies/server sessions.

This means the app is fully usable end-to-end locally (register → login → create/edit/delete todos) without needing any external service.

---

## Quick setup (run locally)

1. Install dependencies:

```bash
npm install
```

2. Environment variable: a `.env.local` with `NEXT_PUBLIC_API_URL` is required — `lib/api/auth.js` throws on startup if it's missing. The file is already committed with a placeholder value; the actual value doesn't matter for local development since auth/todos are served internally through `/api/*` (see [Backend & data](#backend--data)). Adjust it only if you want the `/todos/:path*` rewrite fallback in `next.config.mjs` to point somewhere real.

3. (Optional) seed a few sample todos into `lib/todos.json`:

```bash
npm run seed
```

4. Start the development server (port 3001):

```bash
npm run dev
# open http://localhost:3001
```

5. Production build and start (for local verification):

```bash
npm run build
npm start
```

---

## Project structure (quick reference)

```
pages/
  index.js              Landing page
  login.js, register.js Auth pages
  todos.js               Todo list
  todos/create.js         Create todo
  todos/[id]/index.js     Todo detail (edit/delete)
  todos/[id]/edit.js       Edit todo
  api/login.js, api/register.js   Mock auth API routes
  api/todos/                        Todo CRUD API routes
  about.js, blog.js, ...             "Coming soon" placeholder pages

components/
  Header.js, Footer.js         Layout
  PostForm.js                   Create/edit todo form
  Notification*, NotificationContainer   Toast notifications

lib/
  api/auth.js, api/todos.js     Client-side fetch wrappers
  hooks/session.js               Auth/session state (jotai + localStorage)
  todos.js, todos.json             File-backed todo store used by the API routes
```

---

## Troubleshooting

- **`Environment variable NEXT_PUBLIC_API_URL is not set`** on startup: create/restore `.env.local` in the project root with `NEXT_PUBLIC_API_URL=<any value>` and restart the dev server.
- **Port already in use:** the dev server always runs on port 3001 (`next dev -p 3001`); stop whatever else is using that port, or temporarily change the port in the `dev` script in `package.json`.
- **`npm run build` fails after a dependency update:** test dependency upgrades on a separate branch before merging (see below).

---

## Dependencies: checking & updating

Show outdated packages:

```bash
npm outdated --depth=0
```

Update minor/patch versions safely:

```bash
npm update
```

For major upgrades, use a branch and test thoroughly:

```bash
git checkout -b upgrade/deps
npx npm-check-updates -u
npm install
npm run build
```

---

## 💬 Lessons Learned

- Building auth and CRUD flows around React state (`jotai`) and Next.js routing.
- Implementing a minimal REST-style API with Next.js API routes and a file-backed JSON store.
- Practicing form validation and user feedback (notifications) in a real app.
- Resolving merge conflicts after parallel feature branches touched the same core files (auth, layout, forms).

## 🔗 Related Links

- [GitHub Repository](https://github.com/FinnAlbrecht/vacationAssignment)
