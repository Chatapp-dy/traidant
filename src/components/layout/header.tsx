import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Features', href: '/ai-features.html' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    if (href === '#pricing') {
      const pricingSection = document.querySelector('[data-section="pricing"]');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/')) {
      // External link - open in same tab
      window.location.href = href;
    } else {
      // Handle other navigation items
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const scrollToPricing = () => {
    const pricingSection = document.querySelector('[data-section="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
    >
      <div className="w-screen px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-32">
        <div className="w-full">
          <div className="flex items-center justify-between h-20 lg:h-24 xl:h-28">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900">Traidant</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-12 lg:gap-16 xl:gap-20">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-600 hover:text-gray-900 font-medium transition-colors text-lg lg:text-xl xl:text-2xl"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-10">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900 text-lg lg:text-xl xl:text-2xl">
                Sign In
              </Button>
              <Button 
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 lg:px-8 xl:px-10 py-3 lg:py-4 xl:py-5 text-lg lg:text-xl xl:text-2xl"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors py-2 text-left text-base"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                  <Button variant="ghost" className="justify-start text-base">
                    Sign In
                  </Button>
                  <Button 
                    onClick={scrollToPricing}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-base"
                  >
                    Get Started
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  );
}