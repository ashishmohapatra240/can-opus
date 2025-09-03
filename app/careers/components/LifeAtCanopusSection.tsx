import Image from "next/image";

export default function LifeAtCanopusSection() {
    const galleryImages = [
        {
            src: "/images/careers/CG-01.jpg",
            alt: "Team collaboration at CanOpus"
        },
        {
            src: "/images/careers/CG-02.jpg",
            alt: "Innovation workshop"
        },
        {
            src: "/images/careers/CG-03.jpg",
            alt: "Office environment"
        },
        {
            src: "/images/careers/CG-04.jpg",
            alt: "Team celebration"
        },
        {
            src: "/images/careers/CG-05.jpg",
            alt: "Team celebration"
        },
        {
            src: "/images/careers/CG-06.jpg",
            alt: "Team celebration"
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-yellow-400 text-black mb-8">
                        Our Culture
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                        <span className="block">Life at</span>
                        <span className="block text-black/30">CanOpus</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Experience a vibrant workplace where innovation meets collaboration.
                        Our team thrives in an environment that fosters creativity, growth, and meaningful connections.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {galleryImages.map((image, index) => (
                        <div key={index} className="relative group">
                            <div className="aspect-square bg-gray-200 rounded-2xl overflow-hidden">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
}
