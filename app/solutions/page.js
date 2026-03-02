import { SolutionsSEO } from '@/src/components/SEOHead';
import IndustriesSection from '@/src/components/solutions/IndustriesSection';
import SolutionsHero from '@/src/components/solutions/SolutionsHero';
import SolutionsProcess from '@/src/components/solutions/SolutionsProcess';
import SolutionsSection from '@/src/components/solutions/SolutionsSection';
import CoreSolutions from '@/src/components/solutions/CoreSolutions';

import FinalCTA from '@/src/components/solutions/FinalCTA';

export default function SolutionsPage() {
  return (
    <>
      <SolutionsSEO />
      <SolutionsHero />
      <SolutionsSection />
      <SolutionsProcess />
      <IndustriesSection />
      <CoreSolutions />
     
      <FinalCTA />

    </>
  );
}