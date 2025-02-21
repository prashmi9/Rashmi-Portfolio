/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: "/prashmi9/Rashmi-Portfolio",
  basePath: "/prashmi9/Rashmi-Portfolio",
};

module.exports = nextConfig;
