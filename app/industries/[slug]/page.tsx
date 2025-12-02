import { notFound } from 'next/navigation';
import { getIndustryBySlug } from '../data';
import IndustryHeroSection from '../components/IndustryHeroSection';
import IndustryChallengesSection from '../components/IndustryChallengesSection';
import HowCanOpusSupportsSection from '../components/HowCanOpusSupportsSection';
import KeyOfferingsSection from '../components/KeyOfferingsSection';
import WhatWeDeliverSection from '../components/WhatWeDeliverSection';
import PartnersSection from '../../components/PartnersSection';
import CallToActionSection from '../../components/CallToActionSection';
import { RiStockFill, RiAlarmWarningFill, RiAncientGateFill  } from 'react-icons/ri';


interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function IndustryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const industry = getIndustryBySlug(resolvedParams.slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <IndustryHeroSection
        title={industry.title}
        description={industry.description}
        image={industry.image}
      />

      <IndustryChallengesSection challenges={industry.challenges} />

      <HowCanOpusSupportsSection supports={industry.supports} />

      <KeyOfferingsSection offerings={industry.keyOfferings} />

      <WhatWeDeliverSection values={industry.valueDelivered.map((value, index) => {
        const icons = [
          <RiStockFill key="stock" className="text-primary text-3xl" />,
          <RiAlarmWarningFill key="alarm" className="text-primary text-3xl" />,
          <RiAncientGateFill key="gate" className="text-primary text-3xl" />
        ];
        const icon = icons[index % icons.length];
        return {
          ...value,
          icon
        };
      })} />

      <PartnersSection />

      <CallToActionSection />
    </main>
  );
}

export function generateStaticParams() {
  return [
    { slug: 'steel' },
    { slug: 'paper' },
    { slug: 'power' },
    { slug: 'fertilizer' }
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const industry = getIndustryBySlug(resolvedParams.slug);

  if (!industry) {
    return {
      title: 'Industry Not Found'
    };
  }

  return {
    title: `${industry.title} | CanOpus Solutions`,
    description: industry.description
  };
}
