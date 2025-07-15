import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Award, Users, TrendingUp } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

const OurStory: React.FC = () => {
  const { t } = useLanguage();

  const timelineIcons = [
    <Calendar className="h-6 w-6" />,
    <TrendingUp className="h-6 w-6" />,
    <Users className="h-6 w-6" />,
    <Award className="h-6 w-6" />,
    <TrendingUp className="h-6 w-6" />,
    <Award className="h-6 w-6" />
  ];

  return (
    <section id="our-story" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.aboutUsPage.ourStory.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.aboutUsPage.ourStory.subtitle}
          </p>
        </motion.div>

        {/* Story Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.aboutUsPage.ourStory.content.paragraph1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.aboutUsPage.ourStory.content.paragraph2}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {t.aboutUsPage.ourStory.content.paragraph3}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4923.089240905677!2d-21.876018314039438!3d64.13487423903727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48d67497da6c6a75%3A0xca1b3008dac0ed24!2zU2rDs25sYWc!5e0!3m2!1sen!2sus!4v1752282632612!5m2!1sen!2sus" 
                className="w-full h-96" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Sjónlag Location"
              />
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
            {t.aboutUsPage.ourStory.timeline.title}
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-teal-500 rounded-full"></div>
            
            <div className="space-y-12">
              {t.aboutUsPage.ourStory.timeline.items.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-2xl shadow-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-2/12 flex justify-center">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full flex items-center justify-center text-white shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {timelineIcons[index]}
                    </motion.div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;