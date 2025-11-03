import TeamCard from './TeamCard';

export default function TeamSection() {
    const teamMembers = [
        {
            id: 1,
            image: '/images/team/Annette Black.png',
            name: 'Annette Black',
            role: 'Customer Support Specialist'
        },
        {
            id: 2,
            image: '/images/team/Brooklyn Simmons.png',
            name: 'Brooklyn Simmons',
            role: 'Chief Technology Officer (CTO)'
        },
        {
            id: 3,
            image: '/images/team/Raman Singh.png',
            name: 'Raman Singh',
            role: 'Chief Technology Officer (CTO)'
        },
        {
            id: 4,
            image: '/images/team/Savannah Nguyen.png',
            name: 'Savannah Nguyen',
            role: 'Chief Financial Officer (CFO)'
        },
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12 lg:mb-16">
                    {/* Our Services Badge */}
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                            Our Services
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                        Meet our team
                    </h2>
                </div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                    {teamMembers.map((member) => (
                        <TeamCard
                            key={member.id}
                            image={member.image}
                            name={member.name}
                            role={member.role}
                        />
                    ))}
                </div>
            </div>


        </section>
    );
}
