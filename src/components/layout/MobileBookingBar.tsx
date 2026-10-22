import React from 'react';
import { Phone, MessageCircle, Car } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl, formatGeneralInquiryMessage } from '../../lib/whatsapp';

interface MobileBookingBarProps {
  isModalOpen?: boolean;
}

export const MobileBookingBar: React.FC<MobileBookingBarProps> = ({ isModalOpen = false }) => {
  if (isModalOpen) {
    return null; // Do not cover modal on mobile
  }

  const handleViewCars = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('fleet');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = buildWhatsAppUrl(formatGeneralInquiryMessage());

  return (
    <aside
      aria-label="Quick mobile booking actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-navy/95 backdrop-blur-md border-t border-silver/20 px-3 py-2.5 shadow-2xl transition-all duration-300 pb-safe"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        
        {/* Call Action */}
        <a
          href={BUSINESS_CONFIG.phoneTelUri}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-navy-light text-white border border-silver/20 hover:border-cyan/50 active:scale-95 transition-all text-center"
        >
          <Phone className="w-4 h-4 text-cyan mb-1" />
          <span className="text-[11px] font-bold uppercase tracking-wider">Call Now</span>
        </a>

        {/* View Fleet Action */}
        <a
          href="#fleet"
          onClick={handleViewCars}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-navy-light text-white border border-silver/20 hover:border-cyan/50 active:scale-95 transition-all text-center"
        >
          <Car className="w-4 h-4 text-silver mb-1" />
          <span className="text-[11px] font-bold uppercase tracking-wider">View Cars</span>
        </a>

        {/* WhatsApp Action */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-cyan text-navy active:scale-95 transition-all text-center shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-navy mb-1" />
          <span className="text-[11px] font-extrabold uppercase tracking-wider">WhatsApp</span>
        </a>

      </div>
    </aside>
  );
};
