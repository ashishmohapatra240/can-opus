import { RiFacebookFill, RiTwitterXFill, RiLinkedinFill } from 'react-icons/ri';
import Image from 'next/image';

export default function Footer() {
    const footerLinks = {
        features: [
            { name: 'About Us', href: '#' },
            { name: 'Service', href: '#' },
            { name: 'Pricing', href: '#' },
            { name: 'Industry Insight', href: '#' },
            { name: 'Our Team', href: '#' },
            { name: 'Testimonials', href: '#' }
        ],
        resources: [
            { name: 'Tutorials', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Community', href: '#' },
            { name: 'Privacy Policy', href: '#' }
        ],
        about: [
            { name: 'Company', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'FAQ', href: '#' },
            { name: 'Contact Us', href: '#' }
        ]
    };

    const socialLinks = [
        { icon: <RiFacebookFill className="w-5 h-5" />, href: '#', label: 'Facebook' },
        { icon: <RiTwitterXFill className="w-5 h-5" />, href: '#', label: 'Twitter' },
        { icon: <RiLinkedinFill className="w-5 h-5" />, href: '#', label: 'LinkedIn' }
    ];

    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-12">
                    {/* Logo Section */}
                    <div className="flex-shrink-0">
                        <Image src="/images/canopus-logo.svg" alt="Canopus Logo" width={200} height={60} />
                    </div>

                    {/* Navigation Links - Right Side */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-30">
                        {/* Features Column */}
                        <div>
                            <h3 className="text-lg font-semibold text-black mb-6">Features</h3>
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

                        {/* Resources Column */}
                        <div>
                            <h3 className="text-lg font-semibold text-black mb-6">Resources</h3>
                            <ul className="space-y-4">
                                {footerLinks.resources.map((link) => (
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

                        {/* About Column */}
                        <div>
                            <h3 className="text-lg font-semibold text-black mb-6">About</h3>
                            <ul className="space-y-4">
                                {footerLinks.about.map((link) => (
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
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center">
                    {/* Copyright */}
                    <p className="text-sm text-gray-500 mb-4 sm:mb-0">
                        © 2025 Canopus, All right reserved
                    </p>

                    {/* Social Links */}
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
