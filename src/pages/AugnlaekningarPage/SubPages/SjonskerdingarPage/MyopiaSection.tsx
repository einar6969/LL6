import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle, ChevronDown, Eye, Glasses, Search, Users } from 'lucide-react';

const MyopiaSection: React.FC = () => {
  const [openCondition, setOpenCondition] = useState<string | null>('myopia');

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
      causes:
        'Nærsýni stafar oftast af því að augað er of langt eða hornhimnan er of kúpt, sem veldur því að ljós fókuserast fyrir framan sjónhimnuna í stað þess að fókusera beint á hana.',
      treatment:
        'Algengar leiðréttingar eru gleraugu, snertilinsur eða laser aðgerðir eins og LASIK eða PRK. Fyrir börn og unglinga geta sérstök gleraugu hjálpað til við að hægja á framvindu nærsýni.',
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
      causes:
        'Fjarsýni stafar oftast af því að augað er of stutt eða hornhimnan er of flöt, sem veldur því að ljós fókuserast fyrir aftan sjónhimnuna.',
      treatment:
        'Hægt er að leiðrétta fjarsýni með gleraugum, snertilinsum eða laser aðgerðum. Margir með væga fjarsýni þurfa aðeins gleraugu fyrir lestur eða nákvæma vinnu.',
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
      causes:
        'Sjónskekkja stafar af óreglulegri lögun hornhimnunnar eða linsunnar, sem veldur því að ljós fókuserast á fleiri en einum punkti á sjónhimnunni.',
      treatment:
        'Leiðrétting felst í gleraugum, snertilinsum (toric linsum) eða laser aðgerðum. Toric linsur eru sérstaklega hannaðar til að leiðrétta sjónskekkju.',
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
      causes:
        'Presbyopia er eðlilegur hluti af öldrunarferlinu þar sem augasteinninn missir teygjanleika sinn og getu til að fókusa á nálæga hluti. Þetta byrjar venjulega um 40 ára aldur.',
      treatment:
        'Leiðréttingarvalkostir eru lesgleraugu, tvífókus eða fjölfókus gleraugu, fjölfókus snertilinsur eða linsuskiptiaðgerðir. PresbyMax laser aðgerð getur einnig verið valkostur.',
      color: 'from-green-500 to-green-600'
    }
  ];

  const toggleCondition = (conditionId: string) => {
    setOpenCondition(openCondition === conditionId ? null : conditionId);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Helstu tegundir sjónskerðinga</h2>
          <p className="text-xl text-gray-600">Kynntu þér algengustu sjónskerðingarnar og hvernig þær hafa áhrif á sjónina</p>
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
              <button onClick={() => toggleCondition(condition.id)} className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${condition.color} text-white`}>{condition.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900">{condition.title}</h3>
                </div>
                <motion.div animate={{ rotate: openCondition === condition.id ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </motion.div>
              </button>
              <motion.div initial={false} animate={{ height: openCondition === condition.id ? 'auto' : 0, opacity: openCondition === condition.id ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                <div className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Search className="h-4 w-4 mr-2 text-blue-500" />
                        Orsakir
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{condition.causes}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                        Meðferðarmöguleikar
                      </h4>
                      <p className="text-sm text-gray-600 leading-relaxed">{condition.treatment}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyopiaSection;
