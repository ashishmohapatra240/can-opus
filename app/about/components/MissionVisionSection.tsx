import { RiFocus3Line, RiEyeLine } from 'react-icons/ri';

export default function MissionVisionSection() {
    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                            Our Purpose
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
                        Mission & Vision
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Mission */}
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mr-6">
                                <RiFocus3Line className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Mission</h3>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            To be the leading engineering solutions provider that empowers industries to achieve operational excellence while maintaining environmental sustainability.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We are committed to delivering innovative technologies and services that enhance efficiency, reduce costs, and minimize environmental impact for our clients across diverse industrial sectors.
                        </p>
                    </div>

                    {/* Vision */}
                    <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200">
                        <div className="flex items-center mb-6">
                            <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mr-6">
                                <RiEyeLine className="w-8 h-8 text-yellow-600" />
                            </div>
                            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">Our Vision</h3>
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            To create a sustainable industrial future where advanced engineering solutions drive both economic prosperity and environmental stewardship.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We envision being the most trusted partner for industries seeking to balance productivity with sustainability, setting new standards for responsible engineering practices.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
