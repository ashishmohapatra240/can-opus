import { FaHelmetSafety, FaHeadset  } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { RiRemoteControlFill } from "react-icons/ri";




import ServiceCard from './ServiceCard';

export default function ServicesSection() {
    const services = [
        {
            id: 1,
            icon: <FaHelmetSafety className="w-6 h-6 lg:w-7 lg:h-7 text-white" />,
            title: "Worker's Safety",
            description: "We utilize the monitoring tools to identify the machinery risk and safety of workers."
        },
        {
            id: 2,
            icon: <BsFillPeopleFill className="w-6 h-6 lg:w-7 lg:h-7 text-white" />,
            title: "Expert Team",
            description: "Trained and certified engineers performing the highest standards of testing methods and procedures."
        },
        {
            id: 3,
            icon: <RiRemoteControlFill className="w-6 h-6 lg:w-7 lg:h-7 text-white" />,
            title: "24×7 Remote Monitoring",
            description: "We are proactive and support 24X7 monitoring of the machinery's health. Overnight Alignments & NDT Jobs."
        },
        {
            id: 4,
            icon: <FaHeadset className="w-6 h-6 lg:w-7 lg:h-7 text-white" />,
            title: "Technological advancement",
            description: "We use the latest technology for sensing, telecommunications, and microelectronics to help in the monitoring service."
        }
    ];

    return (
        <section className="py-16 lg:py-24 bg-black rounded-4xl mx-4 sm:mx-6 lg:mx-8 my-8 lg:my-12">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
                    {/* Left Side - Content */}
                    <div className="lg:pr-8">
                        {/* Our Services Badge */}
                        <div className="flex mb-8">
                            <span className="inline-flex px-4 py-2 rounded-full text-sm font-medium bg-yellow-400 text-black">
                                Our Services
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="mb-6">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                                Condition based Monitoring
                            </h2>
                        </div>

                        {/* Description */}
                        <div className="mb-8 lg:mb-12">
                            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                                We care about your Machine Health to better its Performance and Output Efficiency.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10">
                        {services.map((service) => (
                            <ServiceCard
                                key={service.id}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
