export default function PartneringHeroSection() {
    return (
        <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Partnering Badge */}
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                            Strategic Partnerships
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6">
                        <span className="block">Building Value-Based</span>
                        <span className="block text-secondary">Relationships</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Collaboration and strategic partnerships are key fundamentals in our business. Together, we create sustainable growth and innovation.
                    </p>
                </div>
            </div>
        </section>
    );
}
