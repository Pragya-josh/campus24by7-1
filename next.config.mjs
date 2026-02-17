/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // Optional: helpful for static hosting
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "campus24by7.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
