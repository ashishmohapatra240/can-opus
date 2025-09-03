import PartneringCard from './PartneringCard';

export default function PartneringOpportunitiesSection() {
    const partneringOpportunities = [
        {
            imgPath: "/images/partnering/partnering-1.jpg",
            title: "Partner for Business",
            description: "Collaborate with us to explore new business ventures and expand market reach through strategic business partnerships."
        },
        {
            imgPath: "/images/partnering/partnering-2.jpg",
            title: "Partner for Services",
            description: "Join forces to enhance service offerings and deliver exceptional value to clients through comprehensive service solutions."
        },
        {
            imgPath: "/images/partnering/partnering-3.jpg",
            title: "Partner for Products",
            description: "Work together to develop and distribute innovative products that meet industry demands and customer needs."
        },
        {
            imgPath: "/images/partnering/partnering-4.jpg",
            title: "Partner for Opportunity",
            description: "Seize unique opportunities for growth and innovation through strategic alliances and forward-thinking collaborations."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6">
                        Partnership Opportunities
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Discover the diverse ways we can collaborate to create mutual value and drive innovation across multiple dimensions of business growth.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {partneringOpportunities.map((opportunity, index) => (
                        <PartneringCard
                            key={index}
                            imgPath={opportunity.imgPath as string}
                            title={opportunity.title}
                            description={opportunity.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
