import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.vercel.app",
      },
      {
        protocol: "https",
        hostname: "www.svgrepo.com",
        pathname: "/show/**",
      },
    ],
  },
};

export default nextConfig;
