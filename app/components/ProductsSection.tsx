import Link from 'next/link';
import ProductSlider from './ProductSlider';
import { products } from '../data/products';

export default function ProductsSection() {
    return (
        <section className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Our Products Badge */}
                <div className="flex mb-8">
                    <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                        Our Products
                    </span>
                </div>

                {/* Main Heading */}
                <div className="mb-16 lg:mb-20">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight">
                        <span className="block">Committed to provide the best-in-class</span>
                        <span className="block text-secondary">Engineering Solutions</span>
                    </h2>
                </div>

                {/* Products Slider */}
                <div className="mb-12">
                    <ProductSlider products={products} />
                </div>

                {/* View All Products Button */}
                <div className="flex justify-center">
                    <Link href="/products" className="inline-flex items-center px-8 py-4 rounded-full text-md font-semibold bg-primary text-white hover:bg-primary/80 transition-colors duration-300 cursor-pointer">
                        View All Products
                    </Link>
                </div>
            </div>
        </section>
    );
}
