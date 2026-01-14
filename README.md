# Vacation Assignment 🏖️

![GitHub last commit](https://img.shields.io/github/last-commit/FinnAlbrecht/vacationAssignment)
![GitHub repo size](https://img.shields.io/github/repo-size/FinnAlbrecht/vacationAssignment)
![GitHub top language](https://img.shields.io/github/languages/top/FinnAlbrecht/vacationAssignment)
![GitHub language count](https://img.shields.io/github/languages/count/FinnAlbrecht/vacationAssignment)
![GitHub issues](https://img.shields.io/github/issues/FinnAlbrecht/vacationAssignment)
![GitHub pull requests](https://img.shields.io/github/issues-pr/FinnAlbrecht/vacationAssignment)
![GitHub license](https://img.shields.io/github/license/FinnAlbrecht/vacationAssignment)
![GitHub repo stars](https://img.shields.io/github/stars/FinnAlbrecht/vacationAssignment?style=social)
![GitHub forks](https://img.shields.io/github/forks/FinnAlbrecht/vacationAssignment?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/FinnAlbrecht/vacationAssignment?style=social)
![GitHub deployments](https://img.shields.io/github/deployments/FinnAlbrecht/vacationAssignment/production?label=deployment)

---
**Project date:** October 2024  
**Duration:** 2 weeks  
**Goal:** Build a small web app for managing vacation requests during the apprenticeship.

This README summarizes the project, the tech stack (with exact versions from `package.json`), main features, quick setup, and short troubleshooting. It reflects the current codebase in this repository.

---

## Project at a glance

- Purpose: Small web app to manage vacation requests (register, login, submit requests).
- Status: Development project. See `package.json` for dependency details and scripts.

---

## Tech stack 

| Package | Version (installed / declared) | Purpose |
|---|---:|---|
| Node.js | check your local `node -v` | runtime |
| Next.js | 14.2.35 | React framework / routing / SSR |
| React | 18.3.1 | UI library |
| react-dom | 18.3.1 | DOM rendering for React |
| jotai | 2.16.1 | state management (used in project) |

Scripts defined in `package.json`:

- `dev`: `next dev -p 3001` (starts dev server on port 3001)
- `build`: `next build` (production build)
- `start`: `next start` (serve built app)
- `lint`: `next lint` (linting)

---

## Main description

This application provides basic user flows for creating and managing vacation requests:

- Register and login flows (pages: `register.js`, `login.js`).
- A home / index page (`index.js`) as entry point.
- Todo/requests listing and creation pages under `pages/todos/` and `pages/todos.js`.
- Small reusable components in `components/` including `Header.js`, `Footer` and `PostForm.js`.

The app uses client-side React for interactivity and Next.js pages for routing. Backend/API calls are implemented as placeholders (see `lib/api/`), so integrate a real API or adapt the stubs when needed.

---

## Features (primary)

- User registration and login pages
- Vacation/todo request listing and creation
- Form validation and basic UI feedback (implemented in `PostForm.js` / page forms)
- Responsive layout via CSS modules (`*.module.css` files in pages/components)

---

## Quick setup (run locally)

1. Change to the project directory and install dependencies:

```bash
cd vacationAssignment
npm install
```

2. Start development server (default port 3001):

```bash
npm run dev
# open http://localhost:3001
```

3. Production build and start (for local verification):

```bash
npm run build
npm start
```

---

## Short troubleshooting (key items)

- Case-sensitive imports:
	- Problem: `Module not found: Can't resolve '../components/header'` on Linux/macOS.
	- Fix: Use the exact filename case. Example: `import Header from "../components/Header";` (this repo contains `Header.js`).

- Port conflicts:
	- Start on another port: `PORT=3002 npm run dev`.

- After dependency updates, if `npm run build` fails, revert or test updates in a separate branch.

---

## Where to look in the code (quick references)

- Pages: `pages/index.js`, `pages/login.js`, `pages/register.js`, `pages/todos.js`, `pages/todos/` folder.
- Components: `components/Header.js`, `components/footer.js`, `components/PostForm.js`.
- Hooks / API stubs: `lib/hooks/`, `lib/api/`.

---

## Dependencies: checking & updating

Show outdated packages:

```bash
cd vacationAssignment
npm outdated --depth=0
```

Update minor/patch safely:

```bash
npm update
```

For major upgrades (e.g. Next 14 → Next 16, React 18 → 19) use a branch and test thoroughly:

```bash
git checkout -b upgrade/deps
npx npm-check-updates -u
npm install
npm run build
```

---

## Screenshot placeholders

Add screenshots under `docs/screenshots/` and reference them like:

```markdown
![Homepage](./docs/screenshots/homepage.png)
![Login](./docs/screenshots/login.png)
```

## 💬 Lessons Learned
- Improved my understanding of React components.
- Learned how to handle form validation in Next.js.
- Practiced using Git submodules correctly.

## 🔗 Related Links

- [Main Repository Overview](https://github.com/FinnAlbrecht/bbc-apprenticeship/tree/main)
- [GitHub Repository](https://github.com/FinnAlbrecht/vacationAssignment)
---
