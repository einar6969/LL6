import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Search, Zap, Heart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../lib/i18n/LanguageContext';

const ProceduresSteps: React.FC = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: t.proceduresPage.steps.step1.title,
      description: t.proceduresPage.steps.step1.description,
      hasCta: true,
      ctaText: t.proceduresPage.steps.step1.cta
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: t.proceduresPage.steps.step2.title,
      description: t.proceduresPage.steps.step2.description,
      hasCta: false
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: t.proceduresPage.steps.step3.title,
      description: t.proceduresPage.steps.step3.description,
      hasCta: false
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t.proceduresPage.steps.step4.title,
      description: t.proceduresPage.steps.step4.description,
      hasCta: false
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="steps" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.proceduresPage.steps.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.proceduresPage.steps.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full mb-6"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {step.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {step.description}
              </p>

              {/* CTA Button */}
              {step.hasCta && (
                <Link to="/forskodun">
                  <motion.button
                  className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="h-4 w-4" />
                  <span>{step.ctaText}</span>
                  </motion.button>
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProceduresSteps;