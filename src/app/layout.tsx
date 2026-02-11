import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://cappadocia-tours.com'),
  title: {
    default: 'Cappadocia Tours | Hot Air Balloon Rides & Cultural Experiences',
    template: '%s | Cappadocia Tours',
  },
  description: 'Discover the best Cappadocia tours including hot air balloon rides, cultural tours, and adventure experiences. Book your unforgettable journey today.',
  keywords: ['cappadocia', 'tours', 'hot air balloon', 'turkey', 'travel', 'goreme'],
  authors: [{ name: 'Cappadocia Tours' }],
  creator: 'Cappadocia Tours',
  publisher: 'Cappadocia Tours',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['tr_TR'],
    url: 'https://cappadocia-tours.com',
    siteName: 'Cappadocia Tours',
    title: 'Cappadocia Tours | Hot Air Balloon Rides & Cultural Experiences',
    description: 'Discover the best Cappadocia tours including hot air balloon rides, cultural tours, and adventure experiences.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cappadocia Tours',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cappadocia Tours',
    description: 'Discover the best Cappadocia tours',
    images: ['/og-image.jpg'],
    creator: '@cappadociatours',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
