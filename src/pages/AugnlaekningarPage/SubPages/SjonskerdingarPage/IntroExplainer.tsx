import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

const IntroExplainer: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Hvað eru sjónskerðingar?</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Sjónskerðingar eru ástand þar sem augað getur ekki fókusað ljós rétt á sjónhimnuna,
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
);

export default IntroExplainer;
