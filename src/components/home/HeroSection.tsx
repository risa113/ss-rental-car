import React from 'react';
import { ArrowRight, Phone, MessageCircle, MapPin, ShieldCheck, Fuel, Calendar } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl, formatGeneralInquiryMessage } from '../../lib/whatsapp';

interface HeroSectionProps {
  onExploreClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  const handleExplore = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onExploreClick) {
      onExploreClick();
    } else {
      document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 overflow-hidden bg-ivory">
      {/* Subtle editorial line pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[radial-gradient(#101D2C_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical Editorial Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline, Value Propositions & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Location & Trust Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy/5 border border-navy/15 text-navy text-xs font-semibold tracking-wide w-fit mb-5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
              <MapPin className="w-3.5 h-3.5 text-navy" />
              <span>{BUSINESS_CONFIG.coverageArea}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-navy tracking-tight leading-[1.1] mb-5 sm:mb-6">
              Your Journey. <br />
              <span className="text-navy">Your Car.</span>{' '}
              <span className="relative inline-block">
                <span className="text-navy">Your Way.</span>
                <span className="absolute bottom-1 left-0 w-full h-2.5 bg-cyan/30 -z-10 rounded"></span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-graphite-light leading-relaxed max-w-2xl mb-8">
              Comfortable and convenient car rentals for local travel, family trips, and outstation journeys from Tirunelveli.
              Transparent pricing, direct WhatsApp enquiry, and well-maintained vehicles.
            </p>

            {/* Action Buttons: Primary, Call, WhatsApp */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href="#fleet"
                onClick={handleExplore}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-navy text-white hover:bg-navy-light font-semibold text-sm transition-all duration-200 shadow-elevated group"
              >
                <span>Explore Our Cars</span>
                <ArrowRight className="w-4 h-4 text-cyan group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={BUSINESS_CONFIG.phoneTelUri}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-navy hover:bg-silver-light/40 border border-silver font-semibold text-sm transition-all duration-200 shadow-subtle hover:border-navy"
              >
                <Phone className="w-4 h-4 text-navy" />
                <span>Call to Book: {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={buildWhatsAppUrl(formatGeneralInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-cyan/15 hover:bg-cyan/25 text-navy border border-cyan/40 font-semibold text-sm transition-all duration-200"
                title="Send WhatsApp enquiry"
              >
                <MessageCircle className="w-4 h-4 text-cyan-hover" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>

            {/* Key Fact Badges */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-silver/40">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider mb-0.5">
                  <Fuel className="w-3.5 h-3.5 text-cyan" />
                  <span>Indicative Rates</span>
                </div>
                <span className="text-sm font-semibold text-graphite">From ₹2,000/day*</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan" />
                  <span>Daily Allowance</span>
                </div>
                <span className="text-sm font-semibold text-graphite">200 km Advertised</span>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-xs font-bold text-navy uppercase tracking-wider mb-0.5">
                  <Calendar className="w-3.5 h-3.5 text-cyan" />
                  <span>Enquiry Model</span>
                </div>
                <span className="text-sm font-semibold text-graphite">Direct Confirmation</span>
              </div>
            </div>

          </div>

          {/* Right Column: High-Impact Editorial Image with Scenic Tirunelveli Backdrop (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            
            {/* Visual Frame & Badge */}
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border-2 border-white bg-navy group">
              <div className="aspect-[16/10] sm:aspect-[16/11] lg:aspect-[4/3] w-full overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}/images/hero-car.jpg`}
                  alt="SS Cars Rental modern car on scenic highway near Tirunelveli Western Ghats"
                  className="w-full h-full object-cover object-center img-zoom"
                  loading="eager"
                  width="800"
                  height="600"
                />
              </div>

              {/* Editorial Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent pointer-events-none" />

              {/* Live Location Caption inside the Hero Image */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-navy/85 backdrop-blur-md border border-white/10 text-white flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-cyan font-bold">Base Location</p>
                  <p className="text-sm font-semibold text-white">Tirunelveli, Tamil Nadu</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-silver">Local & Outstation</p>
                  <p className="text-xs font-medium text-white/90">Direct Dispatch</p>
                </div>
              </div>
            </div>

            {/* Decorative background accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan/15 rounded-full blur-2xl -z-10 pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-navy/10 rounded-full blur-2xl -z-10 pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
};
