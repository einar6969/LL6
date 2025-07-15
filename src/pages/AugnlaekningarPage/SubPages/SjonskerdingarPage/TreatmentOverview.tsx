import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';

const TreatmentOverview: React.FC = () => {
  const treatmentOptions = [
    'Gleraugu (einfókus, tvífókus, fjölfókus)',
    'Snertilinsur (einfókus, toric, fjölfókus)',
    'Laser sjónlagsaðgerðir (LASIK, PRK, PresbyMax)',
    'Linsuskiptiaðgerðir (augnasteinsskipti, linsuígræðsla)'
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Hvaða leið hentar þér?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Val á leiðréttingaraðferð fer eftir tegund sjónskerðingar, aldri, lífsstíl og
              persónulegum óskum. Við bjóðum upp á fjölbreytta valkosti, allt frá hefðbundnum
              gleraugum og snertilinsum til háþróaðra laser- og linsuaðgerða.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {treatmentOptions.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 text-left">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{option}</span>
                </div>
              ))}
            </div>
            <Link to="/panta-tima">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="h-5 w-5" />
                <span>Bókaðu tíma fyrir ráðgjöf</span>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentOverview;
