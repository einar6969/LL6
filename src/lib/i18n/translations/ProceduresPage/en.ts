import { ProceduresPageTranslations } from '../../LanguageContext';

export const enProceduresPageTranslations: ProceduresPageTranslations = {
  hero: {
    title: 'Freedom without glasses',
    subtitle: 'Experience life without needing glasses or lenses. A step towards independence and clearer vision.',
    cta: 'Book Examination'
  },
  steps: {
    title: 'How does the process work?',
    subtitle: 'We guide you through the entire process from the first examination to complete recovery',
    step1: {
      title: 'First Step – Pre-examination',
      description: 'Comprehensive vision measurement and consultation with a specialist to assess whether you are eligible for surgery.',
      cta: 'Book Appointment'
    },
    step2: {
      title: 'What comes next?',
      description: 'The doctor assesses whether you are a suitable candidate and discusses the results with you.'
    },
    step3: {
      title: 'The Surgery',
      description: 'Safe and fast surgery with the latest technology in comfortable conditions.'
    },
    step4: {
      title: 'Follow-up',
      description: 'Regular follow-up visits to ensure the best results and eye health.'
    }
  },
  procedureTypes: {
    title: 'Types of Surgery',
    subtitle: 'We offer various surgeries that suit different needs and ages',
    laser: {
      title: 'Laser Surgery',
      description: 'Modern laser surgery to correct vision defects',
      types: {
        femtoLasik: {
          title: 'Femto-LASIK',
          description: 'The most common and safest laser surgery today',
          pros: ['Fast recovery', 'Little discomfort', 'Precise results'],
          cons: ['Not for everyone', 'Expensive'],
          suitableFor: ['18-45 years', 'Stable vision', 'Healthy cornea']
        },
        transPrk: {
          title: 'TransPRK SmartPulse',
          description: 'Surface surgery without contact',
          pros: ['No flap', 'Safe', 'Suitable for thin corneas'],
          cons: ['Longer recovery', 'More discomfort first days'],
          suitableFor: ['Thin corneas', 'Athletes', 'Security personnel']
        },
        presbyMax: {
          title: 'PresbyMax (45-55 years)',
          description: 'Specially designed surgery for presbyopia',
          pros: ['Corrects presbyopia', 'Reduces need for reading glasses'],
          cons: ['Limited age group', 'May require adjustment'],
          suitableFor: ['45-55 years', 'Presbyopia', 'Good eye health']
        }
      }
    },
    lensReplacement: {
      title: 'Cataract Surgery',
      description: 'Cataract surgery has been performed for decades and therefore has extensive and good experience.',
      types: {
        monofocal: {
          title: 'Monofocal Lenses',
          description: 'Traditional lenses for one distance',
          pros: ['Good vision at one distance', 'Reliable', 'Cheaper option'],
          cons: ['Need glasses for other distances'],
          suitableFor: ['Cataracts', 'Simple vision correction']
        },
        multifocal: {
          title: 'Multifocal Lenses',
          description: 'Lenses that enable vision at multiple distances',
          pros: ['Vision at multiple distances', 'Reduces need for glasses'],
          cons: ['More expensive', 'May cause halos'],
          suitableFor: ['Want to be independent of glasses', 'Good candidates']
        },
        toric: {
          title: 'Toric Lenses',
          description: 'Specially designed for astigmatism',
          pros: ['Corrects astigmatism', 'Clear vision'],
          cons: ['Requires precise positioning'],
          suitableFor: ['Astigmatism', 'Cataracts']
        }
      }
    }
  },
  complications: {
    title: 'Possible Complications',
    subtitle: 'What happens in unlikely cases?',
    content: 'We emphasize transparency and want you to be well informed about all aspects of the surgery',
    safetyMeasures: {
      title: 'Safety Measures',
      intro: 'We use the best possible safety measures to minimize risk:',
      items: [
        'Thorough pre-examination and eligibility assessment',
        'Latest technology and equipment',
        'Experienced and trained specialists',
        'Strict safety rules',
        'Regular follow-up visits'
      ]
    },
    statistics: {
      title: 'Statistics',
      successRate: 'Surgery success rate',
      seriousComplications: 'Serious complications',
      patientSatisfaction: 'Patient satisfaction'
    },
    details: {
      title: 'What happens in unlikely cases?',
      intro: 'Although serious complications are very rare, we want you to be well informed about all possibilities.',
      toggleShow: 'Show more',
      toggleHide: 'Hide more',
      items: [
        {
          title: 'Dry eye',
          description: 'Temporary dryness that usually improves within a few weeks',
          frequency: 'Common but temporary'
        },
        {
          title: 'Halos or glare',
          description: 'Seeing halos or glare, especially in the evenings or in the dark',
          frequency: 'Common first weeks'
        },
        {
          title: 'Light sensitivity',
          description: 'Increased sensitivity to light the first days after surgery',
          frequency: 'Common first days'
        },
        {
          title: 'Inaccuracy in results',
          description: 'In some cases, re-surgery may be needed to achieve perfect results',
          frequency: 'Rare (5-10%)'
        },
        {
          title: 'Infection',
          description: 'Bacterial infection in the eye that requires immediate treatment',
          frequency: 'Very rare (<0.1%)'
        },
        {
          title: 'Corneal damage',
          description: 'Damage to the cornea that can affect vision permanently',
          frequency: 'Extremely rare (<0.01%)'
        }
      ]
    }
  },
  brochures: {
    title: 'Brochures and Information',
    subtitle: 'Download detailed information about the surgeries',
    items: [
      {
        title: 'LASIK Surgery',
        description: 'Detailed information about LASIK surgery and what you can expect',
        filename: 'lasik-brochure.pdf'
      },
      {
        title: 'Cataract Surgery',
        description: 'Everything you need to know about cataract surgery and artificial lenses',
        filename: 'cataract-surgery-brochure.pdf'
      },
      {
        title: 'Preparation for Surgery',
        description: 'Instructions for preparation and what you need to consider',
        filename: 'preparation-brochure.pdf'
      }
    ]
  },
  navigation: {
    hero: 'Overview',
    steps: 'Process',
    types: 'Surgery Types',
    testimonials: 'Reviews',
    complications: 'Complications',
    faq: 'Questions',
    brochures: 'Brochures'
  }
};