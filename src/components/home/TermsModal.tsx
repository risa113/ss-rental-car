import React, { useEffect } from 'react';
import { X, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

interface TermsModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (!type) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-elevated border border-silver overflow-hidden max-h-[85vh] flex flex-col z-10 animate-scaleUp">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-navy text-white">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan" />
            <h3 className="font-heading font-bold text-lg text-white">
              {type === 'terms' ? 'Rental Terms & Booking Guidelines' : 'Privacy & Data Disclosure'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-silver hover:text-white hover:bg-navy-light transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto text-xs sm:text-sm text-graphite space-y-4 leading-relaxed">
          {type === 'terms' ? (
            <>
              <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Indicative Reference Rates:</strong> Advertised daily rates (₹2,000 for 4-seater and ₹3,500 for 7-seater with 200 km allowance) are subject to vehicle availability, date of travel, and confirmation with the business.
                </p>
              </div>

              <h4 className="font-bold text-navy text-sm uppercase tracking-wider pt-2">
                1. Booking & Availability Confirmation
              </h4>
              <p>
                Website enquiries and WhatsApp messages represent rental requests and do not constitute guaranteed reservations until availability and quotation terms are confirmed directly by SS Cars Rental.
              </p>

              <h4 className="font-bold text-navy text-sm uppercase tracking-wider pt-2">
                2. Kilometre Allowance & Excess Usage
              </h4>
              <p>
                Standard day packages include 200 km per rental day. Any distance driven beyond the agreed allowance is billed at the applicable per-kilometre rate established prior to trip commencement.
              </p>

              <h4 className="font-bold text-navy text-sm uppercase tracking-wider pt-2">
                3. Fuel, Tolls & Incidental Expenses
              </h4>
              <p>
                Unless explicitly stated in an all-inclusive quotation, toll booth charges, state border permits, parking fees, and fuel are the responsibility of the renter.
              </p>

              <h4 className="font-bold text-navy text-sm uppercase tracking-wider pt-2">
                4. Identity & Documentation Requirements
              </h4>
              <p>
                A valid government-issued photo identity proof (Aadhaar Card, Passport, Voter ID) and a valid driver's license (for applicable self-drive arrangements) must be presented during vehicle handover.
              </p>

              <h4 className="font-bold text-navy text-sm uppercase tracking-wider pt-2">
                5. Vehicle Care & Return Condition
              </h4>
              <p>
                Vehicles must be returned in the condition received. Any damages caused by negligent operation or traffic infractions during the rental period remain the responsibility of the hirer.
              </p>
            </>
          ) : (
            <>
              <h4 className="font-bold text-navy text-sm uppercase tracking-wider">
                Privacy & Contact Handling
              </h4>
              <p>
                SS Cars Rental respects your privacy. When you use our quick booking form, your submitted name, phone number, and travel itinerary are packaged into a standard pre-filled message that opens directly in your own WhatsApp application.
              </p>

              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>No customer information is sold or traded to third-party telemarketers.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>We do not run tracking pixels, intrusive analytics, or third-party cookies.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>Phone numbers shared during rental discussions are used exclusively for coordinating vehicle availability, delivery, and booking support.</span>
                </div>
              </div>

              <p className="pt-2 text-graphite-subtle">
                For questions regarding data practices or to request removal of your contact history, contact us at {BUSINESS_CONFIG.phoneDisplay}.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-ivory border-t border-silver/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-navy text-white text-xs font-bold uppercase tracking-wider hover:bg-navy-light transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
