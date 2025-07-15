import React from 'react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import ProceduresHero from './ProceduresHero';
import ProceduresSteps from './ProceduresSteps';
import ProcedureTypes from './ProcedureTypes';
import Testimonials from '../HomePage/Testimonials';
import ProceduresComplications from './ProceduresComplications';
import FAQ from '../HomePage/FAQ';
import Brochures from './Brochures';
import StickyNavigation from './StickyNavigation';

const ProceduresPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen">
      <StickyNavigation />
      <ProceduresHero />
      <ProceduresSteps />
      <ProcedureTypes />
      <Testimonials />
      <ProceduresComplications />
      <FAQ />
      <Brochures />
    </div>
  );
};

export default ProceduresPage;