import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const HeroSection: React.FC = () => (
  <section className="relative py-20 bg-gradient-to-br from-blue-50 to-teal-50">
    <div className="absolute inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-500/10" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sjónskerðingar og sjónleiðréttingar</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Skilningur á algengum sjónskerðingum og leiðum til að leiðrétta þær fyrir skýrari sjón.
        </p>
        <Link to="/panta-tima">
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="h-5 w-5" />
            <span>Bóka tíma</span>
          </motion.button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
