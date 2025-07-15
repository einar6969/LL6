import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { 
  Calendar, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  Info,
  User,
  CreditCard,
  MapPin,
  Hash,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import { supabase } from '../../lib/supabase';

interface BookingFormData {
  fullName: string;
  nationalId: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  appointmentType: string;
  preferredDay: string;
  preferredTime: string;
}

const BookingPage: React.FC = () => {
  const { t } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const schema = yup.object({
    fullName: yup.string().required(t.bookingPage.form.validation.nameRequired),
    nationalId: yup.string()
      .required(t.bookingPage.form.validation.nationalIdRequired)
      .matches(/^\d{10}$/, t.bookingPage.form.validation.nationalIdFormat),
    email: yup.string()
      .email(t.bookingPage.form.validation.emailInvalid)
      .required(t.bookingPage.form.validation.emailRequired),
    phone: yup.string()
      .required(t.bookingPage.form.validation.phoneRequired)
      .min(7, t.bookingPage.form.validation.phoneMinLength),
    address: yup.string().required(t.bookingPage.form.validation.addressRequired),
    postalCode: yup.string()
      .required(t.bookingPage.form.validation.postalCodeRequired)
      .matches(/^\d{3}$/, t.bookingPage.form.validation.postalCodeFormat),
    appointmentType: yup.string().required(t.bookingPage.form.validation.appointmentTypeRequired),
    preferredDay: yup.string().required(t.bookingPage.form.validation.preferredDayRequired),
    preferredTime: yup.string().required(t.bookingPage.form.validation.preferredTimeRequired)
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
        .from('appointment_requests')
        .insert([{
          full_name: data.fullName,
          national_id: data.nationalId,
          email: data.email,
          phone: data.phone,
          address: data.address,
          postal_code: data.postalCode,
          appointment_type: data.appointmentType,
          preferred_day: data.preferredDay,
          preferred_time: data.preferredTime,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Error submitting appointment request:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const appointmentTypes = [
    { value: 'forskoðun', label: t.bookingPage.form.appointmentType.options.examination },
    { value: 'almennar', label: t.bookingPage.form.appointmentType.options.general }
  ];

  const weekdays = [
    { value: 'mánudagur', label: t.bookingPage.form.preferredDay.options.monday },
    { value: 'þriðjudagur', label: t.bookingPage.form.preferredDay.options.tuesday },
    { value: 'miðvikudagur', label: t.bookingPage.form.preferredDay.options.wednesday },
    { value: 'fimmtudagur', label: t.bookingPage.form.preferredDay.options.thursday },
    { value: 'föstudagur', label: t.bookingPage.form.preferredDay.options.friday }
  ];

  const timePreferences = [
    { value: 'fyrir-hádegi', label: t.bookingPage.form.preferredTime.options.morning },
    { value: 'eftir-hádegi', label: t.bookingPage.form.preferredTime.options.afternoon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.bookingPage.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t.bookingPage.subtitle}
          </p>
        </motion.div>

        {/* Information Section */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.bookingPage.information.title}</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Heilsuvera Link */}
            <div className="flex items-start space-x-3">
              <ExternalLink className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">{t.bookingPage.information.heilsuvera.title}</h3>
                <p className="text-gray-600 mb-3">
                  {t.bookingPage.information.heilsuvera.description}
                </p>
                <a
                  href="https://www.heilsuvera.is"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center space-x-1"
                >
                  <span>{t.bookingPage.information.heilsuvera.link}</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.bookingPage.information.contact.email.title}</h3>
                  <a
                    href={`mailto:${t.bookingPage.information.contact.email.address}`}
                    className="text-teal-600 hover:text-teal-800"
                  >
                    {t.bookingPage.information.contact.email.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{t.bookingPage.information.contact.phone.title}</h3>
                  <a
                    href={`tel:+354${t.bookingPage.information.contact.phone.number.replace('-', '')}`}
                    className="text-green-600 hover:text-green-800 font-medium"
                  >
                    {t.bookingPage.information.contact.phone.number}
                  </a>
                  <div className="flex items-center space-x-2 mt-1">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{t.bookingPage.information.contact.phone.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Important Notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Info className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  {t.bookingPage.information.notice.title}
                </h3>
                <p className="text-blue-800 mb-3">
                  {t.bookingPage.information.notice.summary}
                </p>
                <button
                  onClick={() => setShowMoreInfo(!showMoreInfo)}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {showMoreInfo ? t.bookingPage.information.notice.readLess : t.bookingPage.information.notice.readMore}
                </button>
                
                {showMoreInfo && (
                  <motion.div
                    className="mt-3 text-blue-800"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mb-2">
                      {t.bookingPage.information.notice.details.paragraph1}
                    </p>
                    <p>
                      {t.bookingPage.information.notice.details.paragraph2}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.bookingPage.form.title}</h2>

          {submitStatus === 'success' && (
            <motion.div
              className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle className="h-5 w-5 text-green-600" />
              <p className="text-green-800">
                {t.bookingPage.form.submit.success}
              </p>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <AlertCircle className="h-5 w-5 text-red-600" />
              <p className="text-red-800">
                {t.bookingPage.form.submit.error}
              </p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  {t.bookingPage.form.personalInfo.fullName.label} {t.bookingPage.form.validation.required}
                </label>
                <input
                  {...register('fullName')}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={t.bookingPage.form.personalInfo.fullName.placeholder}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                )}
              </div>

              {/* National ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <CreditCard className="h-4 w-4 inline mr-2" />
                  {t.bookingPage.form.personalInfo.nationalId.label} {t.bookingPage.form.validation.required}
                </label>
                <input
                  {...register('nationalId')}
                  type="text"
                  maxLength={10}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={t.bookingPage.form.personalInfo.nationalId.placeholder}
                />
                {errors.nationalId && (
                  <p className="mt-1 text-sm text-red-600">{errors.nationalId.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  {t.bookingPage.form.personalInfo.email.label} {t.bookingPage.form.validation.required}
                </label>
                <input
                  {...register('email')}
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={t.bookingPage.form.personalInfo.email.placeholder}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="h-4 w-4 inline mr-2" />
                  {t.bookingPage.form.personalInfo.phone.label} {t.bookingPage.form.validation.required}
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={t.bookingPage.form.personalInfo.phone.placeholder}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="h-4 w-4 inline mr-2" />
                  {t.bookingPage.form.personalInfo.address.label} {t.bookingPage.form.validation.required}
                </label>
                <input
                  {...register('address')}
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={t.bookingPage.form.personalInfo.address.placeholder}
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                )}
              </div>

              {/* Postal Code */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Hash className="h-4 w-4 inline mr-2" />
                  {t.bookingPage.form.personalInfo.postalCode.label} {t.bookingPage.form.validation.required}
                </label>
                <input
                  {...register('postalCode')}
                  type="text"
                  maxLength={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder={t.bookingPage.form.personalInfo.postalCode.placeholder}
                />
                {errors.postalCode && (
                  <p className="mt-1 text-sm text-red-600">{errors.postalCode.message}</p>
                )}
              </div>
            </div>

            {/* Appointment Type */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                <Calendar className="h-4 w-4 inline mr-2" />
                {t.bookingPage.form.appointmentType.label} {t.bookingPage.form.validation.required}
              </label>
              <select
                {...register('appointmentType')}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              >
                <option value="">{t.bookingPage.form.appointmentType.placeholder}</option>
                {appointmentTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.appointmentType && (
                <p className="mt-1 text-sm text-red-600">{errors.appointmentType.message}</p>
              )}
            </div>

            {/* Preferred Day */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.bookingPage.form.preferredDay.label} {t.bookingPage.form.validation.required}
              </label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {weekdays.map((day) => (
                  <label key={day.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      {...register('preferredDay')}
                      type="radio"
                      value={day.value}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{day.label}</span>
                  </label>
                ))}
              </div>
              {errors.preferredDay && (
                <p className="mt-1 text-sm text-red-600">{errors.preferredDay.message}</p>
              )}
            </div>

            {/* Preferred Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                {t.bookingPage.form.preferredTime.label} {t.bookingPage.form.validation.required}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {timePreferences.map((time) => (
                  <label key={time.value} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      {...register('preferredTime')}
                      type="radio"
                      value={time.value}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{time.label}</span>
                  </label>
                ))}
              </div>
              {errors.preferredTime && (
                <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? t.bookingPage.form.submit.submitting : t.bookingPage.form.submit.button}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default BookingPage;