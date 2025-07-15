import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { Logos3 } from '../../components/ui/logos3';

const PartnerLogos: React.FC = () => {
  const { t } = useLanguage();
  
  const partnerLogos = [
    {
      id: "zeiss",
      description: "Carl Zeiss - Premium optical technology",
      image: "/PartnerLogos/Zeiss_logo.svg.png",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300",
    },
    {
      id: "ziemer",
      description: "Ziemer - Advanced laser technology",
      image: "/PartnerLogos/Ziemer-Logo.png",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300",
    },
    {
      id: "nidek",
      description: "NIDEK - Innovative eye care solutions",
      image: "/PartnerLogos/LogoNidek-AnteprimaArticolo.png",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300",
    },
    {
      id: "schwind",
      description: "SCHWIND - Eye-tech solutions",
      image: "/PartnerLogos/Schwind_eye_tech_solutions-Logo.wine.png",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300",
    },
        {
      id: "zeiss2",
      description: "Carl Zeiss - Premium optical technology",
      image: "/PartnerLogos/Zeiss_logo.svg.png",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300",
    },
    {
      id: "ziemer2",
      description: "Ziemer - Advanced laser technology",
      image: "/PartnerLogos/Ziemer-Logo.png",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300",
    },
    {
      id: "nidek2",
      description: "NIDEK - Innovative eye care solutions",
      image: "/PartnerLogos/LogoNidek-AnteprimaArticolo.png",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300",
    },
    {
      id: "schwind2",
      description: "SCHWIND - Eye-tech solutions",
      image: "/PartnerLogos/Schwind_eye_tech_solutions-Logo.wine.png",
      className: "h-12 w-auto opacity-70 hover:opacity-100 transition-opacity duration-300",
    },
  ];

  return (
    <motion.section
      className="py-16 bg-gradient-to-r from-gray-50 to-blue-50"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Logos3
          heading={t.homePage.partnerLogos.title}
          logos={partnerLogos}
        />
        <motion.p
          className="text-center text-gray-600 mt-6 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t.homePage.partnerLogos.subtitle}
        </motion.p>
      </div>
    </motion.section>
  );
};

export default PartnerLogos;