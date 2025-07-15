import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'Getur maður verið með fleiri en eina sjónskerðingu í einu?',
      answer:
        'Já, það er algengt að fólk sé með fleiri en eina sjónskerðingu, til dæmis nærsýni og sjónskekkju, eða fjarsýni og aldurstengda fjarsýni. Þetta kallast samsettar sjónskerðingar og krefst sérhæfðrar leiðréttingar.'
    },
    {
      question: 'Er ég of gamall/gömul fyrir laser aðgerð?',
      answer:
        'Aldur er ekki eini áhrifaþátturinn. Mikilvægara er að sjónin sé stöðug og augun heilbrigð. Fyrir eldri einstaklinga geta linsuskiptiaðgerðir verið heppilegri kostur en hefðbundnar laser aðgerðir.'
    },
    {
      question: 'Hversu oft þarf að uppfæra gleraugu eða linsur?',
      answer:
        'Það fer eftir því hversu hratt sjónin breytist. Almennt er mælt með augnskoðun á 1-2 ára fresti til að tryggja að styrkurinn sé réttur. Börn og unglingar þurfa oft tíðari uppfærslur.'
    },
    {
      question: 'Hvað kostar sjónlagsleiðrétting?',
      answer:
        'Kostnaður fer eftir tegund leiðréttingar. Gleraugu og snertilinsur eru ódýrasti kosturinn, en laser aðgerðir og linsuskipti kosta meira en geta verið hagkvæmari til lengri tíma. Við bjóðum upp á ókeypis ráðgjöf og verðmat.'
    },
    {
      question: 'Eru laser aðgerðir öruggar?',
      answer:
        'Já, nútíma laser aðgerðir eru mjög öruggar þegar þær eru framkvæmdar af reyndum sérfræðingum. Árangurshlutfallið er yfir 95% og alvarlegir fylgikvillar eru mjög sjaldgæfir. Við notum eingöngu nýjustu og öruggstu tæknina.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Algengar spurningar um sjónskerðingar</h2>
          <p className="text-xl text-gray-600">Svör við algengustu spurningunum um sjónlagsleiðréttingar</p>
        </motion.div>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <motion.div key={index} className="bg-gray-50 rounded-xl overflow-hidden" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <button onClick={() => toggleFAQ(index)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-lg font-semibold text-gray-900 pr-4">{item.question}</h3>
                <motion.div animate={{ rotate: openFAQ === index ? 180 : 0 }} transition={{ duration: 0.2 }} className="flex-shrink-0">
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                </motion.div>
              </button>
              <motion.div initial={false} animate={{ height: openFAQ === index ? 'auto' : 0, opacity: openFAQ === index ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
