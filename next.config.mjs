/** @type {import('next').NextConfig} */

// ganti /daftar destination
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/daftar",
        destination: "https://www.instagram.com/ngopi.komunitas/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
