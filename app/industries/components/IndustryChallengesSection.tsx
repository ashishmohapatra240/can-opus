import { RiOpenArmFill, RiToolsFill, RiTimeFill, RiShieldCheckFill } from 'react-icons/ri';

interface ChallengeCardProps {
  icon: React.ReactNode;
  title: string;
}

function ChallengeCard({ icon, title }: ChallengeCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 hover:shadow-sm transition-shadow duration-300">
      <div className="flex items-center gap-4">
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
    </div>
  );
}

interface IndustryChallengesSectionProps {
  challenges: string[];
}

export default function IndustryChallengesSection({ challenges }: IndustryChallengesSectionProps) {
  const icons = [
    <RiOpenArmFill key="dust" />,
    <RiToolsFill key="tools" />,
    <RiTimeFill key="time" />,
    <RiShieldCheckFill key="shield" />
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 lg:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
            Industry Challenges
          </h2>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {challenges.map((challenge, index) => (
            <ChallengeCard
              key={index}
              icon={icons[index]}
              title={challenge}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
