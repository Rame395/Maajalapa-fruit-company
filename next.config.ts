// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allows your phone/network IP to securely connect to the local dev bundles
  allowedDevOrigins: ["192.168.100.27:3000", "192.168.100.27"],
};

export default nextConfig;