import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Optionally, add any other Next.js config below
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
