import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';
import 'flag-icons/css/flag-icons.min.css';
import { motion, AnimatePresence } from 'framer-motion';

export function LanguageToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChanging, setIsChanging] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { language, setLanguage, isTransitioning } = useLanguage();

  const languageOptions = [
    { code: 'en' as const, defaultName: 'English', nativeName: 'English' },
    { code: 'is' as const, defaultName: 'Icelandic', nativeName: 'Íslenska' }
  ];
  
  const languageToFlag = { en: 'gb', is: 'is' };

  const handleLanguageChange = (code: 'en' | 'is') => {
    if (code === language) return;
    setIsChanging(true);
    setTimeout(() => {
      setLanguage(code, true);
      setTimeout(() => setIsChanging(false), 200);
    }, 50);
  };

  // close dropdown on outside click
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    if (isOpen) document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [isOpen]);

  return (
    <div className="relative overflow-visible" ref={dropdownRef}>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center rounded-lg bg-transparent backdrop-blur-sm transition-all hover:bg-white/10 px-2 py-1 ${
          isChanging || isTransitioning ? 'opacity-70 cursor-wait' : ''
        }`}
        aria-label="Change language"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        disabled={isChanging || isTransitioning}
      >
        <motion.div
          animate={{
            rotate: isOpen ? 360 : 0,
            scale: isChanging ? 0.9 : 1
          }}
          transition={{ duration: 0.3, ease: 'anticipate' }}
          className="w-7 h-7 rounded-full overflow-hidden flex items-center justify-center"
        >
          <span
            className={`fi fi-${languageToFlag[language]} fis`}
            style={{ width: '100%', height: '100%', backgroundSize: 'cover' }}
          />
        </motion.div>
        <ChevronDown size={16} strokeWidth={2} className="ms-3 opacity-60" aria-hidden="true" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-48 rounded-2xl shadow-xl py-3 border border-gray-100 z-[100]"
            style={{
              backgroundColor: '#D9EFF7',
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1600 900\'%3E%3Cpolygon fill=\'%2392effd\' points=\'957 450 539 900 1396 900\'/%3E%3Cpolygon fill=\'%2322bffd\' points=\'957 450 872.9 900 1396 900\'/%3E%3Cpolygon fill=\'%2392effd\' points=\'-60 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%2322bffd\' points=\'337 900 398 662 816 900\'/%3E%3Cpolygon fill=\'%2392effd\' points=\'1203 546 1552 900 876 900\'/%3E%3Cpolygon fill=\'%2322bffd\' points=\'1203 546 1552 900 1162 900\'/%3E%3Cpolygon fill=\'%2392effd\' points=\'641 695 886 900 367 900\'/%3E%3Cpolygon fill=\'%2322bffd\' points=\'587 900 641 695 886 900\'/%3E%3Cpolygon fill=\'%2392effd\' points=\'1710 900 1401 632 1096 900\'/%3E%3Cpolygon fill=\'%2322bffd\' points=\'1710 900 1401 632 1365 900\'/%3E%3Cpolygon fill=\'%2392effd\' points=\'1210 900 971 687 725 900\'/%3E%3Cpolygon fill=\'%2322bffd\' points=\'943 900 1210 900 971 687\'/%3E%3C/svg%3E")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            {languageOptions.map((lang) => {
              const isIcelandicActive = lang.code === 'is' && language === 'is';
              return (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  disabled={isChanging || isTransitioning}
                  className={`
                    w-full text-left flex items-center justify-between
                    px-4 py-2.5
                    transition-all duration-150 ease-in-out hover:ps-6
                    bg-transparent
                    ${language === lang.code ? 'text-gray-900' : 'text-gray-600 hover:bg-gray-50/80'}
                    ${isIcelandicActive ? 'bg-white/30 backdrop-blur-sm rounded-lg' : ''}
                    ${isChanging || isTransitioning ? 'pointer-events-none opacity-50' : ''}
                  `}
                >
                  <div className="flex items-baseline">
                    <span className={`text-[15px] text-gray-900 ${language === lang.code ? 'font-semibold' : ''}`}>
                      {lang.defaultName}
                    </span>
                    <span className="text-[13px] text-gray-500 ms-1">
                      {lang.nativeName}
                    </span>
                  </div>
                  {language === lang.code && <Check className="h-4 w-4 text-blue-600" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}