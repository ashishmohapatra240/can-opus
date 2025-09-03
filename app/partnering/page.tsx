import PartneringHeroSection from './components/PartneringHeroSection';
import PartneringOpportunitiesSection from './components/PartneringOpportunitiesSection';
import PartneringContentSection from './components/PartneringContentSection';
import BusinessPartnershipSection from './components/BusinessPartnershipSection';
import DirectorQuoteSection from './components/DirectorQuoteSection';

export default function PartneringPage() {
  return (
    <main className="min-h-screen">
      <PartneringHeroSection />
      <PartneringOpportunitiesSection />
      <PartneringContentSection />
      <BusinessPartnershipSection />
      <DirectorQuoteSection />
    </main>
  );
}
