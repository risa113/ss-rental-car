import type { BookingEnquiryData } from '../types';

export interface ValidationErrors {
  pickupLocation?: string;
  tripType?: string;
  pickupDate?: string;
  returnDate?: string;
  vehiclePreference?: string;
  customerName?: string;
  contactNumber?: string;
}

export function validateBookingEnquiry(data: BookingEnquiryData): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  if (!data.pickupLocation || !data.pickupLocation.trim()) {
    errors.pickupLocation = 'Please provide a pickup location or area in Tirunelveli';
  }

  if (!data.tripType) {
    errors.tripType = 'Please select your trip type';
  }

  if (!data.pickupDate) {
    errors.pickupDate = 'Please select a pickup date';
  } else {
    // Check if date is in the past
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const pickup = new Date(data.pickupDate);
    if (pickup < today) {
      errors.pickupDate = 'Pickup date cannot be in the past';
    }
  }

  if (data.returnDate && data.pickupDate) {
    const pickup = new Date(data.pickupDate);
    const returnDate = new Date(data.returnDate);
    if (returnDate < pickup) {
      errors.returnDate = 'Return date cannot precede the pickup date';
    }
  }

  if (!data.vehiclePreference) {
    errors.vehiclePreference = 'Please select a preferred car or option';
  }

  if (!data.customerName || data.customerName.trim().length < 2) {
    errors.customerName = 'Please enter your name (at least 2 characters)';
  }

  const cleanPhone = (data.contactNumber || '').replace(/[\s\-()]/g, '');
  if (!cleanPhone) {
    errors.contactNumber = 'Please enter your phone number';
  } else if (!/^[6-9]\d{9}$/.test(cleanPhone) && cleanPhone.length < 10) {
    errors.contactNumber = 'Please enter a valid 10-digit mobile number';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
