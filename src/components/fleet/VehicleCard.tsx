import React from 'react';
import { Users, Gauge, MessageCircle, Eye, Fuel, ArrowUpRight } from 'lucide-react';
import type { Vehicle } from '../../types';
import { buildWhatsAppUrl, formatVehicleEnquiryMessage } from '../../lib/whatsapp';

interface VehicleCardProps {
  vehicle: Vehicle;
  onSelectVehicle: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onSelectVehicle }) => {
  const whatsappUrl = buildWhatsAppUrl(formatVehicleEnquiryMessage(vehicle.name));

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      onClick={() => onSelectVehicle(vehicle)}
      className="group relative bg-white rounded-2xl border border-silver/60 overflow-hidden shadow-subtle hover:shadow-elevated transition-all duration-300 flex flex-col justify-between cursor-pointer hover:border-cyan/50"
    >
      {/* Top Media & Tags */}
      <div>
        <div className="relative aspect-[16/10] w-full bg-ivory-subtle overflow-hidden border-b border-silver/30">
          <img
            src={vehicle.image}
            alt={`${vehicle.name} rental in Tirunelveli`}
            loading="lazy"
            width="600"
            height="375"
            className="w-full h-full object-cover object-center img-zoom"
          />

          {/* Category Badge */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-navy/90 backdrop-blur-md text-white border border-white/10">
              {vehicle.category}
            </span>
          </div>

          {/* Quick Click Indicator */}
          <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-navy flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
            <ArrowUpRight className="w-4 h-4 text-navy" />
          </div>
        </div>

        {/* Card Content Area */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-graphite-subtle">
                {vehicle.brand}
              </p>
              <h3 className="text-xl font-heading font-extrabold text-navy group-hover:text-cyan transition-colors">
                {vehicle.name}
              </h3>
            </div>
          </div>

          <p className="text-xs text-graphite-subtle line-clamp-2 mb-4 leading-relaxed">
            {vehicle.tagline}
          </p>

          {/* Key Specs Pill Bar */}
          <div className="grid grid-cols-2 gap-2 py-3 border-y border-silver/40 text-xs mb-4">
            <div className="flex items-center gap-1.5 text-graphite">
              <Users className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
              <span className="font-medium truncate">{vehicle.seatingCapacity}</span>
            </div>

            <div className="flex items-center gap-1.5 text-graphite">
              <Gauge className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
              <span className="font-medium truncate">
                {vehicle.distanceAllowanceKm ? `${vehicle.distanceAllowanceKm} km / day` : 'On Enquiry'}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-graphite">
              <Fuel className="w-3.5 h-3.5 text-cyan flex-shrink-0" />
              <span className="font-medium truncate">{vehicle.fuelType || 'Petrol'}</span>
            </div>

            <div className="flex items-center gap-1.5 text-graphite">
              <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></span>
              <span className="font-medium truncate">AC Cabin</span>
            </div>
          </div>

          {/* Pricing Highlight */}
          <div className="flex items-baseline justify-between mb-4">
            <div>
              <span className="text-[11px] uppercase tracking-wider font-bold text-graphite-subtle block">
                Advertised Rate
              </span>
              <span className="text-xl font-extrabold text-navy">
                {vehicle.priceLabel}
              </span>
            </div>
            {vehicle.distanceAllowanceKm && (
              <span className="text-[11px] font-medium text-graphite-subtle">
                200 km limit*
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-5 sm:p-6 pt-0 flex items-center gap-2.5">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelectVehicle(vehicle);
          }}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-ivory text-graphite hover:bg-silver-light border border-silver text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5 text-navy" />
          <span>Details</span>
        </button>

        <button
          type="button"
          onClick={handleWhatsAppClick}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-cyan hover:bg-cyan-hover text-navy text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer"
          title={`Enquire ${vehicle.name} on WhatsApp`}
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Enquire</span>
        </button>
      </div>
    </div>
  );
};
