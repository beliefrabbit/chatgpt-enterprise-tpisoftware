import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Area */}
          <div className="flex items-center group cursor-pointer">
            <div className="flex items-center space-x-2">
              <img 
                src="/images/chatgpt-icon.png.png" 
                alt="ChatGPT" 
                className="h-10 sm:h-12 w-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
              <span className="font-bold text-lg sm:text-xl text-gray-900">ChatGPT</span>
            </div>
            <span className="text-gray-300 font-light text-xl ml-8 mr-5">×</span>
            <div className="flex items-center h-12 sm:h-14">
              <img 
                src="/images/logo-pad-icon--en-15years.png" 
                alt="TPIsoftware" 
                className="h-full w-auto object-contain"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="text-gray-600 hover:text-tpi font-medium transition-colors text-sm lg:text-base"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm" variant="primary">
              聯繫顧問
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-4 shadow-xl flex flex-col space-y-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="block text-gray-700 font-medium py-2 hover:text-tpi"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button fullWidth variant="primary" onClick={() => setIsMobileMenuOpen(false)}>
            聯繫顧問
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;