import { Metadata } from 'next';
import ContactHeroSection from './components/ContactHeroSection';

import CallToActionSection from '../components/CallToActionSection';
// import ContactInfoSection from './components/ContactInfoSection';
import ContactFormSection from './components/ContactFormSection';
import LocationSection from './components/LocationSection';

export const metadata: Metadata = {
  title: 'Contact Us - Canopus | Get in Touch',
  description: 'Contact Canopus for engineering solutions. Reach out to our team of experts for consultation, support, or partnership opportunities.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHeroSection />
      {/* <ContactInfoSection /> */}
      <ContactFormSection />
      <LocationSection />
      <CallToActionSection />
    </main>
  );
}
