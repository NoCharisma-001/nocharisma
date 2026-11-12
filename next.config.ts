import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // Canonical host is www. Send the apex there so there is one copy of the site.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "nocharisma.com" }],
        destination: "https://www.nocharisma.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
