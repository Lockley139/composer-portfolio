# Composer Portfolio

A modern, cinematic portfolio for a composer focused on **video games and film**. Dark, minimal, high-end aesthetic. Built with HTML, Tailwind CSS, and vanilla JavaScript — no frameworks.

## Features

- **Home:** Hero with background video, composer name, "Watch Showreel" button, showreel (YouTube), SoundCloud top tracks, featured projects grid, testimonials, about preview, and optional TikTok/Instagram section
- **Portfolio:** Four categories — Game Projects, Film & Visual Media, Game Audio & Sound Design, Music. Each project opens a modal with YouTube, SoundCloud, Spotify, HTML5 video/audio, images, and gallery support
- **About:** Bio, portrait image, experience text
- **Contact:** Email display (from data file) and form (Name, Email, Message)
- **Data-driven:** All copy and projects live in `js/portfolio-data.js`; add or edit projects without touching HTML

## Structure

```
├── index.html
├── portfolio.html
├── about.html
├── contact.html
├── css/styles.css
├── js/
│   ├── main.js           # Nav, smooth scroll, hero, fade-in
│   ├── portfolio.js      # Project modals (all media types)
│   └── portfolio-data.js # Site copy + all portfolio projects (edit this)
└── assets/
    ├── images/   # Portrait, thumbnails, hero poster
    ├── videos/   # hero-bg.mp4, local project videos
    └── audio/    # Local audio files
```

## Setup

1. **Edit content:** Open `js/portfolio-data.js`. Set `site.composerName`, `site.subtitle`, `site.showreelYoutubeId`, `site.soundcloudTracks` (array of `{ url, title }`), `site.contactEmail`, `site.testimonials`, `site.aboutPreview`. Add or edit projects in `featuredProjects`, `gameProjects`, `filmVisualMedia`, `gameAudioSoundDesign`, and `music`.

2. **Project media:** Each project can have:
   - `media`: single object or array. Types: `youtube` (`id`), `soundcloud` (`url`), `spotify` (`url`), `video` (`src`, optional `poster`), `audio` (`src`), `image` (`src`, `alt`).
   - `gallery`: array of `{ src, alt }` for image galleries.

3. **Hero:** Add `assets/videos/hero-bg.mp4` and optionally `assets/images/hero-poster.jpg`. Portrait: `assets/images/portrait.jpg` (About page).

4. **TikTok & Instagram:** In `index.html`, find the section with id `social-embeds`. Replace the placeholder divs with your embed iframes:
   - **TikTok:** Video → Share → Embed → copy iframe.
   - **Instagram:** Post → ⋯ → Embed → copy iframe.

5. **Contact form:** Connect the form to Formspree, Netlify Forms, or your backend; update the form `action` and the submit handler in `contact.html`.

6. **Run locally:** `python3 -m http.server 8080` or `npx serve .` then open the URL in your browser.

## Git & GitHub — work from multiple laptops

The project is already connected to GitHub. Use this to keep everything in sync across machines.

### On this laptop (where the project already exists)

- **Check connection:**  
  `git remote -v`  
  You should see `origin` pointing to `https://github.com/LockleyJake/composer-portfolio.git` (or your fork).
- **Push your latest work:**  
  `git add -A` → `git commit -m "Describe your changes"` → `git push origin main`

### On another laptop (first time)

1. **Install Git** if needed: [git-scm.com](https://git-scm.com).
2. **Clone the repo:**  
   `git clone https://github.com/LockleyJake/composer-portfolio.git`  
   Then `cd composer-portfolio`.
3. **Work as usual:** edit files, then `git add -A`, `git commit -m "..."`, `git push origin main`.

### Daily sync (on any laptop)

- **Before you start:** get the latest from GitHub.  
  `git pull origin main`
- **When you’re done:** save your work to GitHub.  
  `git add -A`  
  `git commit -m "Short description of what you did"`  
  `git push origin main`

### If you get “rejected” when pushing

Someone (or you on another laptop) pushed first. Pull then push:

```bash
git pull origin main
# fix any conflicts if Git says so, then:
git push origin main
```

### Summary

| Situation              | What to run                                      |
|------------------------|---------------------------------------------------|
| First time on new laptop | `git clone https://github.com/LockleyJake/composer-portfolio.git` then `cd composer-portfolio` |
| Start of a session     | `git pull origin main`                            |
| After making changes   | `git add -A` → `git commit -m "message"` → `git push origin main` |

---

## Development workflow (while working on the site)

1. **Start of session (either laptop)**  
   - Open the project folder.  
   - Run `git pull origin main` so you have the latest code.

2. **Run the site locally**  
   - In the project folder: `python3 -m http.server 8080` (or `npx serve .`).  
   - Open **http://localhost:8080** in your browser.

3. **Edit and preview**  
   - Edit HTML/CSS/JS or `js/portfolio-data.js`.  
   - Save the file, then **refresh the browser** (Cmd+R / F5) to see changes.  
   - No build step; what you save is what the server serves.

4. **Commit and push when you’re done (or at a good stopping point)**  
   - `git add -A`  
   - `git commit -m "e.g. Add new game project, update About bio"`  
   - `git push origin main`

5. **Switch laptops**  
   - On the other laptop: `cd composer-portfolio` → `git pull origin main`.  
   - Then repeat from step 2.

**Tip:** Commit often with clear messages (e.g. “Add portrait image”, “Update contact email”) so you can see what changed and when.

---

## Hosting

- **GitHub Pages:** Settings → Pages → Deploy from branch `main`, root. Site: `https://<username>.github.io/composer-portfolio/`
- **Netlify / Vercel:** Connect repo; no build step.

## Tech

- Tailwind CSS (CDN), vanilla JS, Google Fonts (Cormorant Garamond, Inter)
