
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Shield, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'Data Analytics', href: '/services/data-analytics', description: 'Transform data into insights' },
    { name: 'AI/ML Development', href: '/services/ai-ml', description: 'Custom AI solutions' },
    { name: 'Ethical AI Consulting', href: '/services/consulting', description: 'AI governance frameworks' },
    { name: 'Data Governance', href: '/services/governance', description: 'Privacy & compliance' },
  ];

  const isActive = (href: string) => location.pathname === href;
  const isServicesActive = () => location.pathname.startsWith('/services');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/60 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent">
                EthicalLogix
              </span>
              <div className="text-xs text-gray-500 -mt-1 font-medium">AI & Data Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                )}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`flex items-center space-x-1 px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg ${
                isServicesActive()
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}>
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-72 p-2 bg-white/95 backdrop-blur-xl border border-gray-200/60 shadow-xl rounded-xl">
                {services.map((service) => (
                  <DropdownMenuItem key={service.name} asChild className="p-0">
                    <Link
                      to={service.href}
                      className="flex flex-col items-start p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-200"
                    >
                      <div className="font-semibold text-gray-900">{service.name}</div>
                      <div className="text-sm text-gray-500 mt-1">{service.description}</div>
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild className="p-0 mt-2">
                  <Link
                    to="/services"
                    className="flex items-center justify-center p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200"
                  >
                    View All Services
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button asChild className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-6">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="font-medium text-gray-900 mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="pt-2">
                <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
