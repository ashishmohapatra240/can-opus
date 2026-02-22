import EnquireNowButton from '../../components/EnquireNowButton';

export default function ProductsCTASection() {
    return (
        <section className="relative py-20 lg:py-28 bg-gray-50 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side - Content */}
                    <div>
                        <div className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white mb-6">
                            Custom Solutions
                        </div>
                        
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Ready to Transform Your Operations?
                        </h2>
                        
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Our engineering experts specialize in designing and delivering customized 
                            industrial solutions. From concept to implementation, we&apos;re with you every step 
                            of the way to ensure optimal performance and efficiency.
                        </p>
                        
                        {/* Features List */}
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Free consultation and project assessment</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Custom engineering and design</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Complete installation and commissioning</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-700">Ongoing support and maintenance</span>
                            </div>
                        </div>
                        
                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <EnquireNowButton
                                className="px-8 py-4 rounded-xl"
                                variant="primary"
                            />
                            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all cursor-pointer">
                                Download Catalog
                            </button>
                        </div>
                    </div>
                    
                    {/* Right Side - Contact Cards */}
                    <div className="space-y-6">
                        {/* Main Contact Card */}
                        <div className="bg-white rounded-2xl p-8 border border-gray-100">
                            <div className="text-center mb-6">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-2xl mb-4">
                                    <svg className="w-8 h-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Let&apos;s Discuss Your Project</h3>
                                <p className="text-gray-600">Our experts are ready to help you find the perfect solution</p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Call Us</h4>
                                        <p className="text-gray-600">+91 123 456 7890</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Email Us</h4>
                                        <p className="text-gray-600">info@canopus.com</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                                    <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                        <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Visit Us</h4>
                                        <p className="text-gray-600">Mumbai, India</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
                                <div className="text-2xl font-bold text-yellow-600 mb-1">24hrs</div>
                                <div className="text-sm text-gray-600">Response Time</div>
                            </div>
                            <div className="bg-white rounded-xl p-6 text-center border border-gray-100">
                                <div className="text-2xl font-bold text-yellow-600 mb-1">100%</div>
                                <div className="text-sm text-gray-600">Success Rate</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
