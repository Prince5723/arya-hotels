import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const bodyFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AARYA Hotels & Resorts | Luxury & Heritage Hospitality in India",
    template: "%s | AARYA Hotels & Resorts",
  },
  description:
    "AARYA Hotels & Resorts is a growing hospitality chain in India offering luxury hotels, resorts, and personalized experiences inspired by Atithi Devo Bhavah. Discover comfort, heritage, and true value hospitality.",
  keywords: [
    "AARYA Hotels",
    "Hotels in India",
    "Luxury Hotels",
    "Resorts in India",
    "Heritage Hospitality",
    "Business Hotels",
    "Wedding Resorts",
    "Pilgrim Hotels",
  ],
  authors: [{ name: "AARYA Hotels & Resorts" }],
  metadataBase: new URL("https://aarya-hotels.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AARYA Hotels & Resorts | True Value Hospitality in India",
    description:
      "Experience modern comfort blended with Indian heritage at AARYA Hotels & Resorts. Hotels and resorts across India for business, leisure, pilgrim, and weddings.",
    url: "https://aarya-hotels.com",
    siteName: "AARYA Hotels & Resorts",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/Aarya-logo-Golden.svg",
    shortcut: "/Aarya-logo-Golden.svg",
    apple: "/Aarya-logo-Golden.svg",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
