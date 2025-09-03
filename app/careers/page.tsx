import { Metadata } from 'next';
import CareersHeroSection from './components/CareersHeroSection';
import WhyJoinSection from './components/WhyJoinSection';
import OpenPositionsSection from './components/OpenPositionsSection';
import PerksSection from './components/PerksSection';
import LifeAtCanopusSection from './components/LifeAtCanopusSection';
import ResumeSubmissionSection from './components/ResumeSubmissionSection';

export const metadata: Metadata = {
    title: 'Careers - CanOpus | Join Our Engineering Team',
    description: 'Join CanOpus Engineering Solutions and build your career with a young, dynamic, and technology-focused company. Explore open positions and discover why our team loves working here.',
    keywords: 'careers, jobs, engineering jobs, CanOpus careers, sales engineer, vibration analyst, lube oil analyst, Mumbai jobs',
};

export default function CareersPage() {
    return (
        <main className="min-h-screen">
            <CareersHeroSection />
            <WhyJoinSection />
            <OpenPositionsSection />
            <PerksSection />
            <LifeAtCanopusSection />
            <ResumeSubmissionSection />
        </main>
    );
}
