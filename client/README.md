# ðŸš€ asilbek

A modern personal portfolio website built with React 18 and TypeScript, featuring a Cyberpunk / Glassmorphism UI, smooth scrolling, and a secure contact form protected by Google reCAPTCHA v3.

ðŸŒ **Live site:** [https://asilbek](https://asilbek)

---

## âœ¨ Features

- **Invisible Security** â€” Contact form protected by Google reCAPTCHA v3 to prevent spam bots.
- **Glassmorphism UI** â€” Transparent, animation-rich interface built with SCSS Modules.
- **Reactive Data Fetching** â€” TanStack Query (React Query v5) keeps question counts and lists in sync in real time.
- **Smooth Scrolling** â€” Lenis-powered inertia scrolling for a polished browsing experience.
- **3D Backgrounds** â€” Interactive Three.js / React Three Fiber scenes on select pages.
- **Client-side Routing** â€” Seamless, zero-reload navigation with React Router DOM v7.
- **Responsive Design** â€” Fully adaptive layout for mobile, tablet, and desktop screens.

---

## ðŸ› ï¸ Tech Stack

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

## ðŸ“‚ Project Structure

```
asilbek.dev/
â”œâ”€â”€ public/
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ api/              # Axios instance configuration
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”œâ”€â”€ Layout/       # Navbar, Footer, Loader
â”‚   â”‚   â””â”€â”€ Shared/       # Reusable utilities (ScrollToTop, Background)
â”‚   â”œâ”€â”€ context/          # React contexts (Animation, Background, Footer, Nav)
â”‚   â”œâ”€â”€ pages/
â”‚   â”‚   â”œâ”€â”€ Home/         # Landing page with hero, stats, project cards
â”‚   â”‚   â”œâ”€â”€ About/        # Skills, principles, hero sections
â”‚   â”‚   â”œâ”€â”€ Projects/     # Full projects listing
â”‚   â”‚   â””â”€â”€ Contact/      # Contact form & questions archive
â”‚   â”œâ”€â”€ services/         # API service functions (about, contact, projects)
â”‚   â”œâ”€â”€ store/            # Zustand stores
â”‚   â”œâ”€â”€ styles/           # SCSS Modules per component
â”‚   â”œâ”€â”€ types/            # Shared TypeScript types
â”‚   â”œâ”€â”€ App.tsx
â”‚   â””â”€â”€ main.tsx
â”œâ”€â”€ index.html
â”œâ”€â”€ vite.config.ts
â”œâ”€â”€ tsconfig.json
â””â”€â”€ package.json
```

---

## ðŸš€ Getting Started

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

> The Vite dev server proxies all `/api` requests to `https://api.asilbek`, so you don't need to run the backend locally.

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

## â˜ï¸ Deployment

The project is deployed on **Heroku**. On startup, the `Procfile` runs:

```
web: npm start
```

which serves the pre-built `dist/` folder with the `serve` package on the port provided by Heroku (`$PORT`). The `static.json` file ensures that all routes fall back to `index.html` for client-side routing to work correctly.

---

## ðŸ“„ License

This project is personal and not licensed for public reuse. All rights reserved Â© Asilbek Karomatov.
