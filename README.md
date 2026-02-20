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

6. **Run locally (required for data to load):** You **must** use a local server — do not double-click `index.html` to open it. From the **project folder** (the one that contains `index.html` and `js/`), run either:
   - `npx live-server --port=8080 --open=/index.html` (recommended; auto-refreshes when you save), or  
   - `python3 -m http.server 8080` then open **http://localhost:8080** in your browser.  
   If you open the site via `file://`, the browser may block loading `portfolio-data.js` and your content will not show.

### Live reload (auto-refresh when you save)

To have the browser **refresh automatically** whenever you save a file, use **live-server** instead of the basic server. From the project folder:

```bash
npx live-server --port=8080 --open=/index.html
```

This opens the site in your browser and reloads the page whenever you save an HTML, CSS, or JS file. No need to press Cmd+R / F5.  
(Requires Node.js; if you don’t have it, install from [nodejs.org](https://nodejs.org).)

**If your changes still don’t show:** Make sure the file is **saved** (Cmd+S). Try a **hard refresh**: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows). If you opened the site by double-clicking `index.html` (file://), use a local server or live-server instead so updates load correctly.

**If you changed `js/portfolio-data.js` but the site looks the same:** The browser may be using a cached copy. Do a **hard refresh** (Cmd+Shift+R / Ctrl+Shift+R). Where updates appear: **Home** shows `featuredProjects`, `soundcloudTracks`, `testimonials`, `aboutPreview`, and the composer name/subtitle/showreel. **Portfolio** shows `gameProjects`, `filmVisualMedia`, `gameAudioSoundDesign`, and `music`. Make sure you’re on the right page.

## Putting your site on GitHub (detailed)

Follow these steps to get your site code on GitHub and (optionally) publish it with GitHub Pages.

### Step 1: Open Terminal and go to your project folder

```bash
cd /Users/locklej/Documents/data_science/website
```

### Step 2: Choose: existing repo vs your own repo (Lockley139)

**Option A — Use the repo that’s already connected**

The project is already linked to `https://github.com/LockleyJake/composer-portfolio.git`. If that’s your repo (or you have access), skip to **Step 3**.

**Option B — Use your GitHub account (Lockley139) with a new repo**

1. On GitHub, log in as **Lockley139**.
2. Click the **+** (top right) → **New repository**.
3. **Repository name:** e.g. `composer-portfolio` (or any name you like).
4. **Public**, leave “Add a README” **unchecked** (you already have files).
5. Click **Create repository**.
6. In Terminal, point this project at your new repo (replace `Lockley139` and repo name if different):

   ```bash
   git remote remove origin
   git remote add origin https://github.com/Lockley139/composer-portfolio.git
   ```

   If you prefer SSH:

   ```bash
   git remote add origin git@github.com:Lockley139/composer-portfolio.git
   ```

### Step 3: Large files (hero video)

GitHub rejects single files over **100 MB**. If `assets/videos/hero-bg.mp4` is bigger than that:

- Either **don’t commit the video**: add to `.gitignore` and rely on the gradient fallback on the live site, or host the video elsewhere and change the `src` in `index.html`.
- Or use **Git LFS** to store large files: [git-lfs.com](https://git-lfs.com).

To ignore the hero video so it isn’t pushed:

```bash
echo "assets/videos/hero-bg.mp4" >> .gitignore
```

(Your site will still work; the hero will show the dark gradient if the file isn’t there.)

### Step 4: Stage, commit, and push

```bash
git add -A
git status
git commit -m "Update portfolio: content, featured videos, testimonials, hero"
git push -u origin main
```

- If Git asks for **username/password**: use your GitHub username and a **Personal Access Token** (not your account password). Create one: GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**. Give it `repo` scope.
- If you get “rejected” or “failed to push”, run `git pull origin main` (fix any conflicts if needed), then `git push origin main` again.

### Step 5: Turn on GitHub Pages (to view the site online)

1. On GitHub, open **your repo** (e.g. `github.com/Lockley139/composer-portfolio`).
2. Go to **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source:** **Deploy from a branch**.
   - **Branch:** `main` (or whatever branch you pushed).
   - **Folder:** **/ (root)**.
4. Click **Save**.
5. Wait 1–2 minutes. Your site will be at:
   - **https://lockley139.github.io/composer-portfolio/**  
   (replace `composer-portfolio` with your repo name if different.)

---

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
   - **Option A (with auto-refresh):**  
     `npx live-server --port=8080 --open=/index.html`  
     The browser will reload automatically when you save a file.  
   - **Option B (manual refresh):**  
     `python3 -m http.server 8080` then open **http://localhost:8080**.  
     Refresh the browser (Cmd+R / F5) after each change.

3. **Edit and preview**  
   - Edit `index.html`, CSS, JS, or `js/portfolio-data.js`.  
   - **Save the file** (Cmd+S). With live-server the page updates automatically; otherwise refresh (Cmd+R).  
   - **Changes not showing?** Save the file, then do a hard refresh: **Cmd+Shift+R** (Mac) or **Ctrl+Shift+R** (Windows). Don’t open the site via file:// — use the local server or live-server.

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
# composer-portfolio
