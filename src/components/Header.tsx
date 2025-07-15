// src/components/Header.tsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Eye, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../lib/i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';

const Header: React.FC = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t.homePage.header.navItems.procedures, href: '/adgerdir', isRoute: true },
    { name: 'Augnlækningar', href: '/augnlaekningar', isRoute: true },
    { name: t.homePage.header.navItems.tearDuct, href: '/taralind', isRoute: true },
    { name: t.homePage.header.navItems.about, href: '/um-sjonlag', isRoute: true },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/">
              <img
                src="/sjonlag_logo.svg"
                alt="Sjónlag"
                className="h-10 w-auto"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isRoute ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  } ${location.pathname === item.href ? 'text-blue-600' : ''}`}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`font-medium transition-colors duration-300 hover:text-blue-600 ${
                    isScrolled ? 'text-gray-700' : 'text-white/90'
                  }`}
                >
                  {item.name}
                </button>
              )
            )}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 overflow-visible">
            <LanguageToggle />

            <Link to="/panta-tima">
              <motion.button
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-4 w-4" />
                <span>{t.homePage.header.bookingButton}</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) =>
                item.isRoute ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-left text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-gray-700 font-medium py-2 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </button>
                )
              )}
              <Link
                to="/panta-tima"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-full font-semibold mt-4"
              >
                {t.homePage.header.bookingButton}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;