import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.paphlagoniatour.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "acenta360.fra1.cdn.digitaloceanspaces.com",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'flagcdn.com',
        pathname: "/**",
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
