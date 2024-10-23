import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Optionally, add any other Next.js config below
  output: 'export',
  basePath: process.env.NODE_ENV === "production" ? "/wizardry-daphne-emulator" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
