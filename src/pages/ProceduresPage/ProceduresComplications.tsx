import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

const ProceduresComplications: React.FC = () => {
  const { t } = useLanguage();
  const [showDetails, setShowDetails] = useState(false);

  return (
    <section id="complications" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t.proceduresPage.complications.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t.proceduresPage.complications.content}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Safety Measures */}
            <motion.div
              className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="h-8 w-8 text-green-600" />
                <h3 className="text-2xl font-bold text-gray-900">{t.proceduresPage.complications.safetyMeasures.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">
                {t.proceduresPage.complications.safetyMeasures.intro}
              </p>
              
              <ul className="space-y-3">
                {t.proceduresPage.complications.safetyMeasures.items.map((measure, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{measure}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Statistics */}
            <motion.div
              className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Info className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">{t.proceduresPage.complications.statistics.title}</h3>
              </div>
              
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">99%+</div>
                  <p className="text-gray-600">{t.proceduresPage.complications.statistics.successRate}</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">&lt;1%</div>
                  <p className="text-gray-600">{t.proceduresPage.complications.statistics.seriousComplications}</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">98%</div>
                  <p className="text-gray-600">{t.proceduresPage.complications.statistics.patientSatisfaction}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Complications Details */}
          <motion.div
            className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="h-6 w-6 text-yellow-600" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t.proceduresPage.complications.details.title}
                </h3>
              </div>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {showDetails ? t.proceduresPage.complications.details.toggleHide : t.proceduresPage.complications.details.toggleShow}
              </button>
            </div>
            
            <p className="text-gray-700 mb-4">
              {t.proceduresPage.complications.details.intro}
            </p>

            {showDetails && (
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                {t.proceduresPage.complications.details.items.map((complication, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-yellow-200">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-900">{complication.title}</h4>
                      <span className="text-sm text-yellow-600 bg-yellow-100 px-2 py-1 rounded">
                        {complication.frequency}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{complication.description}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProceduresComplications;