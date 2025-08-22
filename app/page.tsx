import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import TeamSection from './components/TeamSection';
import CallToActionSection from './components/CallToActionSection';
import PartnersSection from './components/PartnersSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <TeamSection/>
      <IndustriesSection />
      <CallToActionSection />
    </main>
  );
}
