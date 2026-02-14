// lib/mock-data/reviews.ts
import { Review } from '@/types/review';

export const reviews: Review[] = [
  {
    id: '1',
    tourId: 'tour-2',
    tourSlug: 'cappadocia-green-tour',
    tourTitle: {
      en: 'Cappadocia Green Tour',
      tr: 'Kapadokya Green Tour',
    },
    author: {
      name: 'Gulce S.',
      country: 'Turkiye',
    },
    rating: 5,
    date: '2025-12-15T10:00:00Z',
    title: {
      en: 'Everything was beatiful!',
      tr: 'Her şey çok güzeldi!',
    },
    comment: {
      en: 'Our guide, Mr. Ferhan, was very helpful. Ihlara Valley, Selime Monastery, and Derinkuyu Underground City are definitely worth seeing.',
      tr: 'Rehberimiz Ferhan bey oldukça yardımcı oldu. Ihlara vadisi, selime manastırı , Derinkuyu yeraltı şehri kesinlikle görmeye değer.',
    },
  },
  {
    id: '2',
    tourId: 'tour-1',
    tourSlug: 'hot-air-balloon-cappadocia',
    tourTitle: {
      en: 'Hot Air Balloon Flight',
      tr: 'Sıcak Hava Balon Turu',
    },
    author: {
      name: 'Lilly J.',
      country: 'Australia',
    },
    rating: 5,
    date: '2025-12-28T09:30:00Z',
    title: {
      en: 'Best agency for Cappadocia',
      tr: 'Kapadokya için en iyi acente',
    },
    comment: {
      en: "We bought them balloon flight and green tour everything was amazing they are so helpful and kind thanks for everything.",
      tr: "Kendilerinden balon turu ve doğa turu satın aldık, her şey muhteşemdi. Çok yardımcı ve naziklerdi, her şey için teşekkürler.",
    },
  },
  {
    id: '3',
    tourId: 'tour-2',
    tourSlug: 'cappadocia-green-tour',
    tourTitle: {
      en: 'Cappadocia Green Tour',
      tr: 'Kapadokya Green Tour',
    },
    author: {
      name: 'Mark M.',
      country: 'United Kingdom',
    },
    rating: 5,
    date: '2024-12-10T14:00:00Z',
    title: {
      en: 'Great Tour with Amazing Guide',
      tr: 'Harika Rehberle Muhteşem Tur',
    },
    comment: {
      en: "It was a wonderful tour. Very informative and fun. Favourite parts were the Derinkuyu Underground and the Selime Monastery. Highly recommend!!",
      tr: "Harika bir turdu. Çok bilgilendirici ve eğlenceliydi. En sevdiğim kısımlar Derinkuyu Yeraltı Mağarası ve Selime Manastırı oldu. Şiddetle tavsiye ederim!!"
    },
  },
];
