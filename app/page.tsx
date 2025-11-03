import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProductsSection from './components/ProductsSection';
import ServicesSection from './components/ServicesSection';
import IndustriesSection from './components/IndustriesSection';
import TeamSection from './components/TeamSection';
import CallToActionSection from './components/CallToActionSection';
import PartnersSection from './components/PartnersSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PartnersSection />
      <WhatWeDoSection />
      <AboutSection />
      <ProductsSection />
      <ServicesSection />
      <TeamSection/>
      <TestimonialsSection />
      <IndustriesSection />
      <CallToActionSection />
    </main>
  );
}
