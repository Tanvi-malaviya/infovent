import FeaturedProjects from '@/src/components/portfolio/FeaturedProjects';
import PortfolioCTA from '@/src/components/portfolio/PortfolioCTA';
import PortfolioHero from '@/src/components/portfolio/PortfolioHero';
import StatsSection from '@/src/components/portfolio/StatsSection';
import Testimonials from '@/src/components/portfolio/Testimonials';
import { PortfolioSEO } from '@/src/components/SEOHead';

export default function SolutionsPage() {
  return (
    <>
      <PortfolioSEO />
      <PortfolioHero />
      <FeaturedProjects />
      <Testimonials />
       <StatsSection />
      <PortfolioCTA />
     
     
   
    </>
  );
}