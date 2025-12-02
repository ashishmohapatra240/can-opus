import { RiBuildingLine, RiSettingsLine, RiWindyLine, RiShieldStarLine } from 'react-icons/ri';

interface OfferingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function OfferingCard({ icon, title, description }: OfferingCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 hover:shadow-sm transition-shadow duration-300 h-full">
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <div className="text-primary text-2xl">
              {icon}
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg lg:text-xl font-semibold text-black">
              {title}
            </h3>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

interface KeyOffering {
  title: string;
  description: string;
}

interface KeyOfferingsSectionProps {
  offerings: KeyOffering[];
}

export default function KeyOfferingsSection({ offerings }: KeyOfferingsSectionProps) {
  const icons = [
    <RiBuildingLine key="building" />,
    <RiSettingsLine key="settings" />,
    <RiWindyLine key="windy" />,
    <RiShieldStarLine key="shield-star" />
  ];

  // Take only the first 4 offerings
  const displayOfferings = offerings.slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Key Offerings
          </h2>
        </div>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {displayOfferings.map((offering, index) => (
            <OfferingCard
              key={index}
              icon={icons[index]}
              title={offering.title}
              description={offering.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
