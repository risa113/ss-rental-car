import { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { HeroSection } from './components/home/HeroSection';
import { BookingEnquiryPanel } from './components/home/BookingEnquiryPanel';
import { FleetSection } from './components/fleet/FleetSection';
import { WhyChooseUs } from './components/home/WhyChooseUs';
import { ServicesSection } from './components/services/ServicesSection';
import { BookingSteps } from './components/home/BookingSteps';
import { LocationSection } from './components/home/LocationSection';
import { FAQSection } from './components/home/FAQSection';
import { Footer } from './components/layout/Footer';
import { MobileBookingBar } from './components/layout/MobileBookingBar';
import { TermsModal } from './components/home/TermsModal';

export function App() {
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  const isAnyModalOpen = isVehicleModalOpen || legalModalType !== null;

  const scrollToBookingPanel = () => {
    const el = document.getElementById('booking-panel');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFleet = () => {
    const el = document.getElementById('fleet');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-graphite selection:bg-cyan selection:text-navy">
      {/* Main Navigation */}
      <Navbar onOpenBookingPanel={scrollToBookingPanel} />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection onExploreClick={scrollToFleet} />

        {/* Quick Booking Enquiry Panel */}
        <BookingEnquiryPanel />

        {/* Our Fleet Catalogue */}
        <FleetSection onModalStateChange={setIsVehicleModalOpen} />

        {/* Why Choose SS Cars Rental */}
        <WhyChooseUs />

        {/* Services & Routes */}
        <ServicesSection />

        {/* How Booking Works */}
        <BookingSteps />

        {/* Tirunelveli Location & Dispatch */}
        <LocationSection />

        {/* FAQ & Direct Enquiry */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenPrivacy={() => setLegalModalType('privacy')}
      />

      {/* Floating Mobile Booking Actions (Hides when modal is open) */}
      <MobileBookingBar isModalOpen={isAnyModalOpen} />

      {/* Legal & Terms Modal */}
      <TermsModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
