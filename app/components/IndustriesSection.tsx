import LinkedIndustryCard from './LinkedIndustryCard';

export default function IndustriesSection() {
    const industries = [
        {
            id: 1,
            slug: 'steel',
            image: '/images/industries/Steel Industry.png',
            title: 'Steel Industry',
            description: 'Aid for Production Targets, Low Cost Maintenance, Reuse the Dust, CanOpus Delivers it all.'
        },
        {
            id: 2,
            slug: 'paper',
            image: '/images/industries/Paper Industry.png',
            title: 'Paper Industry',
            description: 'Analyze, plan, design, manage, and nurture the power transmission, anti-friction components running.'
        },
        {
            id: 3,
            slug: 'power',
            image: '/images/industries/Power Industry.png',
            title: 'Power Industry',
            description: 'Gas or Coal, CanOpus Primes to deliver the efficiency for power generation.'
        },
        {
            id: 4,
            slug: 'fertilizer',
            image: '/images/industries/Fertilizer Industry.png',
            title: 'Fertilizer Industry',
            description: 'Fertilizer needs lot powder chemicals and Gases in finding Quality production.'
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12 lg:mb-16">
                    {/* Industries Badge */}
                    <div className="flex mb-8">
                        <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                            Industries
                        </span>
                    </div>

                    {/* Main Heading */}
                    <div className="mb-5">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                            <span className="block">Unlocking the different industries with</span>
                            <span className="block text-secondary">absolute ease</span>
                        </h2>
                    </div>
                </div>

                {/* Industries Grid - 4 cards per row on large screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                    {industries.map((industry) => (
                        <LinkedIndustryCard
                            key={industry.id}
                            image={industry.image}
                            title={industry.title}
                            description={industry.description}
                            slug={industry.slug}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
