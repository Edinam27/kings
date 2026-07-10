import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // GitHub Pages serves this site under /kings (project page, not user/org root)
  basePath: "/kings",
  assetPrefix: isProd ? "/kings/" : "/kings/",

  // A stray package-lock.json lives in the user home dir; pin our workspace root.
  turbopack: {
    root: __dirname,
  },

  // Fully static site — no server runtime
  output: "export",

  // Each route becomes <route>/index.html (friendlier on Pages)
  trailingSlash: true,

  // Static export can't use the built-in image optimizer
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
