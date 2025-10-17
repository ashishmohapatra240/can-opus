import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getProductBySlug, getAllProductSlugs, products } from '../../data/products';
import { FaCheckCircle, FaTools, FaShieldAlt, FaHeadset, FaDollarSign, FaDownload, FaEnvelope } from 'react-icons/fa';
import ProductSlider from '../../components/ProductSlider';

export async function generateStaticParams() {
    const slugs = getAllProductSlugs();
    return slugs.map((slug) => ({
        slug: slug,
    }));
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-gray-50 py-4">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center space-x-2 text-sm">
                        <Link href="/" className="text-gray-600 hover:text-yellow-600 transition-colors">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/products" className="text-gray-600 hover:text-yellow-600 transition-colors">
                            Products
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-black font-medium">{product.title}</span>
                    </div>
                </div>
            </div>

            <section className="py-16 lg:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                                {product.title}
                            </h1>
                            {product.heroDescription && (
                                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                    {product.heroDescription}
                                </p>
                            )}
                            {product.heroSubDescription && (
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {product.heroSubDescription}
                                </p>
                            )}
                        </div>

                        <div>
                            <div className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden border border-gray-200 bg-gray-50">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-cover p-8"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {product.variantGroups && product.variantGroups.length > 0 && (
                <section className="py-16 lg:py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {product.variantGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className={groupIndex > 0 ? "mt-20" : ""}>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                                        {group.sectionTitle}
                                    </h2>
                                    <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {group.variants.map((variant, index) => (
                                        <div 
                                            key={index}
                                            className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                                        >
                                            <div className="relative h-64 w-full bg-gray-100">
                                                <Image
                                                    src={variant.image}
                                                    alt={variant.title}
                                                    fill
                                                    className="object-cover p-6 group-hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-black text-center">
                                                    {variant.title}
                                                </h3>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-md font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300 gap-2"
                            >
                                <FaEnvelope className="text-lg" />
                                Enquire Now
                            </Link>
                            <button
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-md font-semibold bg-black text-white hover:bg-gray-800 transition-colors duration-300 gap-2 cursor-pointer"
                            >
                                <FaDownload className="text-lg" />
                                Download Catalogue
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {!product.variantGroups && product.variants && product.variants.length > 0 && (
                <section className="py-16 lg:py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {product.variants.map((variant, index) => (
                                <div 
                                    key={index}
                                    className="bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="relative h-64 w-full bg-gray-100">
                                        <Image
                                            src={variant.image}
                                            alt={variant.title}
                                            fill
                                            className="object-cover p-6 group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-black text-center">
                                            {variant.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-md font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300 gap-2"
                            >
                                <FaEnvelope className="text-lg" />
                                Enquire Now
                            </Link>
                            <button
                                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-md font-semibold bg-black text-white hover:bg-gray-800 transition-colors duration-300 gap-2 cursor-pointer"
                            >
                                <FaDownload className="text-lg" />
                                Download Catalogue
                            </button>
                        </div>
                    </div>
                </section>
            )}

            {product.detailSections && product.detailSections.length > 0 && (
                <section className="py-16 lg:py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {product.detailSections.map((section, index) => (
                                <div 
                                    key={index}
                                    className="bg-gray-50 rounded-2xl p-8 lg:p-10 border border-gray-200 transition-all duration-300"
                                >
                                    <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                                        {section.title}
                                    </h2>
                                    <p className="text-gray-700 leading-relaxed text-lg">
                                        {section.content}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <section className="py-16 lg:py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                            Why Choose CanOpus
                        </h2>
                        <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-400 text-black mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaTools className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">
                                Pre-Installation Visit
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                Our professionally trained service engineers will deliver a complete installation of the dust collectors with utmost safety and attention.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-400 text-black mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaShieldAlt className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">
                                Safety
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                We are committed to safe working practices and abide by the safety standards following customer facility regulations.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-400 text-black mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaHeadset className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">
                                Technical Assistance
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                We support with the complete installation, operation, calibration, maintenance, and repair of the products.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300 group">
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-400 text-black mb-6 group-hover:scale-110 transition-transform duration-300">
                                <FaDollarSign className="text-3xl" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">
                                Competitive Pricing
                            </h3>
                            <p className="text-gray-700 leading-relaxed text-sm">
                                We offer the most competitive rates and work out the best solution that fits your requirement and budget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Products Slider */}
            <section className="py-16 lg:py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4">
                            Other Products
                        </h2>
                        <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
                    </div>
                    <ProductSlider products={products.filter(p => p.id !== product.id)} />
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 lg:py-20 bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ready to Improve Your Air Quality?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                        Get in touch with our team to learn more about how our products can benefit your operations and create a safer working environment.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-md font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition-colors duration-300"
                        >
                            Contact Us
                        </Link>
                        <Link
                            href="/products"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-md font-semibold bg-white text-black hover:bg-gray-100 transition-colors duration-300"
                        >
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

