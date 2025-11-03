'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard';
import { Product } from '../data/products';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ProductSliderProps {
    products: Product[];
}

export default function ProductSlider({ products }: ProductSliderProps) {
    return (
        <div className="relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={8}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination-custom',
                    renderBullet: (index: number, className: string) => {
                        return `<span class="${className} w-3 h-3 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 inline-block"></span>`;
                    },
                    bulletActiveClass: '!w-8 !bg-primary !rounded-md',
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 24,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                }}
                className="pb-16 [&_.swiper-wrapper]:items-stretch"
            >
                {products.map((product) => (
                    <SwiperSlide key={product.id} className="h-auto flex">
                        <ProductCard
                            slug={product.slug}
                            image={product.image}
                            title={product.title}
                            description={product.description}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                className="swiper-button-prev-custom disabled:opacity-35 disabled:cursor-not-allowed absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary hover:bg-primary/80 text-black flex items-center justify-center transition-all duration-300 shadow-lg group cursor-pointer"
                aria-label="Previous slide"
            >
                <svg 
                    className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                className="swiper-button-next-custom disabled:opacity-35 disabled:cursor-not-allowed absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-primary hover:bg-primary/80 text-black flex items-center justify-center transition-all duration-300 shadow-lg group cursor-pointer"
                aria-label="Next slide"
            >
                <svg 
                    className="w-6 h-6 transition-transform group-hover:translate-x-0.5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <div className="swiper-pagination-custom flex justify-center gap-2 mt-8"></div>
        </div>
    );
}

