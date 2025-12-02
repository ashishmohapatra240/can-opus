import { RiFacebookFill, RiTwitterXFill, RiLinkedinFill } from "react-icons/ri";
import Image from "next/image";

export default function Footer() {
  const footerLinks = {
    features: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Products", href: "/products" },
      { name: "Career", href: "/careers" },
      { name: "Leadership Programme", href: "/events" },
      { name: "Partnering", href: "/partnering" },
      { name: "Contact", href: "/contact" },
    ],
    products: [
      {
        name: "Industrial Dust, Fume & Mist",
        href: "#",
      },
      // { name: "Emission Monitoring", href: "#" },
      {
        name: "Power Transmission Technology",
        href: "#",
      },
      {
        name: "Gas Turbine Filtration",
        href: "#",
      },
      {
        name: "Gas Phase Filtration",
        href: "#",
      },
      { name: "Flow & Level Instrument", href: "#" },
      { name: "Condition Monitoring Equipment", href: "#" },
      { name: "Screw Pumps", href: "#" },
      // { name: "Microbial Filtration", href: "#" },
    ],
  };

  const socialLinks = [
    {
      icon: <RiFacebookFill className="w-5 h-5" />,
      href: "#",
      label: "Facebook",
    },
    {
      icon: <RiTwitterXFill className="w-5 h-5" />,
      href: "#",
      label: "Twitter",
    },
    {
      icon: <RiLinkedinFill className="w-5 h-5" />,
      href: "#",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Canopus Logo"
              width={200}
              height={60}
            />
            <p className="text-gray-600 text-sm mt-4 max-w-md leading-relaxed">
              CanOpus Group is led by a Professionally managed Teams with more than 20+ years of Industry Experience. With a continued focus on Innovation, High-Quality Service and dedicated Customer Support, the company has consistently gained the Trust and Reliability of its Partners and Associates.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Menu</h3>
              <ul className="space-y-4">
                {footerLinks.features.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Products
              </h3>
              <ul className="space-y-4">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 hover:text-black transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-black mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                CanOpus Engineering Services Suite - B205, 2nd Floor, Shibaram
                Tower, Infocity Road Chandaka IE. Patia, Bhubaneswar-751 024,
                Odisha
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 sm:mb-0">
            © 2025 Canopus, All right reserved
          </p>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-black transition-colors duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
