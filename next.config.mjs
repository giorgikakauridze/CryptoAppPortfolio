/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dynamic-assets.coinbase.com",
        port: "",
      },
    ],
  },
  optimizeCss: false,
};

export default nextConfig;
