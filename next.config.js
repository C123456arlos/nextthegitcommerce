/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "plus.unsplash.com" },
      { hostname: "lh3.googleusercontent.com" },

    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
