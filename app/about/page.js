import { AboutSEO } from '@/src/components/SEOHead';
import AboutHeader from '@/src/components/about/AboutHeader';
import CompanyStory from '@/src/components/about/CompanyStory';
import TeamShowcase from '@/src/components/about/TeamShowcase';
import CompanyValues from '@/src/components/about/CompanyValues';
import AchievementStats from '@/src/components/about/AchievementStats';
import AboutCTA from '@/src/components/about/AboutCTA';

export default function AboutPage() {
  return (
    <>
      <AboutSEO />
      <AboutHeader />
      <CompanyStory />
      <TeamShowcase />
      <CompanyValues />
      <AchievementStats />
      <AboutCTA />
    </>
  );
}