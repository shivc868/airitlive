/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://www.airitlive.com/blog", // External WordPress URL
      },
      {
        source: "/blog/:slug*",
        destination: "https://www.airitlive.com/blog/:slug*", // External WordPress URL
      },
    ];
  },
};

export default nextConfig;
