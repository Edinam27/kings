# CLAUDEMEM — Kings Tier Petroleum Site

> Build-progress memory for the `kwaks` project. Written so a fresh session can
> resume instantly. Read top-to-bottom; everything below is the current truth.

---

## 0. Snapshot (last updated 2026-07-11)

- **v2 Next.js rebuild is essentially built.** Phases 0–8 are committed; **Phase 9
  (QA) is in progress** and largely green. The app is a **Next.js 16 (App Router,
  TS) static export** with Vitol-style IA (mega-menu + deep subpages), a
  light editorial aesthetic, and the **Cormorant Garamond + Inter** type system.
- **QA status (2026-07-11):**
  - **Unit/component (Vitest):** 35 tests pass (11 files).
  - **Build (static export):** all 39 routes export to `out/` cleanly.
  - **E2E (Playwright, Chromium):** 43 tests pass (mega-menu, drawer, hero,
    reduced-motion, every route).
  - **Lighthouse (local, sim Slow-4G):** A11y 96 · Best-practices 96 · SEO 91 ·
    **CLS 0 · FCP 0.9s · TBT ~150–210ms** — all strong. **Perf ~70–73, LCP poor
    (8–13s, noisy)** because the LCP element is the autoplay hero **video**
    (element-render-delay dominated). This is an accepted design tradeoff; the
    reliable `lcp-breakdown-insight` puts real subparts near ~2.2s. See §11.
- **Bugs fixed this session (2026-07-11):**
  1. **`scripts/lh-audit.mjs` was broken** — it passed both `chromePath` and a
     fixed `port:9222`, so Lighthouse tried to *connect* to a non-existent Chrome
     (ECONNREFUSED). Now launches Chrome via **`chrome-launcher`** on a dynamic
     port and kills it in `finally`. `npm run audit:local` works.
  2. **basePath asset bug (shipping-blocker):** every raw `/assets/...` URL
     (`<img>`, `<video>`/`<source>`, `poster`, CSS `url()`, auto-preloads) lacked
     the `/kings` prefix → **all imagery/video 404s in production.** Added
     **`lib/asset.ts`** (`asset()` + `BASE_PATH`) and routed every render site
     through it. Verified: 0 un-prefixed refs, 92 now `/kings/`-prefixed.
  3. **basePath link bug:** home division grid used raw `<a href={d.href}>`
     (un-prefixed) → 404 on live. Converted to `next/link`.
- **v1 (static HTML/CSS/JS):** moved to `legacy/`. **Deploy workflow already
  builds Next + uploads `out/`**, so the next push to `main` replaces v1 with v2
  at <https://edinam27.github.io/kings/>. (This is why the basePath asset fix was
  urgent — the next deploy would otherwise ship 404ing imagery.)
- **Decisions locked:**
  - Fonts → **Cormorant Garamond** (display serif) + **Inter** (body/UI).
  - Hosting → **GitHub Pages via Next.js static export** (`output: 'export'`,
    `basePath: '/kings'`). Keep the existing repo + Pages setup.
  - Design reference → **vitol.com** for STRUCTURE / IA / UX patterns only.
    **Original Kings Tier content + our own imagery.** Do NOT copy Vitol's copy,
    logos, or photography.

---

## 1. Project Overview

Marketing site for *Kings Tier Petroleum* — a global energy & commodities trading
company (crude, refined products, LNG, power, marine bunkering, carbon, structured
trade). v2 becomes a multi-page Next.js site modeled on the structure of a
major-trader site (Vitol), with original content.

---

## 2. Current Repo State

```
kwaks/                         (git root = the deployed site root)
├── CLAUDEMEM.md               ← this file
├── .gitignore                 ← ignores .claude/ (SECRET), references/, shots/, node_modules/
├── .github/workflows/deploy.yml  ← GitHub Pages deploy (v1: uploads repo root)
├── .nojekyll
├── package.json               ← zero-dep static scripts (v1)
├── index.html                 ← v1 landing page (at ROOT — moved out of site/ for Pages)
├── careers.html  esg.html  insights.html
├── insights/  legal/  js/  styles/  assets/   ← v1 site (root-level)
│   └── assets/img (6 jpg) + assets/video (oil-rig.mp4, engineers.mp4)
├── references/                ⚠ scraped competitor refs (Shell/Vitol) — gitignored, DO NOT SHIP
└── .claude/                   ⚠ contains hardcoded ANTHROPIC_API_KEY — gitignored, treat as secret
```

**⚠ v1 files live at the repo ROOT** (they were moved out of `site/` so GitHub
Pages "deploy from branch/root" could serve `index.html`). The v2 rebuild will
relocate v1 into `legacy/` (or a `v1` branch) before scaffolding Next.js at root.

---

## 3. Deployment (current)

- Live: <https://edinam27.github.io/kings/> (HTTP 200 verified).
- Mechanism: `.github/workflows/deploy.yml` — `configure-pages` (enablement:true,
  so Pages source = **GitHub Actions**) → `upload-pages-artifact` (path `.`) →
  `deploy-pages`. Runs on every push to `main`.
