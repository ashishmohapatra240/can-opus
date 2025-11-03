import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function PartnersSection() {
    // Generate array of partner image paths
    const partnerImages = Array.from({ length: 18 }, (_, i) => `/images/partners/image ${i + 1}.png`);

    return (
        <section className="py-8 lg:py-12 border-b-gray-200 border-b bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
                {/* Main Container - Responsive Layout */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12">

                    {/* Left Side - Text Content */}
                    <div className="lg:w-1/3 text-center lg:text-left">
                        <h2 className="text-gray-600 text-lg lg:text-xl font-medium font-sans mb-2">
                            Trusted by more than 20+
                        </h2>
                        <p className="text-gray-800 text-xl lg:text-2xl xl:text-3xl font-semibold font-sans">
                            companies across the world
                        </p>

                        {/* Decorative line */}
                        <div className="mt-6 flex justify-center lg:justify-start">
                            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/80 rounded-full"></div>
                        </div>
                    </div>

                    {/* Right Side - Marquee */}
                    <div className="lg:w-2/3 overflow-hidden">
                        <div className="w-full overflow-hidden">
                            <Marquee
                                speed={50}
                                gradient={true}
                                gradientColor="white"
                                gradientWidth={50}
                                pauseOnHover={false}
                                className="py-4"
                                style={{ overflow: 'hidden' }}
                            >
                                {partnerImages.map((imagePath, index) => (
                                    <div
                                        key={index}
                                        className="mx-6 lg:mx-8 w-24 lg:w-28 xl:w-32 h-12 lg:h-16 relative transition-all duration-300"
                                    >
                                        <Image
                                            src={imagePath}
                                            alt={`Partner ${index + 1}`}
                                            fill
                                            className="object-contain transition-all duration-300"
                                            sizes="(max-width: 1024px) 96px, (max-width: 1280px) 112px, 128px"
                                        />
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
