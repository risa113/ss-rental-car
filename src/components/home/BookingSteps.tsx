import { Car, Send, CheckCircle2, ArrowRight } from 'lucide-react';

export const BookingSteps: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Choose Your Car',
      subtitle: 'Identify the best car for your trip',
      description: 'Explore our hatchback and family MPV fleet. Compare seating capacity, advertised reference rates, and comfort features.',
      icon: Car,
    },
    {
      step: '02',
      title: 'Send Your Enquiry',
      subtitle: 'Share your itinerary via WhatsApp or Phone',
      description: 'Provide your travel dates, pickup location in Tirunelveli, and route. Quick submission directly connects you with the owner.',
      icon: Send,
    },
    {
      step: '03',
      title: 'Confirm Your Booking',
      subtitle: 'Receive clear terms & availability confirmation',
      description: 'SS Cars Rental confirms vehicle availability, provides the final quotation with all inclusions/terms, and schedules vehicle delivery or pickup.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-navy text-white relative overflow-hidden">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-cyan text-xs font-bold uppercase tracking-wider mb-3">
            <span>Transparent 3-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            How Rental Booking Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-silver">
            Direct, enquiry-first reservation without hidden algorithms or confusing payment hoops.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-navy-light/60 backdrop-blur-sm rounded-2xl p-7 sm:p-8 border border-silver/15 flex flex-col justify-between group hover:border-cyan/50 transition-all duration-300"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-heading font-black text-3xl sm:text-4xl text-cyan/90">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-navy-surface text-cyan flex items-center justify-center border border-cyan/20">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-heading font-bold text-white mb-1.5 group-hover:text-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-silver mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-silver/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-silver/10 flex items-center gap-1.5 text-xs text-cyan font-bold uppercase tracking-wider">
                  <span>Step {index + 1} of 3</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Distinction */}
        <div className="mt-12 p-4 rounded-xl bg-navy-surface/80 border border-silver/20 max-w-2xl mx-auto text-center text-xs text-silver">
          <span className="font-bold text-cyan">Important distinction: </span>
          Submitting a form or sending a WhatsApp message is an enquiry. A booking is confirmed only when the SS Cars Rental team confirms availability and rental conditions with you directly.
        </div>

      </div>
    </section>
  );
};
