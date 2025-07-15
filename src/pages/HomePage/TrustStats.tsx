import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, Clock } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const TrustStats: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);

  const stats: StatItem[] = [
    {
      icon: <Award className="h-8 w-8" />,
      value: 15000,
      label: 'Aðgerðir framkvæmdar',
      suffix: '+'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      value: 15,
      label: 'Ára reynsla',
      suffix: '+'
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: 12,
      label: 'Sérfræðingar',
    }
  ];

  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 16);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = Math.floor(start);
            return newValues;
          });
        }, 16);
      });
    }
  }, [isInView]);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {stat.icon}
              </motion.div>
              <motion.div
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              >
                {animatedValues[index].toLocaleString()}{stat.suffix}
              </motion.div>
              <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustStats;