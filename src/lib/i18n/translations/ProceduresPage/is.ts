import { ProceduresPageTranslations } from '../../LanguageContext';

export const isProceduresPageTranslations: ProceduresPageTranslations = {
  hero: {
    title: 'Frelsi án gleraugna',
    subtitle: 'Upplifðu lífið án þess að þurfa á gleraugum eða linsum að halda. Skref í átt að sjálfstæði og skýrari sýn.',
    cta: 'Bókaðu skoðun'
  },
  steps: {
    title: 'Hvernig fer ferlið fram?',
    subtitle: 'Við leiðum þig í gegnum allt ferlið frá fyrstu skoðun til fullkomins bata',
    step1: {
      title: 'Fyrsta skrefið – Forskoðun',
      description: 'Ítarleg sjónmæling og samráð við sérfræðing til að meta hvort þú eigir rétt á aðgerð.',
      cta: 'Bókaðu tíma'
    },
    step2: {
      title: 'Hvað kemur næst?',
      description: 'Læknir metur hvort þú sért heppilegur kandídat og ræðir niðurstöður með þér.'
    },
    step3: {
      title: 'Aðgerðin',
      description: 'Örugg og hröð aðgerð með nýjustu tækni í þægilegum aðstæðum.'
    },
    step4: {
      title: 'Eftirfylgni',
      description: 'Reglulegar eftirlitskomur til að tryggja bestan árangur og heilsu augna.'
    }
  },
  procedureTypes: {
    title: 'Tegundir aðgerða',
    subtitle: 'Við bjóðum upp á fjölbreyttar aðgerðir sem henta mismunandi þörfum og aldri',
    laser: {
      title: 'Laseraðgerðir',
      description: 'Nútímalegar laser aðgerðir til að leiðrétta sjónlagsgalla',
      types: {
        femtoLasik: {
          title: 'Femto-LASIK',
          description: 'Algengasta og öruggasta laser aðgerðin í dag',
          pros: ['Hraður bati', 'Lítil óþægindi', 'Nákvæm niðurstaða'],
          cons: ['Ekki fyrir alla', 'Kostnaðarsamt'],
          suitableFor: ['18-45 ára', 'Stöðug sjón', 'Heilbrigð hornhimna']
        },
        transPrk: {
          title: 'TransPRK SmartPulse',
          description: 'Yfirborðsaðgerð án snertingar',
          pros: ['Engin snurða', 'Örugg', 'Hentar þunnum hornhimnum'],
          cons: ['Lengri bati', 'Meiri óþægindi fyrstu daga'],
          suitableFor: ['Þunnar hornhimnur', 'Íþróttafólk', 'Öryggisstarfsmenn']
        },
        presbyMax: {
          title: 'PresbyMax (45-55 ára)',
          description: 'Sérhönnuð aðgerð fyrir aldursnærsjón',
          pros: ['Leiðréttir aldursnærsjón', 'Minnkar þörf fyrir lesgleraugu'],
          cons: ['Takmarkaður aldurshópur', 'Getur þurft aðlögun'],
          suitableFor: ['45-55 ára', 'Aldursnærsjón', 'Góð heilsa augna']
        }
      }
    },
    lensReplacement: {
      title: 'Augasteinsaðgerðir',
      description: 'Augasteinsskipti hafa verið framkvæmd í áratugi og því komin mikil og góð reynsla af aðgerðinni.',
      types: {
        monofocal: {
          title: 'Einfókus linsur',
          description: 'Hefðbundnar linsur fyrir eina fjarlægð',
          pros: ['Góð sjón í eina fjarlægð', 'Áreiðanlegar', 'Ódýrari kostur'],
          cons: ['Þarf gleraugu fyrir aðrar fjarlægðir'],
          suitableFor: ['Ský á augasteini', 'Einföld sjónlagsleiðrétting']
        },
        multifocal: {
          title: 'Fjölfókus linsur',
          description: 'Linsur sem gera kleift að sjá á margar fjarlægðir',
          pros: ['Sjón á margar fjarlægðir', 'Minnkar þörf fyrir gleraugu'],
          cons: ['Dýrari', 'Getur valdið ljósgeislum'],
          suitableFor: ['Vill vera óháður gleraugum', 'Góðir kandídatar']
        },
        toric: {
          title: 'Toric linsur',
          description: 'Sérhönnuð fyrir hornhimnubrenglun',
          pros: ['Leiðréttir hornhimnubrenglun', 'Skýr sjón'],
          cons: ['Þarf nákvæma staðsetningu'],
          suitableFor: ['Hornhimnu brennglun', 'Ský á augasteini']
        }
      }
    }
  },
  complications: {
    title: 'Hugsanlegir fylgikvillar',
    subtitle: 'Hvað gerist í ólíklegum tilvikum?',
    content: 'Við leggjum áherslu á gagnsæi og viljum að þú sért vel upplýst/ur um alla þætti aðgerðarinnar',
    safetyMeasures: {
      title: 'Öryggisráðstafanir',
      intro: 'Við notum bestu mögulegu öryggisráðstafanir til að lágmarka áhættu:',
      items: [
        'Ítarleg forskoðun og mat á hæfi',
        'Nýjasta tækni og búnaður',
        'Reyndir og þjálfaðir sérfræðingar',
        'Strangar öryggisreglur',
        'Reglulegar eftirlitskomur'
      ]
    },
    statistics: {
      title: 'Tölfræði',
      successRate: 'Árangurshlutfall aðgerða',
      seriousComplications: 'Alvarlegir fylgikvillar',
      patientSatisfaction: 'Ánægja sjúklinga'
    },
    details: {
      title: 'Hvað gerist í ólíklegum tilvikum?',
      intro: 'Þó að alvarlegir fylgikvillar séu mjög sjaldgæfir, viljum við að þú sért vel upplýst/ur um alla möguleika.',
      toggleShow: 'Sýna nánar',
      toggleHide: 'Fela nánar',
      items: [
        {
          title: 'Þurrt auga',
          description: 'Tímabundnir þurrmuni sem batna venjulega innan nokkurra vikna',
          frequency: 'Algeng en tímabundin'
        },
        {
          title: 'Ljósgeislar eða ljósbjúgur',
          description: 'Sjón á ljósgeisla eða ljósbjúgur, sérstaklega á kvöldin eða í myrkri',
          frequency: 'Algeng fyrstu vikurnar'
        },
        {
          title: 'Ljósviðkvæmni',
          description: 'Aukin næmni fyrir ljósi fyrstu dagana eftir aðgerð',
          frequency: 'Algeng fyrstu dagana'
        },
        {
          title: 'Vannákvæmni í niðurstöðu',
          description: 'Í sumum tilfellum getur þurft enduraðgerð til að ná fullkomnum árangri',
          frequency: 'Sjaldgæf (5-10%)'
        },
        {
          title: 'Sýking',
          description: 'Bakteríusýking í auga sem krefst tafarlausrar meðferðar',
          frequency: 'Mjög sjaldgæf (<0.1%)'
        },
        {
          title: 'Hornhimnuskemmd',
          description: 'Skemmd á hornhimnu sem getur haft áhrif á sjón til frambúðar',
          frequency: 'Afar sjaldgæf (<0.01%)'
        }
      ]
    }
  },
  brochures: {
    title: 'Bæklingar og upplýsingar',
    subtitle: 'Sæktu nákvæmar upplýsingar um aðgerðirnar',
    items: [
      {
        title: 'LASIK aðgerðir',
        description: 'Ítarlegar upplýsingar um LASIK aðgerðir og hvað þú getur búist við',
        filename: 'lasik-baeklingur.pdf'
      },
      {
        title: 'Augasteinsskipti',
        description: 'Allt sem þú þarft að vita um augasteinsskipti og gervilinsur',
        filename: 'augasteinsskipti-baeklingur.pdf'
      },
      {
        title: 'Undirbúningur fyrir aðgerð',
        description: 'Leiðbeiningar um undirbúning og hvað þú þarft að huga að',
        filename: 'undirbuningur-baeklingur.pdf'
      }
    ]
  },
  navigation: {
    hero: 'Yfirlit',
    steps: 'Ferlið',
    types: 'Aðgerðartegundir',
    testimonials: 'Umsagnir',
    complications: 'Fylgikvillar',
    faq: 'Spurningar',
    brochures: 'Bæklingar'
  }
};