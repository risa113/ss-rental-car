import React from 'react';
import { Car, MapPin, Phone, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl, formatGeneralInquiryMessage } from '../../lib/whatsapp';

interface FooterProps {
  onOpenTerms: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerms, onOpenPrivacy }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white border-t border-navy-light/40 pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-silver/10">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-light border border-cyan/40 flex items-center justify-center text-cyan shadow-sm">
                <Car className="w-5 h-5 text-cyan" />
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                SS CARS <span className="text-cyan">RENTAL</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-silver/80 leading-relaxed max-w-sm">
              Premium, comfortable, and dependable car rentals rooted in Tirunelveli, Tamil Nadu.
              Direct enquiries, transparent reference rates, and verified vehicle handover for local trips and outstation journeys.
            </p>

            <div className="flex items-center gap-2 text-xs text-silver">
              <MapPin className="w-4 h-4 text-cyan flex-shrink-0" />
              <span>Base: Tirunelveli, Tamil Nadu, India</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-heading font-bold text-xs uppercase tracking-wider text-cyan">
              Navigation
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-silver">
              <li>
                <a href="#" className="hover:text-cyan transition-colors">Home</a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-cyan transition-colors">Available Cars</a>
              </li>
              <li>
                <a href="#services" className="hover:text-cyan transition-colors">Rental Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-cyan transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-cyan transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#location" className="hover:text-cyan transition-colors">Tirunelveli Location</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Rental Fleet (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-heading font-bold text-xs uppercase tracking-wider text-cyan">
              Advertised Fleet
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-silver">
              <li>
                <a href="#fleet" className="hover:text-cyan transition-colors flex items-center justify-between">
                  <span>Maruti Suzuki Swift</span>
                  <span className="text-[11px] text-cyan">₹2,000/day</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-cyan transition-colors flex items-center justify-between">
                  <span>Maruti Suzuki Baleno</span>
                  <span className="text-[11px] text-cyan">₹2,000/day*</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-cyan transition-colors flex items-center justify-between">
                  <span>Maruti Suzuki Ertiga</span>
                  <span className="text-[11px] text-cyan">₹3,500/day</span>
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-cyan transition-colors flex items-center justify-between">
                  <span>Toyota Innova Crysta</span>
                  <span className="text-[11px] text-silver">Quote on Enquiry</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct & Map (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-heading font-bold text-xs uppercase tracking-wider text-cyan">
              Direct Contact
            </p>
            <p className="text-xs text-silver">
              Reach out for quick vehicle availability and trip quotations:
            </p>

            <div className="space-y-2 pt-1">
              <a
                href={BUSINESS_CONFIG.phoneTelUri}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white hover:text-cyan transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan" />
                <span>{BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              <div>
                <a
                  href={buildWhatsAppUrl(formatGeneralInquiryMessage())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan hover:underline"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={BUSINESS_CONFIG.googleMapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-silver hover:text-white transition-colors"
                >
                  <span>Google Maps: Tirunelveli</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Pricing disclaimer in footer */}
        <div className="py-6 border-b border-silver/10 text-[11px] text-silver/60 leading-relaxed">
          <p>
            <strong className="text-silver/90">Disclaimer: </strong>
            {BUSINESS_CONFIG.pricingDisclaimer}
          </p>
        </div>

        {/* Bottom Strip: Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-silver/70">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan" />
            <span>&copy; {currentYear} {BUSINESS_CONFIG.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenTerms}
              className="hover:text-cyan transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Rental Terms & Conditions
            </button>
            <button
              onClick={onOpenPrivacy}
              className="hover:text-cyan transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              Privacy & Disclosure
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
