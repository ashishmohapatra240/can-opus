import Image from 'next/image';

export default function DirectorQuoteSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden">
                    <div className="grid lg:grid-cols-2 gap-0">
                        <div className="relative bg-black overflow-hidden min-h-[400px]">
                            <Image
                                src="/images/events/director.jpg"
                                alt="Siddhartha Sharma"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="p-12 flex flex-col justify-center">
                            <div className="space-y-2">
                                <div className="text-8xl text-gray-200 leading-none">
                                    &quot;
                                </div>

                                <blockquote className="text-xl md:text-2xl leading-relaxed text-gray-800 font-light">
                                    At CanOpus we have always valued our association with our partners, stakeholders and associates.
                                    We are very much thankful to all of them for helping us create what we are today. Our business
                                    is fundamentally based on identifying the right partners sharing common vision and goals and
                                    together making things happen. Come, let&apos;s explore more possibilities together.
                                </blockquote>

                                {/* Director Name and Position */}
                                <div className="pt-8 border-t border-gray-200">
                                    <h3 className="text-2xl font-bold mb-2 tracking-tight text-gray-900">
                                        Siddhartha Sharma
                                    </h3>
                                    <div className="space-y-1">
                                        <p className="text-gray-600 text-lg font-light">
                                            Managing Partner
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
