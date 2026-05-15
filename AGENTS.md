# Neuroera Website — Agent Context

## Project Overview
- **Target:** https://www.neuroera.net/ — a legacy site being redesigned/replaced.
- **Reference:** https://oravo-template.webflow.io/ — a dental/medical Webflow template downloaded as inspiration.
- **Status:** v1 static site built and deployed to GitHub (awaiting staging deployment to Cloudflare Pages).
- **Plan:** `neuroera-home-plan.md` defines scope, structure, and Definition of Done.

## Key Directories
| Path | Purpose |
|------|---------|
| `oravo-site/` | **Read-only reference.** Complete wget mirror of the Oravo Webflow template (HTML, CSS, images, JS, assets). Do not modify. |
| `assets/` | Site assets: CSS, JS, images, icons, favicon. |
| `logos-suministrados/` | Client-provided brand assets (logos, isotipos, tipografías). Read-only source files. |
| *(root)* | Built site files: `index.html`, `aviso-legal.html`, `privacidad.html`, `404.html`, `robots.txt`, `sitemap.xml`, `_headers`, `_redirects`. |

## Tech Stack (Decided)
- **HTML5** semantic, single-page home (`index.html`) + 3 auxiliary pages.
- **CSS vanilla** with custom properties (design tokens), mobile-first. No Tailwind, no Sass, no PostCSS.
- **JS vanilla** in `assets/js/main.js` (≈ 1.2KB). Only mobile nav toggle and header scroll state.
- **Google Fonts** — Inter via `<link>` with `font-display: swap`.
- **SVG icons** inline via sprite (`assets/icons/sprite.svg`). No Font Awesome.
- **Images** — PNG/JPG placeholders. Target: ≤ 80KB each. AVIF/WebP planned for final assets.
- **Hosting** — Cloudflare Pages (static, no build command). Branch `main` → production.
- **Domain** — `neuroera.net` (cutover pending). Staging subdominio first.

## Brand Decisions Log
- **Palette:** Derived from Oravo reference (`#060c16`, `#1e5aff`, `#f4f7ff`) with Neuroera brand colors.
- **Logo:** Placeholder text logo `Neuro<span>era</span>` in header. Real brand assets received in `logos-suministrados/` — isotipo used in hero.
- **Typography:** Increased to larger scale (base 18px, section titles 40px, hero h1 up to 72px on desktop).
- **WhatsApp:** `+584122344556` with preloaded messages per audience.
- **Social:** Instagram `@institutoneuroera`, Facebook `neuroera`.
- **Sede:** Only Caracas (Macaracuay). Lechería removed per client update.

## Important Notes
- `oravo-site/` was downloaded with `wget --mirror --convert-links` and contains converted relative links.
- The reference template is **not** the final design — it is inspiration / structural reference only.
- The actual brand, content, and functionality will be for **Neuroera**, not dentistry.
- **No build process** — `index.html` must work identically with double-click and in production.
- **No backend** — all leads go to WhatsApp/Instagram/Facebook deep links.

## Agent Reminders
- Treat `oravo-site/` as read-only reference material.
- Treat `logos-suministrados/` as read-only client assets.
- Follow mobile-first CSS with custom properties.
- Respect the performance budget: HTML ≤ 30KB, CSS ≤ 25KB, JS ≤ 3KB, images ≤ 80KB each.
- Ensure WCAG AA basics: contrast 4.5:1, visible focus, alt text, prefers-reduced-motion, keyboard nav.
- Keep `AGENTS.md` and `README.txt` updated when project structure or decisions change.
