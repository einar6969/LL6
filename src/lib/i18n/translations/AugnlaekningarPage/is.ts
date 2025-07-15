```typescript
import { AugnlaekningarPageTranslations } from '../../LanguageContext';

export const isAugnlaekningarPageTranslations: AugnlaekningarPageTranslations = {
  sjonskerdingarPage: {
    hero: {
      title: 'Sjónskerðingar og sjónleiðréttingar',
      subtitle: 'Skilningur á algengum sjónskerðingum og leiðum til að leiðrétta þær fyrir skýrari sjón.',
      imageAlt: 'Nákvæm augnskoðun'
    },
    intro: {
      title: 'Hvað eru sjónskerðingar?',
      paragraph1: 'Sjónskerðingar eru ástand þar sem augað getur ekki fókusað ljósi rétt á sjónhimnuna, sem leiðir til óskýrrar sjón. Þetta getur stafað af ýmsum ástæðum, svo sem óreglulegri lögun augans, breytingum á hornhimnu eða linsu, eða aldurstengdum breytingum.',
      paragraph2: 'Að skilja hvernig augað virkar er fyrsta skrefið í að skilja sjónskerðingar. Ljós fer inn í augað í gegnum hornhimnuna og augasteininn, sem brjóta ljósið og fókusa því á sjónhimnuna aftast í auganu. Þegar þetta ferli er ekki fullkomið, verður sjónin óskýr.',
      diagramAlt: 'Einföld skýringarmynd af auganu sem sýnir hvernig ljós fókuserast á sjónhimnuna.'
    },
    conditions: {
      myopia: {
        title: 'Nærsýni (Myopia)',
        symptoms: ['Óskýr sjón á fjarlæga hluti', 'Þörf á að píra augun til að sjá skýrt', 'Höfuðverkur eða augnþreyta'],
        causes: 'Nærsýni stafar oftast af því að augað er of langt eða hornhimnan er of kúpt, sem veldur því að ljós fókuserast fyrir framan sjónhimnuna.',
        treatment: 'Algengar leiðréttingar eru gleraugu, snertilinsur eða laser aðgerðir eins og LASIK eða PRK.'
      },
      hyperopia: {
        title: 'Fjarsýni (Hyperopia)',
        symptoms: ['Óskýr sjón á nálæga hluti', 'Augnþreyta eða höfuðverkur við lestur', 'Þörf á að halda hlutum lengra frá til að sjá skýrt'],
        causes: 'Fjarsýni stafar oftast af því að augað er of stutt eða hornhimnan er of flöt, sem veldur því að ljós fókuserast fyrir aftan sjónhimnuna.',
        treatment: 'Hægt er að leiðrétta fjarsýni með gleraugum, snertilinsum eða laser aðgerðum.'
      },
      astigmatism: {
        title: 'Sjónskekkja (Astigmatism)',
        symptoms: ['Óskýr eða brengluð sjón á allar fjarlægðir', 'Tvísýni', 'Augnþreyta og höfuðverkur'],
        causes: 'Sjónskekkja stafar af óreglulegri lögun hornhimnunnar eða linsunnar, sem veldur því að ljós fókuserast á fleiri en einum punkti á sjónhimnunni.',
        treatment: 'Leiðrétting felst í gleraugum, snertilinsum (toric linsum) eða laser aðgerðum.'
      },
      presbyopia: {
        title: 'Aldurstengd fjarsýni (Presbyopia)',
        symptoms: ['Erfiðleikar við að lesa smáletur', 'Þörf á að halda lesefni lengra frá', 'Augnþreyta við nálæga vinnu'],
        causes: 'Presbyopia er eðlilegur hluti af öldrunarferlinu þar sem augasteinninn missir teygjanleika sinn og getu til að fókusa á nálæga hluti.',
        treatment: 'Leiðréttingarvalkostir eru lesgleraugu, tvífókus eða fjölfókus gleraugu, fjölfókus snertilinsur eða linsuskiptiaðgerðir.'
      }
    },
    comparisonTable: {
      title: 'Samanburður á sjónskerðingum',
      headers: ['Ástand', 'Algeng einkenni', 'Orsök', 'Algeng leiðrétting'],
      rows: {
        myopia: ['Nærsýni', 'Óskýr fjarsjón', 'Augnlengd/hornkúpa', 'Gleraugu, linsur, laser'],
        hyperopia: ['Fjarsýni', 'Óskýr nálægsjón', 'Augnstytting/hornflöt', 'Gleraugu, linsur, laser'],
        astigmatism: ['Sjónskekkja', 'Brengluð sjón', 'Óregluleg hornhimna/linsa', 'Gleraugu, toric linsur, laser'],
        presbyopia: ['Aldurstengd fjarsýni', 'Erfiðleikar við lestur', 'Stífur augasteinn', 'Lesgleraugu, fjölfókus, linsuskipti']
      }
    },
    treatmentOverview: {
      title: 'Hvaða leið hentar þér?',
      paragraph: 'Val á leiðréttingaraðferð fer eftir tegund sjónskerðingar, aldri, lífsstíl og persónulegum óskum. Við bjóðum upp á fjölbreytta valkosti, allt frá hefðbundnum gleraugum og snertilinsum til háþróaðra laser- og linsuaðgerða.',
      options: [
        'Gleraugu (einfókus, tvífókus, fjölfókus)',
        'Snertilinsur (einfókus, toric, fjölfókus)',
        'Laser sjónlagsaðgerðir (LASIK, PRK, PresbyMax)',
        'Linsuskiptiaðgerðir (augnasteinsskipti, linsuígræðsla)'
      ],
      cta: 'Bókaðu tíma fyrir ráðgjöf'
    },
    faq: {
      title: 'Algengar spurningar um sjónskerðingar',
      items: [
        {
          question: 'Getur maður verið með fleiri en eina sjónskerðingu í einu?',
          answer: 'Já, það er algengt að fólk sé með fleiri en eina sjónskerðingu, til dæmis nærsýni og sjónskekkju, eða fjarsýni og aldurstengda fjarsýni.'
        },
        {
          question: 'Er ég of gamall/gömul fyrir laser aðgerð?',
          answer: 'Aldur er ekki eini áhrifaþátturinn. Mikilvægara er að sjónin sé stöðug og augun heilbrigð. Fyrir eldri einstaklinga geta linsuskiptiaðgerðir verið heppilegri kostur.'
        },
        {
          question: 'Hversu oft þarf að uppfæra gleraugu eða linsur?',
          answer: 'Það fer eftir því hversu hratt sjónin breytist. Almennt er mælt með augnskoðun á 1-2 ára fresti til að tryggja að styrkurinn sé réttur.'
        }
      ]
    },
    finalCta: {
      title: 'Taktu fyrsta skrefið í átt að skýrari sjón',
      paragraph: 'Ekki láta sjónskerðingar hamla þér. Bókaðu tíma í augnskoðun hjá okkur í dag til að fá nákvæma greiningu og persónulega ráðgjöf um bestu leiðréttingarvalkostina fyrir þig.',
      bookAppointment: 'Bóka tíma',
      learnMoreAboutExams: 'Læra meira um augnskoðun'
    }
  }
};
```