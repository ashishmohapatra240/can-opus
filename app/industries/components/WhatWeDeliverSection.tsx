
interface ValueCardProps {
  metric: string;
  description: string;
  icon: React.ReactNode;
}

function ValueCard({ metric, description, icon }: ValueCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 hover:shadow-sm transition-shadow duration-300 text-center">
      <div className="flex justify-center mb-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          {icon}
        </div>
      </div>

      <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
        {metric}
      </div>

      <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
}

interface ValueDelivered {
  metric: string;
  description: string;
  icon: React.ReactNode;
}

interface WhatWeDeliverSectionProps {
  values: ValueDelivered[];
}

export default function WhatWeDeliverSection({ values }: WhatWeDeliverSectionProps) {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-4">
            What We Deliver
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            Measurable results and tangible benefits for your operations
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <ValueCard
              key={index}
              metric={value.metric}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
