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
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'relentlessroaming.com',
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'dynamic-media-cdn.tripadvisor.com',
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'media.tacdn.com',
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'ertungaecir.com',
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'seattleballooning.com',
        pathname: "/**",
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
};

export default withNextIntl(nextConfig);
