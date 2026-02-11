import { Category } from '@/types/tour';

export const categories: Category[] = [
  {
    id: '1',
    slug: 'balloon',
    translations: {
      tr: {
        name: 'Balon Turları',
        description: 'Gökyüzünden Kapadokya manzarası',
      },
      en: {
        name: 'Balloon Tours',
        description: 'Cappadocia from the sky',
      },
    },
  },
  {
    id: '2',
    slug: 'cultural',
    translations: {
      tr: {
        name: 'Kültür Turları',
        description: 'Tarihi ve kültürel yerler',
      },
      en: {
        name: 'Cultural Tours',
        description: 'Historical and cultural sites',
      },
    },
  },
  {
    id: '3',
    slug: 'adventure',
    translations: {
      tr: {
        name: 'Macera Turları',
        description: 'Adrenalin dolu aktiviteler',
      },
      en: {
        name: 'Adventure Tours',
        description: 'Adrenaline-filled activities',
      },
    },
  },
  {
    id: '4',
    slug: 'hiking',
    translations: {
      tr: {
        name: 'Yürüyüş Turları',
        description: 'Doğa ve vadiler',
      },
      en: {
        name: 'Hiking Tours',
        description: 'Nature and valleys',
      },
    },
  },
  {
    id: '5',
    slug: 'photography',
    translations: {
      tr: {
        name: 'Fotoğraf Turları',
        description: 'En iyi fotoğraf noktaları',
      },
      en: {
        name: 'Photography Tours',
        description: 'Best photo spots',
      },
    },
  },
];
