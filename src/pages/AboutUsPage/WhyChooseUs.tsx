import React from 'react';
import { motion } from 'framer-motion';
import { Award, Settings, Stethoscope, Building } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

const WhyChooseUs: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: t.aboutUsPage.whyChooseUs.features.experienced.title,
      description: t.aboutUsPage.whyChooseUs.features.experienced.description,
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: t.aboutUsPage.whyChooseUs.features.comprehensive.title,
      description: t.aboutUsPage.whyChooseUs.features.comprehensive.description,
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: t.aboutUsPage.whyChooseUs.features.patientCentered.title,
      description: t.aboutUsPage.whyChooseUs.features.patientCentered.description,
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: t.aboutUsPage.whyChooseUs.features.stateOfArt.title,
      description: t.aboutUsPage.whyChooseUs.features.stateOfArt.description,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Medical professionals consultation"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              {t.aboutUsPage.whyChooseUs.title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;