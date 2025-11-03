export default function CareersHeroSection() {
    return (
        <section className="bg-gray-50 pt-20 pb-16 lg:pt-28 lg:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white mb-8">
                        Join Our Team
                    </div>
                    
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6">
                        <span className="block">Build Your Career</span>
                        <span className="block text-secondary">with CanOpus</span>
                    </h1>
                    
                    {/* Description */}
                    <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                        Our commitment is at the heart of everything we do: from people, process to products. 
                        CanOpus is a young, dynamic and technology focused engineering solutions company providing 
                        services to some of the most respected companies in India.
                    </p>
                    
                    {/* CTA Button */}
                    <div className="flex justify-center">
                        <a href="#open-positions" className="px-8 py-4 bg-primary hover:bg-primary/80 text-white font-semibold rounded-full transition-colors cursor-pointer">
                            View Open Positions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
