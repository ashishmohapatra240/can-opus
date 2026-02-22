import { RiRocketLine, RiCustomerServiceLine, RiCodeSSlashLine } from 'react-icons/ri';
import FeatureCard from './FeatureCard';

export default function AboutSection() {
    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* About Us Badge */}
                <div className="flex mb-8">
                    <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                        About Us
                    </span>
                </div>

                {/* Main Heading */}
                <div className="mb-5">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                        <span className="block">Trusted partner for over 10 years</span>
                        <span className="block text-secondary">of industry excellence</span>
                    </h2>
                </div>

                {/* Description */}
                <div className="mb-10">
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                        CanOpus is a focused engineering solutions provider. A services company helping the client with improved operational efficiency and reduced carbon footprint. Representing Manufacturers who care the Equipment and Environment.
                    </p>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                        We are a chosen Partner of our valued clients, embracing the latest technology in the Market, that improves the efficiency and performance of Machines.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    <FeatureCard
                        icon={<RiRocketLine className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />}
                        title="High-Quality Products & Services"
                        description="We are a partner of choice for our valued clients because of our superior quality products and solutions."
                    />
                    
                    <FeatureCard
                        icon={<RiCustomerServiceLine className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />}
                        title="Customer-Centric Results"
                        description="Our result-oriented products and solutions are centered around the unique requirement of our clients."
                    />
                    
                    <FeatureCard
                        icon={<RiCodeSSlashLine className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />}
                        title="Technology Focused Solutions"
                        description="We embrace the latest technology that improves the efficiency and performance of the machinery and industry line."
                    />
                </div>
            </div>
        </section>
    );
}
