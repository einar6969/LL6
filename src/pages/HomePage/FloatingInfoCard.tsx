import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Phone, MapPin, AlertTriangle, Award, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../lib/i18n/LanguageContext';

interface InfoItem {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  isNumeric?: boolean;
  suffix?: string;
}

const FloatingInfoCard: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const infoItems: InfoItem[] = [
    {
      icon: <Award className="h-6 w-6" />,
      label: t.homePage.floatingCard.stats.procedures,
      value: 15000,
      isNumeric: true,
      suffix: '+'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      label: t.homePage.floatingCard.stats.experience,
      value: 15,
      isNumeric: true,
      suffix: '+'
    },
    {
      icon: <Users className="h-6 w-6" />,
      label: t.homePage.floatingCard.stats.specialists,
      value: 12,
      isNumeric: true
    }
  ];

  useEffect(() => {
    if (!isInView) return;
    infoItems.forEach((item, idx) => {
      if (item.isNumeric && typeof item.value === 'number') {
        let start = 0;
        const end = item.value;
        const duration = 2000;
        const step = end / (duration / 16);
        const timer = setInterval(() => {
          start = Math.min(end, start + step);
          setAnimatedValues(prev => {
            const next = [...prev];
            next[idx] = Math.floor(start);
            return next;
          });
          if (start >= end) clearInterval(timer);
        }, 16);
      }
    });
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="absolute z-10 -bottom-16 left-0 right-0 mx-auto w-full max-w-7xl px-4 bg-white shadow-xl rounded-2xl flex flex-wrap justify-between items-center p-6 md:p-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
    >
      {infoItems.map((item, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-4 mb-4 md:mb-0"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-teal-500 p-3 rounded-full transition-transform duration-300"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {item.icon}
          </motion.div>

          <div>
            <motion.div
              className="font-semibold text-gray-800 text-lg"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
            >
              {item.isNumeric
                ? `${animatedValues[index].toLocaleString()}${item.suffix || ''}`
                : item.value}
            </motion.div>
            <p className="text-sm text-gray-500 font-medium">{item.label}</p>
          </div>
        </motion.div>
      ))}

      <div className="flex justify-center md:justify-end w-full md:w-auto">
        <Link to="/adgerdir">
          <motion.button
          className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Skoða aðgerðir</span>
          <span>→</span>
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

export default FloatingInfoCard;
