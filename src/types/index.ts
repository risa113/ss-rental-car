export type VehicleCategory = 'All' | 'Hatchback' | 'Family MPV' | 'Premium';

export interface Vehicle {
  id: string;
  name: string;
  brand: 'Maruti Suzuki' | 'Toyota';
  model: string;
  category: 'Hatchback' | 'Family MPV' | 'Premium';
  tagline: string;
  image: string;
  advertisedPricePerDay: number | null; // null if contact for quote
  priceLabel: string;
  isPriceSubjectToConfirmation?: boolean;
  distanceAllowanceKm: number | null; // 200 km or null
  distanceAllowanceNote?: string;
  seatingCapacity: string;
  seatingVerificationNote?: string;
  transmission?: string;
  fuelType?: string;
  features: string[];
  idealFor: string[];
  description: string;
}

export type TripType = 
  | 'Local rental'
  | 'Outstation'
  | 'Airport transfer — enquiry only'
  | 'Family trip'
  | 'Other';

export interface BookingEnquiryData {
  pickupLocation: string;
  tripType: TripType;
  pickupDate: string;
  returnDate: string;
  vehiclePreference: string;
  passengers: string;
  customerName: string;
  contactNumber: string;
  notes?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  popularDestinations?: string[];
  iconName: string;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
