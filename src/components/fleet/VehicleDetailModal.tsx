import React, { useEffect, useState } from 'react';
import { X, CheckCircle, Fuel, Users, Gauge, Info, MessageCircle, Phone, Calendar } from 'lucide-react';
import type { Vehicle } from '../../types';
import { BUSINESS_CONFIG } from '../../config/business';
import { buildWhatsAppUrl, formatVehicleEnquiryMessage } from '../../lib/whatsapp';

interface VehicleDetailModalProps {
  vehicle: Vehicle | null;
  onClose: () => void;
}

export const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({ vehicle, onClose }) => {
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (!vehicle) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [vehicle, onClose]);

  if (!vehicle) return null;

  const todayStr = new Date().toISOString().split('T')[0];

  const handleWhatsAppEnquiry = () => {
    const dates = pickupDate ? { pickup: pickupDate, return: returnDate } : undefined;
    const msg = formatVehicleEnquiryMessage(vehicle.name, dates);
    window.open(buildWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-navy/80 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-vehicle-title"
    >
      {/* Backdrop click */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content Box */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-elevated border border-silver overflow-hidden max-h-[92vh] flex flex-col z-10 animate-scaleUp">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-navy text-white border-b border-navy-light">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase bg-cyan/20 text-cyan border border-cyan/40">
              {vehicle.category}
            </span>
            <span className="text-xs text-silver">SS Cars Rental Fleet</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-silver hover:text-white hover:bg-navy-light transition-colors focus:outline-none focus:ring-2 focus:ring-cyan"
            aria-label="Close vehicle details modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Vehicle Showcase Top Area */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Image */}
            <div className="md:col-span-7 rounded-xl overflow-hidden bg-ivory-subtle border border-silver/50 shadow-subtle">
              <div className="aspect-[16/10] w-full">
                <img
                  src={vehicle.image}
                  alt={`${vehicle.name} available for rent in Tirunelveli`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Vehicle Summary & Price */}
            <div className="md:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase font-bold tracking-wider text-graphite-subtle mb-1">
                  {vehicle.brand}
                </p>
                <h3 id="modal-vehicle-title" className="text-2xl font-heading font-extrabold text-navy">
                  {vehicle.name}
                </h3>
                <p className="text-xs text-graphite-subtle mt-0.5">{vehicle.model}</p>
                <p className="text-xs text-graphite mt-3 leading-relaxed">
                  {vehicle.tagline}
                </p>
              </div>

              {/* Price Banner */}
              <div className="mt-5 p-4 rounded-xl bg-ivory border border-silver/60">
                <p className="text-xs uppercase font-bold text-navy tracking-wider">
                  Advertised Indicative Rate
                </p>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-extrabold text-navy">
                    {vehicle.priceLabel}
                  </span>
                </div>
                {vehicle.distanceAllowanceKm && (
                  <p className="text-xs text-graphite-subtle mt-1 flex items-center gap-1.5">
                    <Gauge className="w-3.5 h-3.5 text-cyan" />
                    <span>Includes {vehicle.distanceAllowanceKm} km daily allowance</span>
                  </p>
                )}
                {vehicle.isPriceSubjectToConfirmation && (
                  <p className="text-[11px] text-amber-800 mt-1.5 bg-amber-50 p-1.5 rounded border border-amber-200">
                    *Rate subject to confirmation by business for this specific vehicle.
                  </p>
                )}
              </div>
            </div>

          </div>

          {/* Quick Specifications Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-ivory-subtle border border-silver/40">
              <span className="text-[11px] font-bold text-graphite-subtle uppercase block mb-1">
                Seating Capacity
              </span>
              <div className="flex items-center gap-1.5 font-bold text-navy text-sm">
                <Users className="w-4 h-4 text-cyan" />
                <span>{vehicle.seatingCapacity}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-ivory-subtle border border-silver/40">
              <span className="text-[11px] font-bold text-graphite-subtle uppercase block mb-1">
                Distance Allowance
              </span>
              <div className="flex items-center gap-1.5 font-bold text-navy text-sm">
                <Gauge className="w-4 h-4 text-cyan" />
                <span>{vehicle.distanceAllowanceKm ? `${vehicle.distanceAllowanceKm} km/day` : 'On Enquiry'}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-ivory-subtle border border-silver/40">
              <span className="text-[11px] font-bold text-graphite-subtle uppercase block mb-1">
                Fuel Type
              </span>
              <div className="flex items-center gap-1.5 font-bold text-navy text-sm">
                <Fuel className="w-4 h-4 text-cyan" />
                <span>{vehicle.fuelType || 'Petrol / Diesel'}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-ivory-subtle border border-silver/40">
              <span className="text-[11px] font-bold text-graphite-subtle uppercase block mb-1">
                Transmission
              </span>
              <div className="flex items-center gap-1.5 font-bold text-navy text-sm">
                <Info className="w-4 h-4 text-cyan" />
                <span>Manual / Auto</span>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-navy mb-3">
              Included Comforts & Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {vehicle.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs text-graphite">
                  <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Journeys */}
          <div>
            <h4 className="text-xs uppercase font-bold tracking-wider text-navy mb-2">
              Ideal Travel Use Cases
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {vehicle.idealFor.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-ivory text-graphite text-xs font-medium border border-silver/40"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Transparent Quotation Notice */}
          <div className="p-3.5 rounded-xl bg-navy/5 border border-navy/15 flex items-start gap-2.5 text-xs text-graphite">
            <Info className="w-4 h-4 text-navy mt-0.5 flex-shrink-0" />
            <p>
              {BUSINESS_CONFIG.pricingDisclaimer}
            </p>
          </div>

          {/* Quick Dates for Enquiry */}
          <div className="p-4 rounded-xl bg-ivory border border-silver/50">
            <h4 className="text-xs uppercase font-bold tracking-wider text-navy mb-3">
              Plan Travel Dates For Quick Quote
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <div>
                <label className="block text-[11px] font-bold text-graphite-subtle uppercase mb-1">
                  Pickup Date
                </label>
                <div className="relative">
                  <Calendar className="w-3.5 h-3.5 text-graphite-subtle absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    min={todayStr}
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-silver text-xs text-graphite"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-graphite-subtle uppercase mb-1">
                  Return Date (Optional)
                </label>
                <div className="relative">
                  <Calendar className="w-3.5 h-3.5 text-graphite-subtle absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="date"
                    min={pickupDate || todayStr}
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-silver text-xs text-graphite"
                  />
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={handleWhatsAppEnquiry}
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan hover:bg-cyan-hover text-navy font-bold text-sm shadow-subtle cursor-pointer transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Enquire {vehicle.name} on WhatsApp</span>
              </button>

              <a
                href={BUSINESS_CONFIG.phoneTelUri}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-navy hover:bg-navy-light text-white font-semibold text-sm transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan" />
                <span>Call {BUSINESS_CONFIG.phoneDisplay}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
