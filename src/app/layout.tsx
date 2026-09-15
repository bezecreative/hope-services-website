import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SITE, SITE_URL } from "@/lib/site";
import "./globals.css";

const display = localFont({
  src: "../fonts/KenyanCoffee-Bold.woff2",
  weight: "700",
  style: "normal",
  variable: "--font-display",
  display: "swap",
  preload: true,
  adjustFontFallback: "Arial",
});

const body = localFont({
  src: [
    { path: "../fonts/Metropolis-500.woff2", weight: "500", style: "normal" },
    { path: "../fonts/Metropolis-600.woff2", weight: "600", style: "normal" },
    { path: "../fonts/Metropolis-700.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  preload: true,
  adjustFontFallback: "Arial",
});

const title = `${SITE.name} | ${SITE.tagline}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    "supported living Idaho",
    "developmental disabilities services Meridian",
    "supported living Meridian ID",
    "Hope Services Idaho",
    "residential habilitation Idaho",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: SITE.name,
    title,
    description: SITE.description,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: "Hope Services - Supported Living for Idaho's Adults",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: SITE.description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#00B3E4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  );
}
