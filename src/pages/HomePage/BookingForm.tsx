import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { supabase } from '../../lib/supabase';
import { BookingFormData } from '../../types';

const BookingForm: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const schema = yup.object({
    name: yup.string().required(t.homePage.booking.form.validation.nameRequired),
    phone: yup.string().required(t.homePage.booking.form.validation.phoneRequired).min(7, t.homePage.booking.form.validation.phoneMinLength),
    email: yup.string().email(t.homePage.booking.form.validation.emailInvalid).required(t.homePage.booking.form.validation.emailRequired),
    preferredDate: yup.string().required(t.homePage.booking.form.validation.dateRequired),
    preferredTime: yup.string().required(t.homePage.booking.form.validation.timeRequired),
    message: yup.string()
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<BookingFormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('bookings')
        .insert([{
          name: data.name,
          phone: data.phone,
          email: data.email,
          preferred_date: data.preferredDate,
          preferred_time: data.preferredTime,
          message: data.message || null,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const timeSlots = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'
  ];

  return (
    <section id="booking" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.homePage.booking.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.homePage.booking.subtitle}
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitStatus === 'success' && (
              <motion.div
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <CheckCircle className="h-5 w-5 text-green-600" />
                <p className="text-green-800">{t.homePage.booking.form.successMessage}</p>
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <motion.div
                className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <AlertCircle className="h-5 w-5 text-red-600" />
                <p className="text-red-800">{t.homePage.booking.form.errorMessage}</p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  {t.homePage.booking.form.name} {t.homePage.booking.form.required}
                </label>
                <input
                  {...register('name')}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={`Sláðu inn ${t.homePage.booking.form.name.toLowerCase()}`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Phone and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="h-4 w-4 inline mr-2" />
                    {t.homePage.booking.form.phone} {t.homePage.booking.form.required}
                  </label>
                  <input
                    {...register('phone')}
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder={t.homePage.footer.contact.phone}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4 inline mr-2" />
                    {t.homePage.booking.form.email} {t.homePage.booking.form.required}
                  </label>
                  <input
                    {...register('email')}
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder={`nafn@example.com`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    {t.homePage.booking.form.preferredDate} {t.homePage.booking.form.required}
                  </label>
                  <input
                    {...register('preferredDate')}
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                  {errors.preferredDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="h-4 w-4 inline mr-2" />
                    {t.homePage.booking.form.preferredTime} {t.homePage.booking.form.required}
                  </label>
                  <select
                    {...register('preferredTime')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">{t.homePage.booking.form.selectTime}</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                  {errors.preferredTime && (
                    <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="h-4 w-4 inline mr-2" />
                  {t.homePage.booking.form.message} {t.homePage.booking.form.optional}
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Segðu okkur frá því sem þú vilt ræða eða spurningum sem þú hefur..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? t.homePage.booking.form.submitting : t.homePage.booking.form.submit}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;