import React, { createContext, useContext, useState, ReactNode } from 'react';

// Import translation files
import { homePageTranslations as isHomePageTranslations } from './translations/HomePage/is';
import { isProceduresPageTranslations } from './translations/ProceduresPage/is';
import { aboutUsPageTranslations } from './translations/AboutUsPage/is';
import { homePageTranslations as enHomePageTranslations } from './translations/HomePage/en';
import { enProceduresPageTranslations } from './translations/ProceduresPage/en';
import { enAboutUsPageTranslations } from './translations/AboutUsPage/en';
import { bookingPageTranslations } from './translations/BookingPage/is';
import { enBookingPageTranslations } from './translations/BookingPage/en';
import { PreExaminationPageTranslations, isPreExaminationPageTranslations } from './translations/PreExaminationPage/is';
import { enPreExaminationPageTranslations } from './translations/PreExaminationPage/en';
import { TaralindPageTranslations, isTaralindPageTranslations } from './translations/TaralindPage/is';
import { enTaralindPageTranslations } from './translations/TaralindPage/en';

// Define the structure of translations
export interface HomePageTranslations {
  header: {
    navItems: {
      procedures: string;
      services: string;
      tearDuct: string;
      about: string;
    };
    bookingButton: string;
  };
  hero: {
    title: string;
    titleHighlight: string;
    subtitle: string;
  };
  coreValues: {
    title: string;
    subtitle: string;
    values: {
      safety: {
        title: string;
        description: string;
      };
      technology: {
        title: string;
        description: string;
      };
      personalCare: {
        title: string;
        description: string;
      };
      followUp: {
        title: string;
        description: string;
      };
    };
  };
  partnerLogos: {
    title: string;
    subtitle: string;
  };
  procedures: {
    title: string;
    subtitle: string;
    laser: {
      title: string;
      description: string;
      features: string[];
    };
    lensReplacement: {
      title: string;
      description: string;
      features: string[];
    };
    examinations: {
      title: string;
      description: string;
      features: string[];
    };
    learnMore: string;
  };
  about: {
    title: string;
    description1: string;
    description2: string;
    highlights: {
      certification: string;
      team: string;
      experience: string;
      location: string;
    };
    teamButton: string;
    satisfactionRate: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: {
      anna: {
        name: string;
        content: string;
        procedure: string;
      };
      jon: {
        name: string;
        content: string;
        procedure: string;
      };
      maria: {
        name: string;
        content: string;
        procedure: string;
      };
    };
  };
  booking: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      phone: string;
      email: string;
      preferredDate: string;
      preferredTime: string;
      message: string;
      selectTime: string;
      submit: string;
      submitting: string;
      successMessage: string;
      errorMessage: string;
      required: string;
      optional: string;
      validation: {
        nameRequired: string;
        phoneRequired: string;
        phoneMinLength: string;
        emailRequired: string;
        emailInvalid: string;
        dateRequired: string;
        timeRequired: string;
      };
    };
  };
  faq: {
    title: string;
    subtitle: string;
    items: {
      safety: {
        question: string;
        answer: string;
      };
      recovery: {
        question: string;
        answer: string;
      };
      cost: {
        question: string;
        answer: string;
      };
      eligibility: {
        question: string;
        answer: string;
      };
      glasses: {
        question: string;
        answer: string;
      };
      warranty: {
        question: string;
        answer: string;
      };
    };
    contactPrompt: string;
    contactButton: string;
  };
  floatingCard: {
    stats: {
      procedures: string;
      experience: string;
      specialists: string;
    };
    button: string;
  };
  footer: {
    description: string;
    quickLinks: {
      title: string;
      procedures: string;
      about: string;
      booking: string;
      faq: string;
    };
    services: {
      title: string;
      lasik: string;
      prk: string;
      lensReplacement: string;
      examinations: string;
    };
    contact: {
      title: string;
      address: string;
      phone: string;
      email: string;
      hours: {
        weekdays: string;
        saturday: string;
        sunday: string;
      };
    };
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      subscribe: string;
    };
    legal: {
      copyright: string;
      privacy: string;
      terms: string;
      cookies: string;
    };
    social: {
      facebook: string;
      instagram: string;
      linkedin: string;
    };
  };
}

