import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/cards',
  assetPrefix: '/cards',
};

export default nextConfig;
