import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

const TaralindPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Decorative SVGs */}
      {/* Bottom left blob */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 opacity-10 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#38bdf8"
            d="M39.3,-55.4C52.2,-47.6,64.8,-38.7,69.5,-26.8C74.2,-15,71.1,-0.2,65.4,12.6C59.7,25.4,51.5,36.2,41.1,45.2C30.6,54.2,17.9,61.4,3.3,63.2C-11.3,65,-22.7,61.5,-36.6,56.2C-50.5,50.8,-67,43.5,-73.2,31.4C-79.3,19.4,-75.1,2.6,-68.9,-10.3C-62.8,-23.2,-54.7,-32.3,-45.1,-40.6C-35.5,-49,-24.3,-56.5,-11.1,-64.3C2.1,-72.1,16.3,-80.2,29.5,-75.2C42.6,-70.2,55.8,-52.2,60.6,-35.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Top right curve */}
      <div className="absolute -top-20 -right-20 w-80 h-80 opacity-10 pointer-events-none z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="#0ea5e9"
            fillOpacity="1"
            d="M0,224L30,213.3C60,203,120,181,180,154.7C240,128,300,96,360,96C420,96,480,128,540,144C600,160,660,160,720,160C780,160,840,160,900,154.7C960,149,1020,139,1080,138.7C1140,139,1200,149,1260,160C1320,171,1380,181,1410,186.7L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          />
        </svg>
      </div>

      {/* Top left soft wave */}
      <div className="absolute top-0 left-0 w-96 h-40 opacity-10 pointer-events-none z-0">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="#0ea5e9"
            fillOpacity="1"
            d="M0,32L80,74.7C160,117,320,203,480,229.3C640,256,800,224,960,213.3C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>

      {/* Bottom right blob */}
      <div className="absolute bottom-0 right-0 w-96 h-96 opacity-10 pointer-events-none z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#0ea5e9"
            d="M36.3,-49.4C48.6,-40.3,60.5,-31.1,66.5,-18.4C72.4,-5.7,72.5,10.6,66.5,25.1C60.4,39.6,48.3,52.3,34.6,58.7C20.9,65.2,5.5,65.4,-9.2,66C-23.9,66.7,-37.8,67.8,-51.1,61.5C-64.3,55.2,-77,41.6,-77.6,27.7C-78.2,13.9,-66.7,-0.3,-61.8,-14.3C-56.9,-28.4,-58.6,-42.3,-51.1,-53.4C-43.6,-64.4,-26.9,-72.6,-11.1,-69.7C4.6,-66.9,9.1,-52.5,18.5,-44.6C27.9,-36.7,41.3,-35.4,36.3,-49.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Top Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <img
          src="/Images/tlind1.jpg"
          alt="Táralind header"
          className="w-full h-auto object-cover max-h-[300px]"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-sky-900 mb-6">
              {t.taralindPage.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-justify mb-6">
              {t.taralindPage.description}
            </p>

            <p className="text-base text-gray-600 mb-4">
              {t.taralindPage.moreInfoText}
            </p>

            <a
              href="http://www.taralind.is/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-teal-500 text-white font-semibold px-5 py-3 rounded-full shadow hover:scale-105 transition-transform"
            >
              {t.taralindPage.linkText}
              <ExternalLink className="h-4 w-4" />
            </a>

            <p className="text-sm text-gray-500 mt-3">
              {t.taralindPage.redirectNotice}
            </p>
          </motion.div>

          {/* Right Column: Larger centered logo 
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center"
          >
            <div className="w-full max-w-xs">
              <img
                src="/taralind.png"
                alt="Táralind logo"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>*/}
        </div>
      </div>
    </div>
  );
};

export default TaralindPage;