'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isAboutPage = pathname === '/about';
  const isProductsPage = pathname === '/products';
  const isCareersPage = pathname === '/careers';
  const isEventsPage = pathname === '/events';
  const isPartneringPage = pathname === '/partnering';
  const isContactPage = pathname === '/contact';

  return (
    <header className="sticky top-0 w-full z-50 bg-white border-b border-gray-100 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between h-14 lg:h-16">
          <Link href="/" className='cursor-pointer'>          <Image src="/images/logo.png" alt="Canopus Logo" width={100} height={100} />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className={`text-gray-700 hover:text-yellow-600 transition-colors text-sm font-sans ${isHomePage ? 'text-primary/80 font-bold' : 'text-gray-700 hover:text-primary/80'}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`text-gray-700 hover:text-primary/80 transition-colors text-sm font-sans ${isAboutPage ? 'text-primary/80 font-bold' : 'text-gray-700 hover:text-primary/80'}`}
              >
                About Us
              </Link>
              <Link
                href="/products"
                className={`text-gray-700 hover:text-primary/80 transition-colors text-sm font-sans ${isProductsPage ? 'text-primary/80 font-bold' : 'text-gray-700 hover:text-primary/80'}`}
              >
                Products
              </Link>
              <Link
                href="/careers"
                className={`text-gray-700 hover:text-primary/80 transition-colors text-sm font-sans ${isCareersPage ? 'text-primary/80 font-bold' : 'text-gray-700 hover:text-primary/80'}`}
              >
                Careers
              </Link>
              <Link
                href="/events"
                className={`text-gray-700 hover:text-primary/80 transition-colors text-sm font-sans ${isEventsPage ? 'text-primary/80 font-bold' : 'text-gray-700 hover:text-primary/80'}`}
              >
                Events
              </Link>
              <Link
                href="/partnering"
                className={`text-gray-700 hover:text-primary/80 transition-colors text-sm font-sans ${isPartneringPage ? 'text-primary/80 font-bold' : 'text-gray-700 hover:text-primary/80'}`}
              >
                Partnering
              </Link>
              <Link
                href="/contact"
                className={`text-gray-700 hover:text-primary/80 transition-colors text-sm font-sans ${isContactPage ? 'text-primary/80 font-bold' : 'text-gray-700 hover:text-primary/80'}`}
              >
                Contact
              </Link>
            </nav>
          </div>

          <div className="hidden lg:flex items-center">
            <button className="bg-primary hover:bg-primary/80 text-white font-semibold px-4 py-2 rounded-full transition-colors text-sm font-sans cursor-pointer">
              Let&apos;s Connect
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-primary/80 focus:outline-none transition-colors"
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

        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              <Link
                href="/"
                className="block px-3 py-2 text-primary/80 font-medium hover:text-yellow-600 transition-colors text-base font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-primary/80 transition-colors text-base font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/products"
                className="block px-3 py-2 text-gray-700 hover:text-primary/80 transition-colors text-base font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/careers"
                className="block px-3 py-2 text-gray-700 hover:text-primary/80 transition-colors text-base font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link
                href="/events"
                className="block px-3 py-2 text-gray-700 hover:text-primary/80 transition-colors text-base font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                href="/partnering"
                className="block px-3 py-2 text-gray-700 hover:text-primary/80 transition-colors text-base font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Partnering
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary/80 transition-colors text-base font-sans"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile CTA Button */}
              <div className="px-3 py-3">
                <button
                  className="w-full bg-primary hover:bg-primary/80 text-white font-semibold px-4 py-3 rounded-full transition-colors text-base font-sans"
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
