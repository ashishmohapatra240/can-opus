import { FaHandshake, FaGlobe, FaPuzzlePiece, FaEye, FaLightbulb, FaChartLine } from 'react-icons/fa';

export default function BusinessPartnershipSection() {
    const businessFocus = [
        {
            img: <FaHandshake />,
            title: "Aligned Core Values",
            description: "Ensuring that our partners share similar ethical standards and business philosophies."
        },
        {
            img: <FaGlobe />,
            title: "Value - Society",
            description: "Collaborating on initiatives that contribute positively to the community and environment."
        },
        {
            img: <FaPuzzlePiece />,
            title: "Complementing Capabilities",
            description: "Leveraging each other's strengths to achieve common goals and maximize potential."
        },
        {
            img: <FaEye />,
            title: "Strategic Vision",
            description: "Developing long-term plans that align with market trends and future opportunities."
        },
        {
            img: <FaLightbulb />,
            title: "Business Innovation",
            description: "Fostering a culture of creativity and continuous improvement in all our endeavors."
        },
        {
            icon: <FaChartLine />,
            title: "Business Scalability",
            description: "Building partnerships that support sustainable growth and adaptability to market changes."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-6">
                        Our Business Partnership Focus
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        These core principles guide our approach to building meaningful and lasting business relationships.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {businessFocus.map((focus, index) => (
                        <div 
                            key={index}
                            className="group p-8 rounded-2xl border border-gray-200 "
                        >
                            {/* Icon */}
                            <div className="text-4xl text-gray-600 mb-6">
                                {focus.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-black mb-4">
                                {focus.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {focus.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
