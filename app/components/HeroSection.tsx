'use client';

import { useState, useRef, useEffect } from 'react';
import { useEnquiryModal } from '../context/EnquiryModalContext';

export default function HeroSection() {
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { openEnquiryModal } = useEnquiryModal();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">

        {/* Error overlay */}
        {hasError && (
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center z-10">
            <div className="text-center">
              <p className="text-white font-sans mb-4">Video unavailable</p>
            </div>
          </div>
        )}

        {/* Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onError={() => setHasError(true)}
          >
            <source src="/video/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark overlay - semi-transparent so video shows through */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="max-w-3xl pt-16 lg:pt-20">
            {/* Main Heading */}
            <h1 className="text-white font-semibold leading-none mb-4 lg:mb-6 font-sans">
              <div className="text-4xl md:text-7xl tracking-tight">
                <span className="block">
                  Building future with Innovative  solutions
                </span>


              </div>
              
            </h1>

            {/* Subtitle */}
            <p className="text-white/80 text-base leading-relaxed mb-6 lg:mb-8 max-w-2xl font-sans">
              Our expertise is on the condition-based machinery that results in improved operational efficiency, low maintenance cost, and cost savings
            </p>

            {/* CTA Button */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => openEnquiryModal()}
                className="group bg-primary hover:bg-primary/80 text-white font-semibold px-4 py-2 lg:px-6 lg:py-3 rounded-full transition-all duration-300 flex items-center space-x-2 text-sm lg:text-base font-sans cursor-pointer"
              >
                <span>Enquire Now</span>
                <svg
                  className="w-4 h-4 lg:w-5 lg:h-5 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
