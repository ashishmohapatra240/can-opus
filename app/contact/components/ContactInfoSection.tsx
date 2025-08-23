import { RiPhoneLine, RiMailLine, RiMapPinLine, RiTimeLine } from 'react-icons/ri';

export default function ContactInfoSection() {
    const contactInfo = [
        {
            icon: <RiPhoneLine className="w-6 h-6 text-yellow-600" />,
            title: "Phone",
            details: ["+91 9876543210", "+91 9876543211"],
            description: "Call us for immediate assistance"
        },
        {
            icon: <RiMailLine className="w-6 h-6 text-yellow-600" />,
            title: "Email",
            details: ["info@canopus.com", "support@canopus.com"],
            description: "Send us your queries anytime"
        },
        {
            icon: <RiMapPinLine className="w-6 h-6 text-yellow-600" />,
            title: "Office",
            details: ["123 Business District", "Technology Park, India"],
            description: "Visit our headquarters"
        },
        {
            icon: <RiTimeLine className="w-6 h-6 text-yellow-600" />,
            title: "Business Hours",
            details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
            description: "We're here when you need us"
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-yellow-400 text-black">
                            Get in Touch
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                        <span className="block">Multiple ways to</span>
                        <span className="block text-black/30">reach our team</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Choose the most convenient way to connect with us. Our team is ready to assist you with any questions or requirements.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {contactInfo.map((info, index) => (
                        <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-sm transition-shadow duration-300">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center">
                                    {info.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {info.title}
                            </h3>
                            <div className="mb-4">
                                {info.details.map((detail, detailIndex) => (
                                    <p key={detailIndex} className="text-gray-700 font-medium mb-1">
                                        {detail}
                                    </p>
                                ))}
                            </div>
                            <p className="text-gray-600 text-sm">
                                {info.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
