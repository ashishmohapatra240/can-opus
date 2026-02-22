import HeroSection from './components/HeroSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import PartnersSection from './components/PartnersSection';
import ProductsSection from './components/ProductsSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import IndustriesSection from './components/IndustriesSection';
import CallToActionSection from './components/CallToActionSection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatWeDoSection />
      <PartnersSection />
      <ProductsSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <IndustriesSection />
      <CallToActionSection />
    </main>
  );
}
