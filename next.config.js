/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: "",
  basePath: "/prashmi9/Rashmi-Portfolio",
};

module.exports = nextConfig;
