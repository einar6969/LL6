import React from 'react';
import Hero from './Hero';
import CoreValues from './CoreValues';
import PartnerLogos from './PartnerLogos';
import ProceduresOverview from './ProceduresOverview';
import Testimonials from './Testimonials';
import BookingForm from './BookingForm';
import FAQ from './FAQ';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <CoreValues />
      <PartnerLogos />
      <ProceduresOverview />
      <Testimonials />
      <BookingForm />
      <FAQ />
    </>
  );
};

export default HomePage;