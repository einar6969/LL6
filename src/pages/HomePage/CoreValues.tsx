import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Heart, Users } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

interface Value {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CoreValues: React.FC = () => {
  const { t } = useLanguage();
  
  const values: Value[] = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: t.homePage.coreValues.values.safety.title,
      description: t.homePage.coreValues.values.safety.description
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: t.homePage.coreValues.values.technology.title,
      description: t.homePage.coreValues.values.technology.description
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t.homePage.coreValues.values.personalCare.title,
      description: t.homePage.coreValues.values.personalCare.description
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t.homePage.coreValues.values.followUp.title,
      description: t.homePage.coreValues.values.followUp.description
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center pt-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.homePage.coreValues.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.homePage.coreValues.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="group text-center p-6 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-teal-50 transition-all duration-300 hover:shadow-lg"
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
                {value.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;