import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Eye,
  Search,
  Glasses,
  Baby,
  AlertTriangle,
  Heart,
  Calendar,
  Phone,
  Mail,
  ChevronDown,
  ChevronRight,
  Stethoscope,
  Activity,
  Shield
} from 'lucide-react';
import { useLanguage } from '../../lib/i18n/LanguageContext';

const AugnlaekningarPage: React.FC = () => {
  const { t } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const services = [
    {
      id: 'augnskodun',
      title: 'Augnskoðun',
      summary: 'Ítarleg skoðun á heilsu augna og sjónlagi með nýjustu tækni og búnaði.',
      icon: <Eye className="h-8 w-8" />,
      link: '/augnlaekningar/augnskodun',
      color: 'from-blue-500 to-blue-600' // Used for card hover background
    },
    {
      id: 'sjonmaelingar',
      title: 'Sjónmælingar',
      summary: 'Nákvæmar mælingar á sjónlagi og greiningu á sjónlagsgöllum.',
      icon: <Search className="h-8 w-8" />,
      link: '/augnlaekningar/sjonmaelingar',
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'sjonskerdingar',
      title: 'Sjónskerðingar og sjónleiðréttingar',
      summary: 'Meðferð við nærsýni, fjarsýni, sjónskekkju og aldurstengt fjarsýni.',
      icon: <Glasses className="h-8 w-8" />,
      link: '/augnlaekningar/sjonskerdingar',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'barnaaugnlaekningar',
      title: 'Barnaaugnlækningar',
      summary: 'Sérhæfð augnlæknaþjónusta fyrir börn og unglinga.',
      icon: <Baby className="h-8 w-8" />,
      link: '/augnlaekningar/barnaaugnlaekningar',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'augnsjukdomar',
      title: 'Augnsjúkdómar',
      summary: 'Greining og meðferð við fjölbreyttum augnsjúkdómum og augnavandamálum.',
      icon: <AlertTriangle className="h-8 w-8" />,
      link: '/augnlaekningar/augnsjukdomar',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'almenn-augnheilsa',
      title: 'Almenn augnheilsa',
      summary: 'Ráðgjöf og leiðbeiningar um að viðhalda góðri augnheilsu.',
      icon: <Heart className="h-8 w-8" />,
      link: '/augnlaekningar/almenn-augnheilsa',
      color: 'from-green-500 to-green-600'
    }
  ];

  const faqItems = [
    {
      question: 'Hversu oft ætti að fara í augnrannsókn?',
      answer: 'Við mælum með augnrannsókn á 2-3 ára fresti fyrir fólk undir 40 ára aldri, og árlega fyrir þá sem eru eldri. Ef þú ert með augnsjúkdóm eða áhættuþætti getur þurft tíðari skoðun.'
    },
    {
      question: 'Hvað kostar augnrannsókn?',
      answer: 'Kostnaður fer eftir tegund skoðunar og hvort þörf er á sérstökum prófunum. Við bjóðum upp á mismunandi pakka og getum gefið nákvæmt verðtilboð þegar þú pantar tíma.'
    },
    {
      question: 'Þarf ég tilvísun frá heimilislækni?',
      answer: 'Nei, þú þarft ekki tilvísun fyrir almennar augnrannsóknir. Fyrir sérhæfða meðferð eða aðgerðir getur þurft tilvísun til að fá endurgreiðslu frá sjúkratryggingum.'
    },
    {
      question: 'Hvað á að gera ef ég finn skyndilegar breytingar á sjón?',
      answer: 'Ef þú finnur skyndilegar breytingar á sjón, ljósgeisla, myrkva eða aðrar óvenjulegar breytingar ættir þú að hafa samband við okkur strax eða leita á bráðamóttöku.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/5752258/pexels-photo-5752258.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
            alt="Eye examination"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-teal-600/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Augnlækningar
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Við bjóðum upp á alhliða augnlæknaþjónustu með áherslu á gæði, öryggi og persónulega umönnun.
              Frá hefðbundnum augnrannsóknum til sérhæfðrar meðferðar við flóknum augnsjúkdómum.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link to="/panta-tima">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Bóka tíma</span>
                </motion.button>
              </Link>

              <motion.button
                onClick={() => scrollToSection('services')}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Skoða þjónustu</span>
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Þjónusta okkar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Við bjóðum upp á fjölbreytta og alhliða augnlæknaþjónustu fyrir alla aldurshópa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                {/* Icon - Updated to match CoreValues style */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {service.icon}
                </motion.div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.summary}
                </p>

                {/* CTA Link */}
                <Link to={service.link}>
                  <motion.div
                    className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    <span>Læra meira</span>
                    <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Decision Helper Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              {/* Icon - Kept orange accent as requested */}
              <motion.div
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full mx-auto mb-6"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Stethoscope className="h-10 w-10" />
              </motion.div>

              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ertu ekki viss hvað þú þarft?
              </h2>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Taktu okkar skyndipróf og finndu út hvaða þjónusta hentar þér best.
                Við hjálpum þér að finna rétta leiðina að betri augnheilsu.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/augnlaekningar/quiz">
                  <motion.button
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Activity className="h-5 w-5" />
                    <span>Taktu skyndipróf</span>
                  </motion.button>
                </Link>

                <Link to="/panta-tima">
                  <motion.button
                    className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Bóka ráðgjöf</span>
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Algengar spurningar
            </h2>
            <p className="text-xl text-gray-600">
              Svör við algengustu spurningunum um augnlækningar
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {item.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-blue-600" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon - Updated to match CoreValues style */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full mx-auto mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Shield className="h-10 w-10" />
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tilbúinn að taka næsta skref?
            </h2>

            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Hafðu samband við okkur í dag og byrjaðu ferðina þína til betri augnheilsu.
              Við erum hér til að hjálpa þér.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/panta-tima">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Bóka tíma núna</span>
                </motion.button>
              </Link>

              <motion.a
                href="tel:+3545812345"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>581-2345</span>
              </motion.a>

              <motion.a
                href="mailto:info@sjonlag.is"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="h-5 w-5" />
                <span>info@sjonlag.is</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AugnlaekningarPage;
