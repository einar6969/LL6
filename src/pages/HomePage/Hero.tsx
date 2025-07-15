import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import FloatingInfoCard from './FloatingInfoCard';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pb-48">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Professional eye examination"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-teal-600/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left grid grid-cols-1 lg:grid-cols-2 gap-8 items-center h-screen">
        {/* Left Column - Text Content */}
        <motion.div
          className="flex flex-col justify-center h-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.homePage.hero.title}
            <span className="bg-gradient-to-r from-blue-400 to-teal-300 bg-clip-text text-transparent">
              {' '}{t.homePage.hero.titleHighlight}
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t.homePage.hero.subtitle}
          </motion.p>
        </motion.div>

        {/* Right Column - Empty */}
        <div className="hidden lg:block">
          {/* Empty right column for future content */}
        </div>
      </div>

      {/* Floating Info Card */}
      <FloatingInfoCard />
    </section>
  );
};

export default Hero;