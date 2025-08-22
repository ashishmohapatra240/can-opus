import { ReactNode } from 'react';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
    return (
        <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-sm transition-shadow duration-300 text-center">
            <div className="flex justify-center mb-6">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gray-100 rounded-2xl flex items-center justify-center">
                    {icon}
                </div>
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
}
