'use client';

import { useState } from 'react';

export default function OpenPositionsSection() {
    const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

    const positions = [
        {
            id: "sales-engineer",
            title: "Sales Engineer",
            description: "Responsible for actively driving and managing the sales process of all the industrial products.",
            qualification: "Graduate or Post Graduation degree in marketing, promotions, advertising sales, or business administration preferred.",
            experience: "Min. 3 to 5 years of industry sales experience.",
            requirements: [
                "Clearly identify customer needs and requirements of engineering products, equipment, and services.",
                "Establish new accounts and services accounts by identifying potential customers"
            ]
        },
        {
            id: "vibration-analyst",
            title: "Vibration Analyst, Level-II",
            description: "Have a complete understanding on the Condition Based Monitoring Services covering Vibration analysis.",
            qualification: "B-Tech/ Diploma - Mechanical/ Electrical/ Instrumentation or equivalent.",
            experience: "Certification from ANST-Vibration institute. Minimum 3 years of strong Vibration Analyst experience.",
            requirements: [
                "Expert in the analysis and data collection of the vibration measurements of Rotating Machinery on Monthly/Quarterly Basis.",
                "Knowledge and hands on experience in Machinery Monitoring System / Machinery Performance Systems."
            ]
        },
        {
            id: "lube-oil-analyst",
            title: "Lube Oil Analyst",
            description: "Innovative Lube Oil Analyst to do Wear Particle Analysis, Manage the Sample Collectors, Prepare Analysis and Increase the Equipment life by assessing Oil Quality.",
            qualification: "B-Tech/ Diploma - Mechanical/ Electrical/ Instrumentation or equivalent.",
            experience: "Proven working experience in Lube Oil Analysis. Excellent knowledge of Wear Particle Analysis. Proficiency in Testing of Oil of Gear Boxes and other heavy critical Equipment.",
            requirements: [
                "Ensure Quality Analysis and Suggestions to either improve oil Life or upgrade the type.",
                "Monitor the TAN, TBN, and Moisture as well as Viscosity Tests in the lab."
            ]
        }
    ];

    return (
        <section id="open-positions" className="py-16 lg:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white mb-8">
                        Current Openings
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                        <span className="block">Open</span>
                        <span className="block text-secondary">Positions</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Join our growing team and be part of innovative engineering solutions that make a difference.
                    </p>
                </div>

                {/* Positions List */}
                <div className="space-y-6">
                    {positions.map((position) => (
                        <div key={position.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
                            <div 
                                className="p-6 lg:p-8 cursor-pointer hover:bg-gray-50 transition-colors"
                                onClick={() => setSelectedPosition(selectedPosition === position.id ? null : position.id)}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <h3 className="text-xl lg:text-2xl font-bold text-black mb-2">
                                            {position.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {position.description}
                                        </p>
                                    </div>
                                    <div className="ml-6">
                                        <svg 
                                            className={`w-6 h-6 text-gray-400 transition-transform ${
                                                selectedPosition === position.id ? 'rotate-180' : ''
                                            }`} 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Expanded Details */}
                            {selectedPosition === position.id && (
                                <div className="border-t border-gray-200 p-6 lg:p-8 bg-gray-50">
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h4 className="font-bold text-black mb-3">Qualification & Experience</h4>
                                            <p className="text-gray-600 mb-4">{position.qualification}</p>
                                            <p className="text-gray-600">{position.experience}</p>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black mb-3">Requirements</h4>
                                            <ul className="space-y-2">
                                                {position.requirements.map((req, index) => (
                                                    <li key={index} className="flex items-start space-x-2">
                                                        <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-2"></div>
                                                        <span className="text-gray-600">{req}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <a href="#apply" className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/80 transition-colors">
                                            Apply for this position
                                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
