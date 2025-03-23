import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //add sitemap link
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/sitemap", // Add a valid destination
      },
      {
        source: "/robots.txt",
        destination: "/robots", // Add a valid destination
      },
    ];
  },
};

export default nextConfig;
