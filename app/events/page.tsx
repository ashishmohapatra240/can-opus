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
      <EventHeroSlider />
      <EventInfoSection />
      <ProgrammeAgendaFlowchart />
      <PhotoGallerySection />
      <DirectorSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
