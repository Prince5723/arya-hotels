import type { Metadata } from "next";

import { HeroHeader } from "@/components/blocks/navbar";
import { HeroHotelPage } from "@/components/blocks/hero-hotel-page";
import { FeatureHotelDemo } from "@/components/blocks/hotels-details";
import Testimonials from "@/components/blocks/testimonials";
import KineticScrollGallery from "@/components/kinetic-scroll-gallery";
import { ContactPage } from "@/components/ui/contact-page";
import Footer from "@/components/blocks/footer";

/* ---------- SEO METADATA ---------- */

export const metadata: Metadata = {
  title: "AARYA Hotel Ramnagar | Luxury Stay Near Jim Corbett National Park",
  description:
    "Experience luxury and comfort at AARYA Hotel Ramnagar. A premium hotel near Jim Corbett National Park offering elegant rooms, modern amenities, personalized hospitality, and serene surroundings.",
  keywords: [
    "AARYA Hotel Ramnagar",
    "Hotels in Ramnagar",
    "Hotels near Jim Corbett",
    "Luxury hotel in Ramnagar",
    "Resort near Jim Corbett National Park",
    "Best hotel in Ramnagar",
  ],
  alternates: {
    canonical: "https://aarya-hotels.com/hotels/ramnagar",
  },
  openGraph: {
    title: "AARYA Hotel Ramnagar | Luxury Hotel Near Jim Corbett",
    description:
      "Stay at AARYA Hotel Ramnagar, a luxury hotel near Jim Corbett National Park. Ideal for leisure, adventure, and peaceful getaways.",
    url: "https://aarya-hotels.com/hotels/ramnagar",
    siteName: "AARYA Hotels & Resorts",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

/* ---------- PAGE ---------- */

export default function HotelPage() {
  return (
    <>
      <HeroHeader />

      <main className="flex flex-col gap-12 md:gap-16 lg:gap-20">
        <HeroHotelPage />
        <FeatureHotelDemo />
        <Testimonials />
        <KineticScrollGallery />
        <ContactPage />
      </main>

      <Footer />
    </>
  );
}
