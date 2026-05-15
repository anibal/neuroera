# Neuroera Website — Agent Context

## Project Overview
- **Target:** https://www.neuroera.net/ — a legacy site being redesigned/replaced.
- **Reference:** https://oravo-template.webflow.io/ — a dental/medical Webflow template downloaded as inspiration.
- **Status:** Reference site mirrored locally. Await detailed development plan from project owner.

## Key Directories
| Path | Purpose |
|------|---------|
| `oravo-site/` | **Read-only reference.** Complete wget mirror of the Oravo Webflow template (HTML, CSS, images, JS, assets). Do not modify. |
| *(root)* | Future development will live here once the plan is provided. |

## Important Notes
- `oravo-site/` was downloaded with `wget --mirror --convert-links` and contains converted relative links.
- The reference template is **not** the final design — it is inspiration / structural reference only.
- The actual brand, content, and functionality will be for **Neuroera**, not dentistry.
- Wait for explicit plan/instructions before creating new source directories or modifying anything outside `oravo-site/`.

## Tech Stack (TBD)
To be determined by the upcoming plan. The reference site uses:
- Static HTML exported from Webflow
- Custom CSS (Webflow-generated)
- jQuery 3.5.1
- Lottie animations
- Google Fonts (Geist)

## Agent Reminders
- Treat `oravo-site/` as read-only reference material.
- Follow whatever tech stack and architecture the owner specifies in the plan.
- Do not assume the final site will be static HTML — the plan may specify a framework (e.g., Next.js, Astro, plain HTML, etc.).
