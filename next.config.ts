import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [45, 55, 60, 70, 75, 80],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920, 2560],
  },
  experimental: {
    inlineCss: true,
  },
  async redirects() {
    return [{ source: "/jobs", destination: "/careers", permanent: true }];
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
