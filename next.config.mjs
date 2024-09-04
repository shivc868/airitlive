/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://www.airitlive.com/blog", // Replace with actual Hostinger URL
      },
      {
        source: "/blog/:slug*",
        destination: "https://www.airitlive.com/blog/:slug*", // Replace with actual Hostinger URL
      },
    ];
  },
};

export default nextConfig;
