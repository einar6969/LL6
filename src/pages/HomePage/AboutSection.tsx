import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

const AboutSection: React.FC = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: <Award className="h-5 w-5" />,
      text: t.homePage.about.highlights.certification
    },
    {
      icon: <Users className="h-5 w-5" />,
      text: t.homePage.about.highlights.team
    },
    {
      icon: <Clock className="h-5 w-5" />,
      text: t.homePage.about.highlights.experience
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      text: t.homePage.about.highlights.location
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t.homePage.about.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {t.homePage.about.description1}
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {t.homePage.about.description2}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-blue-600">
                    {highlight.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {highlight.text}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.homePage.about.teamButton}
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Sjónlag team"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
            </div>
            
            {/* Floating stats card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">{t.homePage.about.satisfactionRate}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;