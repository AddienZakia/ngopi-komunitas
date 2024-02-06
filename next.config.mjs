/** @type {import('next').NextConfig} */

// ganti /daftar destination
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/daftar",
        destination:
          "https://nextjs.org/docs/pages/api-reference/next-config-js/redirects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
