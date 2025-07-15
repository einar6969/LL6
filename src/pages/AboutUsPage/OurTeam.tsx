import React from 'react';
import { motion } from 'framer-motion';
import { Users, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { useNavigate } from 'react-router-dom';

const OurTeam: React.FC = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSeeStaff = () => {
    navigate('/starfsfolk');
  };

  return (
    <section className="relative py-[112px] px-[5%] bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute right-[-80px] top-[50%] transform -translate-y-1/2 w-[420px] h-[420px] bg-blue-100 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />

      <div className="relative max-w-[1312px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-20 z-10">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              {t.aboutUsPage.ourTeam.title}
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            {t.aboutUsPage.ourTeam.subtitle}
          </p>
          <p className="text-md leading-relaxed text-gray-600">
            {t.aboutUsPage.ourTeam.description}
          </p>
          <motion.button
            onClick={handleSeeStaff}
            className="mt-4 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.aboutUsPage.ourTeam.seeStaffButton}
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -top-10 -left-10 w-[400px] h-[400px] bg-blue-200 rounded-full blur-2xl opacity-40 z-0" />
          <img
            src="/Images/3.jpg"
            alt="Sjónlag team"
            className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Wave-shaped divider FIXED */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg
          className="block w-full h-[60px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,0V46.29c72.59,22,158.78,29.13,242,17.5C417,41.57,581,3,750,3s333,38.57,508,60.79c83.22,11.63,169.41,4.5,242-17.5V0Z"
            fill="#93c5fd"
            opacity="0.1"
          />
        </svg>
      </div>
    </section>
  );
};

export default OurTeam;
 