- Secret hygiene verified: `.claude/settings.local.json` is 404 on the live site.

---

## 4. Typography System (v2) — Cormorant Garamond + Inter

Load via `next/font/google` (self-hosted, no layout shift). Expose as CSS vars
`--font-display` (Cormorant Garamond) and `--font-sans` (Inter).

Apply the pro rules from the brief:

| Element        | Styling                                                        |
|----------------|---------------------------------------------------------------|
| H1 / display   | Cormorant Garamond, `font-weight:700; letter-spacing:-0.02em` |
| H2–H3          | Cormorant Garamond, 600–700                                    |
| Body           | Inter, `font-weight:400; line-height:1.65`                     |
| All-caps UI    | Inter, `text-transform:uppercase; letter-spacing:0.15em`      |
| Body text color| `#1A1A1A` (never pure `#000`)                                  |

Note: Cormorant runs small/thin → **size display headings ~20% larger** than a
normal scale and keep background contrast high (light bg, dark text).

---

## 5. v2 Target Architecture

- **Framework:** Next.js (latest, **App Router**, **TypeScript**), ESLint.
- **Static export:** `next.config` → `output: 'export'`, `basePath: '/kings'`,
  `assetPrefix: '/kings/'`, `images: { unoptimized: true }`, `trailingSlash: true`
  (so each route exports `route/index.html` — friendlier on Pages).
- **Styling:** CSS Modules or Tailwind (decide in Phase 1; lean Tailwind for
  velocity + design tokens). Light "Vitol-like" palette: white / off-white
  surfaces, `#1A1A1A` text, one restrained brand accent (deep petrol-navy or a
  disciplined brass used sparingly), generous whitespace, full-bleed imagery.
- **Motion:** subtle, compositor-friendly (Framer Motion or CSS). Respect
  `prefers-reduced-motion` (no autoplay video, no transform reveals).
- **Content:** typed data modules under `content/` (navigation, divisions,
  people, locations) + **MDX** for news/insights articles.
- **Media:** move v1 assets to `public/assets/`; add Vitol-style full-bleed
  photos per division (Pexels, self-hosted). Keep hero video (muted/loop, poster,
  hidden under reduced-motion). Consider re-encoding the ~32 MB MP4s for perf.

### Information architecture (mega-menu dropdowns) — ORIGINAL content
Category names are generic industry terms; all copy is original to Kings Tier.

1. **About** ▾ — Overview · Our history · Our people · Global locations
2. **What we do** ▾ (mega menu, grouped columns):
   - *Trading & distribution:* Crude oil & products · Natural gas & LNG · Power ·
     Carbon · LPG
   - *Assets & investments:* Terminals & storage · Refining · Renewables & energy
     transition · Exploration & production
   - *Shipping*
3. **Sustainability** ▾ — ESG overview · Safety · Climate & transition ·
   Communities · Governance & ethics
4. **Media** ▾ — News · Market insights · Reports
5. **Careers** ▾ — Life at Kings Tier · Open roles · Graduates & early careers
6. **Contact** (button/CTA)

Footer: Privacy · Terms · Modern slavery statement · Ethics & compliance ·
Cookie policy · Sitemap.

### Route map (App Router; all under basePath `/kings`)
```
/                                  home
/about  /about/history  /about/people  /about/locations
/what-we-do (overview)
/what-we-do/crude-oil-products
/what-we-do/natural-gas-lng
/what-we-do/power
/what-we-do/carbon
/what-we-do/lpg
/what-we-do/terminals-storage
/what-we-do/refining
/what-we-do/renewables
/what-we-do/exploration-production
/what-we-do/shipping
/sustainability  /sustainability/{safety,climate,communities,governance}
/media  /media/[slug]            (MDX articles: migrate the 3 existing insights + news)
/careers  /careers/life  /careers/roles
/contact
/legal/{privacy,terms,modern-slavery,ethics,cookies}
/sitemap                          (+ generated sitemap.xml, robots.txt)
```

### Component architecture
- **Layout:** `Header` (desktop `MegaMenu` + mobile `NavDrawer`), `Footer`,
  `Container`, `Breadcrumbs`.
- **Sections:** `Hero` (full-bleed image/video), `SectionHeader`, `DivisionGrid`,
  `StatBand`, `CtaBand`, `LeadershipGrid`, `LocationsMap`, `NewsList`,
  `ArticleCard`, `Accordion` (FAQs / mobile nav).
- **UI:** `Button`, `AppLink` (basePath-aware), tags/badges.
- **A11y for menus:** `aria-haspopup`, `aria-expanded`, roving-tabindex keyboard
  nav, focus trap in mobile drawer, `Esc` to close, visible focus rings.

---

## 6. Build Phases (task breakdown)

- **Phase 0 — Scaffold:** move v1 → `legacy/`; create Next.js app (TS, App
  Router) at root; configure static export + `basePath`; wire `next/font`
  (Cormorant + Inter); `.nojekyll`; smoke-build `out/`.
- **Phase 1 — Design system:** tokens (light palette, type scale, spacing,
  motion), global styles, base UI components (Button, Container, links).
