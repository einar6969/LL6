import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink, Loader2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { supabase } from '../../lib/supabase';
import { Brochure } from '../../types';

const Brochures: React.FC = () => {
  const { t } = useLanguage();
  const { language } = useLanguage();
  const [brochures, setBrochures] = useState<Brochure[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrochures = async () => {
      try {
        setLoading(true);
        setError(null);

        const { data, error: fetchError } = await supabase
          .from('brochures')
          .select('id, title, title_en, subtitle, description, description_en, url, created_at, updated_at')
          .order('created_at', { ascending: true });

        if (fetchError) {
          throw new Error(`Failed to fetch brochures: ${fetchError.message}`);
        }

        if (!data) {
          throw new Error('No brochure data received from database');
        }

        setBrochures(data);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
        setError(errorMessage);
        console.error('Error fetching brochures:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBrochures();
  }, []);

  const handleDownload = (filename: string) => {
    // Open the PDF in a new tab
    window.open(filename, '_blank');
  };

  // Loading state
  if (loading) {
    return (
      <section id="brochures" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="mb-4"
            >
              <Loader2 className="h-12 w-12 text-blue-600" />
            </motion.div>
            <p className="text-xl text-gray-600">Hleð bæklingum...</p>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section id="brochures" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <AlertCircle className="h-16 w-16 text-red-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Villa kom upp</h3>
            <p className="text-gray-600 text-center max-w-md">{error}</p>
          </div>
        </div>
      </section>
    );
  }

  // No brochures found
  if (brochures.length === 0) {
    return (
      <section id="brochures" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <FileText className="h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Engir bæklingar fundust
            </h3>
            <p className="text-gray-600 text-center">
              Ekki tókst að finna neina bæklinga í gagnagrunninum.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="brochures" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full mb-6">
            <FileText className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.proceduresPage.brochures.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.proceduresPage.brochures.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brochures.map((brochure, index) => (
            <motion.div
              key={brochure.id}
              className="group bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-[520px] flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {/* PDF Icon */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                <FileText className="h-8 w-8" />
              </motion.div>

              {/* Content */}
              <div className="flex-grow mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {language === 'en' 
                    ? (brochure.title_en || brochure.title)
                    : brochure.title
                  }
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {language === 'en' 
                    ? (brochure.description_en || brochure.description || 'Detailed information about this service.')
                    : (brochure.description || 'Nákvæmar upplýsingar um þessa þjónustu.')
                  }
                </p>
              </div>

              {/* Download Button */}
              <motion.button
                onClick={() => handleDownload(brochure.url)}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 mt-auto"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download className="h-4 w-4" />
                <span>Sækja PDF</span>
                <ExternalLink className="h-4 w-4" />
              </motion.button>

              {/* File Info */}
              <div className="mt-4 text-center flex-shrink-0">
                <span className="text-xs text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                  PDF • {brochure.url.split('/').pop() || 'Brochure'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Þarftu frekari upplýsingar?
            </h3>
            <p className="text-gray-600 mb-6">
              Ef þú finnur ekki svar við spurningunni þinni í bæklingum okkar, ekki hika við að hafa samband. 
              Við erum alltaf tilbúin að svara spurningum og veita frekari upplýsingar.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hafðu samband við okkur
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Brochures;