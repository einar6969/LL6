export const bookingPageTranslations = {
  title: 'Panta tíma',
  subtitle: 'Pantaðu tíma fyrir augnlækningar eða forskoðun fyrir sjónlagsaðgerð',
  
  information: {
    title: 'Upplýsingar um tímabókun',
    heilsuvera: {
      title: 'Heilsuvera bókunarkerfi',
      description: 'Þú getur einnig pantað tíma í gegnum Heilsuvera bókunarkerfið',
      link: 'Opna Heilsuvera'
    },
    contact: {
      email: {
        title: 'Netfang',
        address: 'info@sjonlag.is'
      },
      phone: {
        title: 'Símanúmer',
        number: '577 1001',
        hours: 'Mán-Fös: 08:00-17:00'
      }
    },
    notice: {
      title: 'Mikilvægt um reglulegar augnrannsóknir',
      summary: 'Mælt er með reglulegum augnrannsóknum til að viðhalda góðri augnheilsu og greina vandamál snemma.',
      readMore: 'Lesa meira',
      readLess: 'Sjá minna',
      details: {
        paragraph1: 'Við mælum með augnrannsókn á 2-3 ára fresti fyrir fólk undir 40 ára aldri, og árlega fyrir þá sem eru eldri.',
        paragraph2: 'Sérstaklega mikilvægt er að koma í reglulegar skoðanir ef þú ert með sykursýki, háþrýsting eða aðra sjúkdóma sem geta haft áhrif á sjónina.'
      }
    }
  },
  
  form: {
    title: 'Bókunarform',
    personalInfo: {
      fullName: {
        label: 'Nafn',
        placeholder: 'Fullt nafn'
      },
      nationalId: {
        label: 'Kennitala',
        placeholder: '0000000000'
      },
      email: {
        label: 'Netfang',
        placeholder: 'nafn@example.com'
      },
      phone: {
        label: 'Sími/GSM',
        placeholder: '581-2345'
      },
      address: {
        label: 'Heimilisfang',
        placeholder: 'Laugavegur 123'
      },
      postalCode: {
        label: 'Póstnúmer',
        placeholder: '101'
      }
    },
    appointmentType: {
      label: 'Tegundir af tíma',
      placeholder: 'Veldu tegund tíma',
      options: {
        examination: 'Forskoðun - Möguleikar á sjónlagsaðgerð kannaðir',
        general: 'Almennar augnlækningar'
      }
    },
    preferredDay: {
      label: 'Hentugur dagur',
      options: {
        monday: 'Mánudagur',
        tuesday: 'Þriðjudagur',
        wednesday: 'Miðvikudagur',
        thursday: 'Fimmtudagur',
        friday: 'Föstudagur'
      }
    },
    preferredTime: {
      label: 'Hentugur tími',
      options: {
        morning: 'Fyrir hádegi',
        afternoon: 'Eftir hádegi'
      }
    },
    submit: {
      button: 'Senda beiðni',
      submitting: 'Sendir beiðni...',
      success: 'Beiðni þín hefur verið send! Við munum hafa samband við þig innan 24 klst.',
      error: 'Villa kom upp við að senda beiðnina. Vinsamlegast reyndu aftur.'
    },
    validation: {
      required: '*',
      nameRequired: 'Nafn er nauðsynlegt',
      nationalIdRequired: 'Kennitala er nauðsynleg',
      nationalIdFormat: 'Kennitala verður að vera 10 tölustafir',
      emailRequired: 'Netfang er nauðsynlegt',
      emailInvalid: 'Ógilt netfang',
      phoneRequired: 'Símanúmer er nauðsynlegt',
      phoneMinLength: 'Símanúmer verður að vera að minnsta kosti 7 tölustafir',
      addressRequired: 'Heimilisfang er nauðsynlegt',
      postalCodeRequired: 'Póstnúmer er nauðsynlegt',
      postalCodeFormat: 'Póstnúmer verður að vera 3 tölustafir',
      appointmentTypeRequired: 'Vinsamlegast veldu tegund tíma',
      preferredDayRequired: 'Vinsamlegast veldu hentugan dag',
      preferredTimeRequired: 'Vinsamlegast veldu hentugan tíma'
    }
  }
};