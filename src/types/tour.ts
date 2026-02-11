export type TourCategoryType =
  | 'balloon'
  | 'cultural'
  | 'adventure'
  | 'hiking'
  | 'photography';

export type TourDifficulty = 'easy' | 'moderate' | 'challenging';

export interface TourTranslation {
  title: string;
  description: string;
  shortDescription: string;
  highlights: string[];
  itinerary: {
    title: string;
    description: string;
    time?: string;
  }[];
  included: string[];
  notIncluded: string[];
  importantInfo: string[];
  metaTitle: string;
  metaDescription: string;
  metaKeywords?: string[];
}

export interface Tour {
  id: string;
  slug: string;
  category: TourCategoryType; // Type olarak kullan
  difficulty: TourDifficulty;
  price: number;
  originalPrice?: number;
  duration: string;
  groupSize: {
    min: number;
    max: number;
  };
  ageRestriction?: {
    min: number;
    max?: number;
  };
  images: {
    url: string;
    alt: string;
    width: number;
    height: number;
  }[];
  rating: number;
  reviewCount: number;
  featured: boolean;
  active: boolean;
  translations: {
    tr: TourTranslation;
    en: TourTranslation;
  };
}

// Kategori için interface
export interface Category {
  id: string;
  slug: string;
  translations: {
    tr: { name: string; description: string };
    en: { name: string; description: string };
  };
}
