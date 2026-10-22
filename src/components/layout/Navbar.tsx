import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Car, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl, formatGeneralInquiryMessage } from '../../lib/whatsapp';

interface NavbarProps {
  onOpenBookingPanel?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingPanel }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Our Cars', href: '#fleet' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Location', href: '#location' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy/95 backdrop-blur-md text-white shadow-elevated border-b border-navy-light/40 py-3'
          : 'bg-navy text-white py-4 sm:py-5 border-b border-navy-light/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark & Location Pill */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-lg bg-navy-light border border-cyan/40 flex items-center justify-center text-cyan shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Car className="w-5 h-5 text-cyan" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-extrabold tracking-tight text-lg sm:text-xl text-white">
                  SS CARS <span className="text-cyan">RENTAL</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-silver">
                <MapPin className="w-3 h-3 text-cyan" />
                <span>Tirunelveli, Tamil Nadu</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-silver hover:text-cyan transition-colors duration-200 py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyan hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions: Direct Phone & Book Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_CONFIG.phoneTelUri}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg text-white bg-navy-light/80 hover:bg-navy-light border border-silver/20 transition-all hover:border-cyan/50"
              title="Call SS Cars Rental"
            >
              <Phone className="w-3.5 h-3.5 text-cyan" />
              <span>{BUSINESS_CONFIG.phoneDisplay}</span>
            </a>

            <button
              onClick={() => {
                if (onOpenBookingPanel) {
                  onOpenBookingPanel();
                } else {
                  const el = document.getElementById('booking-panel');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-bold rounded-lg bg-cyan text-navy hover:bg-cyan-hover transition-all duration-200 shadow-sm hover:shadow-cyan-glow cursor-pointer"
            >
              <span>Book a Car</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_CONFIG.phoneTelUri}
              className="p-2 rounded-lg bg-navy-light text-cyan border border-silver/20"
              aria-label="Call business"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-navy-light text-white border border-silver/20 focus:outline-none focus:ring-2 focus:ring-cyan"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-cyan" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-navy-dark/98 border-b border-silver/20 px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-3 pt-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="text-silver hover:text-cyan text-base font-medium py-2 px-3 rounded-lg hover:bg-navy-light transition-colors"
              >
                {link.label}
              </a>
            ))}
            
            <div className="pt-4 border-t border-silver/15 flex flex-col gap-2.5">
              <a
                href={BUSINESS_CONFIG.phoneTelUri}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-navy-light text-white font-semibold text-sm border border-silver/20"
              >
                <Phone className="w-4 h-4 text-cyan" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={buildWhatsAppUrl(formatGeneralInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-cyan text-navy font-bold text-sm tracking-wide shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
