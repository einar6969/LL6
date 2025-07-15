import { HomePageTranslations } from '../../LanguageContext';

export const homePageTranslations: HomePageTranslations = {
  header: {
    navItems: {
      procedures: 'Sjónlagsaðgerðir',
      services: 'Augnlækningar',
      tearDuct: 'Táralind',
      about: 'Um Sjónlag',
    },
    bookingButton: 'Bóka tíma',
  },
  hero: {
    title: 'Skýr sjón fyrir',
    titleHighlight: 'betri lífsgæði',
    subtitle: 'Leiðandi sérfræðingar í laser- og linsuaðgerðum með yfir 15 ára reynslu. Við bjóðum upp á nýjustu tækni og persónulega þjónustu fyrir bestu mögulegu niðurstöður.',
  },
  coreValues: {
    title: 'Okkar grunngildi',
    subtitle: 'Við byggjum á traustum grunni faglegrar þekkingar og persónulegrar þjónustu',
    values: {
      safety: {
        title: 'Öryggi fyrst',
        description: 'Við notum eingöngu viðurkenndar aðferðir og nýjustu öryggisstaðla í öllum aðgerðum.',
      },
      technology: {
        title: 'Nýjasta tækni',
        description: 'Háþróuð laser- og linsubúnaður frá leiðandi framleiðendum tryggir bestu niðurstöður.',
      },
      personalCare: {
        title: 'Persónuleg umönnun',
        description: 'Sérhver sjúklingur fær einstaklingsbundna meðferð og fulla athygli frá byrjun til enda.',
      },
      followUp: {
        title: 'Eftirfylgni',
        description: 'Við fylgjum sjúklingum eftir til langs tíma og bjóðum upp á reglulegar eftirlitskannanir.',
      },
    },
  },
  partnerLogos: {
    title: 'Samstarfsaðilar okkar',
    subtitle: 'Sjónlag er í samstarfi við stærstu aðila í heiminum á sviði augnlækninga.',
  },
  procedures: {
    title: 'Okkar þjónusta',
    subtitle: 'Við bjóðum upp á fjölbreytta þjónustu fyrir alla þína augnheilsu þarfir',
    laser: {
      title: 'Laser sjónaðgerðir',
      description: 'LASIK og PRK aðgerðir til að leiðrétta nærsjón, fjærsjón og hornhimnubrenglun.',
      features: ['LASIK aðgerðir', 'PRK meðferð', 'Hornhimnuleiðrétting', 'Hraður bati'],
    },
    lensReplacement: {
      title: 'Linsu skipti',
      description: 'Skipti á náttúrulegum augnalinsum með gervilinsum fyrir skýrari sjón.',
      features: ['Fjölbrennilinsur', 'Einfokus linsur', 'Toric linsur', 'Premium linsur'],
    },
    examinations: {
      title: 'Augnrannsóknir',
      description: 'Ítarlegar augnrannsóknir og greiningar með nýjustu tækni og búnaði.',
      features: ['OCT skannanir', 'Sjónsvið mælingar', 'Augnbotnsmyndataka', 'Þrýstingsmælingar'],
    },
    learnMore: 'Læra meira',
  },
  about: {
    title: 'Um Sjónlag',
    description1: 'Sjónlag hefur verið leiðandi í augnlækningum á Íslandi í yfir 15 ár. Við sérhæfum okkur í laser- og linsuaðgerðum og höfum framkvæmt þúsundir aðgerða með framúrskarandi árangri.',
    description2: 'Teymi okkar samanstendur af reyndum augnlæknum og hjúkrunarfræðingum sem leggja áherslu á öryggi, gæði og persónulega þjónustu. Við notum eingöngu nýjustu tækni og fylgjum alþjóðlegum stöðlum.',
    highlights: {
      certification: 'Viðurkennd sérfræðiþjónusta',
      team: 'Reynt teymi sérfræðinga',
      experience: '15+ ára reynsla',
      location: 'Miðsvæð staðsetning',
    },
    teamButton: 'Kynntu þér teymið',
    satisfactionRate: 'Ánægja sjúklinga',
  },
  testimonials: {
    title: 'Hvað segja sjúklingarnir okkar',
    subtitle: 'Lestu um reynslu annarra sem hafa farið í gegnum aðgerðir hjá okkur',
    items: {
      anna: {
        name: 'Anna Sigurðardóttir',
        content: 'Frábær þjónusta og fagleg vinnubrögð. Eftir LASIK aðgerðina þarf ég ekki lengur að nota gleraugu. Mæli eindregið með Sjónlagi.',
        procedure: 'LASIK aðgerð',
      },
      jon: {
        name: 'Jón Þórsson',
        content: 'Linsu skiptið gekk mjög vel og starfsfólkið var mjög hjálplegt. Sjónin mín hefur batnað til muna og ég er mjög ánægður.',
        procedure: 'Linsu skipti',
      },
      maria: {
        name: 'María Einarsdóttir',
        content: 'Ég var mjög kvíðin fyrir aðgerðinni en teymið hjá Sjónlagi gerði allt til að ég væri róleg. Niðurstaðan er frábær!',
        procedure: 'PRK aðgerð',
      },
    },
  },
  booking: {
    title: 'Bókaðu tíma',
    subtitle: 'Fylltu út eyðublaðið hér að neðan og við munum hafa samband við þig innan 24 klst.',
    form: {
      name: 'Fullt nafn',
      phone: 'Símanúmer',
      email: 'Netfang',
      preferredDate: 'Æskileg dagsetning',
      preferredTime: 'Æskilegur tími',
      message: 'Skilaboð',
      selectTime: 'Veldu tíma',
      submit: 'Senda bókun',
      submitting: 'Sendir bókun...',
      successMessage: 'Bókunin þín hefur verið send! Við munum hafa samband við þig innan 24 klst.',
      errorMessage: 'Villa kom upp við að senda bókunina. Vinsamlegast reyndu aftur.',
      required: '*',
      optional: '(valfrjálst)',
      validation: {
        nameRequired: 'Nafn er nauðsynlegt',
        phoneRequired: 'Símanúmer er nauðsynlegt',
        phoneMinLength: 'Símanúmer þarf að vera að minnsta kosti 7 tölustafir',
        emailRequired: 'Netfang er nauðsynlegt',
        emailInvalid: 'Ógilt netfang',
        dateRequired: 'Dagsetning er nauðsynleg',
        timeRequired: 'Tími er nauðsynlegur',
      },
    },
  },
  faq: {
    title: 'Algengar spurningar',
    subtitle: 'Hér eru svör við algengustu spurningunum sem við fáum',
    items: {
      safety: {
        question: 'Er LASIK aðgerðin örugg?',
        answer: 'Já, LASIK er ein öruggasta aðgerð sem framkvæmd er í dag. Við notum nýjustu tækni og fylgjum ströngustu öryggisreglum. Áhættan af alvarlegum fylgikvillum er mjög lítil, undir 1%.',
      },
      recovery: {
        question: 'Hvað tekur langan tíma að jafna sig eftir aðgerð?',
        answer: 'Flestir sjúklingar sjá strax bata í sjón daginn eftir LASIK aðgerð. Fullur bati tekur venjulega 1-3 mánuði. Við fylgjum öllum sjúklingum eftir með reglubundnum eftirlitskomu.',
      },
      cost: {
        question: 'Hvað kostar augnlaser aðgerð?',
        answer: 'Kostnaður fer eftir tegund aðgerðar og einstökum þörfum. Við bjóðum upp á ókeypis ráðgjöf þar sem við metum hvort þú eigir rétt á aðgerð og gefum nákvæmt verðtilboð.',
      },
      eligibility: {
        question: 'Eiga allir rétt á laser aðgerð?',
        answer: 'Ekki allir eiga rétt á laser aðgerð. Það fer eftir aldri, heilsu augna, styrk glerauga og öðrum þáttum. Við framkvæmum ítarlega skoðun til að meta hvort þú eigir rétt á aðgerð.',
      },
      glasses: {
        question: 'Þarf ég að nota gleraugu eftir aðgerðina?',
        answer: 'Markmið aðgerðarinnar er að þú þurfir ekki að nota gleraugu eða snertilinsur í daglegu lífi. Þó getur verið að þú þurfir létt lesgleraugu eftir 40 ára aldur vegna násjónar.',
      },
      warranty: {
        question: 'Hvað ef eitthvað fer úrskeiðis?',
        answer: 'Við bjóðum upp á ævilangt ábyrgðarkerfi á okkar aðgerðir. Ef þörf er á enduraðgerð vegna vanárangurs eða breytinga á sjón, þá er sú aðgerð innifalin í upphaflegu verði.',
      },
    },
    contactPrompt: 'Finnur þú ekki svar við spurningunni þinni?',
    contactButton: 'Hafðu samband við okkur',
  },
  floatingCard: {
    stats: {
      procedures: 'Aðgerðir framkvæmdar',
      experience: 'Ára reynsla',
      specialists: 'Sérfræðingar',
    },
    button: 'Skoða aðgerðir',
  },
  footer: {
    description: 'Leiðandi sérfræðingar í laser- og linsuaðgerðum með yfir 15 ára reynslu. Við bjóðum upp á nýjustu tækni og persónulega þjónustu.',
    quickLinks: {
      title: 'Flýtileiðir',
      procedures: 'Sjónlagsaðgerðir',
      about: 'Um okkur',
      booking: 'Bóka tíma',
      faq: 'Algengar spurningar',
    },
    services: {
      title: 'Þjónusta',
      lasik: 'LASIK aðgerðir',
      prk: 'PRK aðgerðir',
      lensReplacement: 'Linsu skipti',
      examinations: 'Augnrannsóknir',
    },
    contact: {
      title: 'Samband',
      address: 'Laugavegur 123\n101 Reykjavík',
      phone: '581-2345',
      email: 'info@sjonlag.is',
      hours: {
        weekdays: 'Mán-Fös: 08:00-17:00',
        saturday: 'Lau: 09:00-13:00',
        sunday: 'Sun: Lokað',
      },
    },
    newsletter: {
      title: 'Fáðu fréttir og ráðgjöf',
      description: 'Skráðu þig á póstlistann okkar til að fá nýjustu fréttir og ráðgjöf um augnheilsu.',
      placeholder: 'Sláðu inn netfangið þitt',
      subscribe: 'Skrá',
    },
    legal: {
      copyright: '© 2024 Sjónlag. Allur réttur áskilinn.',
      privacy: 'Persónuverndarstefna',
      terms: 'Skilmálar',
      cookies: 'Vefkökur',
    },
    social: {
      facebook: 'Facebook',
      instagram: 'Instagram',
      linkedin: 'LinkedIn',
    },
  },
};