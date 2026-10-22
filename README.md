# Hamza Hashma — Portfolio

Personal portfolio (React + Vite), English / Arabic with a language switch.

## Run it on your computer (no hosting needed)

1. Install **Node.js LTS** from https://nodejs.org (once).
2. Open a terminal in this folder (in VS Code: Terminal → New Terminal).
3. Run:

```bash
npm install     # first time only
npm run dev
```

4. Open the link it prints, usually **http://localhost:5173**. Edits to the code show instantly.
   Stop it with `Ctrl + C`.

To see it on your phone (same Wi‑Fi): `npm run dev -- --host`, then open the "Network" link on the phone.

## Change the content

Everything you see is in **`src/data/portfolioData.js`**:

- `contact` → WhatsApp number, email, LinkedIn, GitHub, CV link
- `projects` → every project and its own page (problem, solution, features, pictures, links)
- `experience` → the timeline
- `portfolioData.en` / `portfolioData.ar` → all other text (services, why me, FAQ, about…)
- CV button: put your PDF in `public/` and set `resumeUrl: "/your-file.pdf"`.

### Add screenshots to a project

1. Put the images in `public/projects/<slug>/` (e.g. `public/projects/team-flow/dashboard.png`).
2. In `src/data/portfolioData.js`, in that project's `images`, add:
   ```js
   images: [
     { src: "/projects/team-flow/dashboard.png", frame: "laptop", caption: { en: "Admin dashboard", ar: "لوحة المدير" } },
     { src: "/projects/team-flow/supervisor.png", frame: "phone", caption: { en: "Supervisor app", ar: "تطبيق المشرف" } },
   ],
   ```
   `frame` shows the screenshot inside a device: `"laptop"`, `"phone"` or `"none"`.
   Best sizes: laptop screenshots 1600×1000, phone screenshots 1080×2340 (a normal phone screenshot).
The first image is also used as the cover on the home page. While no images are listed,
the project page shows a reminder that is only visible during `npm run dev`.

### Add a new project

Copy one of the objects in `projects`, give it a new `slug` (letters, numbers and `-`),
and fill in the English and Arabic text. Its page appears at `#/project/<slug>`.
Set `featured: true` to show it big at the top.

## Your domain and link previews

When you have a domain (or a free Netlify/Vercel address), open **`vite.config.js`** and set:

```js
const SITE_URL = 'https://your-domain.com'
```

(no `/` at the end), then run `npm run build` again. This makes the link preview
(`public/og-image.png`) appear when someone shares your site on WhatsApp, Facebook or LinkedIn,
and helps Google. Test the preview at https://www.opengraph.xyz after you publish.

## Build for hosting later

```bash
npm run build   # creates the dist/ folder, ready for Netlify, Vercel or GitHub Pages
```
