'use client';

import { useEnquiryModal } from '../context/EnquiryModalContext';

export default function CallToActionSection() {
    const { openEnquiryModal } = useEnquiryModal();

    return (
        <section className="relative py-16 lg:py-24 bg-black rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-8 lg:my-12 overflow-hidden">
            {/* Background decorative shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-20 top-10 w-40 h-80 bg-gray-800/30 rounded-full transform rotate-45"></div>
                <div className="absolute -right-20 bottom-10 w-60 h-96 bg-gray-800/30 rounded-full transform -rotate-12"></div>
                <div className="absolute left-1/4 -top-20 w-32 h-60 bg-gray-700/20 rounded-full transform rotate-12"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
                {/* Main Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white leading-tight mb-4">
                    If you are passionate about working with innovative ideas, and new ways of doing things.
                </h2>

                {/* Description */}
                <p className="text-base text-gray-300 leading-relaxed mb-10 lg:mb-12 max-w-4xl mx-auto">
                    The key drivers to our company&apos;s growth and success are our transparent working culture and the freedom given to our team in working towards innovative solutions for better product quality & customer service.
                </p>

                {/* Call-to-Action Button */}
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={() => openEnquiryModal()}
                        className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold bg-primary text-white hover:bg-primary/80 transition-colors duration-300 cursor-pointer"
                    >
                        Enquire Now
                    </button>
                </div>
            </div>
        </section>
    );
}
