# CLAUDEMEM — Kings Tier Petroleum Site

> Build-progress memory for the `kwaks` project. Written so a fresh session can
> resume instantly. Read top-to-bottom; everything below is the current truth.

---

## 0. Snapshot (last updated 2026-07-10)

- **Status:** Landing page COMPLETE + all sub-pages BUILT + **media placeholders
  filled** (2026-07-10) with self-hosted Pexels stills/video. Productionizing
  (deploy, CSP/headers, sitemap) and a QA/visual-regression pass still pending.
- **Active work:** NONE in-flight. Just shipped: 10 sub-pages resolving every `#`
  placeholder in the landing page (Insights hub + 3 articles, ESG, Careers, and
  4 legal pages), plus the shared CSS they need (`.page-hero`, `.prose`, `.roles`,
  `.doc`), plus self-hosted media (hero video, 6 images, 3 insights cards, 6 page heroes).
- **Next phase:** Deploy to a static host (target = **GitHub Pages**), add
  CSP/security headers, `sitemap.xml`, then a QA/visual-regression pass.

---

## 1. Project Overview

A **single-page marketing/landing site** for *Kings Tier Petroleum*, a global
energy & commodities trading company (crude, refined products, LNG, power,
marine bunkering, structured trade). Editorial / dark-luxury aesthetic.

- **No framework, no bundler.** Pure HTML + CSS + vanilla JS. `package.json`
  exists ONLY for convenience `dev`/`preview`/`build` scripts (zero dependencies).
- Static site — open `index.html` via a local HTTP server (see §4).
- `references/` holds scraped competitor content (Shell, Vitol) used as design
  inspiration only. **Not part of the built site — do not ship.**

---

## 2. File Map

```
kwaks/
├── CLAUDEMEM.md              ← this file (progress memory)
├── package.json             ← zero-dep dev/preview/build scripts
├── references/              ⚠ scraped competitor refs (Shell/Vitol) — do not ship
│   ├── shell.html
│   ├── vitol.html
│   └── shell_model.json
└── site/                    ✅ the actual site
    ├── index.html           ← single landing page (full markup + contact form)
    ├── esg.html             ← ESG / responsibility page (resolves "Read our ESG approach")
    ├── careers.html         ← Careers page (resolves "View open roles")
    ├── insights.html        ← Insights hub (lists the 3 articles below)
    ├── favicon.svg          ← brand mark as SVG favicon
    ├── robots.txt
    ├── site.webmanifest
    ├── styles/
    │   ├── tokens.css        ← design tokens (palette, type scale, spacing, motion)
    │   └── main.css          ← ~860 lines; layout, components, responsive, form, sub-pages
    ├── assets/               ← self-hosted media (added 2026-07-10)
    │   ├── img/              ← 6 JPGs (Pexels): oil-rig, power-plant, lng-tanker, renewables, engineers, industrial
    │   └── video/            ← 2 MP4s (Pexels, CC0): oil-rig.mp4 (hero), engineers.mp4 (careers hero)
    ├── js/
    │   └── main.js           ← vanilla JS interactions (no dependencies)
    ├── insights/            ← article pages (paths are ../-prefixed)
    │   ├── us-power-markets.html
    │   ├── carbon-markets.html
    │   └── lng-flexible-cargo.html
    └── legal/               ← legal pages (paths are ../-prefixed)
        ├── privacy.html
        ├── terms.html
        ├── modern-slavery.html
        └── ethics.html
```

### `site/index.html` sections (in order)
Header/nav → Hero (+ stats) → Marquee → Statement/pillars → "What we trade"
segments → Global reach (+ SVG map) → Approach steps → Insights cards →
Responsibility band → Careers CTA → Footer (**with working `#contact` form**).

### `site/styles/tokens.css`
OKLCH dark-luxury palette: `--ink-900` near-black navy base, `--gold-500`
brass accent (the "Kings Tier" signature), `--petrol` teal secondary. Fraunces
(display serif) + Inter (sans). Full fluid type scale via `clamp()`.

### `site/js/main.js` features
Sticky header · scroll-progress rail · mobile nav · staggered reveal ·
count-up stats · hero parallax · pointer-tracked glow · magnetic buttons ·
scrollspy active nav · footer year · **contact-form validation → mailto compose**.
All motion respects `prefers-reduced-motion`.

---

## 3. Tech Stack & Conventions

- **HTML:** Semantic, accessible (`aria-*`, `role="img"` on decorative SVG,
  `aria-current` on active nav, `prefers-reduced-motion` honored).
- **CSS:** Custom properties / design tokens, `color-mix` + `oklch`, no
  preprocessor. Compositor-friendly motion (transform/opacity).
- **JS:** IIFE, vanilla, `matchMedia` + `IntersectionObserver`, `requestAnimationFrame`.
- **Fonts:** Google Fonts — Fraunces + Inter (`display=swap`).
- **Zero runtime dependencies.** Keep it that way unless a real need appears.

---

## 4. How to Run / Preview

```bash
cd C:\Users\eddyi\Desktop\code\kwaks
npm run dev          # → npx serve site on http://localhost:8823
# or:
cd site && python3 -m http.server 8823
# open http://localhost:8823/index.html
```

Visual QA was done via headless Chrome screenshots (commands in
`.claude/settings.local.json`): desktop 1440×3600, hero 1440×900, mobile 390.

---

## 5. ✅ Completed

