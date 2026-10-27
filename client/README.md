# 🚀 asilbek-karomatov.dev

A modern personal portfolio website built with React 18 and TypeScript, featuring a Cyberpunk / Glassmorphism UI, smooth scrolling, and a secure contact form protected by Google reCAPTCHA v3.

🌐 **Live site:** [https://asilbek-karomatov.dev](https://asilbek-karomatov.dev)

---

## ✨ Features

- **Invisible Security** — Contact form protected by Google reCAPTCHA v3 to prevent spam bots.
- **Glassmorphism UI** — Transparent, animation-rich interface built with SCSS Modules.
- **Reactive Data Fetching** — TanStack Query (React Query v5) keeps question counts and lists in sync in real time.
- **Smooth Scrolling** — Lenis-powered inertia scrolling for a polished browsing experience.
- **3D Backgrounds** — Interactive Three.js / React Three Fiber scenes on select pages.
- **Client-side Routing** — Seamless, zero-reload navigation with React Router DOM v7.
- **Responsive Design** — Fully adaptive layout for mobile, tablet, and desktop screens.

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Core | React 19, TypeScript |
| Build Tool | Vite 6 |
| Routing | React Router DOM v7 |
| State Management | Zustand v5 |
| Data Fetching | TanStack Query (React Query) v5 |
| HTTP Client | Axios |
| 3D Graphics | Three.js, @react-three/fiber, @react-three/drei |
| Smooth Scroll | Lenis |
| Security | Google reCAPTCHA v3 |
| Styling | SCSS Modules, Bootstrap 5, Bootstrap Icons |
| Linting | ESLint 9 + typescript-eslint |

---

## 📂 Project Structure

```
asilbek.dev/
├── public/
├── src/
│   ├── api/              # Axios instance configuration
│   ├── components/
│   │   ├── Layout/       # Navbar, Footer, Loader
│   │   └── Shared/       # Reusable utilities (ScrollToTop, Background)
│   ├── context/          # React contexts (Animation, Background, Footer, Nav)
│   ├── pages/
│   │   ├── Home/         # Landing page with hero, stats, project cards
│   │   ├── About/        # Skills, principles, hero sections
│   │   ├── Projects/     # Full projects listing
│   │   └── Contact/      # Contact form & questions archive
│   ├── services/         # API service functions (about, contact, projects)
│   ├── store/            # Zustand stores
│   ├── styles/           # SCSS Modules per component
│   ├── types/            # Shared TypeScript types
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `24.x` or later
- **npm** `10.x` or later

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/asilbek2706/asilbek.dev.git
cd asilbek.dev

# 2. Install dependencies
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

> The Vite dev server proxies all `/api` requests to `https://api.asilbek-karomatov.dev`, so you don't need to run the backend locally.

### Build for Production

```bash
npm run build
```

The optimised output is written to the `dist/` directory.

### Preview Production Build

```bash
npm run start
```

### Lint

```bash
npm run lint
```

---

## ☁️ Deployment

The project is deployed on **Heroku**. On startup, the `Procfile` runs:

```
web: npm start
```

which serves the pre-built `dist/` folder with the `serve` package on the port provided by Heroku (`$PORT`). The `static.json` file ensures that all routes fall back to `index.html` for client-side routing to work correctly.

---

## 📄 License

This project is personal and not licensed for public reuse. All rights reserved © Asilbek Karomatov.