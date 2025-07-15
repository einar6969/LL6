import React from 'react';
import AboutHero from './AboutHero';
import OurStory from './OurStory';
import OurTeam from './OurTeam';
import OurValues from './OurValues';
import OurServices from './OurServices';
import WhyChooseUs from './WhyChooseUs';
import FacilitiesTechnology from './FacilitiesTechnology';
import Testimonials from '../HomePage/Testimonials';
import BookingForm from '../HomePage/BookingForm';

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      {/* <OurStory /> */}
      <OurTeam />
      <OurValues />
      <OurServices />
      <WhyChooseUs />
      {/* <FacilitiesTechnology /> */}
      <Testimonials />
      <BookingForm />
    </div>
  );
};

export default AboutUsPage;