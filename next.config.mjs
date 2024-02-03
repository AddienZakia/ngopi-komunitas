/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:slug",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
