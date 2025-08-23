import { RiMapPin2Line, RiDirectionLine, RiTimeLine } from 'react-icons/ri';

export default function LocationSection() {
    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-8">
                        <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-yellow-400 text-black">
                            Visit Us
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
                        <span className="block">Our Location &</span>
                        <span className="block text-black/30">Office Information</span>
                    </h2>
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Visit our modern headquarters equipped with state-of-the-art facilities and meet our team of engineering experts.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Google Maps Embed */}
                    <div className="relative">
                        <div className="rounded-3xl h-96 lg:h-[500px] overflow-hidden shadow-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.2360195258825!2d85.82813937501275!3d20.373156281117218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19091c84229a9f%3A0xfb040a70bef0acb5!2sCanOpus%20Engineering%20Services!5e0!3m2!1sen!2sin!4v1755959273168!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="CanOpus Engineering Services Location"
                                className="w-full h-full"
                            />
                        </div>

                    </div>

                    {/* Location Details */}
                    <div className="space-y-8">
                        {/* Address */}
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <RiMapPin2Line className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Office Address</h3>
                                    <p className="text-gray-700 leading-relaxed mb-2">
                                        CanOpus Engineering Services<br />
                                        Suite - B205, 2nd Floor,<br />
                                        Shibaram Tower, Infocity Road<br />
                                        Chandaka IE. Patia,<br />
                                        Bhubaneswar-751 024, Odisha
                                    </p>
                                </div>
                            </div>
                        </div>



                        {/* Office Hours */}
                        <div className="bg-gray-50 rounded-2xl p-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <RiTimeLine className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Hours</h3>
                                    <div className="space-y-2 text-gray-700">
                                        <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                                        <p><strong>Saturday:</strong> 9:00 AM - 2:00 PM</p>
                                        <p><strong>Sunday:</strong> Closed</p>
                                        <p className="text-yellow-600 font-medium text-sm mt-3">
                                            📞 Please call ahead to schedule a meeting
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
