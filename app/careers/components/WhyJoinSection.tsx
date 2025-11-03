import { FaHeart, FaHandshake, FaUsers, FaBuilding } from 'react-icons/fa';

export default function WhyJoinSection() {
    const values = [
        {
            title: "Passion",
            description: "What sets us apart is our highly efficient team with the passion and drive to make things happen.",
            icon: <FaHeart className="w-8 h-8" />
        },
        {
            title: "Respect",
            description: "We value the skills each one of us bring to the organisation.",
            icon: <FaHandshake className="w-8 h-8" />
        },
        {
            title: "Teamwork",
            description: "At CanOpus, we challenge every problem together and celebrate success with rewards.",
            icon: <FaUsers className="w-8 h-8" />
        },
        {
            title: "Culture",
            description: "We are a people driven organisation. Our culture and value system shape the way we act.",
            icon: <FaBuilding className="w-8 h-8" />
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
            
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                        <span className="block">Why Join</span>
                        <span className="block text-secondary">CanOpus?</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our portfolio of products and solutions are focused at improving the operational 
                        efficiency for our clients with reduced cost. Our best-in-class engineering products 
                        clean the environment around you, monitor the air quality, improve efficiency of 
                        machines and support condition based monitoring services.
                    </p>
                </div>

                {/* Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-700 rounded-2xl mb-6 group-hover:bg-gray-200 transition-colors">
                                {value.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <div className="border border-gray-200 rounded-2xl p-8 lg:p-12">
                        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                            We are a people driven organisation.
                        </h3>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            CanOpus Engineering Solutions is committed to creating a diverse and growth-oriented 
                            organization that cultivates respect, integrity, and equality. We are passionate and 
                            carry an innate desire to innovate and simplify things.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
