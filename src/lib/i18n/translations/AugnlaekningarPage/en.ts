```typescript
import { AugnlaekningarPageTranslations } from '../../LanguageContext';

export const enAugnlaekningarPageTranslations: AugnlaekningarPageTranslations = {
  sjonskerdingarPage: {
    hero: {
      title: 'Vision Impairments and Vision Correction',
      subtitle: 'Understanding common vision impairments and ways to correct them for clearer vision.',
      imageAlt: 'Detailed eye examination'
    },
    intro: {
      title: 'What are Vision Impairments?',
      paragraph1: 'Vision impairments are conditions where the eye cannot properly focus light onto the retina, leading to blurry vision. This can be caused by various factors, such as irregular eye shape, changes in the cornea or lens, or age-related changes.',
      paragraph2: 'Understanding how the eye works is the first step in understanding vision impairments. Light enters the eye through the cornea and lens, which bend the light to focus it onto the retina at the back of the eye. When this process is not perfect, vision becomes blurry.',
      diagramAlt: 'Simple diagram of the eye showing how light focuses on the retina.'
    },
    conditions: {
      myopia: {
        title: 'Myopia (Nearsightedness)',
        symptoms: ['Blurry vision for distant objects', 'Need to squint to see clearly', 'Headaches or eye strain'],
        causes: 'Myopia is most often caused by the eye being too long or the cornea being too curved, which causes light to focus in front of the retina.',
        treatment: 'Common corrections include glasses, contact lenses, or laser surgeries like LASIK or PRK.'
      },
      hyperopia: {
        title: 'Hyperopia (Farsightedness)',
        symptoms: ['Blurry vision for near objects', 'Eye strain or headaches when reading', 'Need to hold objects further away to see clearly'],
        causes: 'Hyperopia is most often caused by the eye being too short or the cornea being too flat, which causes light to focus behind the retina.',
        treatment: 'Hyperopia can be corrected with glasses, contact lenses, or laser surgeries.'
      },
      astigmatism: {
        title: 'Astigmatism',
        symptoms: ['Blurry or distorted vision at all distances', 'Double vision', 'Eye strain and headaches'],
        causes: 'Astigmatism is caused by an irregular shape of the cornea or lens, which causes light to focus at more than one point on the retina.',
        treatment: 'Correction involves glasses, contact lenses (toric lenses), or laser surgeries.'
      },
      presbyopia: {
        title: 'Presbyopia (Age-related Farsightedness)',
        symptoms: ['Difficulty reading small print', 'Need to hold reading material further away', 'Eye strain during close-up work'],
        causes: 'Presbyopia is a natural part of the aging process where the eye\'s lens loses its elasticity and ability to focus on near objects.',
        treatment: 'Correction options include reading glasses, bifocal or multifocal glasses, multifocal contact lenses, or lens replacement surgeries.'
      }
    },
    comparisonTable: {
      title: 'Comparison of Vision Impairments',
      headers: ['Condition', 'Common Symptoms', 'Cause', 'Common Correction'],
      rows: {
        myopia: ['Myopia', 'Blurry distant vision', 'Long eye/curved cornea', 'Glasses, lenses, laser'],
        hyperopia: ['Hyperopia', 'Blurry near vision', 'Short eye/flat cornea', 'Glasses, lenses, laser'],
        astigmatism: ['Astigmatism', 'Distorted vision', 'Irregular cornea/lens', 'Glasses, toric lenses, laser'],
        presbyopia: ['Presbyopia', 'Difficulty reading', 'Stiff lens', 'Reading glasses, multifocal, lens replacement']
      }
    },
    treatmentOverview: {
      title: 'Which path suits you?',
      paragraph: 'The choice of correction method depends on the type of vision impairment, age, lifestyle, and personal preferences. We offer a wide range of options, from traditional glasses and contact lenses to advanced laser and lens surgeries.',
      options: [
        'Glasses (single vision, bifocal, multifocal)',
        'Contact Lenses (single vision, toric, multifocal)',
        'Laser Vision Correction (LASIK, PRK, PresbyMax)',
        'Lens Replacement Surgeries (cataract surgery, lens implantation)'
      ],
      cta: 'Book an appointment for consultation'
    },
    faq: {
      title: 'Frequently Asked Questions about Vision Impairments',
      items: [
        {
          question: 'Can you have more than one vision impairment at once?',
          answer: 'Yes, it is common for people to have more than one vision impairment, for example, myopia and astigmatism, or hyperopia and age-related farsightedness.'
        },
        {
          question: 'Am I too old for laser surgery?',
          answer: 'Age is not the only factor. It is more important that your vision is stable and your eyes are healthy. For older individuals, lens replacement surgeries may be a more suitable option.'
        },
        {
          question: 'How often do glasses or lenses need to be updated?',
          answer: 'It depends on how quickly your vision changes. Generally, an eye examination is recommended every 1-2 years to ensure the prescription is correct.'
        }
      ]
    },
    finalCta: {
      title: 'Take the first step towards clearer vision',
      paragraph: 'Don\'t let vision impairments hold you back. Book an eye examination with us today to get an accurate diagnosis and personalized advice on the best correction options for you.',
      bookAppointment: 'Book Appointment',
      learnMoreAboutExams: 'Learn more about eye examinations'
    }
  }
};
```