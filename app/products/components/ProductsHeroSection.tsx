export default function ProductsHeroSection() {
    return (
        <section className="bg-gray-50 pt-20 pb-16 lg:pt-28 lg:pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* Badge */}
                    <div className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-yellow-400 text-black mb-8">
                        Our Products
                    </div>
                    
                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6">
                        <span className="block">Engineering Solutions</span>
                        <span className="block text-black/30">for Every Industry</span>
                    </h1>
                    
                    {/* Description */}
                    <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                        Discover our comprehensive range of industrial equipment and solutions. 
                        From dust collection systems to emission monitoring, we provide cutting-edge 
                        technology that drives efficiency and excellence across industries.
                    </p>
                </div>
            </div>
        </section>
    );
}