export interface Translations {
  homePage: HomePageTranslations;
  proceduresPage: ProceduresPageTranslations;
  aboutUsPage: AboutUsPageTranslations;
  bookingPage: BookingPageTranslations;
  preExaminationPage: PreExaminationPageTranslations;
  taralindPage: TaralindPageTranslations;
}

export interface BookingPageTranslations {
  title: string;
  subtitle: string;
  information: {
    title: string;
    heilsuvera: {
      title: string;
      description: string;
      link: string;
    };
    contact: {
      email: {
        title: string;
        address: string;
      };
      phone: {
        title: string;
        number: string;
        hours: string;
      };
    };
    notice: {
      title: string;
      summary: string;
      readMore: string;
      readLess: string;
      details: {
        paragraph1: string;
        paragraph2: string;
      };
    };
  };
  form: {
    title: string;
    personalInfo: {
      fullName: {
        label: string;
        placeholder: string;
      };
      nationalId: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      phone: {
        label: string;
        placeholder: string;
      };
      address: {
        label: string;
        placeholder: string;
      };
      postalCode: {
        label: string;
        placeholder: string;
      };
    };
    appointmentType: {
      label: string;
      placeholder: string;
      options: {
        examination: string;
        general: string;
      };
    };
    preferredDay: {
      label: string;
      options: {
        monday: string;
        tuesday: string;
        wednesday: string;
        thursday: string;
        friday: string;
      };
    };
    preferredTime: {
      label: string;
      options: {
        morning: string;
        afternoon: string;
      };
    };
    submit: {
      button: string;
      submitting: string;
      success: string;
      error: string;
    };
    validation: {
      required: string;
      nameRequired: string;
      nationalIdRequired: string;
      nationalIdFormat: string;
      emailRequired: string;
      emailInvalid: string;
      phoneRequired: string;
      phoneMinLength: string;
      addressRequired: string;
      postalCodeRequired: string;
      postalCodeFormat: string;
      appointmentTypeRequired: string;
      preferredDayRequired: string;
      preferredTimeRequired: string;
    };
  };
}

