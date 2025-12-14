import About from "@/components/blocks/about";
import { HeroSection } from "@/components/blocks/hero-section-5";
import {AryaRamnagar} from "@/components/blocks/arya-ramnagar";
import {UpcomingProjects} from "@/components/blocks/upcoming-projects";
import PartnerWithUs from "@/components/blocks/partner-with-us";
import { ContactPage } from "@/components/ui/contact-page";
import Footer from "@/components/blocks/footer";
import HeroHome from "@/components/blocks/hero-home";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <HeroSection /> */}
      <HeroHome/>
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
        <About />
        <AryaRamnagar />
        <UpcomingProjects/>
        <PartnerWithUs />
        <ContactPage/>
      </div>
      <Footer />
    </>
  );
}
