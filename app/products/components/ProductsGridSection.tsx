import ProductCard from '../../components/ProductCard';

export default function ProductsGridSection() {
    const products = [
        {
            id: 1,
            image: '/images/products/Industrial Dust, Fume and Mist.png',
            title: 'Industrial Dust, Fume & Mist',
            description: 'Complete range of dust collection equipment. Efficient & Energy Saving Dust Extraction Systems in Pneumatic & Centralized Solutions is our Specialty.'
        },
        {
            id: 2,
            image: '/images/products/Emission Monitoring.png',
            title: 'Emission Monitoring',
            description: 'Continuous Monitoring Systems (CMS) enable to track the SO2, CO, NOX, Ammonia, or PM2.5 & PM10 Particles in the Industrial Air. Find Total Mercury or both Elemental and Ionic Mercury Systems designed & installed by CanOpus.'
        },
        {
            id: 3,
            image: '/images/products/Power Transmission Tech.png',
            title: 'Power Transmission Tech',
            description: 'Mechanical Power Transmission Technology through products that not only add to the machinery performance but also significantly improve its reliability with quality state-of-the-art technology for power products that help you energy efficiency.'
        },
        {
            id: 4,
            image: '/images/products/Gas turbine filtration.png',
            title: 'Gas turbine filtration',
            description: 'Gas Turbine systems are capable to upgrade performance efficiency & availability of any Gas Turbine (GT) or Air Compressor. CanOpus offer the best in Class Coalescer Sucker Web media for your GTs'
        },
        {
            id: 5,
            image: '/images/products/Gas phase filtration.png',
            title: 'Gas phase filtration',
            description: 'CanOpus helps you eliminate Toxic & Hazardous Gases as well as bad Odors from the Industrial Air.'
        },
        {
            id: 6,
            image: '/images/products/Flow & level instrument.png',
            title: 'Flow & level instrument',
            description: 'Experience the true Measure of Quality with our Higher Accuracies. CanOpus Supplies & Installs Flow Meters to check and sustain with accuracy to the Decade.'
        },
        {
            id: 7,
            image: '/images/products/Condition monitoring equipment.png',
            title: 'Condition monitoring equipment',
            description: 'CanOpus Laser Online Sensor Alignment should not eat into your maintenance budget. Better it should save the budget. Experience & Digital Sensor Equipment from CanOpus.'
        },
        {
            id: 8,
            image: '/images/products/Screw pumps.png',
            title: 'Screw pumps',
            description: 'Single Double or Triple Screw Pumps for transport of viscous fluids with lubricating properties for a variety of applications in Industrial Process for Energy Production, boating, hydraulics, fuel, lubrication, circulating, food and so on.'
        },
        {
            id: 9,
            image: '/images/products/Microbial filtration.png',
            title: 'Microbial filtration',
            description: 'At CanOpus, we enjoy improving the Quality of Air you breathe, with virus filters & Masks & Air Purifiers for Pharmaceutical, Electronics & Food Industry.'
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Our Products Badge */}
                <div className="flex mb-8">
                    <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-yellow-400 text-black">
                        Our Products
                    </span>
                </div>

                {/* Main Heading */}
                <div className="mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                        <span className="block">Committed to provide the best-in-class</span>
                        <span className="block text-black/30">Engineering Solutions</span>
                    </h2>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}