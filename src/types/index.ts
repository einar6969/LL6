export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  content: string;
  image?: string;
}

export interface Procedure {
  id: number;
  title: string;
  description: string;
  image: string;
  slug: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface Brochure {
  id: string;
  title: string;
  title_en: string | null;
  subtitle: string | null;
  description: string | null;
  description_en: string | null;
  url: string;
  created_at: string;
  updated_at: string;
}