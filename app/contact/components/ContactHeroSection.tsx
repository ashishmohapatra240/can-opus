export default function ContactHeroSection() {
    return (
        <section className="pt-20 pb-16 lg:pt-28 lg:pb-24 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Contact Us Badge */}
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                            Contact Us
                        </span>
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-black leading-tight mb-6">
                        <span className="block">Let&apos;s Build Something</span>
                        <span className="block text-secondary">Amazing Together</span>
                    </h1>

                    {/* Subtitle */}
                    <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Ready to transform your operations with innovative engineering solutions? Our team of experts is here to help you achieve operational excellence.
                    </p>
                </div>
            </div>
        </section>
    );
}
