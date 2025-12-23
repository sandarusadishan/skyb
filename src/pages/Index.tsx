import { HeroSection } from '@/components/HeroSection';
import { DestinationsGlobe } from '@/components/DestinationsGlobe';
import { ServicesGrid } from '@/components/ServicesGrid';
import { TrustSection } from '@/components/TrustSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <DestinationsGlobe />
      <ServicesGrid />
      <TrustSection />
      <Footer />
    </main>
  );
};

export default Index;
