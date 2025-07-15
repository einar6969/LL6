import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Zap, Search } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

interface Procedure {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const ProceduresOverview: React.FC = () => {
  const { t } = useLanguage();
  
  const procedures: Procedure[] = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: t.homePage.procedures.laser.title,
      description: t.homePage.procedures.laser.description,
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: t.homePage.procedures.laser.features
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: t.homePage.procedures.lensReplacement.title,
      description: t.homePage.procedures.lensReplacement.description,
      image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: t.homePage.procedures.lensReplacement.features
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: t.homePage.procedures.examinations.title,
      description: t.homePage.procedures.examinations.description,
      image: 'https://images.pexels.com/photos/5752258/pexels-photo-5752258.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: t.homePage.procedures.examinations.features
    }
  ];

  return (
    <section id="procedures" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.homePage.procedures.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.homePage.procedures.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {procedures.map((procedure, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-[520px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={procedure.image}
                  alt={procedure.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                    <div className="text-white">
                      {procedure.icon}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="h-[280px] overflow-hidden">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {procedure.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {procedure.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {procedure.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 mt-auto"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t.homePage.procedures.learnMore}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProceduresOverview;