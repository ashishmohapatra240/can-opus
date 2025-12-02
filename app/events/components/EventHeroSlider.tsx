'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function EventHeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    '/images/events/banner-1.jpg',
    '/images/events/banner-2.jpg', 
    '/images/events/banner-3.jpg',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);


  return (
    <section className="relative h-screen overflow-hidden ">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full bg-gradient-to-r from-blue-900/50 to-transparent">
              <Image
                src={slide}
                alt={`SakkSham Event ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>



    </section>
  );
}
