import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../lib/i18n/LanguageContext';

const StickyNavigation: React.FC = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'hero', label: t.proceduresPage.navigation.hero },
    { id: 'steps', label: t.proceduresPage.navigation.steps },
    { id: 'types', label: t.proceduresPage.navigation.types },
    { id: 'testimonials', label: t.proceduresPage.navigation.testimonials },
    { id: 'complications', label: t.proceduresPage.navigation.complications },
    { id: 'faq', label: t.proceduresPage.navigation.faq },
    { id: 'brochures', label: t.proceduresPage.navigation.brochures }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsVisible(scrollPosition > 100);

      // Find active section
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));

      const currentSection = sections.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 160; // Account for both main header and sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <motion.nav
      className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4">
          <div className="flex space-x-1 bg-gray-100 rounded-full p-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default StickyNavigation;