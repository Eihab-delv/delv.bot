/** @type {import('next').NextConfig} */

// The deploy workflow sets NEXT_PUBLIC_BASE_PATH: empty on a custom domain
// (nashmi.bot), or /<repo-name> on <owner>.github.io. Locally it's empty too,
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

  // Load the Arabic web font straight from Google Fonts in the browser instead
  // of inlining it at build time (keeps builds working without font access).
  optimizeFonts: false,
};

export default nextConfig;
