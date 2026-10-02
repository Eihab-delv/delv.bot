# public/

Static assets served at the site root (under `/nashmi.bot` on GitHub Pages).

## Currently referenced from code

| File | Used in | Via |
| --- | --- | --- |
| `sam-profile.png` | Hero portrait card | `IMAGES.founderCard` in `lib/site.ts` |
| `sam-hero.jpeg` | About section photo | `IMAGES.founderAbout` in `lib/site.ts` |
| `brand/delv-logo-light.png` | Navbar + footer logo (white + brand blue, for the dark theme) | `IMAGES.delvLogo` |
| `brand/delv-mark-light.png` | Small "D/" mark | `IMAGES.delvMark` |
| `brand/delv-logo.png`, `brand/delv-mark.png` | Original navy colours, for light backgrounds | — |
| `og.png` | Nashmi.bot social preview (1200×630) | `IMAGES.og` in `lib/site.ts` |
| `delv-group/*.jpg` | About and Services pages | `IMAGES` in `lib/site.ts` (copied from the delv.group site) |

The browser tab icon is `app/icon.png` (plus `app/apple-icon.png` for iOS), auto-detected by Next.js.

## Adding images

Reference new images through `IMAGES` in `lib/site.ts` and
prefix them with `BASE` (e.g. `` `${BASE}/my-image.png` ``). With
`images.unoptimized`, `next/image` does not add the `/nashmi.bot` base path for
you, so a bare `/my-image.png` breaks on GitHub Pages.
