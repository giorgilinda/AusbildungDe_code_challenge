import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
      {
        protocol: "http",
        hostname: "acmelogos.com",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
