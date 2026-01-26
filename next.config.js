// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure proper webpack config for react-pdf
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  // Use Node.js runtime for PDF generation
  experimental: {
    serverComponentsExternalPackages: ["@react-pdf/renderer"],
  },
};

export default nextConfig;
