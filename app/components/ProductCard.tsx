import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    slug: string;
    image: string;
    title: string;
    description: string;
}

export default function ProductCard({ slug, image, title, description }: ProductCardProps) {
    return (
        <Link href={`/products/${slug}`} className="block h-full">
            <div className="bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300 h-full cursor-pointer group flex flex-col">
                <div className="mb-4">
                    <div className="w-full h-48 relative rounded-xl overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 36vw"
                        />
                    </div>
                </div>
                <div className="text-left flex-1 flex flex-col">
                    <h3 className="text-lg lg:text-xl font-bold text-black mb-2 transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
