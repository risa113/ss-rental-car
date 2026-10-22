import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Car, 
  Users, 
  User, 
  Phone, 
  MessageCircle, 
  Info, 
  AlertCircle,
  Navigation
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';
import type { BookingEnquiryData, TripType } from '../../types';
import { buildWhatsAppUrl, formatBookingEnquiryMessage } from '../../lib/whatsapp';
import { validateBookingEnquiry } from '../../lib/validation';
import type { ValidationErrors } from '../../lib/validation';

export const BookingEnquiryPanel: React.FC = () => {
  // Today's date in YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingEnquiryData>({
    pickupLocation: 'Tirunelveli Junction',
    tripType: 'Local rental',
    pickupDate: todayStr,
    returnDate: '',
    vehiclePreference: 'Maruti Suzuki Swift',
    passengers: '4',
    customerName: '',
    contactNumber: '',
    notes: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const pickupOptions = [
    'Tirunelveli Railway Junction',
    'New Bus Stand (Vaeinthankulam)',
    'Palayamkottai',
    'Tirunelveli Town',
    'Vannarpettai',
    'Doorstep Delivery in Tirunelveli',
    'Tuticorin Airport / Other',
  ];

  const tripTypes: TripType[] = [
    'Local rental',
    'Outstation',
    'Airport transfer — enquiry only',
    'Family trip',
    'Other',
  ];

  const vehicles = [
    'Maruti Suzuki Swift',
    'Maruti Suzuki Baleno',
    'Maruti Suzuki Ertiga',
    'Toyota Innova Crysta',
    'Other / Recommend a car',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field if being corrected
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validation = validateBookingEnquiry(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    // Format WhatsApp message
    const message = formatBookingEnquiryMessage(formData);
    const whatsappUrl = buildWhatsAppUrl(message);

    setSubmissionSuccess(true);
    setIsSubmitting(false);

    // Open WhatsApp in new tab / window
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking-panel" className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-elevated border border-silver/50 overflow-hidden">
        
        {/* Top Header Strip */}
        <div className="bg-navy px-6 py-4 sm:px-8 sm:py-5 text-white flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div>
            <span className="text-cyan text-xs font-bold uppercase tracking-wider block mb-0.5">
              Direct Enquiry & Quotation
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-bold text-white">
              Check Vehicle Availability & Get Quotation
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm text-silver">
            <Info className="w-4 h-4 text-cyan flex-shrink-0" />
            <span>Enquiry-first booking. We confirm vehicle availability directly with you.</span>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            
            {/* Field 1: Pickup Location */}
            <div>
              <label htmlFor="pickupLocation" className="block text-xs font-bold uppercase tracking-wider text-graphite mb-1.5">
                Pickup Location <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-graphite-subtle absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="pickupLocation"
                  type="text"
                  name="pickupLocation"
                  list="pickup-suggestions"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  placeholder="e.g. Tirunelveli Junction"
                  className={`w-full pl-10 pr-3 py-2.5 bg-ivory-subtle text-graphite rounded-xl border text-sm transition-colors focus:bg-white ${
                    errors.pickupLocation ? 'border-red-500 ring-1 ring-red-500' : 'border-silver focus:border-navy'
                  }`}
                  required
                />
                <datalist id="pickup-suggestions">
                  {pickupOptions.map((opt) => (
                    <option key={opt} value={opt} />
                  ))}
                </datalist>
              </div>
              {errors.pickupLocation && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.pickupLocation}
                </p>
              )}
            </div>

            {/* Field 2: Trip Type */}
            <div>
              <label htmlFor="tripType" className="block text-xs font-bold uppercase tracking-wider text-graphite mb-1.5">
                Trip Type <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Navigation className="w-4 h-4 text-graphite-subtle absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="tripType"
                  name="tripType"
                  value={formData.tripType}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-8 py-2.5 bg-ivory-subtle text-graphite rounded-xl border text-sm transition-colors focus:bg-white appearance-none cursor-pointer ${
                    errors.tripType ? 'border-red-500 ring-1 ring-red-500' : 'border-silver focus:border-navy'
                  }`}
                  required
                >
                  {tripTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-graphite-subtle">
                  ▼
                </div>
              </div>
              {errors.tripType && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.tripType}
                </p>
              )}
            </div>

            {/* Field 3: Pickup Date */}
            <div>
              <label htmlFor="pickupDate" className="block text-xs font-bold uppercase tracking-wider text-graphite mb-1.5">
                Pickup Date <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-graphite-subtle absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="pickupDate"
                  type="date"
                  name="pickupDate"
                  min={todayStr}
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2.5 bg-ivory-subtle text-graphite rounded-xl border text-sm transition-colors focus:bg-white ${
                    errors.pickupDate ? 'border-red-500 ring-1 ring-red-500' : 'border-silver focus:border-navy'
                  }`}
                  required
                />
              </div>
              {errors.pickupDate && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.pickupDate}
                </p>
              )}
            </div>

            {/* Field 4: Return Date (Optional) */}
            <div>
              <label htmlFor="returnDate" className="block text-xs font-bold uppercase tracking-wider text-graphite mb-1.5">
                Return Date <span className="text-graphite-subtle font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Calendar className="w-4 h-4 text-graphite-subtle absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="returnDate"
                  type="date"
                  name="returnDate"
                  min={formData.pickupDate || todayStr}
                  value={formData.returnDate}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-3 py-2.5 bg-ivory-subtle text-graphite rounded-xl border text-sm transition-colors focus:bg-white ${
                    errors.returnDate ? 'border-red-500 ring-1 ring-red-500' : 'border-silver focus:border-navy'
                  }`}
                />
              </div>
              {errors.returnDate && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.returnDate}
                </p>
              )}
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
            
            {/* Field 5: Vehicle Preference */}
            <div>
              <label htmlFor="vehiclePreference" className="block text-xs font-bold uppercase tracking-wider text-graphite mb-1.5">
                Vehicle Preference <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Car className="w-4 h-4 text-graphite-subtle absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="vehiclePreference"
                  name="vehiclePreference"
                  value={formData.vehiclePreference}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-8 py-2.5 bg-ivory-subtle text-graphite rounded-xl border text-sm transition-colors focus:bg-white appearance-none cursor-pointer ${
                    errors.vehiclePreference ? 'border-red-500 ring-1 ring-red-500' : 'border-silver focus:border-navy'
                  }`}
                  required
                >
                  {vehicles.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-graphite-subtle">
                  ▼
                </div>
              </div>
              {errors.vehiclePreference && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.vehiclePreference}
                </p>
              )}
            </div>

            {/* Field 6: Number of Passengers */}
            <div>
              <label htmlFor="passengers" className="block text-xs font-bold uppercase tracking-wider text-graphite mb-1.5">
                Passengers <span className="text-graphite-subtle font-normal">(Optional)</span>
              </label>
              <div className="relative">
                <Users className="w-4 h-4 text-graphite-subtle absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  id="passengers"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full pl-10 pr-8 py-2.5 bg-ivory-subtle text-graphite rounded-xl border border-silver text-sm transition-colors focus:bg-white appearance-none cursor-pointer focus:border-navy"
                >
                  <option value="1-2">1 to 2 People</option>
                  <option value="3-4">3 to 4 People (Hatchback)</option>
                  <option value="5-7">5 to 7 People (MPV)</option>
                  <option value="8+">8+ People (Large Group)</option>
                </select>
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-xs text-graphite-subtle">
                  ▼
                </div>
              </div>
            </div>

            {/* Field 7: Customer Name */}
            <div>
              <label htmlFor="customerName" className="block text-xs font-bold uppercase tracking-wider text-graphite mb-1.5">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-graphite-subtle absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="customerName"
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  placeholder="e.g. Ramesh Kumar"
                  className={`w-full pl-10 pr-3 py-2.5 bg-ivory-subtle text-graphite rounded-xl border text-sm transition-colors focus:bg-white ${
                    errors.customerName ? 'border-red-500 ring-1 ring-red-500' : 'border-silver focus:border-navy'
                  }`}
                  required
                />
              </div>
              {errors.customerName && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.customerName}
                </p>
              )}
            </div>

            {/* Field 8: Contact Number */}
            <div>
              <label htmlFor="contactNumber" className="block text-xs font-bold uppercase tracking-wider text-graphite mb-1.5">
                Contact Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-graphite-subtle absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  id="contactNumber"
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="e.g. 9876543210"
                  maxLength={13}
                  className={`w-full pl-10 pr-3 py-2.5 bg-ivory-subtle text-graphite rounded-xl border text-sm transition-colors focus:bg-white ${
                    errors.contactNumber ? 'border-red-500 ring-1 ring-red-500' : 'border-silver focus:border-navy'
                  }`}
                  required
                />
              </div>
              {errors.contactNumber && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.contactNumber}
                </p>
              )}
            </div>

          </div>

          {/* Form Actions Strip */}
          <div className="pt-4 border-t border-silver/40 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <p className="text-xs text-graphite-subtle max-w-xl">
              By submitting, your details will be pre-filled into a direct WhatsApp message to SS Cars Rental. No customer data is stored on remote servers without disclosure.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              {/* Fallback Direct Call Option */}
              <a
                href={BUSINESS_CONFIG.phoneTelUri}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-ivory text-graphite hover:bg-silver-light border border-silver text-xs uppercase tracking-wider font-bold transition-colors"
              >
                <Phone className="w-4 h-4 text-navy" />
                <span>Call Directly</span>
              </a>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-xl bg-cyan hover:bg-cyan-hover text-navy font-bold text-sm tracking-wide shadow-subtle hover:shadow-cyan-glow transition-all duration-200 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send WhatsApp Enquiry</span>
              </button>
            </div>
          </div>

          {/* Submission Notice / Fallback helper */}
          {submissionSuccess && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3">
              <span className="text-lg">✅</span>
              <div>
                <p className="font-bold">Opening WhatsApp with your booking details...</p>
                <p className="text-xs text-emerald-800 mt-0.5">
                  If WhatsApp did not open automatically, please click here to{' '}
                  <a
                    href={buildWhatsAppUrl(formatBookingEnquiryMessage(formData))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline text-emerald-950"
                  >
                    open WhatsApp directly
                  </a>{' '}
                  or call us at{' '}
                  <a href={BUSINESS_CONFIG.phoneTelUri} className="font-bold underline text-emerald-950">
                    {BUSINESS_CONFIG.phoneDisplay}
                  </a>.
                </p>
              </div>
            </div>
          )}

        </form>

      </div>
    </section>
  );
};
