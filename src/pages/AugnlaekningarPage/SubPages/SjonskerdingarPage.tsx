import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Eye,
  Calendar,
  ChevronDown,
  ChevronRight,
  Home,
  CheckCircle,
  AlertTriangle,
  Glasses,
  Search,
  Users,
  Phone,
  Mail
} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../../../components/ui/breadcrumb';

const SjonskerdingarPage: React.FC = () => {
  const [openCondition, setOpenCondition] = useState<string | null>('myopia');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const conditions = [
    {
      id: 'myopia',
      title: 'Nærsýni (Myopia)',
      icon: <Eye className="h-6 w-6" />,
      symptoms: [
        'Óskýr sjón á fjarlæga hluti',
        'Þörf á að píra augun til að sjá skýrt',
        'Höfuðverkur eða augnþreyta',
        'Erfiðleikar við að sjá á töflu eða merki'
      ],
      causes: 'Nærsýni stafar oftast af því að augað er of langt eða hornhimnan er of kúpt, sem veldur því að ljós fókuserast fyrir framan sjónhimnuna í stað þess að fókusera beint á hana.',
      treatment: 'Algengar leiðréttingar eru gleraugu, snertilinsur eða laser aðgerðir eins og LASIK eða PRK. Fyrir börn og unglinga geta sérstök gleraugu hjálpað til við að hægja á framvindu nærsýni.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'hyperopia',
      title: 'Fjarsýni (Hyperopia)',
      icon: <Search className="h-6 w-6" />,
      symptoms: [
        'Óskýr sjón á nálæga hluti',
        'Augnþreyta eða höfuðverkur við lestur',
        'Þörf á að halda hlutum lengra frá til að sjá skýrt',
        'Erfiðleikar við nákvæma vinnu'
      ],
      causes: 'Fjarsýni stafar oftast af því að augað er of stutt eða hornhimnan er of flöt, sem veldur því að ljós fókuserast fyrir aftan sjónhimnuna.',
      treatment: 'Hægt er að leiðrétta fjarsýni með gleraugum, snertilinsum eða laser aðgerðum. Margir með væga fjarsýni þurfa aðeins gleraugu fyrir lestur eða nákvæma vinnu.',
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'astigmatism',
      title: 'Sjónskekkja (Astigmatism)',
      icon: <Glasses className="h-6 w-6" />,
      symptoms: [
        'Óskýr eða brengluð sjón á allar fjarlægðir',
        'Tvísýni eða skuggasjón',
        'Augnþreyta og höfuðverkur',
        'Erfiðleikar við að greina á milli svipaðra stafa'
      ],
      causes: 'Sjónskekkja stafar af óreglulegri lögun hornhimnunnar eða linsunnar, sem veldur því að ljós fókuserast á fleiri en einum punkti á sjónhimnunni.',
      treatment: 'Leiðrétting felst í gleraugum, snertilinsum (toric linsum) eða laser aðgerðum. Toric linsur eru sérstaklega hannaðar til að leiðrétta sjónskekkju.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'presbyopia',
      title: 'Aldurstengd fjarsýni (Presbyopia)',
      icon: <Users className="h-6 w-6" />,
      symptoms: [
        'Erfiðleikar við að lesa smáletur',
        'Þörf á að halda lesefni lengra frá',
        'Augnþreyta við nálæga vinnu',
        'Þörf á meira ljósi við lestur'
      ],
      causes: 'Presbyopia er eðlilegur hluti af öldrunarferlinu þar sem augasteinninn missir teygjanleika sinn og getu til að fókusa á nálæga hluti. Þetta byrjar venjulega um 40 ára aldur.',
      treatment: 'Leiðréttingarvalkostir eru lesgleraugu, tvífókus eða fjölfókus gleraugu, fjölfókus snertilinsur eða linsuskiptiaðgerðir. PresbyMax laser aðgerð getur einnig verið valkostur.',
      color: 'from-green-500 to-green-600'
    }
  ];

  const comparisonData = [
    {
      condition: 'Nærsýni',
      symptoms: 'Óskýr fjarsjón',
      cause: 'Langt auga/kúpt hornhimna',
      correction: 'Gleraugu, linsur, laser'
    },
    {
      condition: 'Fjarsýni',
      symptoms: 'Óskýr nálægsjón',
      cause: 'Stutt auga/flöt hornhimna',
      correction: 'Gleraugu, linsur, laser'
    },
    {
      condition: 'Sjónskekkja',
      symptoms: 'Brengluð sjón',
      cause: 'Óregluleg hornhimna/linsa',
      correction: 'Gleraugu, toric linsur, laser'
    },
    {
      condition: 'Aldurstengd fjarsýni',
      symptoms: 'Erfiðleikar við lestur',
      cause: 'Stífur augasteinn',
      correction: 'Lesgleraugu, fjölfókus, linsuskipti'
    }
  ];

  const treatmentOptions = [
    'Gleraugu (einfókus, tvífókus, fjölfókus)',
    'Snertilinsur (einfókus, toric, fjölfókus)',
    'Laser sjónlagsaðgerðir (LASIK, PRK, PresbyMax)',
    'Linsuskiptiaðgerðir (augnasteinsskipti, linsuígræðsla)'
  ];

  const faqItems = [
    {
      question: 'Getur maður verið með fleiri en eina sjónskerðingu í einu?',
      answer: 'Já, það er algengt að fólk sé með fleiri en eina sjónskerðingu, til dæmis nærsýni og sjónskekkju, eða fjarsýni og aldurstengda fjarsýni. Þetta kallast samsettar sjónskerðingar og krefst sérhæfðrar leiðréttingar.'
    },
    {
      question: 'Er ég of gamall/gömul fyrir laser aðgerð?',
      answer: 'Aldur er ekki eini áhrifaþátturinn. Mikilvægara er að sjónin sé stöðug og augun heilbrigð. Fyrir eldri einstaklinga geta linsuskiptiaðgerðir verið heppilegri kostur en hefðbundnar laser aðgerðir.'
    },
    {
      question: 'Hversu oft þarf að uppfæra gleraugu eða linsur?',
      answer: 'Það fer eftir því hversu hratt sjónin breytist. Almennt er mælt með augnskoðun á 1-2 ára fresti til að tryggja að styrkurinn sé réttur. Börn og unglingar þurfa oft tíðari uppfærslur.'
    },
    {
      question: 'Hvað kostar sjónlagsleiðrétting?',
      answer: 'Kostnaður fer eftir tegund leiðréttingar. Gleraugu og snertilinsur eru ódýrasti kosturinn, en laser aðgerðir og linsuskipti kosta meira en geta verið hagkvæmari til lengri tíma. Við bjóðum upp á ókeypis ráðgjöf og verðmat.'
    },
    {
      question: 'Eru laser aðgerðir öruggar?',
      answer: 'Já, nútíma laser aðgerðir eru mjög öruggar þegar þær eru framkvæmdar af reyndum sérfræðingum. Árangurshlutfallið er yfir 95% og alvarlegir fylgikvillar eru mjög sjaldgæfir. Við notum eingöngu nýjustu og öruggstu tæknina.'
    }
  ];

  const toggleCondition = (conditionId: string) => {
    setOpenCondition(openCondition === conditionId ? null : conditionId);
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <Link to="/augnlaekningar">Augnlækningar</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Sjónskerðingar og sjónleiðréttingar</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-teal-500/10"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sjónskerðingar og sjónleiðréttingar
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Skilningur á algengum sjónskerðingum og leiðum til að leiðrétta þær fyrir skýrari sjón.
            </p>
            <Link to="/panta-tima">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="h-5 w-5" />
                <span>Bóka tíma</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro Explainer Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Hvað eru sjónskerðingar?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Sjónskerðingar eru ástand þar sem augað getur ekki fókusað ljósi rétt á sjónhimnuna, 
                  sem leiðir til óskýrrar sjón. Þetta getur stafað af ýmsum ástæðum, svo sem óreglulegri 
                  lögun augans, breytingum á hornhimnu eða linsu, eða aldurstengdum breytingum.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Að skilja hvernig augað virkar er fyrsta skrefið í að skilja sjónskerðingar. 
                  Ljós fer inn í augað í gegnum hornhimnuna og augasteininn, sem brjóta ljósið og 
                  fókusa því á sjónhimnuna aftast í auganu. Þegar þetta ferli er ekki fullkomið, 
                  verður sjónin óskýr.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
                <div className="text-center">
                  <Eye className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                  <p className="text-sm text-gray-600">
                    Einföld skýringarmynd af auganu sem sýnir hvernig ljós fókuserast á sjónhimnuna.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conditions Accordion */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Helstu tegundir sjónskerðinga
            </h2>
            <p className="text-xl text-gray-600">
              Kynntu þér algengustu sjónskerðingarnar og hvernig þær hafa áhrif á sjónina
            </p>
          </motion.div>

          <div className="space-y-4">
            {conditions.map((condition, index) => (
              <motion.div
                key={condition.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => toggleCondition(condition.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${condition.color} text-white`}>
                      {condition.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {condition.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openCondition === condition.id ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  </motion.div>
                </button>

                <motion.div
                  initial={false}
                  animate={{
                    height: openCondition === condition.id ? 'auto' : 0,
                    opacity: openCondition === condition.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Symptoms */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <AlertTriangle className="h-4 w-4 mr-2 text-orange-500" />
                          Algeng einkenni
                        </h4>
                        <ul className="space-y-2">
                          {condition.symptoms.map((symptom, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Causes */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Search className="h-4 w-4 mr-2 text-blue-500" />
                          Orsakir
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {condition.causes}
                        </p>
                      </div>

                      {/* Treatment */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          Meðferðarmöguleikar
                        </h4>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {condition.treatment}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Samanburður á sjónskerðingum
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-blue-600 to-teal-500 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Ástand</th>
                      <th className="px-6 py-4 text-left font-semibold">Algeng einkenni</th>
                      <th className="px-6 py-4 text-left font-semibold">Orsök</th>
                      <th className="px-6 py-4 text-left font-semibold">Algeng leiðrétting</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-gray-900">{row.condition}</td>
                        <td className="px-6 py-4 text-gray-600">{row.symptoms}</td>
                        <td className="px-6 py-4 text-gray-600">{row.cause}</td>
                        <td className="px-6 py-4 text-gray-600">{row.correction}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Treatment Overview */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hvaða leið hentar þér?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Val á leiðréttingaraðferð fer eftir tegund sjónskerðingar, aldri, lífsstíl og 
                persónulegum óskum. Við bjóðum upp á fjölbreytta valkosti, allt frá hefðbundnum 
                gleraugum og snertilinsum til háþróaðra laser- og linsuaðgerða.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {treatmentOptions.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 text-left">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{option}</span>
                  </div>
                ))}
              </div>

              <Link to="/panta-tima">
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-teal-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 mx-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Bókaðu tíma fyrir ráðgjöf</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Algengar spurningar um sjónskerðingar
            </h2>
            <p className="text-xl text-gray-600">
              Svör við algengustu spurningunum um sjónlagsleiðréttingar
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
                  onClick={() => toggleFAQ(index)}
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

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Taktu fyrsta skrefið í átt að skýrari sjón
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Ekki láta sjónskerðingar hamla þér. Bókaðu tíma í augnskoðun hjá okkur í dag 
              til að fá nákvæma greiningu og persónulega ráðgjöf um bestu leiðréttingarvalkostina fyrir þig.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/panta-tima">
                <motion.button
                  className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Bóka tíma</span>
                </motion.button>
              </Link>

              <Link to="/augnlaekningar/augnskodun">
                <motion.button
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="h-5 w-5" />
                  <span>Læra meira um augnskoðun</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SjonskerdingarPage;