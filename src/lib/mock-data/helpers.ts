import { Tour } from '@/types/tour';
import { unstable_cache } from 'next/cache';
import { tours } from './tour';

export const getAllTours = unstable_cache(
  async (): Promise<Tour[]> => {
    return tours.filter(tour => tour.active);
  },
  ['all-tours'],
  {
    revalidate: 3600,
    tags: ['tours'],
  }
);

export function getToursBySlugsSync(slugs: string[]): Tour[] {
  if (!slugs || slugs.length === 0) return [];

  return tours.filter(tour =>
    slugs.includes(tour.slug) && tour.active
  );
}

export const getToursBySlugs = unstable_cache(
  async (slugs: string[]): Promise<Tour[]> => {
    if (!slugs || slugs.length === 0) return [];

    return tours.filter(tour =>
      slugs.includes(tour.slug) && tour.active
    );
  },
  ['tours-by-slugs'],
  {
    revalidate: 3600,
    tags: ['tours'],
  }
);

export const getTourBySlug = unstable_cache(
  async (slug: string): Promise<Tour | undefined> => {
    return tours.find(tour => tour.slug === slug && tour.active);
  },
  ['tour-by-slug'],
  {
    revalidate: 3600,
    tags: ['tours'],
  }
);

export const getFeaturedTours = unstable_cache(
  async (limit: number = 6): Promise<Tour[]> => {
    return tours
      .filter(tour => tour.featured && tour.active)
      .slice(0, limit);
  },
  ['featured-tours'],
  {
    revalidate: 3600,
    tags: ['tours'],
  }
);

export function getToursByCategory(category: string): Tour[] {
  return tours.filter(
    tour => tour.category === category && tour.active
  );
}

export function getRelatedTours(currentTourId: string, limit: number = 3): Tour[] {
  const currentTour = tours.find(tour => tour.id === currentTourId);
  if (!currentTour) return [];

  return tours
    .filter(tour =>
      tour.id !== currentTourId &&
      tour.category === currentTour.category &&
      tour.active
    )
    .slice(0, limit);
}
