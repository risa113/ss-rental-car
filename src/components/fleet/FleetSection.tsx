import React, { useState, useMemo } from 'react';
import { FLEET_VEHICLES } from '../../data/vehicles';
import type { Vehicle, VehicleCategory } from '../../types';
import { VehicleCard } from './VehicleCard';
import { VehicleDetailModal } from './VehicleDetailModal';
import { BUSINESS_CONFIG } from '../../config/business';
import { Info, SlidersHorizontal, Sparkles } from 'lucide-react';

interface FleetSectionProps {
  onModalStateChange?: (isOpen: boolean) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ onModalStateChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<VehicleCategory>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const categories: { label: string; value: VehicleCategory }[] = [
    { label: 'All Fleet', value: 'All' },
    { label: 'Hatchbacks', value: 'Hatchback' },
    { label: 'Family MPVs', value: 'Family MPV' },
    { label: 'Premium', value: 'Premium' },
  ];

  const handleSelectVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    onModalStateChange?.(true);
  };

  const handleCloseModal = () => {
    setSelectedVehicle(null);
    onModalStateChange?.(false);
  };

  const filteredAndSortedVehicles = useMemo(() => {
    let list = [...FLEET_VEHICLES];

    // Filter by category
    if (selectedCategory !== 'All') {
      list = list.filter((v) => v.category === selectedCategory);
    }

    // Sort: carefully handle vehicles without fixed price (e.g., Innova Crysta quote-only)
    if (sortBy === 'price-asc') {
      list.sort((a, b) => {
        if (a.advertisedPricePerDay === null) return 1;
        if (b.advertisedPricePerDay === null) return -1;
        return a.advertisedPricePerDay - b.advertisedPricePerDay;
      });
    } else if (sortBy === 'price-desc') {
      list.sort((a, b) => {
        if (a.advertisedPricePerDay === null) return 1;
        if (b.advertisedPricePerDay === null) return -1;
        return b.advertisedPricePerDay - a.advertisedPricePerDay;
      });
    }

    return list;
  }, [selectedCategory, sortBy]);

  return (
    <section id="fleet" className="py-16 sm:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy/5 text-navy text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-cyan" />
              <span>Available Fleet in Tirunelveli</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-navy tracking-tight">
              Explore Our Rental Cars
            </h2>
            <p className="mt-3 text-sm sm:text-base text-graphite-subtle max-w-2xl">
              Choose from well-maintained, comfortable hatchbacks and spacious family MPVs.
              Check specifications, advertised reference rates, and send direct WhatsApp enquiries.
            </p>
          </div>

          {/* Filter & Sort Controls */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Category Buttons */}
            <div className="inline-flex p-1 rounded-xl bg-silver-light/60 border border-silver/50" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  role="tab"
                  aria-selected={selectedCategory === cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.value
                      ? 'bg-navy text-white shadow-xs'
                      : 'text-graphite hover:text-navy hover:bg-white/50'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Price Sort Dropdown */}
            <div className="relative inline-flex items-center">
              <SlidersHorizontal className="w-3.5 h-3.5 text-graphite-subtle absolute left-3 pointer-events-none" />
              <select
                aria-label="Sort vehicles"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="pl-8 pr-7 py-2 bg-white rounded-xl border border-silver text-xs font-semibold text-graphite focus:outline-none focus:border-navy appearance-none cursor-pointer shadow-xs"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <span className="absolute right-2.5 pointer-events-none text-[10px] text-graphite-subtle">
                ▼
              </span>
            </div>

          </div>
        </div>

        {/* Pricing Note / Disclaimer Strip */}
        <div className="mb-8 p-4 rounded-xl bg-white border border-silver/60 shadow-subtle flex items-start gap-3 text-xs text-graphite">
          <Info className="w-4 h-4 text-cyan mt-0.5 flex-shrink-0" />
          <p className="leading-relaxed">
            <strong className="text-navy">Pricing & Conditions Note:</strong> {BUSINESS_CONFIG.pricingDisclaimer}
          </p>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAndSortedVehicles.map((vehicle) => (
            <VehicleCard
              key={vehicle.id}
              vehicle={vehicle}
              onSelectVehicle={handleSelectVehicle}
            />
          ))}
        </div>

        {/* Vehicle Detail Modal */}
        <VehicleDetailModal
          vehicle={selectedVehicle}
          onClose={handleCloseModal}
        />

      </div>
    </section>
  );
};
