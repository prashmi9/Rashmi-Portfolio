/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/prashmi9/Rashmi-Portfolio",
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
