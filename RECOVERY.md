# Design Your Next Chapter — Website Recovery Summary

This branch (`recovery/restore-website-assets`) restores the complete, working
website that was running on the known-good Cloudflare Pages deployment
`https://b79d7008.design-your-next-chapter.pages.dev/` back into the GitHub
repository `lizellevg2601-alt/next-chapter-studio`.

## Background

The live site lost its styling and images. Cloudflare Pages was rolled back to a
working deployment, which is now displaying correctly. GitHub contained only
`index.html` and `wrangler.toml`; all CSS, images, and the `/audit`,
`/success` pages were missing from the repository.

This branch recovers those files byte-for-byte from the working deployment and
restores them to GitHub so future deploys cannot break the site.

## Recovered files (from the working deployment)

| File | Source URL | Notes |
|------|-----------|-------|
| `index.html` | `/` | Homepage. Restored to the working deployment version (includes Social Proof, Events Video, CTA banner, plain `mailto:` links). |
| `styles.css` | `/styles.css?v=8` | Main stylesheet (design system, layout, responsive). |
| `audit.html` | `/audit` | Free Life Audit page (landing, questions, results, wheel SVG). |
| `audit-config.js` | `/audit-config.js` | Audit configuration: 24 questions, 8 categories, chapters, patterns. |
| `audit-styles.css` | `/audit-styles.css` | Audit-specific styles. |
| `success.html` | `/success` | Thank-you / download results page after checkout. |
| `assets/compass.png` | `/assets/compass.png` | Site favicon. |
| `assets/logo.png` | `/assets/logo.png` | Header/footer logo. |
| `assets/hero-bg.jpg` | `/assets/hero-bg.jpg` | Hero background image. |
| `wheel-preview.png` | `/wheel-preview.png` | Life Audit wheel preview (homepage). |
| `assets/wb-preview.png` | `/assets/wb-preview.png` | Workbook preview (homepage). |
| `assets/digital-card.png` | `/assets/digital-card.png` | Digital workbook pricing card cover. |
| `assets/delivered-card.png` | `/assets/delivered-card.png` | Delivered workbook pricing card cover. |

Build configuration: `wrangler.toml` (already present, unchanged) uses
`[assets] directory = "."`, so every file above is deployed as a static asset.
No changes to `wrangler.toml` were required.

## Preserved integrations

- Design, branding, colours, typography (Playfair Display + Inter), navigation.
- Life Audit: questions, scoring, category wheel, results, patterns, workbook
  recommendations (all client-side via `audit-config.js` / `audit.html`).
- Stripe checkout flow entry points: `buyNow()` → `/create-checkout`; "Delivered
  Workbook" → `/buy`.
- Success/download page: `/success` → `/verify-purchase`.
- LinkedIn Insight Tag, Google Fonts, YouTube/Instagram embeds (external CDNs,
  not part of the repo).

## Missing / unrecoverable files (NOT in this branch)

The following are **server-side Cloudflare Functions** or external destinations.
They cannot be recovered from a static Pages deployment and are intentionally
NOT recreated (no guessed replacements, per instructions):

- `/buy` — returns a 302 redirect to Amazon (server-side checkout redirect).
- `/create-checkout` — called by `buyNow()` (Stripe checkout session Function).
- `/api/audit/start`, `/api/audit/progress` — audit session Functions.
- `/submit-audit` — audit results submission Function.
- `/verify-purchase` — called by `success.html` to verify a Stripe session.
- PDF / bonus downloads (`Design-Your-Next-Chapter.pdf`, 21-Day Guide) — URLs
  are returned by `/verify-purchase` at runtime; not static files.

## Subpages checked

- `/audit` — recovered as `audit.html` (+ `audit-config.js`, `audit-styles.css`).
- `/buy` — server-side redirect to Amazon; not a static page.
- `/yours-from-here/` — a **separate microsite** (Letter Club by Next Chapter
  Studio) self-contained under `/yours-from-here/` with its own `styles.css`,
  `script.js`, and images. It lives in a separate local repo
  (`yours-from-here-microsite`) and is intentionally NOT merged here to avoid a
  root `/styles.css` conflict.
- `/success` — recovered as `success.html`.
- `/cancel`, `/checkout`, `/stripe-success`, `/stripe-cancel` — these render the
  homepage in the working deployment (fallback); no distinct static pages exist.

## Build & deploy

`wrangler.toml`:
```toml
name = "next-chapter-studio"
account_id = "c3974c9f555d3c107ece3f4f48defb23"
compatibility_date = "2026-11-12"

[assets]
directory = "."
```
All static assets are in the repo root, so `[assets] directory = "."` deploys
the complete site. No secrets, API keys, or credentials are present in any
recovered file (verified by scan).

## Status

- Recovered files verified against the working deployment: all local HTML/CSS/JS
  references resolve to a recovered file.
- Site tested locally with a static server (CSS, images, navigation load).
- This branch has **not** been merged to `main` and nothing has been deployed to
  Cloudflare Pages.
- **Awaiting your approval** before merging into `main` or deploying to
  production.
