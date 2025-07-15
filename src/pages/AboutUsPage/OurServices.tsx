import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

const OurServices: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t.aboutUsPage.ourServices.services.diagnosticTesting.title,
      description: t.aboutUsPage.ourServices.services.diagnosticTesting.description,
    },
    {
      title: t.aboutUsPage.ourServices.services.rehabilitation.title,
      description: t.aboutUsPage.ourServices.services.rehabilitation.description,
    },
    {
      title: t.aboutUsPage.ourServices.services.preventiveCare.title,
      description: t.aboutUsPage.ourServices.services.preventiveCare.description,
    },
    {
      title: t.aboutUsPage.ourServices.services.treatment.title,
      description: t.aboutUsPage.ourServices.services.treatment.description,
    },
    {
      title: t.aboutUsPage.ourServices.services.mentalHealth.title,
      description: t.aboutUsPage.ourServices.services.mentalHealth.description,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-blue-600 font-semibold text-sm uppercase tracking-wide mb-4">
              {t.aboutUsPage.ourServices.sectionLabel}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t.aboutUsPage.ourServices.title}
            </h2>
          </motion.div>

          {/* Right Column - Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {services.slice(0, 2).map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                  <Calendar className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <motion.button
                  className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowRight className="h-5 w-5 text-blue-600" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row - Remaining Services */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {services.slice(2).map((service, index) => (
            <motion.div
              key={index + 2}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <motion.button
                className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowRight className="h-5 w-5 text-blue-600" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurServices;