# public/

Static assets served at the site root (under `/delv.bot` on GitHub Pages).

## Currently referenced from code

| File | Used in | Via |
| --- | --- | --- |
| `sam-profile.png` | Hero portrait card | `CEO.photoUrl` in `lib/constants.ts` |
| `sam-hero.jpeg` | About section photo | `CEO.photoUrl2` in `lib/constants.ts` |
| `favicon.svg` | Browser tab icon | Auto-detected by Next.js |
| `delv-group/*.jpg` | About, Services pages, social preview (`og.jpg`) | `lib/delv-group.ts` (copied from the delv.group site) |

`sam-profile.svg` is an old placeholder and is no longer used.

## Adding images

Reference new images through `lib/constants.ts` (or `lib/delv-group.ts`) and
prefix them with `BASE` (e.g. `` `${BASE}/my-image.png` ``). With
`images.unoptimized`, `next/image` does not add the `/delv.bot` base path for
you, so a bare `/my-image.png` breaks on GitHub Pages.
