// types/review.ts
export interface Review {
  id: string;
  tourId: string;
  tourSlug: string;
  tourTitle: {
    en: string;
    tr: string;
  };
  author: {
    name: string;
    country: string;
  };
  rating: number; // 1-5
  date: string; // ISO date
  title: {
    en: string;
    tr: string;
  };
  comment: {
    en: string;
    tr: string;
  };
}
