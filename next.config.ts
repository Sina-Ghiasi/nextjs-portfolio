import type { NextConfig } from "next";

if (!process.env.IMAGE_HOSTNAME) {
  throw new Error(
    "Missing required environment variable: IMAGE_HOSTNAME.\n Please add it to your .env file or deployment environment.",
  );
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.IMAGE_HOSTNAME,
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
