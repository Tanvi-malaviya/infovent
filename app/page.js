import Image from "next/image";
import Navbar from "@/src/components/Navbar";




import { HomeSEO } from "@/src/components/SEOHead";
import HeroSection from "@/src/components/home/HeroSection";
import ServicesSection from "@/src/components/home/ServicesSection";
import TestimonialsSection from "@/src/components/home/TestimonialsSection";
import WhyChooseUsSection from "@/src/components/home/WhyChooseUsSection";
import CTASection from "@/src/components/home/CTASection";
import Footer from "@/src/components/home/Footer";

export default function Home() {
  return (
    <>
      <HomeSEO />
    
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <CTASection />
     
    
    </>
  );
}
