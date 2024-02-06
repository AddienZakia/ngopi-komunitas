/** @type {import('next').NextConfig} */

// ganti /daftar destination
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/daftar",
        destination: "http://its.id/m/RSVPNgopiKomunitas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
