# Composer Portfolio

A modern, cinematic portfolio website for a film and media composer. Built with HTML, Tailwind CSS, and vanilla JavaScript — no frameworks.

## Features

- **Dark, minimal, cinematic** design with fullscreen hero and optional background video
- **Responsive** layout for mobile and desktop
- **Smooth scrolling** and scroll-triggered fade-in animations
- **Portfolio** grid with project modals supporting:
  - YouTube embeds (iframe)
  - SoundCloud embeds (iframe)
  - Local video (HTML5 `<video>`)
  - Local audio (HTML5 `<audio>`)
  - Images

## Structure

```
├── index.html          # Home (hero, featured work, embedded video)
├── portfolio.html      # Project grid + modal
├── about.html
├── contact.html
├── css/
│   └── styles.css     # Custom styles and animations
├── js/
│   ├── main.js        # Nav, smooth scroll, hero, fade-in
│   ├── portfolio.js   # Modal and project content rendering
│   └── projects-data.js  # Edit here to add/change projects
└── assets/
    ├── images/        # Thumbnails, hero poster, project images
    ├── videos/        # Local video files (e.g. hero-bg.mp4)
    └── audio/         # Local audio files
```

## Setup

1. **Add your media**
   - **Hero:** Place `hero-bg.mp4` in `assets/videos/` and optionally `hero-poster.jpg` in `assets/images/` for the hero section. If the video is missing, a gradient background is shown.
   - **Portfolio:** Edit `js/projects-data.js` to add projects. Use `media.type`: `youtube` (with `id`), `soundcloud` (with `url`), `video` (with `src`, optional `poster`), `audio` (with `src`), or `image` (with `src`, optional `alt`). Add thumbnails in `assets/images/` and reference them in each project’s `thumbnail`.

2. **Contact form**  
   The contact form is client-side only. Connect it to your backend or a service (e.g. [Formspree](https://formspree.io), [Netlify Forms](https://www.netlify.com/products/forms/)) and update the form `action` and any submit handler in `contact.html`.

3. **Run locally**  
   Open `index.html` in a browser, or use a local server (e.g. `npx serve .` or `python -m http.server 8000`) to avoid CORS issues with local video/audio.

## Hosting

- **GitHub Pages:** Push to a GitHub repo, enable Pages in Settings → Pages, and select the branch (e.g. `main`) and root (or `/docs` if you use a `docs` folder).
- **Netlify / Vercel:** Connect the repo and deploy; no build step required.

## Tech

- [Tailwind CSS](https://tailwindcss.com) (CDN)
- Vanilla JS (ES5-style for broad support)
- Google Fonts: Cormorant Garamond, Inter

## License

Use and modify as you like for your own portfolio.
