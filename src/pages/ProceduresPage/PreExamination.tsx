// src/pages/PreExamination.tsx

import React from 'react';
import { motion } from 'framer-motion';
import {
  Eye,
  CheckCircle,
  AlertTriangle,
  Home,
  ChevronRight,
  SlidersHorizontal,
  Thermometer,
  Camera,
  Clock,
  Users,
  List,
  Activity,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../lib/i18n/LanguageContext';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../components/ui/breadcrumb';

const PreExamination: React.FC = () => {
  const { t } = useLanguage();

  const stepIcons = [
    Eye,
    SlidersHorizontal,
    Activity,
    Thermometer,
    Camera,
    Clock,
    Users,
    List,
    CheckCircle,
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Breadcrumb Navigation */}
      <div className="max-w-4xl mx-auto px-4 pt-8">
        <Breadcrumb>
          <BreadcrumbList className="text-sm text-gray-500">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" aria-label="Heim">
                  <Home className="h-4 w-4 hover:text-gray-700" />
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/adgerdir">Sjónlagaðgerðir</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Forskoðun</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section (Original Spacing & Font) */}
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-2">
            {t.preExaminationPage.hero.title}
          </h1>
          <p className="text-lg text-gray-600">
            {t.preExaminationPage.hero.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Intro & Goals – reduced top gap so it sits right under the hero’s mb-16 */}
      <section className="bg-white pb-16">
        <motion.div
          className="max-w-4xl mx-auto px-4 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <p className="text-gray-700 leading-relaxed">
            {t.preExaminationPage.intro.paragraph1}
          </p>

          <div className="border-l-4 border-blue-500 bg-blue-50 rounded-lg p-5">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="h-5 w-5 text-blue-600" />
              <h3 className="font-semibold text-lg text-blue-700">
                {t.preExaminationPage.intro.goalTitle}
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {t.preExaminationPage.intro.goalDescription}
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            {t.preExaminationPage.intro.paragraph2}
          </p>
        </motion.div>
      </section>

      {/* Notice */}
      <section className="bg-gray-50 py-16">
        <motion.div
          className="max-w-4xl mx-auto px-4 border-l-4 border-yellow-500 bg-yellow-50 rounded-lg p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            <h3 className="font-semibold text-lg text-yellow-700">
              {t.preExaminationPage.notice.title}
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {t.preExaminationPage.notice.description}
          </p>
        </motion.div>
      </section>

      {/* Examination Steps */}
      <section className="bg-white py-16">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-5 w-5 text-blue-600" />
            <h2 className="text-2xl font-semibold">
              {t.preExaminationPage.examination.title}
            </h2>
          </div>
          <p className="mb-6 text-gray-700 leading-relaxed">
            {t.preExaminationPage.examination.subtitle}
          </p>
          <ol className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.preExaminationPage.examination.steps.map((step, i) => {
              const Icon = stepIcons[i] || CheckCircle;
              return (
                <li
                  key={i}
                  className="flex items-start gap-4 bg-white rounded-xl shadow-sm hover:shadow-lg transition p-5"
                >
                  <Icon className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </li>
              );
            })}
          </ol>
        </motion.div>
      </section>

      {/* After Examination */}
      <section className="bg-gray-50 py-16">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="h-5 w-5 text-blue-600" />
            <h2 className="text-2xl font-semibold">
              {t.preExaminationPage.afterExamination.title}
            </h2>
          </div>
          <p className="text-gray-700 leading-relaxed">
            {t.preExaminationPage.afterExamination.description}
          </p>
        </motion.div>
      </section>

      {/* Procedure Types */}
      <section className="bg-white py-16">
        <motion.div
          className="max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Camera className="h-5 w-5 text-blue-600" />
            <h2 className="text-2xl font-semibold">
              {t.preExaminationPage.procedureTypes.title}
            </h2>
          </div>
          <p className="mb-6 text-gray-700 leading-relaxed">
            {t.preExaminationPage.procedureTypes.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.preExaminationPage.procedureTypes.types.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-5 hover:shadow-lg transition cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-700 py-16">
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
            {t.preExaminationPage.cta.title}
          </h3>
          <p className="mb-8 text-blue-100 leading-relaxed">
            {t.preExaminationPage.cta.subtitle}
          </p>
          <Link to="/panta-tima" className="inline-block">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 hover:bg-blue-100 transition shadow-lg">
              {t.preExaminationPage.cta.button}
              <ChevronRight className="h-5 w-5" />
            </button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default PreExamination;
