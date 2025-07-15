import React from 'react';
import { motion } from 'framer-motion';
import { Eye, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  const quickLinks = [
    { name: t.homePage.footer.quickLinks.procedures, href: '#procedures' },
    { name: t.homePage.footer.quickLinks.about, href: '#about' },
    { name: t.homePage.footer.quickLinks.booking, href: '#booking' },
    { name: t.homePage.footer.quickLinks.faq, href: '#faq' }
  ];

  const procedures = [
    { name: t.homePage.footer.services.lasik, href: '#' },
    { name: t.homePage.footer.services.prk, href: '#' },
    { name: t.homePage.footer.services.lensReplacement, href: '#' },
    { name: t.homePage.footer.services.examinations, href: '#' }
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: t.homePage.footer.social.facebook },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: t.homePage.footer.social.instagram },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: t.homePage.footer.social.linkedin }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/sjonlag_logo_footer.svg"
              alt="Sjónlag"
              className="h-10 w-auto mb-6"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t.homePage.footer.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gradient-to-r hover:from-blue-600 hover:to-teal-500 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">{t.homePage.footer.quickLinks.title}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Procedures */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">{t.homePage.footer.services.title}</h3>
            <ul className="space-y-3">
              {procedures.map((procedure, index) => (
                <li key={index}>
                  <a
                    href={procedure.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {procedure.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">{t.homePage.footer.contact.title}</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    {t.homePage.footer.contact.address.split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index === 0 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href={`tel:+354${t.homePage.footer.contact.phone.replace('-', '')}`} className="text-gray-300 hover:text-white transition-colors">
                  {t.homePage.footer.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${t.homePage.footer.contact.email}`} className="text-gray-300 hover:text-white transition-colors">
                  {t.homePage.footer.contact.email}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>{t.homePage.footer.contact.hours.weekdays}</p>
                  <p>{t.homePage.footer.contact.hours.saturday}</p>
                  <p>{t.homePage.footer.contact.hours.sunday}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          className="border-t border-gray-800 mt-12 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold mb-4">{t.homePage.footer.newsletter.title}</h3>
            <p className="text-gray-300 mb-6">
              {t.homePage.footer.newsletter.description}
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder={t.homePage.footer.newsletter.placeholder}
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.homePage.footer.newsletter.subscribe}
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            {t.homePage.footer.legal.copyright}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.homePage.footer.legal.privacy}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.homePage.footer.legal.terms}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t.homePage.footer.legal.cookies}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;