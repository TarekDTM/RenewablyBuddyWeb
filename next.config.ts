import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  poweredByHeader: false,
  images:{
        remotePatterns: [new URL('https://picsum.photos/id/100/200/300')],

  }
};

export default nextConfig;
