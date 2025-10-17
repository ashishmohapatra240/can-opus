import { Metadata } from 'next';
import ProductsHeroSection from './components/ProductsHeroSection';
import ProductsGridSection from './components/ProductsGridSection';
import ProductsCTASection from './components/ProductsCTASection';

export const metadata: Metadata = {
    title: 'Products - Canopus | Industrial Engineering Solutions',
    description: 'Explore our comprehensive range of industrial products including dust collection systems, power transmission technology, and more. Quality engineering solutions for every industry.',
    keywords: 'industrial products, dust collection, power transmission, gas turbine filtration, screw pumps, flow meters, condition monitoring',
};

export default function ProductsPage() {
    return (
        <main className="min-h-screen">
            <ProductsHeroSection />
            <ProductsGridSection />
            <ProductsCTASection />
        </main>
    );
}
