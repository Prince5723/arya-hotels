import { HeroSection } from "@/components/blocks/hero-section-5";
import {HeroHotelPage} from "@/components/blocks/hero-hotel-page";
import {FeatureHotelDemo} from "@/components/blocks/hotels-details";
import Testimonials from "@/components/blocks/testimonials";
import KineticScrollGallery from "@/components/kinetic-scroll-gallery";
import { ContactPage } from "@/components/ui/contact-page";
import Footer from "@/components/blocks/footer";


export default function HotelPage() {
  return (
    <>
      <HeroSection />
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
        <HeroHotelPage/>
        <FeatureHotelDemo/>
        <Testimonials/>
        <KineticScrollGallery/>
        <ContactPage/>
      </div>
      <Footer />
    </>
  );
}
