import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b border-gray-100 ${
        isScrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo Area */}
        <div className="flex flex-col z-50">
          <span className={`font-serif text-2xl font-bold tracking-tighter transition-colors ${isScrolled || mobileMenuOpen ? 'text-deep-charcoal' : 'text-deep-charcoal'}`}>
            THE BARRACKS
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase text-dusty-blue font-sans font-semibold">
            Port Edgar
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {['The Story', 'The Homes', 'Location', 'Lifestyle'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              className="font-sans text-sm text-deep-charcoal hover:text-dusty-blue transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Button variant="primary">Enquire Now</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 text-deep-charcoal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {['The Story', 'The Homes', 'Location', 'Lifestyle'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`} 
              onClick={() => setMobileMenuOpen(false)}
              className="font-serif text-3xl text-deep-charcoal"
            >
              {item}
            </a>
          ))}
          <Button onClick={() => setMobileMenuOpen(false)} variant="primary">Enquire Now</Button>
        </div>
      </div>
    </nav>
  );
};