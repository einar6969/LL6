import React from 'react';
import { motion } from 'framer-motion';
import { Building, Cpu, CheckCircle, Star } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

const FacilitiesTechnology: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.aboutUsPage.facilitiesTechnology.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.aboutUsPage.facilitiesTechnology.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Facilities */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Building className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                {t.aboutUsPage.facilitiesTechnology.facilities.title}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t.aboutUsPage.facilitiesTechnology.facilities.description}
            </p>
            
            <ul className="space-y-3">
              {t.aboutUsPage.facilitiesTechnology.facilities.features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Technology Overview */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <Cpu className="h-8 w-8 text-teal-600" />
              <h3 className="text-2xl font-bold text-gray-900">
                {t.aboutUsPage.facilitiesTechnology.technology.title}
              </h3>
            </div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t.aboutUsPage.facilitiesTechnology.technology.description}
            </p>
            
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Advanced medical equipment"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium">
                  Nýjasta tækni fyrir bestu niðurstöður
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Equipment Details */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Okkar helsti búnaður
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.aboutUsPage.facilitiesTechnology.technology.equipment.map((equipment, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Star className="h-6 w-6 text-yellow-500" />
                  <h4 className="text-lg font-semibold text-gray-900">
                    {equipment.name}
                  </h4>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm">
                  {equipment.description}
                </p>
                
                <ul className="space-y-2">
                  {equipment.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FacilitiesTechnology;