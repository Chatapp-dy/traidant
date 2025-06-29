import { Brain, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'API', href: '#' },
        { label: 'Documentation', href: '#' }
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Careers', href: '#' },
        { label: 'Press', href: '#' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '#' },
        { label: 'Contact', href: '#' },
        { label: 'Status', href: '#' },
        { label: 'Security', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '#' },
        { label: 'Terms', href: '#' },
        { label: 'Compliance', href: '#' },
        { label: 'Licenses', href: '#' }
      ]
    }
  ];

  return (
    <footer className="w-full bg-gray-900 text-white">
      <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-12 lg:py-16">
        <div className="w-full max-w-none">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 xl:gap-16">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <span className="text-xl lg:text-2xl font-bold">Traidant</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-sm text-base lg:text-lg">
                Empowering investors with AI-driven insights and automated trading solutions for superior returns.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Twitter className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Github className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
                <a href="#" className="w-10 h-10 lg:w-12 lg:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6" />
                </a>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <h3 className="font-semibold text-white mb-4 text-lg lg:text-xl">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-base lg:text-lg"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm lg:text-base">
              © 2025 Traidant. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm lg:text-base text-gray-400">
              <span>SEC Registered Investment Advisor</span>
              <span>FINRA Member</span>
              <span>SIPC Protected</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}