- [x] Full landing-page structure & copy (hero → footer, 9 sections)
- [x] Design tokens + full stylesheet (responsive + reduced-motion)
- [x] All JS interactions (reveal, count-up, parallax, magnetic, scrollspy, nav)
- [x] SEO + Open Graph meta tags, `theme-color`
- [x] Inline SVG brand mark + decorative hero/map artwork
- [x] **Favicon** (`site/favicon.svg`) linked in `<head>` + apple-touch-icon
- [x] **Run/deploy config:** zero-dep `package.json` (dev/preview/build),
      `robots.txt`, `site.webmanifest`
- [x] **Working contact form:** validated (name/email/message), accessible
      (`aria-live` status, focus styles, inline errors), composes a `mailto:`
      on submit. Front-end only (no backend).
- [x] **Housekeeping:** reference scrapes moved to `references/` (out of root)
- [x] **Sub-pages built** (resolve every `#` placeholder from the landing page):
  - `esg.html` (ESG / responsibility), `careers.html` (open roles list)
  - `insights.html` hub + 3 articles (`insights/us-power-markets`,
    `insights/carbon-markets`, `insights/lng-flexible-cargo`)
  - 4 legal pages (`legal/privacy`, `legal/terms`, `legal/modern-slavery`,
    `legal/ethics`) with sticky TOC + prose body
  - Shared sub-page CSS added to `main.css` (`.page-hero`, `.crumbs`,
    `.article-meta`, `.prose`, `.feature-grid`, `.roles`, `.doc`)
  - All sub-pages reuse the same header/footer markup, fonts, design tokens and
    `main.js`; root pages use relative paths, `insights/` + `legal/` pages use `../`

**Media note (added 2026-07-10):** The site was originally SVG/CSS-only. Real
stock media is now self-hosted (no CSP change needed — `img-src 'self'` /
`default-src 'self'` already permit same-origin media):
- Hero background **video** (`site/assets/video/oil-rig.mp4`, muted/loop/autoplay,
  poster `assets/img/oil-rig.jpg`). `prefers-reduced-motion` hides the video and
  shows the poster frame.
- 3 Insights card images (homepage + `insights.html` hub): power-plant / industrial
  / lng-tanker.
- Sub-page hero images: `careers.html`→engineers, `esg.html`→renewables, and the 3
  `insights/*` articles → power-plant / industrial / lng-tanker.
- Source = **Pexels** (CC0 / Pexels license), downloaded via their CDN.
  ⚠ Requested "Unsplash" but Unsplash blocks non-browser scrapers (returns a
  challenge page to curl), so Pexels was used for both stills and video.
  ⚠ Requested "YouTube" video but `yt-dlp`/`ffmpeg` are not installed AND the
  site CSP blocks YouTube embeds (`frame-src 'none'`) — swapped for Pexels stock
  video. If real YouTube embeds are ever needed, relax `frame-src` and add an
  `<iframe>`; do NOT download YouTube content (ToS).

---

## 6. 🟡 Active / In-Progress

_None currently in-flight._ Resume from §7 (Pending) for the next phase.

---

## 7. 📋 Pending / Not Yet Done

**Content & links**
- [x] Secondary links: Insights "Read more", Careers "View open roles", ESG
      "Read our ESG approach", footer legal — all now point to real sub-pages.
- [ ] Contact form is front-end only → opens the visitor's email app. If a
      real inbox/receiver is wanted, wire a backend or a service (Formspree, etc.)
- [ ] Stats are illustrative (e.g. "1.2 M b/d", "9.6 Mm³", "40+ offices") —
      confirm with client before going live.

**Productionizing**
- [ ] Deploy to a static host — **target chosen: GitHub Pages**. Note: GitHub
      Pages does NOT let you set CSP/security headers from the repo; a CDN/proxy
      (e.g. Cloudflare) or a `<meta http-equiv>` CSP is needed for real headers.
- [ ] CSP / security headers for production (recommended for static sites).
- [ ] Analytics + consent banner (if required).
- [ ] `sitemap.xml` (robots.txt references one — add it when domain is known).
- [ ] Optional light-theme toggle — only one inverted editorial band exists.

**QA & hardening**
- [ ] Automated visual-regression screenshots at 320/768/1024/1440 + a11y check
      (keyboard nav, contrast, reduced-motion).
- [ ] Cross-browser check (Chrome/Firefox/Safari) for `oklch`/`color-mix`.
- [ ] Lighthouse / Core Web Vitals pass (LCP<2.5s, INP<200ms, CLS<0.1).

---

## 8. Notes / Cautions

- **`.claude/settings.local.json` contains a hardcoded `ANTHROPIC_API_KEY`**
  (env var for Claude Code's own operation, not the site). Local config, not
  committed — but treat as a secret; rotate if this machine is shared.
- `references/` is large (vitol.html = 1402 lines) and is **not** site code.
- Build is intentionally **zero-dependency** — keep it that way.
- Visual direction is set: dark-luxury petroleum. Don't drift toward generic
  template looks (per web design-quality standards).

---

## 9. Resume Cheatsheet

1. `npm run dev` (or `cd site && python3 -m http.server 8823`) → preview `:8823`.
2. Edit `index.html` (structure/copy), `styles/*.css` (look), `js/main.js` (behavior).
3. Screenshot via headless Chrome commands in `.claude/settings.local.json`.
4. Next meaningful work lives in §7 (Pending): most likely deploy to GitHub
      Pages, CSP/security headers, `sitemap.xml`, then a QA/visual-regression pass.
