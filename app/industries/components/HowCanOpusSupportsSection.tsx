import { RiFilterLine, RiShieldCheckLine, RiPulseLine, RiToolsLine } from 'react-icons/ri';

interface SupportCardProps {
  icon: React.ReactNode;
  category: string;
  items: string[];
}

function SupportCard({ icon, category, items }: SupportCardProps) {
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
              {category}
            </h3>
          </div>
        </div>

        <div className="flex-1">
          <ul className="space-y-2">
            {items.map((item, index) => (
              <li key={index} className="text-gray-600 text-sm lg:text-base leading-relaxed">
                • {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface SupportItem {
  category: string;
  items: string[];
}

interface HowCanOpusSupportsSectionProps {
  supports: SupportItem[];
}

export default function HowCanOpusSupportsSection({ supports }: HowCanOpusSupportsSectionProps) {
  const icons = [
    <RiFilterLine key="filter" />,
    <RiShieldCheckLine key="shield" />,
    <RiPulseLine key="pulse" />,
    <RiToolsLine key="tools" />
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            How CanOpus Supports This Industry
          </h2>
        </div>

        {/* Supports Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {supports.map((support, index) => (
            <SupportCard
              key={index}
              icon={icons[index]}
              category={support.category}
              items={support.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
