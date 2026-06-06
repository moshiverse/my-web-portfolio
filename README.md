# My Portfolio (Vite + React)

This repository is a minimal Vite + React scaffold for a web portfolio based on the provided resume content for John Joseph A. Laborada.

What I added:
- Vite config that outputs build to `docs/` so GitHub Pages can serve the site from `main/docs`.
- Basic component structure in `src/components` (Header, Hero, ProjectList, ProjectCard).
- A small custom hook in `src/hooks/useToggle.js` to show hook usage.

How to run locally:

```bash
npm install
npm run dev
```

Build for GitHub Pages (docs folder):

```bash
npm run build
# commit and push the generated `docs/` folder to your repo (enable GitHub Pages -> main branch /docs folder)
```

Next steps I can do if you want:
- Add Tailwind or a design system and implement the full resume content.
- Add routes, project pages, contact form, and deploy script.
