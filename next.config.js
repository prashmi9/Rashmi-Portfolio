/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "docs",
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
  assetPrefix: "",
  basePath: "",
};

module.exports = nextConfig;
