/** @type {import('next').NextConfig} */

// GitHub Pages serves this repo at /delv.bot, so the deploy workflow builds with
// NEXT_PUBLIC_BASE_PATH=/delv.bot. Locally (yarn dev / yarn build) it's empty,
// so the site runs at the root: http://localhost:3000/
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  // Emit a fully static site into /out
  output: "export",

  basePath,
  assetPrefix: basePath || undefined,

  // GitHub Pages needs index.html inside each directory, not /path.html
  trailingSlash: true,

  // next/image optimisation requires a server — disable it for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
