import Marquee from 'react-fast-marquee';

export default function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            name: 'John Anderson',
            position: 'Operations Manager',
            company: 'ABC Manufacturing Ltd.',
            quote: 'CanOpus has been instrumental in improving our machinery efficiency. Their condition monitoring service helped us reduce downtime by 40%.'
        },
        {
            id: 2,
            name: 'Sarah Mitchell',
            position: 'Plant Director',
            company: 'Tech Industries Inc.',
            quote: 'The quality of products and expertise of their engineering team is exceptional. They understand our needs and always deliver solutions that exceed expectations.'
        },
        {
            id: 3,
            name: 'Michael Chen',
            position: 'Maintenance Head',
            company: 'Global Manufacturing Corp.',
            quote: 'Working with CanOpus for over 5 years now. Their 24/7 monitoring service gives us peace of mind, and their response time is outstanding.'
        },
        {
            id: 4,
            name: 'Emily Rodriguez',
            position: 'Engineering Manager',
            company: 'Premier Industries',
            quote: 'The bearing solutions from CanOpus have significantly improved our equipment reliability. Their technical support team is knowledgeable and always ready to help.'
        },
        {
            id: 5,
            name: 'David Thompson',
            position: 'Facility Manager',
            company: 'Industrial Solutions Ltd.',
            quote: 'Outstanding service and support. The team at CanOpus truly understands industrial machinery and delivers reliable solutions every time.'
        },
        {
            id: 6,
            name: 'Lisa Wang',
            position: 'Operations Director',
            company: 'Manufacturing Excellence Corp.',
            quote: 'Their proactive maintenance approach has saved us thousands in repair costs. Highly professional and always available when we need them.'
        }
    ];

    return (
        <section className="py-12 lg:py-16 bg-white border-b border-gray-200 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex mb-6">
                    <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-primary text-white">
                        Testimonials
                    </span>
                </div>

                <div className="mb-10 lg:mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
                        <span className="block">What our clients say</span>
                        <span className="block text-black/30">about working with us</span>
                    </h2>
                </div>

                <div className="w-full overflow-hidden">
                    <Marquee
                        speed={40}
                        gradient={true}
                        gradientColor="white"
                        gradientWidth={50}
                        pauseOnHover={false}
                        className="py-4"
                        style={{ overflow: 'hidden' }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="mx-4 w-[320px] lg:w-[400px] bg-white border border-gray-200 rounded-lg p-6"
                            >
                                {/* Testimonial Text */}
                                <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-4">
                                    {testimonial.quote}
                                </p>

                                {/* Author Info */}
                                <div className="flex items-center gap-3">
                                    {/* Avatar */}
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                        {testimonial.name.charAt(0)}
                                    </div>

                                    {/* Author Details */}
                                    <div>
                                        <h4 className="text-sm lg:text-base font-bold text-black">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-xs lg:text-sm text-gray-600">
                                            {testimonial.position}, {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </div>
        </section>
    );
}

