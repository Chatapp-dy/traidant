import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { SubscriptionForm } from '@/components/ui/subscription-form';
import { useSubscriptionForm } from '@/hooks/use-subscription-form';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, subscriptionType, openForm, closeForm } = useSubscriptionForm();

  const navItems = [
    { label: 'Features', href: '/ai-features.html' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '/about.html' },
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

  const handleGetStarted = () => {
    openForm('general');
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200"
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center">
                <span className="text-xl font-bold text-gray-900">Traidant</span>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Desktop CTA */}
              <div className="hidden md:flex items-center gap-4">
                <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                  Sign In
                </Button>
                <Button 
                  onClick={handleGetStarted}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
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
                      className="text-gray-600 hover:text-gray-900 font-medium transition-colors py-2 text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="flex flex-col gap-2 pt-4 border-t border-gray-200">
                    <Button variant="ghost" className="justify-start">
                      Sign In
                    </Button>
                    <Button 
                      onClick={handleGetStarted}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
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

      <SubscriptionForm 
        isOpen={isOpen}
        onClose={closeForm}
        subscriptionType={subscriptionType}
      />
    </>
  );
}