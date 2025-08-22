import Image from 'next/image';

interface TeamCardProps {
    image: string;
    name: string;
    role: string;
}

export default function TeamCard({ image, name, role }: TeamCardProps) {
    return (
        <div className="w-full">
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                {/* Team Member Image */}
                <div className="aspect-[4/5] relative bg-gray-100">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                </div>

                {/* Team Member Info */}
                <div className="p-4 lg:p-6">
                    <h3 className="text-lg lg:text-xl xl:text-2xl font-bold text-black mb-2">
                        {name}
                    </h3>
                    <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                        {role}
                    </p>
                </div>
            </div>
        </div>
    );
}
