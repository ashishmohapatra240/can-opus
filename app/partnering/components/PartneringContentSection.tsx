export default function PartneringContentSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800 mb-6">
                                Growth
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                                Partnership for Growth
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                At CanOpus Engineering Service, we engage in a value-based approach in partnering.
                                Identifying the aligned goals and objectives of the association between our partners
                                helps us strategize the road map of scaling better heights in the association. Our
                                business growth is the result of our strategic selection of our partners around the world.
                            </p>
                        </div>
                    </div>

                    {/* Trust Section */}
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-6">
                                Trust
                            </div>
                            <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                                Mutual Respect and Trust
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                We value long term strategic partnerships with our customers, manufacturers, and
                                associates, all across the world. CanOpus works on the principle of growing together,
                                and the growth should be parallel to innovation and learning. Adding value to each
                                other&apos;s businesses, safeguarding mutual trust, and respect is our primary fundamental
                                of partnership.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
