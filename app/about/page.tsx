import { Metadata } from 'next';
import AboutHeroSection from './components/AboutHeroSection';
import CompanyOverviewSection from './components/CompanyOverviewSection';
import MissionVisionSection from './components/MissionVisionSection';
import ValuesSection from './components/ValuesSection';
import HistorySection from './components/HistorySection';
import TeamSection from '../components/TeamSection';
import CallToActionSection from '../components/CallToActionSection';

export const metadata: Metadata = {
    title: 'About Us - Canopus | Engineering Solutions Provider',
    description: 'Learn about Canopus, a trusted engineering solutions provider with over 10 years of industry excellence (2014–2025). Discover our mission, values, and milestones.',
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutHeroSection />
            <CompanyOverviewSection />
            <MissionVisionSection />
            <ValuesSection />
            <HistorySection />
            <TeamSection />
            <CallToActionSection />
        </main>
    );
}
