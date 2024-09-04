/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/blog/:slug*",
        destination: "https://your-wordpress-domain.com/blog/:slug*", // External WordPress URL
      },
    ];
  },
};

export default nextConfig;
