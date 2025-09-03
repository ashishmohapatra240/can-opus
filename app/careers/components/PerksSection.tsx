import {
    FaHeartbeat,
    FaPiggyBank,
    FaGraduationCap,
    FaUsers,
    FaHandsHelping,
    FaHome,
    FaUtensils,
    FaBalanceScale,
    FaBus
} from 'react-icons/fa';

export default function PerksSection() {
    const perks = [
        {
            title: "Health Insurance",
            description: "Comprehensive health coverage for you and your family",
            icon: <FaHeartbeat className="w-8 h-8" />
        },
        {
            title: "Provident Fund",
            description: "Secure your future with our PF benefits",
            icon: <FaPiggyBank className="w-8 h-8" />
        },
        {
            title: "Training",
            description: "Continuous learning and skill development programs",
            icon: <FaGraduationCap className="w-8 h-8" />
        },
        {
            title: "Employee Engagements",
            description: "Team building activities and social events",
            icon: <FaUsers className="w-8 h-8" />
        },
        {
            title: "Employee Assistance",
            description: "Support services for personal and professional growth",
            icon: <FaHandsHelping className="w-8 h-8" />
        },
        {
            title: "Free Boarding",
            description: "Accommodation facilities for outstation employees",
            icon: <FaHome className="w-8 h-8" />
        },
        {
            title: "Lunch Services",
            description: "Complimentary meals and refreshments",
            icon: <FaUtensils className="w-8 h-8" />
        },
        {
            title: "Work-Life Balance",
            description: "Flexible working hours and remote work options",
            icon: <FaBalanceScale className="w-8 h-8" />
        },
        {
            title: "Free Pickup & Drop*",
            description: "Transportation facility for employees",
            icon: <FaBus className="w-8 h-8" />
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex px-4 py-2 rounded-full text-sm font-medium border border-gray-300 text-gray-700 mb-8">
                        Employee Benefits
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        <span className="block">Perks of Working</span>
                        <span className="block text-gray-500">with CanOpus</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        We work with a strong drive of commitment in whatever we do and offer result focused
                        solutions to our clients while taking care of our team&apos;s well-being.
                    </p>
                </div>

                {/* Perks Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {perks.map((perk, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 lg:p-8 text-center hover:border-gray-300 transition-colors group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-700 rounded-2xl mb-6 group-hover:bg-gray-200 transition-colors">
                                {perk.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-3">{perk.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{perk.description}</p>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}
