import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const { t } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: t.homePage.faq.items.safety.question,
      answer: t.homePage.faq.items.safety.answer
    },
    {
      id: 2,
      question: t.homePage.faq.items.recovery.question,
      answer: t.homePage.faq.items.recovery.answer
    },
    {
      id: 3,
      question: t.homePage.faq.items.cost.question,
      answer: t.homePage.faq.items.cost.answer
    },
    {
      id: 4,
      question: t.homePage.faq.items.eligibility.question,
      answer: t.homePage.faq.items.eligibility.answer
    },
    {
      id: 5,
      question: t.homePage.faq.items.glasses.question,
      answer: t.homePage.faq.items.glasses.answer
    },
    {
      id: 6,
      question: t.homePage.faq.items.warranty.question,
      answer: t.homePage.faq.items.warranty.answer
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.homePage.faq.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.homePage.faq.subtitle}
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {item.question}
                </h3>
                <motion.div
                  animate={{ rotate: openItems.includes(item.id) ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  {openItems.includes(item.id) ? (
                    <Minus className="h-5 w-5 text-blue-600" />
                  ) : (
                    <Plus className="h-5 w-5 text-blue-600" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openItems.includes(item.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-600 mb-6">
            {t.homePage.faq.contactPrompt}
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.homePage.faq.contactButton}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;