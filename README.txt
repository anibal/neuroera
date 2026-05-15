Neuroera Website Project
========================

Target Site:  https://www.neuroera.net/
Reference:    https://oravo-template.webflow.io/ (downloaded to ./oravo-site/)
Staging:      (pending) — will be deployed to Cloudflare Pages

Context:
--------
Neuroera currently has a legacy site at neuroera.net.
This project is being developed to replace / modernize that site.

The oravo-template.webflow.io site (a dental/medical Webflow template)
was downloaded in full (HTML, CSS, images, JS) to serve as a
reference / template / inspiration for the new Neuroera site design.

Status:
-------
v1 of the static site is built and pushed to GitHub.
It includes:
- Single-page home (index.html) with 9 sections
- Legal pages: aviso-legal.html, privacidad.html
- 404 error page
- Vanilla CSS (mobile-first, custom properties)
- Vanilla JS (mobile nav + scroll state)
- SVG icon sprite
- Real brand assets received and integrated

Next Steps:
-----------
- Client review of look & feel and copy
- Replace placeholder images with final assets (when provided)
- Complete _redirects with old Wix URLs (from Google Search Console)
- Deploy to Cloudflare Pages staging
- Cutover to neuroera.net

Directory Structure:
--------------------
oravo-site/            -- Complete mirror of the reference Webflow template (read-only)
assets/css/styles.css  -- Vanilla CSS with design tokens
assets/js/main.js      -- Mobile nav toggle and header scroll state
assets/img/            -- Images and favicon
assets/icons/          -- SVG sprite
logos-suministrados/   -- Client brand assets (logos, isotipos, tipografías)
index.html             -- Home page (9 sections)
aviso-legal.html      -- Legal notice
privacidad.html       -- Privacy policy
404.html              -- Error page
robots.txt            -- Crawler directives
sitemap.xml           -- URL map
_headers              -- Cloudflare Pages security headers
_redirects            -- Redirect rules (template, needs Wix URLs)
AGENTS.md             -- Context and conventions for AI coding agents
README.txt            -- This file
