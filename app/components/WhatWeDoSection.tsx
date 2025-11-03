import Link from 'next/link';

export default function WhatWeDoSection() {
    const sections = [
        {
            title: 'Products',
            description: 'Bearings, seals, lubrication systems and surrounding equipment for enhanced reliability and performance.',
            link: '/products',
            linkText: 'View products'
        },
        {
            title: 'Services',
            description: 'Engineering, maintenance, condition monitoring, and remanufacturing for full life cycle management.',
            link: '/services',
            linkText: 'View services'
        },
        {
            title: 'Industries',
            description: 'Industry-specific solutions tailored to the needs and challenges of your sector.',
            link: '/industries',
            linkText: 'View industries'
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* What We Do Badge */}
                <div className="flex mb-8">
                    <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                        What We Do
                    </span>
                </div>

                {/* Main Heading */}
                <div className="mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                        <span className="block">Comprehensive solutions for</span>
                        <span className="block text-secondary">your business needs</span>
                    </h2>
                </div>

                {/* Three Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {sections.map((section, index) => (
                        <div key={index} className="flex flex-col">
                            {/* Title */}
                            <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                                {section.title}
                            </h3>

                            {/* Description */}
                            <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                                {section.description}
                            </p>

                            {/* Link */}
                            <Link 
                                href={section.link}
                                className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-base transition-colors duration-300"
                            >
                                <span>→ {section.linkText}</span>
                                <svg 
                                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

