# Finta – Modern Landing Page

A clean, responsive, and fast landing page for Finta, built with TypeScript and vanilla CSS. Designed to be lightweight, fully responsive, and easy to maintain without relying on heavy frameworks.

## Features

- **Fast & Lightweight** — Built only with TypeScript and pure CSS  
- **Fully Responsive** — Optimized for all screen sizes  
- **Clean UI** — Minimal and modern layout  
- **Modular Code** — Organized TS and CSS structure  
- **Deployable Anywhere** — Works on GitHub Pages, Vercel, Netlify, etc.

## Table of Contents

- Installation
- Development
- Build
- Deployment
- Project Structure
- Contributing
- License

## Installation

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/finta-landing.git
   cd finta-landing
   ```
2. Install dependencies (if using a bundler/tooling):
   ```bash
   npm install
   ```

(If the project is pure static without a bundler, you can skip step 2.)

## Development

Run a local dev server (example using a simple static dev server or your bundler):

```bash
# with a simple static server
npx live-server public

# or with a bundler/tooling (example)
npm run dev
```

Open http://localhost:8080 (or the URL provided by your dev tool).

## Build

Create a production build (example):

```bash
npm run build
```

This outputs optimized files to the `dist/` or `build/` directory (depending on your setup).

## Deployment

Deploy the generated static files to any static host:

- GitHub Pages: push `dist/` or `docs/` to the appropriate branch
- Vercel: connect repo and set the output directory
- Netlify: drag & drop `dist/` or connect repo and set build command/output directory


## Contributing

- Fork the repository
- Create a feature branch: `git checkout -b feat/my-feature`
- Commit your changes: `git commit -m "Add my feature"`
- Push to the branch: `git push origin feat/my-feature`
- Open a pull request

Please keep code modular and maintain the lightweight, framework-free philosophy.
