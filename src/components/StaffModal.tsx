import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { FocusTrap } from 'focus-trap-react';
import { useLanguage } from '../lib/i18n/LanguageContext';

interface Doctor {
  id: string;
  name: string;
  job_title: string;
  job_title_en: string | null;
  img_src: string;
  further_data: string | null;
  further_data_en: string | null;
  created_at: string;
  updated_at: string;
}

interface StaffModalProps {
  doctor: Doctor;
  onClose: () => void;
}

const StaffModal: React.FC<StaffModalProps> = ({ doctor, onClose }) => {
  const { language } = useLanguage();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Get localized content based on selected language
  const getLocalizedJobTitle = () => {
    if (language === 'en' && doctor.job_title_en) {
      return doctor.job_title_en;
    }
    return doctor.job_title;
  };

  const getLocalizedFurtherData = () => {
    if (language === 'en' && doctor.further_data_en) {
      return doctor.further_data_en;
    }
    return doctor.further_data;
  };

  return (
    <AnimatePresence>
      <FocusTrap>
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="absolute inset-0 bg-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleOverlayClick}
          />

          <motion.div
            ref={modalRef}
            className="relative bg-white rounded-2xl shadow-modal max-w-2xl w-full max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 group"
            >
              <X className="h-5 w-5 text-gray-600 group-hover:text-gray-900" />
            </button>

            <div className="relative h-48 overflow-hidden">
              <img
                src={doctor.img_src}
                alt={doctor.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-6 left-6 right-16">
                <h2 id="modal-title" className="text-2xl md:text-3xl font-bold text-white mb-2">
                  {doctor.name}
                </h2>
                <p className="text-blue-200 text-lg font-medium">
                  {getLocalizedJobTitle()}
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 max-h-[calc(90vh-12rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-gray-100">
              <div className="prose prose-gray prose-lg max-w-none leading-relaxed">
                {getLocalizedFurtherData() ? (
                  <div className="prose prose-gray prose-lg max-w-none leading-relaxed">
                    <ReactMarkdown 
                      remarkPlugins={[remarkGfm]}
                      components={{
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside space-y-3 text-gray-700">
                            {children}
                          </ul>
                        ),
                        li: ({ children }) => (
                          <li className="text-base leading-relaxed">
                            {children}
                          </li>
                        ),
                        p: ({ children }) => (
                          <p className="text-base leading-relaxed mb-4 text-gray-700">
                            {children}
                          </p>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold text-gray-900">
                            {children}
                          </strong>
                        ),
                        em: ({ children }) => (
                          <em className="italic text-gray-700">
                            {children}
                          </em>
                        )
                      }}
                    >
                      {getLocalizedFurtherData()}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6">
                    <p className="text-gray-600 leading-relaxed">
                      {doctor.name} er reynslumikill sérfræðilæknir með víðtæka þekkingu á augnlækningum. 
                      Hann/hún hefur skuldbundið sig til að veita sjúklingum bestu mögulegu þjónustu og 
                      nýtir nýjustu tækni og aðferðir í sinni starfsemi.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </FocusTrap>
    </AnimatePresence>
  );
};

export default StaffModal;