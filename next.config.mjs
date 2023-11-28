/** @type {import("next").NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "i.scdn.co" }],
  },
  experimental: {
    ppr: true,
  },
};

export default nextConfig;
