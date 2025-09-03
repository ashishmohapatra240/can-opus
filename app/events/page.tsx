import EventHeroSlider from './components/EventHeroSlider';
import EventInfoSection from './components/EventInfoSection';
import ProgrammeAgendaFlowchart from './components/ProgrammeAgendaFlowchart';
import PhotoGallerySection from './components/PhotoGallerySection';
import DirectorSection from './components/DirectorSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from '../components/Footer';

export default function EventsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Slider */}
      <EventHeroSlider />
      
      {/* Event Information */}
      <EventInfoSection />
      
      {/* Programme Agenda Flowchart */}
      <ProgrammeAgendaFlowchart />
      
      {/* Photo Gallery */}
      <PhotoGallerySection />
      
      {/* Director Section */}
      <DirectorSection />
      
      {/* Testimonials */}
      <TestimonialsSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
