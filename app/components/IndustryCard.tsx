import Image from 'next/image';

interface IndustryCardProps {
    image: string;
    title: string;
    description: string;
}

export default function IndustryCard({ image, title, description }: IndustryCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-sm transition-shadow duration-300">
            {/* Industry Image */}
            <div className="aspect-[4/3] relative bg-gray-100">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                />
            </div>

            {/* Industry Info */}
            <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-black mb-3">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
