export const enBookingPageTranslations = {
  title: 'Book Appointment',
  subtitle: 'Book an appointment for eye care or pre-examination for vision surgery',
  
  information: {
    title: 'Appointment Booking Information',
    heilsuvera: {
      title: 'Heilsuvera Booking System',
      description: 'You can also book an appointment through the Heilsuvera booking system',
      link: 'Open Heilsuvera'
    },
    contact: {
      email: {
        title: 'Email',
        address: 'info@sjonlag.is'
      },
      phone: {
        title: 'Phone Number',
        number: '577 1001',
        hours: 'Mon-Fri: 08:00-17:00'
      }
    },
    notice: {
      title: 'Important about regular eye examinations',
      summary: 'Regular eye examinations are recommended to maintain good eye health and detect problems early.',
      readMore: 'Read more',
      readLess: 'Show less',
      details: {
        paragraph1: 'We recommend eye examinations every 2-3 years for people under 40, and annually for those who are older.',
        paragraph2: 'It is especially important to have regular examinations if you have diabetes, high blood pressure, or other diseases that can affect vision.'
      }
    }
  },
  
  form: {
    title: 'Booking Form',
    personalInfo: {
      fullName: {
        label: 'Full Name',
        placeholder: 'Full name'
      },
      nationalId: {
        label: 'National ID',
        placeholder: '0000000000'
      },
      email: {
        label: 'Email',
        placeholder: 'name@example.com'
      },
      phone: {
        label: 'Phone/Mobile',
        placeholder: '581-2345'
      },
      address: {
        label: 'Address',
        placeholder: 'Laugavegur 123'
      },
      postalCode: {
        label: 'Postal Code',
        placeholder: '101'
      }
    },
    appointmentType: {
      label: 'Type of Appointment',
      placeholder: 'Select appointment type',
      options: {
        examination: 'Pre-examination - Vision surgery possibilities assessed',
        general: 'General ophthalmology'
      }
    },
    preferredDay: {
      label: 'Preferred Day',
      options: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday'
      }
    },
    preferredTime: {
      label: 'Preferred Time',
      options: {
        morning: 'Before noon',
        afternoon: 'After noon'
      }
    },
    submit: {
      button: 'Send Request',
      submitting: 'Sending request...',
      success: 'Your request has been sent! We will contact you within 24 hours.',
      error: 'An error occurred while sending the request. Please try again.'
    },
    validation: {
      required: '*',
      nameRequired: 'Name is required',
      nationalIdRequired: 'National ID is required',
      nationalIdFormat: 'National ID must be 10 digits',
      emailRequired: 'Email is required',
      emailInvalid: 'Invalid email',
      phoneRequired: 'Phone number is required',
      phoneMinLength: 'Phone number must be at least 7 digits',
      addressRequired: 'Address is required',
      postalCodeRequired: 'Postal code is required',
      postalCodeFormat: 'Postal code must be 3 digits',
      appointmentTypeRequired: 'Please select appointment type',
      preferredDayRequired: 'Please select preferred day',
      preferredTimeRequired: 'Please select preferred time'
    }
  }
};