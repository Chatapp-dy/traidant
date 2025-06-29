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
    <footer className="w-screen bg-gray-900 text-white">
      <div className="w-screen px-8 sm:px-12 lg:px-16 xl:px-20 2xl:px-32 py-16 lg:py-20 xl:py-24">
        <div className="w-full">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-4 lg:gap-5 mb-8 lg:mb-10">
                <div className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white" />
                </div>
                <span className="text-2xl lg:text-3xl xl:text-4xl font-bold">Traidant</span>
              </div>
              <p className="text-gray-400 mb-8 lg:mb-10 leading-relaxed text-lg lg:text-xl xl:text-2xl">
                Empowering investors with AI-driven insights and automated trading solutions for superior returns.
              </p>
              <div className="flex gap-5 lg:gap-6">
                <a href="#" className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Twitter className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                </a>
                <a href="#" className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Linkedin className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                </a>
                <a href="#" className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Github className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                </a>
                <a href="#" className="w-12 h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                  <Mail className="w-6 h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8" />
                </a>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section) => (
              <div key={section.title} className="lg:col-span-1">
                <h3 className="font-semibold text-white mb-6 lg:mb-8 text-xl lg:text-2xl xl:text-3xl">{section.title}</h3>
                <ul className="space-y-4 lg:space-y-5">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a 
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors text-lg lg:text-xl xl:text-2xl"
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
          <div className="border-t border-gray-800 mt-16 lg:mt-20 pt-10 lg:pt-12 flex flex-col md:flex-row justify-between items-center gap-6 lg:gap-8">
            <p className="text-gray-400 text-base lg:text-lg xl:text-xl">
              © 2025 Traidant. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-10 text-base lg:text-lg xl:text-xl text-gray-400">
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