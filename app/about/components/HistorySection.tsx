export default function HistorySection() {
    const milestones = [
        {
            year: "2004",
            title: "Company Founded",
            description: "Canopus was established with a vision to provide innovative engineering solutions to industrial clients.",
            highlight: false
        },
        {
            year: "2008",
            title: "First Major Partnership",
            description: "Secured partnerships with leading manufacturers in filtration and monitoring equipment.",
            highlight: false
        },
        {
            year: "2012",
            title: "Expansion into Power Sector",
            description: "Extended our expertise to power generation and transmission technologies.",
            highlight: true
        },
        {
            year: "2016",
            title: "Environmental Focus",
            description: "Launched dedicated environmental solutions division focusing on emission monitoring and control.",
            highlight: false
        },
        {
            year: "2020",
            title: "Digital Transformation",
            description: "Integrated IoT and digital monitoring solutions into our service offerings.",
            highlight: true
        },
        {
            year: "2024",
            title: "Sustainable Future",
            description: "Leading the industry in sustainable engineering solutions with reduced carbon footprint technologies.",
            highlight: false
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-yellow-400 text-black">
                            Our Journey
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                        <span className="block">Two decades of</span>
                        <span className="block text-black/30">innovation and growth</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        From a small engineering firm to a trusted industry leader, our journey reflects our commitment to excellence and innovation.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-yellow-400"></div>

                    {/* Timeline items */}
                    <div className="space-y-12">
                        {milestones.map((milestone, index) => (
                            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                {/* Timeline dot */}
                                <div className={`absolute left-4 lg:left-1/2 transform lg:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white ${milestone.highlight ? 'bg-yellow-500' : 'bg-gray-400'} z-10`}></div>

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
