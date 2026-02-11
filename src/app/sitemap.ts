import { MetadataRoute } from 'next';
import { getAllTours } from '@/lib/mock-data/helpers';
import { routing } from '@/i18n/routing';

const baseUrl = 'https://cappadocia-tours.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const tours = getAllTours();
  const locales = routing.locales;

  const staticPages: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    staticPages.push({
      url: `${baseUrl}/${locale}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr`,
          en: `${baseUrl}/en`,
        },
      },
    });

    staticPages.push({
      url: `${baseUrl}/${locale}/tours`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr/tours`,
          en: `${baseUrl}/en/tours`,
        },
      },
    });

    staticPages.push({
      url: `${baseUrl}/${locale}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      alternates: {
        languages: {
          tr: `${baseUrl}/tr/contact`,
          en: `${baseUrl}/en/contact`,
        },
      },
    });
  });

  const tourPages: MetadataRoute.Sitemap = [];

  tours.forEach((tour) => {
    locales.forEach((locale) => {
      tourPages.push({
        url: `${baseUrl}/${locale}/tours/${tour.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
        alternates: {
          languages: {
            tr: `${baseUrl}/tr/tours/${tour.slug}`,
            en: `${baseUrl}/en/tours/${tour.slug}`,
          },
        },
      });
    });
  });

  return [...staticPages, ...tourPages];
}
