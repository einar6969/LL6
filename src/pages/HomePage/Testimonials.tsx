import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

interface Testimonial {
  id: number;
  name: string;
  content: string;
  rating: number;
  procedure: string;
}

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: t.homePage.testimonials.items.anna.name,
      content: t.homePage.testimonials.items.anna.content,
      rating: 5,
      procedure: t.homePage.testimonials.items.anna.procedure
    },
    {
      id: 2,
      name: t.homePage.testimonials.items.jon.name,
      content: t.homePage.testimonials.items.jon.content,
      rating: 5,
      procedure: t.homePage.testimonials.items.jon.procedure
    },
    {
      id: 3,
      name: t.homePage.testimonials.items.maria.name,
      content: t.homePage.testimonials.items.maria.content,
      rating: 5,
      procedure: t.homePage.testimonials.items.maria.procedure
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.homePage.testimonials.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.homePage.testimonials.subtitle}
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author */}
                <div className="border-t pt-6">
                  <div className="font-semibold text-gray-900 text-lg mb-1">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentIndex].procedure}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-300"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-blue-600 to-teal-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;