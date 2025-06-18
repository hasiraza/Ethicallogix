
import { Link } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Solutions',
      links: [
        { name: 'Data Analytics', href: '/services' },
        { name: 'AI/ML Development', href: '/services' },
        { name: 'Ethical AI Consulting', href: '/services' },
        { name: 'Data Governance', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/about' },
        { name: 'Careers', href: '/contact' },
        { name: 'Contact', href: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '/resources' },
        { name: 'Case Studies', href: '/resources' },
        { name: 'Whitepapers', href: '/resources' },
        { name: 'Documentation', href: '/resources' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Compliance', href: '/compliance' },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl shadow-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold">EthicalLogix</span>
                <div className="text-sm text-gray-400 -mt-1">AI & Data Solutions</div>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed max-w-md">
              Building responsible AI solutions that drive innovation while maintaining 
              the highest standards of ethics, transparency, and compliance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-400" />
                <span>haseeb@ethicallogix.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-400" />
                <span>+92 3193661511</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Lahore,Punjab,Pakistan</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group">
                <Github className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-semibold text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Stay Updated with AI Ethics
              </h3>
              <p className="text-gray-400">
                Get the latest insights on responsible AI development and industry best practices.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} EthicalLogix. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Built with responsibility and transparency</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Ethical AI Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
