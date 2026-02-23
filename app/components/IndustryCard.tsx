import Image from 'next/image';

interface IndustryCardProps {
    image: string;
    title: string;
    description: string;
}

export default function IndustryCard({ image, title, description }: IndustryCardProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-sm transition-shadow duration-300">
            {/* Industry Image */}
            <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
            </div>

            {/* Industry Info - compact for 4-across layout */}
            <div className="p-4 lg:p-5">
                <h3 className="text-lg font-bold text-black mb-2">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>
            </div>
        </div>
    );
}
