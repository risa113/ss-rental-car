import React from 'react';
import { RENTAL_SERVICES } from '../../data/services';
import { 
  MapPin, 
  Compass, 
  Users, 
  Briefcase, 
  PlaneTakeoff, 
  CalendarCheck, 
  ArrowRight,
  MessageCircle 
} from 'lucide-react';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'PlaneTakeoff': return <PlaneTakeoff className="w-5 h-5" />;
      case 'CalendarCheck': return <CalendarCheck className="w-5 h-5" />;
      default: return <Compass className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider mb-3">
            <span>Tailored Rental Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy tracking-tight">
            Car Rental Services from Tirunelveli
          </h2>
          <p className="mt-3 text-sm sm:text-base text-graphite-subtle">
            Whether you need a car for half a day in town, a multi-day family pilgrimage, or an airport drop, we provide tailored vehicle solutions with direct assistance.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {RENTAL_SERVICES.map((service) => {
            const whatsappMsg = `Hello SS Cars Rental, I would like to enquire about your "${service.title}" service from Tirunelveli. Please share available car options and pricing details.`;
            const enquiryUrl = buildWhatsAppUrl(whatsappMsg);

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-silver/60 p-6 sm:p-7 shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group hover:border-cyan/40"
              >
                <div>
                  {/* Top Bar with Icon & Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-navy text-cyan flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                      {getIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan/15 text-navy border border-cyan/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-heading font-extrabold text-navy mb-2 group-hover:text-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-graphite-subtle mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-graphite leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Popular Destinations Tags */}
                  {service.popularDestinations && (
                    <div className="mb-6 pt-4 border-t border-silver/40">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-graphite-subtle mb-2">
                        Common Routes:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.popularDestinations.map((dest) => (
                          <span
                            key={dest}
                            className="px-2 py-0.5 rounded text-[11px] bg-ivory text-graphite font-medium border border-silver/40"
                          >
                            {dest}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Service Card CTA */}
                <div className="pt-4 border-t border-silver/30">
                  <a
                    href={enquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl bg-ivory hover:bg-cyan/20 text-navy text-xs font-bold uppercase tracking-wider transition-all duration-200 group-hover:bg-cyan group-hover:text-navy"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Enquire on WhatsApp</span>
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
