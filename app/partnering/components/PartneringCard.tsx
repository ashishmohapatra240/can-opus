import Image from 'next/image';

interface PartneringCardProps {
    imgPath: string;
    title: string;
    description: string;
}

export default function PartneringCard({ imgPath, title, description }: PartneringCardProps) {
    return (
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 group">
            <div className="aspect-[4/3] relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <Image src={imgPath} alt={title} fill className="object-cover" />
            </div>

            {/* Content */}
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
