# public/

Static assets served at the site root.

## What goes here

- `sam-profile.png` — Sam's real headshot. Drop a JPG here (recommended ~1200×1500, 4:5 ratio). Until you do, `sam-profile.svg` is used as a placeholder.
- `favicon.svg` / `favicon.ico` — browser tab icon.
- `logos/` — partner / company logos referenced from `constants.ts` (`ECOSYSTEM.companies`). Suggested filenames: `delv-capital.svg`, `delvlead.svg`, `delvplug.svg`, `delv360.svg`, `delvshop.svg`, `delvsearch.svg`.
- `og-image.jpg` — 1200×630 social preview image (optional, referenced from `app/layout.tsx` once added).

## Currently referenced from code

| Path | Used in | Purpose |
| --- | --- | --- |
| `/sam-profile.svg` | `Hero.tsx`, `AboutSnippet.tsx` (via `CEO.photoUrl`) | Hero portrait + about block |
| `/favicon.svg` | Next.js auto-detects | Browser tab icon |

To swap to a real photo: drop `sam-profile.png` in this folder and change `CEO.photoUrl` in `lib/constants.ts` from `/sam-profile.png` (or `/sam-profile.svg` if you want to keep the SVG for now). The constants file already points at `/sam-profile.png`.
