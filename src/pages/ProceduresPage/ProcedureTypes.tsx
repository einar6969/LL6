import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Eye, CheckCircle, XCircle, Users } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

const ProcedureTypes: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'laser' | 'lensReplacement'>('laser');

  const tabs = [
    {
      id: 'laser' as const,
      title: t.proceduresPage.procedureTypes.laser.title,
      icon: <Zap className="h-5 w-5" />
    },
    {
      id: 'lensReplacement' as const,
      title: t.proceduresPage.procedureTypes.lensReplacement.title,
      icon: <Eye className="h-5 w-5" />
    }
  ];

  const renderProcedureCard = (procedure: any, index: number) => (
    <motion.div
      key={index}
      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <h4 className="text-xl font-semibold text-gray-900 mb-3">
        {procedure.title}
      </h4>
      <p className="text-gray-600 mb-6 leading-relaxed">
        {procedure.description}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Pros */}
        <div>
          <h5 className="font-semibold text-green-700 mb-3 flex items-center">
            <CheckCircle className="h-4 w-4 mr-2" />
            Kostir
          </h5>
          <ul className="space-y-2">
            {procedure.pros.map((pro: string, proIndex: number) => (
              <li key={proIndex} className="text-sm text-gray-600 flex items-start">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                {pro}
              </li>
            ))}
          </ul>
        </div>

        {/* Cons */}
        <div>
          <h5 className="font-semibold text-red-700 mb-3 flex items-center">
            <XCircle className="h-4 w-4 mr-2" />
            Gallar
          </h5>
          <ul className="space-y-2">
            {procedure.cons.map((con: string, conIndex: number) => (
              <li key={conIndex} className="text-sm text-gray-600 flex items-start">
                <div className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                {con}
              </li>
            ))}
          </ul>
        </div>

        {/* Suitable For */}
        <div>
          <h5 className="font-semibold text-blue-700 mb-3 flex items-center">
            <Users className="h-4 w-4 mr-2" />
            Hentar fyrir
          </h5>
          <ul className="space-y-2">
            {procedure.suitableFor.map((suitable: string, suitableIndex: number) => (
              <li key={suitableIndex} className="text-sm text-gray-600 flex items-start">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 mt-2 flex-shrink-0" />
                {suitable}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="types" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.proceduresPage.procedureTypes.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.proceduresPage.procedureTypes.subtitle}
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-full">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                <span>{tab.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'laser' && (
            <motion.div
              key="laser"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.proceduresPage.procedureTypes.laser.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.proceduresPage.procedureTypes.laser.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {Object.values(t.proceduresPage.procedureTypes.laser.types).map((procedure, index) =>
                  renderProcedureCard(procedure, index)
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'lensReplacement' && (
            <motion.div
              key="lensReplacement"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {t.proceduresPage.procedureTypes.lensReplacement.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.proceduresPage.procedureTypes.lensReplacement.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {Object.values(t.proceduresPage.procedureTypes.lensReplacement.types).map((procedure, index) =>
                  renderProcedureCard(procedure, index)
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProcedureTypes;