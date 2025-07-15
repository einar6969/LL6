import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Heart, Users } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

const OurValues: React.FC = () => {
  const { t } = useLanguage();

  const valueIcons = [
    <Shield className="h-8 w-8" />,
    <Cpu className="h-8 w-8" />,
    <Heart className="h-8 w-8" />,
    <Users className="h-8 w-8" />
  ];

  const values = Object.values(t.aboutUsPage.ourValues.values);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.aboutUsPage.ourValues.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.aboutUsPage.ourValues.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                {valueIcons[index]}
              </motion.div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {value.description}
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                {value.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;