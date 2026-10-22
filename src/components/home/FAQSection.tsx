import React, { useState } from 'react';
import { FAQ_ITEMS } from '../../data/faq';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl } from '../../lib/whatsapp';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const generalQuestionMsg = `Hello SS Cars Rental, I have a few questions regarding car rental terms in Tirunelveli. Could you please assist me?`;

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-t border-silver/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-cyan" />
            <span>Rental Clarifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-graphite-subtle">
            Clear, transparent answers about car options, daily rates, distance allowances, and rental procedures.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 mb-14">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-ivory border-navy/30 shadow-subtle'
                    : 'bg-white border-silver/60 hover:border-silver'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-cyan rounded-2xl cursor-pointer"
                >
                  <span className="font-heading font-bold text-navy text-base sm:text-lg">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 bg-navy text-cyan' : 'bg-ivory text-graphite'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 sm:pb-6 text-sm text-graphite leading-relaxed border-t border-silver/30 pt-3 animate-fadeIn">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Neutral "Questions before you book?" Section (Replaces fake reviews per prompt section 10) */}
        <div className="rounded-2xl bg-navy text-white p-7 sm:p-10 shadow-elevated border border-navy-light text-center relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-cyan text-xs font-bold uppercase tracking-wider block mb-2">
              Need Direct Assistance?
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
              Questions Before You Book?
            </h3>
            <p className="text-xs sm:text-sm text-silver leading-relaxed mb-6">
              Have special trip requirements, multi-day itinerary questions, or need to verify car availability right away? Speak directly with the SS Cars Rental team.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href={BUSINESS_CONFIG.phoneTelUri}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white text-navy font-bold text-xs uppercase tracking-wider hover:bg-ivory transition-colors"
              >
                <Phone className="w-4 h-4 text-navy" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={buildWhatsAppUrl(generalQuestionMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-cyan hover:bg-cyan-hover text-navy font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Subtle background glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-navy-light rounded-full blur-3xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
};