export interface AboutUsPageTranslations {
  hero: {
    title: string;
    subtitle: string;
  };
  ourStory: {
    title: string;
    subtitle: string;
    content: {
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };
    timeline: {
      title: string;
      items: {
        year: string;
        title: string;
        description: string;
      }[];
    };
  };
  ourTeam: {
    title: string;
    subtitle: string;
    description: string;
    seeStaffButton: string;
    staffPageTitle: string;
    staffPageSubtitle: string;
    seeMoreButton: string;
    closeButton: string;
    doctorsSectionTitle: string;
    otherStaffSectionTitle: string;
    members: {
      name: string;
      title: string;
      specialization: string;
      bio: string;
      image: string;
    }[];
  };
  ourValues: {
    title: string;
    subtitle: string;
    values: {
      safety: {
        title: string;
        description: string;
        details: string;
      };
      technology: {
        title: string;
        description: string;
        details: string;
      };
      personalCare: {
        title: string;
        description: string;
        details: string;
      };
      followUp: {
        title: string;
        description: string;
        details: string;
      };
    };
  };
  ourServices: {
    sectionLabel: string;
    title: string;
    services: {
      diagnosticTesting: {
        title: string;
        description: string;
      };
      rehabilitation: {
        title: string;
        description: string;
      };
      preventiveCare: {
        title: string;
        description: string;
      };
      treatment: {
        title: string;
        description: string;
      };
      mentalHealth: {
        title: string;
        description: string;
      };
    };
  };
  whyChooseUs: {
    title: string;
    features: {
      experienced: {
        title: string;
        description: string;
      };
      comprehensive: {
        title: string;
        description: string;
      };
      patientCentered: {
        title: string;
        description: string;
      };
      stateOfArt: {
        title: string;
        description: string;
      };
    };
  };
  facilitiesTechnology: {
    title: string;
    subtitle: string;
    facilities: {
      title: string;
      description: string;
      features: string[];
    };
    technology: {
      title: string;
      description: string;
      equipment: {
        name: string;
        description: string;
        benefits: string[];
      }[];
    };
  };
}
export interface ProceduresPageTranslations {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  steps: {
    title: string;
    subtitle: string;
    step1: {
      title: string;
      description: string;
      cta: string;
    };
    step2: {
      title: string;
      description: string;
    };
    step3: {
      title: string;
      description: string;
    };
    step4: {
      title: string;
      description: string;
    };
  };
  procedureTypes: {
    title: string;
    subtitle: string;
    laser: {
      title: string;
      description: string;
      types: {
        femtoLasik: {
          title: string;
          description: string;
          pros: string[];
          cons: string[];
          suitableFor: string[];
        };
        transPrk: {
          title: string;
          description: string;
          pros: string[];
          cons: string[];
          suitableFor: string[];
        };
        presbyMax: {
          title: string;
          description: string;
          pros: string[];
          cons: string[];
          suitableFor: string[];
        };
      };
    };
    lensReplacement: {
      title: string;
      description: string;
      types: {
        monofocal: {
          title: string;
          description: string;
          pros: string[];
          cons: string[];
          suitableFor: string[];
        };
        multifocal: {
          title: string;
          description: string;
          pros: string[];
          cons: string[];
          suitableFor: string[];
        };
        toric: {
          title: string;
          description: string;
          pros: string[];
          cons: string[];
          suitableFor: string[];
        };
      };
    };
  };
  complications: {
    title: string;
    subtitle: string;
    content: string;
    safetyMeasures: {
      title: string;
      intro: string;
      items: string[];
    };
    statistics: {
      title: string;
      successRate: string;
      seriousComplications: string;
      patientSatisfaction: string;
    };
    details: {
      title: string;
      intro: string;
      toggleShow: string;
      toggleHide: string;
      items: {
        title: string;
        description: string;
        frequency: string;
      }[];
    };
  };
  brochures: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
      filename: string;
    }[];
  };
  navigation: {
    hero: string;
    steps: string;
    types: string;
    testimonials: string;
    complications: string;
    faq: string;
    brochures: string;
  };
}

// Available languages
export type Language = 'is' | 'en';

// Language context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language, isTransitioningParam?: boolean) => void;
  t: Translations;
  isTransitioning: boolean;
}

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations: Record<Language, Translations> = {
  is: {
    homePage: isHomePageTranslations,
    proceduresPage: isProceduresPageTranslations,
    aboutUsPage: aboutUsPageTranslations,
    bookingPage: bookingPageTranslations,
    preExaminationPage: isPreExaminationPageTranslations,
    taralindPage: isTaralindPageTranslations,
  },
  en: {
    homePage: enHomePageTranslations,
    proceduresPage: enProceduresPageTranslations,
    aboutUsPage: enAboutUsPageTranslations,
    bookingPage: enBookingPageTranslations,
    preExaminationPage: enPreExaminationPageTranslations,
    taralindPage: enTaralindPageTranslations,
  },
};

// Provider component
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('is');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSetLanguage = (newLanguage: Language, isTransitioningParam?: boolean) => {
    setLanguage(newLanguage);
    if (isTransitioningParam) {
      setIsTransitioning(true);
      setTimeout(() => setIsTransitioning(false), 200);
    }
  };

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t: translations[language],
    isTransitioning,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook to use language context
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};