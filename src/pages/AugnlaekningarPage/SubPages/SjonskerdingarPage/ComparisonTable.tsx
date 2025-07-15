import React from 'react';
import { motion } from 'framer-motion';

const ComparisonTable: React.FC = () => {
  const comparisonData = [
    { condition: 'Nærsýni', symptoms: 'Óskýr fjarsjón', cause: 'Langt auga/kúpt hornhimna', correction: 'Gleraugu, linsur, laser' },
    { condition: 'Fjarsýni', symptoms: 'Óskýr nálægsjón', cause: 'Stutt auga/flöt hornhimna', correction: 'Gleraugu, linsur, laser' },
    { condition: 'Sjónskekkja', symptoms: 'Brengluð sjón', cause: 'Óregluleg hornhimna/linsa', correction: 'Gleraugu, toric linsur, laser' },
    { condition: 'Aldurstengd fjarsýni', symptoms: 'Erfiðleikar við lestur', cause: 'Stífur augasteinn', correction: 'Lesgleraugu, fjölfókus, linsuskipti' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Samanburður á sjónskerðingum</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-teal-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Ástand</th>
                    <th className="px-6 py-4 text-left font-semibold">Algeng einkenni</th>
                    <th className="px-6 py-4 text-left font-semibold">Orsök</th>
                    <th className="px-6 py-4 text-left font-semibold">Algeng leiðrétting</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="px-6 py-4 font-medium text-gray-900">{row.condition}</td>
                      <td className="px-6 py-4 text-gray-600">{row.symptoms}</td>
                      <td className="px-6 py-4 text-gray-600">{row.cause}</td>
                      <td className="px-6 py-4 text-gray-600">{row.correction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonTable;
