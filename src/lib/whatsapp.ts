import { BUSINESS_CONFIG } from '../config/business';
import type { BookingEnquiryData } from '../types';

/**
 * Builds a direct WhatsApp URL with custom text for the SS Cars Rental business number
 */
export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encoded}`;
}

/**
 * Formats a comprehensive booking enquiry message from the quick booking form
 */
export function formatBookingEnquiryMessage(data: BookingEnquiryData): string {
  const lines: string[] = [
    `*NEW CAR RENTAL ENQUIRY — SS CARS RENTAL*`,
    `--------------------------------------`,
    `👤 *Customer Name:* ${data.customerName || 'Customer'}`,
    `📞 *Contact Number:* ${data.contactNumber || 'Provided via WhatsApp'}`,
    `🚗 *Vehicle Preference:* ${data.vehiclePreference}`,
    `🗺️ *Trip Type:* ${data.tripType}`,
    `📍 *Pickup Location:* ${data.pickupLocation || 'Tirunelveli'}`,
    `📅 *Pickup Date:* ${data.pickupDate || 'To be decided'}`,
  ];

  if (data.returnDate) {
    lines.push(`📅 *Return Date:* ${data.returnDate}`);
  }

  if (data.passengers) {
    lines.push(`👥 *Passengers:* ${data.passengers}`);
  }

  if (data.notes && data.notes.trim()) {
    lines.push(`📝 *Additional Request:* ${data.notes.trim()}`);
  }

  lines.push(`--------------------------------------`);
  lines.push(`Please confirm vehicle availability, indicative rates, kilometre limits, and final rental quotation from Tirunelveli. Thank you!`);

  return lines.join('\n');
}

/**
 * Prefills a vehicle-specific enquiry as instructed in the specification:
 * "Hello SS Cars Rental, I would like to enquire about the [Vehicle Name]. Please share the availability and final rental quotation for my travel dates."
 */
export function formatVehicleEnquiryMessage(vehicleName: string, customDates?: { pickup?: string; return?: string }): string {
  if (customDates?.pickup) {
    return `Hello SS Cars Rental, I would like to enquire about the ${vehicleName} for pickup on ${customDates.pickup}${customDates.return ? ` to ${customDates.return}` : ''}. Please share the availability and final rental quotation for my travel dates.`;
  }
  return `Hello SS Cars Rental, I would like to enquire about the ${vehicleName}. Please share the availability and final rental quotation for my travel dates.`;
}

/**
 * General quick inquiry message
 */
export function formatGeneralInquiryMessage(): string {
  return `Hello SS Cars Rental, I would like to enquire about car rental services in Tirunelveli. Please share your current vehicle options and rental quotations.`;
}
