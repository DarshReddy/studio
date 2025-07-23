
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [],
    loader: "custom", // Change this line to "custom"
    loaderFile: "./loader.js", // Add this line to specify the path to your custom loader
  },
};

export default nextConfig;
