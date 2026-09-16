# Mokio Website

Official landing page for **Mokio** — Music, Messaging & Connected Experiences.

**Live site (after you deploy):** `https://YOUR-USERNAME.github.io/mokio`  
(or your custom domain)

---

## How to host this on GitHub Pages

### Option A — Easiest (drag & drop)

1. Create a new GitHub repository named `mokio` (or any name you like)
2. Upload **all** the files from this folder into the repository (including the `images` folder and `.nojekyll`)
3. Go to the repository → **Settings** → **Pages**
4. Under **Source**, choose **Deploy from a branch**
5. Select branch `main` and folder `/ (root)`
6. Click **Save**
7. Wait 1–2 minutes, then visit:  
   `https://YOUR-USERNAME.github.io/mokio`

### Option B — Using Git (recommended)

```bash
# 1. Create a new empty repo on GitHub called "mokio"

# 2. In this folder run:
git init
git add .
git commit -m "Initial Mokio website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/mokio.git
git push -u origin main
```

Then enable GitHub Pages (Settings → Pages → Deploy from branch `main` / root).

---

## Custom domain (optional)

1. In GitHub Pages settings, add your domain (e.g. `mokio.app` or `www.mokio.com`)
2. Add a `CNAME` file in the root of this repo containing just your domain name
3. Update DNS at your domain registrar (A records or CNAME as shown by GitHub)

---

## What’s included

| File                | Purpose                          |
|---------------------|----------------------------------|
| `index.html`        | Main landing page                |
| `styles.css`        | All styling                      |
| `script.js`         | Mobile menu + waitlist form      |
| `images/logo.svg`   | Circular Mokio logo              |
| `images/banner.svg` | Wide banner                      |
| `.nojekyll`         | Makes GitHub Pages work cleanly  |

---

## Next steps you might want later

- Connect the waitlist form to a real backend (Formspree, Supabase, etc.)
- Add a custom domain
- Add Privacy Policy / Terms pages
- Expand into dedicated pages for the Music and Messaging apps
