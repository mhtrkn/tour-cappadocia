import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.paphlagoniatour.com"
  ),
  title: {
    default: "Paphlagonia Tour | Hot Air Balloon Rides & Cultural Experiences",
    template: "%s | Paphlagonia Tour",
  },
  description:
    "Discover the best Cappadocia tours including hot air balloon rides, cultural tours, and adventure experiences. Book your unforgettable journey today.",
  keywords: [
    "cappadocia",
    "cappadocia tour",
    "kapadokya",
    "kapadokya tur",
    "tours",
    "hot air balloon",
    "turkey",
    "travel",
    "goreme",
  ],
  authors: [{ name: "Paphlagonia Tour" }],
  creator: "Paphlagonia Tour",
  publisher: "Paphlagonia Tour",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["tr_TR"],
    url: "https://www.paphlagoniatour.com",
    siteName: "Paphlagonia Tour",
    title: "Paphlagonia Tour | Hot Air Balloon Rides & Cultural Experiences",
    description:
      "Discover the best Cappadocia tours including hot air balloon rides, cultural tours, and adventure experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cappadocia Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paphlagonia Tours",
    description: "Discover the best Paphlagonia tours",
    images: ["/og-image.jpg"],
    creator: "@paphlagoniatours",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className="font-sans antialiased theme-light">
        {children}
      </body>
    </html>
  );
}
