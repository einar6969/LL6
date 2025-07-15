import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => (
  <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Taktu fyrsta skrefið í átt að skýrari sjón</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Ekki láta sjónskerðingar hamla þér. Bókaðu tíma í augnskoðun hjá okkur í dag
          til að fá nákvæma greiningu og persónulega ráðgjöf um bestu leiðréttingarvalkostina fyrir þig.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/panta-tima">
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="h-5 w-5" />
              <span>Bóka tíma</span>
            </motion.button>
          </Link>
          <Link to="/augnlaekningar/augnskodun">
            <motion.button
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="h-5 w-5" />
              <span>Læra meira um augnskoðun</span>
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
