/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "https://github.com/prashmi9/Rashmi-Portfolio",
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
