export default function HistorySection() {
    const milestones = [
        {
            year: "2014",
            title: "Foundation Year",
            description: "Company established with a focus on Hydraulic Oil Filters. Built strong relationships with initial customers and partners.",
            highlight: true
        },
        {
            year: "2015",
            title: "Market Penetration",
            description: "Expanded client base across industrial sectors. Strengthened supply chain and technical support systems.",
            highlight: false
        },
        {
            year: "2016",
            title: "Operational Strength",
            description: "Improved internal processes and quality standards. Built a dedicated professional team.",
            highlight: false
        },
        {
            year: "2017",
            title: "Dust Collection Systems Expansion",
            description: "Introduced Dust Collection & Dust Extraction Systems. Delivered customized engineered solutions.",
            highlight: true
        },
        {
            year: "2018",
            title: "Industrial Solution Provider",
            description: "Expanded project-based solutions across industries. Enhanced after-sales service and customer support.",
            highlight: false
        },
        {
            year: "2019",
            title: "People & Services Growth",
            description: "Expanded service portfolio. Strengthened on-site technical support team.",
            highlight: false
        },
        {
            year: "2020",
            title: "Technology Integration",
            description: "Focused on advanced engineering applications. Improved operational efficiency and safety standards.",
            highlight: false
        },
        {
            year: "2021",
            title: "Reliability & Trust",
            description: "Strengthened reputation for dependable engineering solutions. Expanded partnerships and repeat business.",
            highlight: false
        },
        {
            year: "2022",
            title: "Bearing & Mechanical Solutions",
            description: "Entered bearing and mechanical reliability solutions. Enhanced industrial maintenance capabilities.",
            highlight: true
        },
        {
            year: "2023",
            title: "Advanced Engineering Services",
            description: "Expanded into Condition-Based Maintenance (CBM). Increased automation-driven support solutions.",
            highlight: false
        },
        {
            year: "2024",
            title: "Smart Monitoring Solutions",
            description: "Introduced advanced monitoring systems. Strengthened predictive maintenance offerings.",
            highlight: false
        },
        {
            year: "2025",
            title: "CBM & Sensor Technology Era",
            description: "Integrated CBM Technology & Smart Sensor Solutions. Celebrating 10 Years of Engineering Excellence.",
            highlight: true
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                            Our Journey
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                        <span className="block">Year-wise achievements</span>
                        <span className="block text-secondary">2014–2025</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        From hydraulic oil filters to complete engineering solutions—delivered across industries, grown through trust and partnerships, and driven by cutting-edge technology for industrial excellence.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary"></div>

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                {/* Timeline dot */}
                                <div className={`absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white ${milestone.highlight ? 'bg-primary/80' : 'bg-gray-400'} z-10`}></div>

                                {/* Content */}
                                <div className={`ml-12 lg:ml-0 lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                                    <div className={`bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-200 ${milestone.highlight ? 'ring-2 ring-yellow-200' : ''}`}>
                                        <div className="flex items-center mb-4">
                                            <span className={`text-2xl lg:text-3xl font-bold ${milestone.highlight ? 'text-yellow-600' : 'text-gray-400'} mr-4`}>
                                                {milestone.year}
                                            </span>
                                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900">
                                                {milestone.title}
                                            </h3>
                                        </div>
                                        <p className="text-gray-600 leading-relaxed">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for opposite side */}
                                <div className="hidden lg:block lg:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
