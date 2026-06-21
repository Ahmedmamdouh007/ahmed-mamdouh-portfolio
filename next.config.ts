import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  allowedDevOrigins: ["*"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
