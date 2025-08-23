import { RiShieldCheckLine, RiLightbulbLine, RiHandHeartLine, RiRocketLine } from 'react-icons/ri';
import FeatureCard from '../../components/FeatureCard';

export default function ValuesSection() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-yellow-400 text-black">
                            Our Values
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                        <span className="block">Core principles that</span>
                        <span className="block text-black/30">guide everything we do</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Our values shape our culture, drive our decisions, and define how we serve our clients and community.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    <FeatureCard
                        icon={<RiShieldCheckLine className="w-8 h-8 lg:w-10 lg:h-10 text-gray-700" />}
                        title="Integrity & Trust"
                        description="We build lasting relationships through honest communication, transparent practices, and unwavering commitment to our promises."
                    />
                    
                    <FeatureCard
                        icon={<RiLightbulbLine className="w-8 h-8 lg:w-10 lg:h-10 text-gray-700" />}
                        title="Innovation & Excellence"
                        description="We continuously seek innovative solutions and maintain the highest standards of quality in everything we deliver."
                    />
                    
                    <FeatureCard
                        icon={<RiHandHeartLine className="w-8 h-8 lg:w-10 lg:h-10 text-gray-700" />}
                        title="Customer Partnership"
                        description="We view our clients as partners, working collaboratively to understand their unique needs and exceed their expectations."
                    />

                    <FeatureCard
                        icon={<RiRocketLine className="w-8 h-8 lg:w-10 lg:h-10 text-gray-700" />}
                        title="Sustainable Growth"
                        description="We are committed to solutions that drive both business success and environmental responsibility for a better future."
                    />
                </div>
            </div>
        </section>
    );
}
