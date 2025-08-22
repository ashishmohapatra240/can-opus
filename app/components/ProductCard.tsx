import Image from 'next/image';

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
}

export default function ProductCard({ image, title, description }: ProductCardProps) {
    return (
        <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-sm transition-shadow duration-300">
            <div className="mb-6">
                <div className="w-full h-48 relative rounded-xl overflow-hidden">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 36vw"
                    />
                </div>
            </div>
            <div className="text-left">
                <h3 className="text-lg lg:text-xl font-bold text-black mb-3">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
