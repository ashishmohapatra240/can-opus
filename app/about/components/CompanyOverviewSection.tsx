import { RiLeafLine, RiTrophyLine, RiTeamLine, RiGlobalLine } from 'react-icons/ri';
import FeatureCard from '../../components/FeatureCard';

export default function CompanyOverviewSection() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Company Overview Badge */}
                <div className="flex mb-8">
                    <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                        Our Story
                    </span>
                </div>

                {/* Main Heading */}
                <div className="mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                        <span className="block">Trusted partner for over 10 years</span>
                        <span className="block text-secondary">of industry excellence</span>
                    </h2>
                </div>

                {/* Description */}
                <div className="mb-16 max-w-5xl">
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                        CanOpus is a focused engineering solutions provider, dedicated to helping our clients achieve improved operational efficiency and reduced carbon footprint. We represent manufacturers who prioritize both equipment performance and environmental responsibility.
                    </p>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                        As a chosen partner of our valued clients, we embrace the latest technology in the market that improves the efficiency and performance of machines across various industries including power, steel, fertilizer, and paper manufacturing.
                    </p>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                        Our expertise spans condition-based machinery monitoring, filtration systems, and power transmission technologies, ensuring our clients achieve sustainable operational excellence.
                    </p>
                </div>


                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <FeatureCard
                        icon={<RiLeafLine className="w-8 h-8 lg:w-10 lg:h-10 text-gray-700" />}
                        title="Environmental Focus"
                        description="Committed to sustainable solutions that reduce environmental impact and carbon footprint."
                    />

                    <FeatureCard
                        icon={<RiTrophyLine className="w-8 h-8 lg:w-10 lg:h-10 text-gray-700" />}
                        title="Industry Leadership"
                        description="Over a decade of proven expertise and innovation in engineering solutions."
                    />

                    <FeatureCard
                        icon={<RiTeamLine className="w-8 h-8 lg:w-10 lg:h-10 text-gray-700" />}
                        title="Expert Team"
                        description="Highly skilled professionals dedicated to delivering exceptional results."
                    />

                    <FeatureCard
                        icon={<RiGlobalLine className="w-8 h-8 lg:w-10 lg:h-10 text-gray-700" />}
                        title="Global Reach"
                        description="Serving clients across multiple industries with worldwide service capabilities."
                    />
                </div>
            </div>
        </section>
    );
}
