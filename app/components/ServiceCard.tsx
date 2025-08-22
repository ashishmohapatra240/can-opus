import { ReactNode } from 'react';

interface ServiceCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <div className="text-left">
            <div className="mb-6">
                <div className="w-12 h-12 lg:w-14 lg:h-14 bg-white/15 rounded-xl flex items-center justify-center">
                    {icon}
                </div>
            </div>
            <h3 className="text-lg lg:text-xl font-bold text-white mb-4">
                {title}
            </h3>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                {description}
            </p>
        </div>
    );
}
