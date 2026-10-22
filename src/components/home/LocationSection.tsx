import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl, formatGeneralInquiryMessage } from '../../lib/whatsapp';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-16 sm:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-cyan" />
            <span>Local Base & Service Coverage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy tracking-tight">
            Based in Tirunelveli, Tamil Nadu
          </h2>
          <p className="mt-3 text-sm sm:text-base text-graphite-subtle">
            Conveniently positioned to serve local travel within Tirunelveli and outstation travel across Southern Tamil Nadu and Kerala.
          </p>
        </div>

        {/* 2-Column Location & Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Business Location & Contact Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl border border-silver/60 p-6 sm:p-8 shadow-subtle space-y-6">
            
            <div>
              <p className="text-xs uppercase font-bold tracking-wider text-graphite-subtle mb-1">
                Business & Contact
              </p>
              <h3 className="text-2xl font-heading font-extrabold text-navy">
                {BUSINESS_CONFIG.name}
              </h3>
              <p className="text-sm font-semibold text-graphite mt-1">
                {BUSINESS_CONFIG.locationLabel}, India
              </p>
            </div>

            {/* Address & Dispatch Note */}
            <div className="p-4 rounded-xl bg-ivory border border-silver/50 space-y-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-navy">
                    Operating & Dispatch Hub
                  </p>
                  <p className="text-xs text-graphite leading-relaxed mt-1">
                    {BUSINESS_CONFIG.addressNote}
                  </p>
                  <p className="text-[11px] text-graphite-subtle mt-1.5 italic">
                    *Exact office address and vehicle pickup / doorstep drop point confirmed upon booking enquiry.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-graphite">
                <div className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center text-navy flex-shrink-0">
                  <Phone className="w-4 h-4 text-cyan" />
                </div>
                <div>
                  <span className="text-xs text-graphite-subtle block">Call for Bookings</span>
                  <a
                    href={BUSINESS_CONFIG.phoneTelUri}
                    className="font-bold text-navy hover:text-cyan transition-colors"
                  >
                    {BUSINESS_CONFIG.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-graphite">
                <div className="w-8 h-8 rounded-lg bg-navy/5 flex items-center justify-center text-navy flex-shrink-0">
                  <Clock className="w-4 h-4 text-cyan" />
                </div>
                <div>
                  <span className="text-xs text-graphite-subtle block">Enquiry Hours</span>
                  <span className="font-semibold text-navy">
                    {BUSINESS_CONFIG.operatingHours}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-silver/40 flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS_CONFIG.phoneTelUri}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-navy hover:bg-navy-light text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-cyan" />
                <span>Call Now</span>
              </a>

              <a
                href={buildWhatsAppUrl(formatGeneralInquiryMessage())}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan hover:bg-cyan-hover text-navy text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Now</span>
              </a>
            </div>

            {/* Outstation Popular Hubs */}
            <div className="pt-3">
              <p className="text-[11px] font-bold uppercase tracking-wider text-graphite-subtle mb-2">
                Popular Outstation Routes from Tirunelveli:
              </p>
              <div className="grid grid-cols-2 gap-2 text-xs text-graphite font-medium">
                <span className="p-2 rounded-lg bg-ivory border border-silver/40">Kanyakumari (~85 km)</span>
                <span className="p-2 rounded-lg bg-ivory border border-silver/40">Courtallam (~55 km)</span>
                <span className="p-2 rounded-lg bg-ivory border border-silver/40">Madurai (~160 km)</span>
                <span className="p-2 rounded-lg bg-ivory border border-silver/40">Trivandrum (~145 km)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Verified Map Container with Direction Trigger (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            <div className="relative rounded-2xl overflow-hidden border border-silver/60 bg-white shadow-subtle min-h-[380px] sm:min-h-[420px]">
              {/* Responsive Google Maps Embed centered on Tirunelveli */}
              <iframe
                title="SS Cars Rental Location Map - Tirunelveli"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126264.44426543142!2d77.67499645228556!3d8.713912643806283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0411629853380b%3A0xb04a572a1e8a93e5!2sTirunelveli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px]"
              />

              {/* Map Floating Badge */}
              <div className="absolute top-4 left-4 p-3 rounded-xl bg-navy/90 backdrop-blur-md border border-white/10 text-white shadow-md max-w-xs">
                <div className="flex items-center gap-2 text-cyan text-xs font-bold uppercase tracking-wider mb-0.5">
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Coverage Map</span>
                </div>
                <p className="text-xs text-silver">
                  Tirunelveli City & District Doorstep Handover
                </p>
              </div>

              {/* External Map Link Trigger */}
              <div className="absolute bottom-4 right-4">
                <a
                  href={BUSINESS_CONFIG.googleMapsQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-navy font-bold text-xs uppercase tracking-wider shadow-elevated border border-silver hover:bg-ivory transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-navy" />
                </a>
              </div>
            </div>

            {/* Transparent Location Placeholder Disclosure */}
            <div className="p-3.5 rounded-xl bg-navy/5 border border-navy/15 flex items-start gap-2.5 text-xs text-graphite">
              <ShieldCheck className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" />
              <p>
                <strong>Location Transparency:</strong> Until the client supplies an exact municipal door number and pin, services are dispatched from central Tirunelveli transport nodes (Junction & New Bus Stand). Pickup and drop points can be mutually arranged upon booking.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
