import { ServicesSEO } from '@/src/components/SEOHead';
import ServicesHeader from '@/src/components/services/ServicesHeader';
import ServicesGrid from '@/src/components/services/ServicesGrid';
import TechnologyStack from '@/src/components/services/TechnologyStack';
import ServicesCTA from '@/src/components/services/ServicesCTA';

export default function ServicesPage() {
  return (
    <>
      <ServicesSEO />
      <ServicesHeader />
      <ServicesGrid />
   
      <TechnologyStack />
      <ServicesCTA />
    </>
  );
}