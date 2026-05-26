/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a fully static site into /out
  output: "export",

  // GitHub Pages serves the repo at /delv.bot — all asset paths must match
  basePath: "/delv.bot",
  assetPrefix: "/delv.bot",

  // GitHub Pages needs index.html inside each directory, not /path.html
  trailingSlash: true,

  // next/image optimisation requires a server — disable it for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
