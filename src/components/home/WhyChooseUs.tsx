import React from 'react';
import { Sparkles, Wrench, MessageSquare, Compass, FileCheck, Shield } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const trustPoints = [
    {
      icon: Sparkles,
      title: 'Clean & Comfortable Vehicles',
      description: 'Every car is thoroughly cleaned, sanitized, and inspected before handover to ensure a fresh, pleasant trip for your family and guests.',
    },
    {
      icon: Wrench,
      title: 'Well-Maintained Fleet',
      description: 'Regularly serviced mechanicals, functional air conditioning, and road-ready tyres for smooth local commutes and reliable highway touring.',
    },
    {
      icon: MessageSquare,
      title: 'Convenient Booking Enquiries',
      description: 'Direct contact with business owners via WhatsApp and phone. Quick answers without confusing app signups or automated bots.',
    },
    {
      icon: Compass,
      title: 'Local & Outstation Travel',
      description: 'Flexible travel options for local city trips across Tirunelveli as well as outstation trips to Kanyakumari, Courtallam, Madurai, and Kerala.',
    },
    {
      icon: FileCheck,
      title: 'Transparent Quotations',
      description: 'Clear discussion of vehicle rates, kilometre allowances, and rental terms before you finalize any reservation.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white border-y border-silver/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5 text-cyan" />
            <span>Honest & Reliable Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy tracking-tight">
            Why Choose SS Cars Rental
          </h2>
          <p className="mt-3 text-sm sm:text-base text-graphite-subtle">
            Dependable car hire rooted in Tirunelveli. We prioritize vehicle cleanliness, clear communication, and straightforward travel planning.
          </p>
        </div>

        {/* 5 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.slice(0, 3).map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-ivory border border-silver/50 hover:border-cyan/40 hover:shadow-subtle transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy text-cyan flex items-center justify-center mb-5 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-navy mb-2.5">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-graphite leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 points in balanced 2-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-6">
          {trustPoints.slice(3).map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl bg-ivory border border-silver/50 hover:border-cyan/40 hover:shadow-subtle transition-all duration-300 flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-navy text-cyan flex items-center justify-center flex-shrink-0 shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-navy mb-2">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-graphite leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
