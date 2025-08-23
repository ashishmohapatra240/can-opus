'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <Image src="/images/canopus-logo.svg" alt="Canopus Logo" width={100} height={100} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className="text-yellow-500 font-medium hover:text-yellow-600 transition-colors text-sm font-sans"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-yellow-500 transition-colors text-sm font-sans"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-yellow-500 transition-colors text-sm font-sans"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex items-center">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded-full transition-colors text-sm font-sans">
              Let&apos;s Connect
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-yellow-500 focus:outline-none transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link
                href="/"
                className="block px-3 py-2 text-yellow-500 font-medium hover:text-yellow-600 transition-colors text-base font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors text-base font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors text-base font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/process"
                className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors text-base font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-yellow-500 transition-colors text-base font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Button */}
              <div className="px-3 py-3">
                <button
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-3 rounded-full transition-colors text-base font-sans"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Let&apos;s Connect
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