- **Phase 2 — Layout shell:** Header mega-menu + mobile drawer + Footer, driven
  by `content/navigation.ts`. Full keyboard/a11y.
- **Phase 3 — Home:** Vitol-style — full-bleed hero, "who we are" intro, divisions
  grid, sustainability teaser, latest media, careers CTA.
- **Phase 4 — Sections + subpages:** About(+3), What we do (+11 division pages),
  Sustainability(+4), Careers(+2), Contact, Legal(5).
- **Phase 5 — Content migration:** 3 existing insight articles → MDX under
  `/media`; reuse/expand ESG + careers copy; write original division copy.
- **Phase 6 — Media pass:** full-bleed photography per page; hero video; posters.
- **Phase 7 — Polish:** responsive (320/768/1024/1440), reduced-motion, SEO via
  Next Metadata API (per-route title/description/OG), `sitemap.xml` + `robots.txt`.
- **Phase 8 — CI/CD:** update `deploy.yml` → setup-node, `npm ci`, `npm run build`
  (next build+export), upload `out/`, deploy-pages. Verify live at `/kings/`.
- **Phase 9 — QA:** Lighthouse (LCP<2.5s, INP<200ms, CLS<0.1), Playwright E2E
  (nav dropdowns + key routes), visual regression, cross-browser.

---

## 7. Testing (targets from repo rules)

- **Unit/component:** Vitest + Testing Library (nav logic, links, UI). 80% cov.
- **E2E:** Playwright — mega-menu open/close + keyboard, mobile drawer, route
  reachability, hero renders, reduced-motion path.
- **Visual regression:** screenshots at 320/768/1024/1440.

---

## 8. How to Run

- **v1 (current, still live):** `npm run dev` (serves repo root on :8823) or
  `python3 -m http.server 8823`.
- **v2 (after Phase 0):** `npm run dev` (Next dev server) · `npm run build`
  (static export → `out/`) · preview `npx serve out`.

---

## 9. Notes / Cautions

- **`.claude/settings.local.json` has a hardcoded `ANTHROPIC_API_KEY`.** Gitignored
  and confirmed absent from the live site — keep it that way; rotate if leaked.
- **`references/` (Shell/Vitol scrapes) are gitignored — never ship.** Used for
  structural inspiration only; all shipped content must be original Kings Tier.
- **basePath discipline:** every internal link via `next/link` (auto-prefixes
  `/kings`); raw asset URLs must include the prefix or use `assetPrefix`.
- Static export = no SSR/API routes/server actions (fine for this marketing site).
- v1 stats/copy are illustrative — confirm with client before real launch.

---

## 10. Resume Cheatsheet

1. Read §0 (snapshot) + §11 (QA findings + remaining) first — v2 is built.
2. Verify gates: `npm run test` (35) · `npm run build` (39 routes) ·
   `npm run test:e2e` (43) · `npm run audit:local` (Lighthouse).
3. Fonts = Cormorant Garamond + Inter; host = GitHub Pages static export;
   design = light/editorial, Vitol-structure, original content.
4. basePath discipline: internal links via `next/link`; **raw assets via
   `asset()` from `lib/asset.ts`** (never hardcode `/assets/...`).
5. Keep `.claude/` and `references/` out of git.

---

## 11. Phase 9 QA — findings & remaining work

**Done (2026-07-11):** all test gates green; fixed Lighthouse script + the two
basePath bugs (see §0). Added `lib/asset.ts` (+ `asset.test.ts`) and
`fetchPriority="high"` on the reduced-motion hero image.

**Remaining / open:**
1. **Commit Phase 9 work.** Uncommitted: `lib/asset.ts`, all `*.test.tsx`/`*.test.ts`,
   `tests/*.spec.ts`, `playwright.config.ts`, `vitest.config.ts`, `vitest.setup.ts`,
   `scripts/`, re-encoded videos, `app/globals.css`. Suggested: `test:` +
   `fix(basepath):` + `fix(audit):` commits.
2. **Deploy pipeline (Phase 8) — CONFIRMED correct.** `.github/workflows/deploy.yml`
   already runs `npm ci` → `npm run build` → uploads **`out/`**. So the **next push
   to `main` publishes v2** to `/kings/`. This is exactly why the basePath asset
   fix mattered — without it the next deploy would have shipped 404ing imagery.
   Only action left: commit + push (item 1).
3. **Hero LCP tradeoff.** LCP element = autoplay hero video → Lighthouse perf ~70.
   Options if a green perf score is required: (a) poster-first with video swapped
   in post-load, (b) shorter/lighter `oil-rig.mp4` (currently 6.6 MB; `engineers.mp4`
   13 MB), (c) drop to a static hero image with `fetchpriority=high`. CLS/FCP/TBT
   already pass — decide with client whether the video is worth the perf hit.
4. **Coverage target (rules: 80%).** Add `@vitest/coverage-v8` run + threshold if
   enforcing; current suite covers nav/content/UI/sections but not every page.
5. **Optional:** visual regression screenshots at 320/768/1024/1440 (rules §web).
