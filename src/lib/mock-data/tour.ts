import { Tour } from '@/types/tour';

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'cappadocia-red-tour',
    category: 'cultural',
    difficulty: 'easy',
    price: 70,
    originalPrice: 80,
    duration: '7.5',
    groupSize: { min: 1, max: 20 },
    ageRestriction: { min: 6 },
    rating: 4.9,
    reviewCount: 342,
    featured: true,
    active: true,
    images: [
      {
        url: 'https://www.paphlagoniatour.com/assets/upload/turfoto/cappadocia-red-tour16.jpg',
        alt: 'Cappadocia Red Tour',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://images.unsplash.com/photo-1608211805656-f46ee1a39729?w=1200&h=800&fit=crop',
        alt: 'Balloon ride sunrise view',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&h=800&fit=crop',
        alt: 'Multiple balloons in the sky',
        width: 1200,
        height: 800,
      },
    ],

    translations: {
      tr: {
        title: 'Kapadokya Kırmızı Tur (Red Tour)',
        shortDescription: 'Kapadokya’nın en önemli tarihi ve doğal noktalarını yerel rehber eşliğinde keşfedin',
        description:
          'Bu tam günlük Kapadokya Kırmızı Turunda Uçhisar, Paşabağları, Avanos, Göreme Açık Hava Müzesi, Aşk Vadisi ve Devrent Vadisi’ni keşfedeceksiniz. Profesyonel rehber eşliğinde bölgenin Hititlerden Hristiyanlığa uzanan zengin tarihini öğrenecek, peri bacaları arasında keyifli yürüyüşler yapacak ve Kapadokya’nın eşsiz atmosferini yakından deneyimleyeceksiniz.',

        highlights: [
          'Uçhisar Kalesi’nden panoramik manzara',
          'Paşabağları’nda keşiş hücreleri',
          'Avanos’ta çömlek yapımı gösterisi',
          'Göreme Açık Hava Müzesi ziyareti',
          'Aşk Vadisi ve Devrent Vadisi fotoğraf molaları',
        ],

        itinerary: [
          {
            title: 'Otel Alımı',
            description: 'Sabah otelinizden alınış',
            time: '09:30',
          },
          {
            title: 'Uçhisar Kalesi',
            description: 'Manzara ve fotoğraf molası',
            time: '10:00',
          },
          {
            title: 'Paşabağları',
            description: 'Peri bacaları ve keşiş hücreleri ziyareti',
            time: '11:00',
          },
          {
            title: 'Avanos',
            description: 'Çömlek atölyesi ve öğle yemeği',
            time: '12:30',
          },
          {
            title: 'Göreme Açık Hava Müzesi',
            description: 'Kilise ve fresklerin keşfi',
            time: '14:00',
          },
          {
            title: 'Aşk & Devrent Vadisi',
            description: 'Fotoğraf ve kısa yürüyüş',
            time: '15:30',
          },
          {
            title: 'Otel Dönüşü',
            description: 'Otele transfer',
            time: '17:00',
          },
        ],

        included: [
          'Otel alım ve bırakma',
          'Profesyonel İngilizce rehber',
          'Müze giriş biletleri',
          'Öğle yemeği',
          'Klimalı araç ile ulaşım',
        ],

        notIncluded: [
          'Kişisel harcamalar',
          'İçecekler',
          'Bahşişler',
        ],

        importantInfo: [
          'Rahat ayakkabı giymeniz önerilir',
          'Hava koşullarına göre program değişebilir',
          'Yürüyüş içeren bir turdur',
          'Şapka ve güneş kremi tavsiye edilir',
          '6 yaş altı çocuklar için uygun değildir',
        ],

        metaTitle: 'Kapadokya Red Tour | En Popüler Günlük Tur',
        metaDescription:
          'Kapadokya Red Tour ile Uçhisar, Göreme, Avanos ve Paşabağları’nı keşfedin. Rehberli, öğle yemekli ve müze girişleri dahil tam günlük tur.',
        metaKeywords: [
          'kapadokya red tour',
          'kapadokya günlük tur',
          'göreme turu',
          'uçhisar kalesi',
        ],
      },

      en: {
        title: 'Cappadocia Red Tour',
        shortDescription: 'Discover the highlights of Cappadocia with a professional local guide',
        description:
          'On this full-day Cappadocia Red Tour, you will explore Uçhisar Castle, Paşabağları, Avanos, Göreme Open Air Museum, Love Valley, and Devrent Valley. With a professional guide, you will learn about the region’s rich history from the Hittites to early Christianity and enjoy walking among fairy chimneys and unique landscapes.',

        highlights: [
          'Panoramic views from Uçhisar Castle',
          'Monk cells in Paşabağları',
          'Pottery demonstration in Avanos',
          'Visit to Göreme Open Air Museum',
          'Photo stops at Love and Devrent Valleys',
        ],

        itinerary: [
          {
            title: 'Hotel Pick-up',
            description: 'Pick-up from your hotel',
            time: '09:30',
          },
          {
            title: 'Uçhisar Castle',
            description: 'Panoramic views and photo break',
            time: '10:00',
          },
          {
            title: 'Paşabağları',
            description: 'Visit fairy chimneys and monk cells',
            time: '11:00',
          },
          {
            title: 'Avanos',
            description: 'Pottery workshop and lunch',
            time: '12:30',
          },
          {
            title: 'Göreme Open Air Museum',
            description: 'Explore churches and frescoes',
            time: '14:00',
          },
          {
            title: 'Love & Devrent Valleys',
            description: 'Photo stops and short walk',
            time: '15:30',
          },
          {
            title: 'Hotel Return',
            description: 'Transfer back to hotel',
            time: '17:00',
          },
        ],

        included: [
          'Hotel pick-up and drop-off',
          'Professional English-speaking guide',
          'Museum entrance tickets',
          'Lunch',
          'Transportation with air-conditioned vehicle',
        ],

        notIncluded: [
          'Personal expenses',
          'Drinks',
          'Tips',
        ],

        importantInfo: [
          'Comfortable walking shoes are recommended',
          'Tour program may change due to weather',
          'Includes walking activities',
          'Bring hat and sunscreen',
          'Not suitable for children under 6',
        ],

        metaTitle: 'Cappadocia Red Tour | Best Daily Tour',
        metaDescription:
          'Join the Cappadocia Red Tour and explore Uçhisar, Göreme, Avanos, and Paşabağları. Guided full-day tour with lunch and museum tickets included.',
        metaKeywords: [
          'cappadocia red tour',
          'daily tour cappadocia',
          'goreme tour',
          'uchisar castle',
        ],
      },
    },
  },
  {
    id: '2',
    slug: 'cappadocia-green-tour',
    category: 'nature',
    difficulty: 'easy',
    price: 80,
    originalPrice: 80,
    duration: '8',
    groupSize: { min: 1, max: 15 },
    ageRestriction: { min: 6 },
    rating: 4.8,
    reviewCount: 287,
    featured: true,
    active: true,

    images: [
      {
        url: 'https://images.unsplash.com/photo-1597002741384-66d8c7c2a8c6?w=1200&h=800&fit=crop',
        alt: 'Ihlara Valley Cappadocia',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://images.unsplash.com/photo-1600962815726-457c46eb3f6f?w=1200&h=800&fit=crop',
        alt: 'Derinkuyu Underground City',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://images.unsplash.com/photo-1580136607993-baa37cfd7bd8?w=1200&h=800&fit=crop',
        alt: 'Selime Monastery Cappadocia',
        width: 1200,
        height: 800,
      },
    ],

    translations: {
      tr: {
        title: 'Kapadokya Yeşil Tur (Green Tour) – Küçük Grup & Alışverişsiz',
        shortDescription:
          'Ihlara Vadisi, Derinkuyu Yeraltı Şehri ve Selime Manastırı’nı kapsayan doğa ve tarih dolu tam günlük tur',

        description:
          'Kapadokya Yeşil Tur ile bölgenin en etkileyici doğal ve tarihi alanlarını keşfedin. Göreme Panorama, Derinkuyu Yeraltı Şehri, Ihlara Vadisi yürüyüşü, Melendiz Nehri kıyısında öğle yemeği ve Selime Manastırı ziyaretleri ile unutulmaz bir deneyim yaşayacaksınız. Küçük grup ve alışverişsiz konsepti sayesinde daha konforlu ve kaliteli bir tur sunulmaktadır.',

        highlights: [
          'Göreme Panorama’dan eşsiz manzara',
          'Derinkuyu Yeraltı Şehri keşfi',
          'Ihlara Vadisi’nde doğa yürüyüşü',
          'Nehir kenarında öğle yemeği',
          'Selime Kaya Manastırı ziyareti',
          'Yerel ürünler ve kahve tadımı',
        ],

        itinerary: [
          {
            title: 'Otel Alımı',
            description: 'Sabah otelinizden alınış',
            time: '09:00',
          },
          {
            title: 'Göreme Panorama',
            description: 'Bölge manzarası ve bilgilendirme',
            time: '09:30',
          },
          {
            title: 'Derinkuyu Yeraltı Şehri',
            description: 'Yeraltı şehri ziyareti',
            time: '10:30',
          },
          {
            title: 'Ihlara Vadisi',
            description: '3,5 km doğa yürüyüşü',
            time: '12:00',
          },
          {
            title: 'Öğle Yemeği',
            description: 'Melendiz Nehri kıyısında yemek',
            time: '13:30',
          },
          {
            title: 'Selime Manastırı',
            description: 'Kaya manastırı gezisi',
            time: '14:30',
          },
          {
            title: 'Yerel Pazar & Kahve Molası',
            description: 'Yöresel ürünler ve tadım',
            time: '15:30',
          },
          {
            title: 'Otel Dönüşü',
            description: 'Otele transfer',
            time: '17:30',
          },
        ],

        included: [
          'Otel alım ve bırakma',
          'Profesyonel İngilizce rehber',
          'Klimalı araç ile ulaşım',
          'Öğle yemeği',
          'Yerel ürün tadımı',
        ],

        notIncluded: [
          'Müze giriş ücretleri',
          'Kişisel harcamalar',
          'İçecekler',
          'Bahşişler',
        ],

        importantInfo: [
          'Uzun yürüyüş için rahat ayakkabı giyiniz',
          'Yeraltı şehri klostrofobisi olanlar için uygun değildir',
          'Hava koşullarına göre program değişebilir',
          'Şapka ve güneş kremi önerilir',
          '6 yaş altı çocuklar için uygun değildir',
        ],

        metaTitle:
          'Kapadokya Green Tour | Ihlara Vadisi & Derinkuyu Yeraltı Şehri',

        metaDescription:
          'Kapadokya Green Tour ile Ihlara Vadisi, Derinkuyu Yeraltı Şehri ve Selime Manastırı’nı keşfedin. Küçük grup, rehberli ve öğle yemekli tam günlük tur.',

        metaKeywords: [
          'kapadokya green tour',
          'ıhlara vadisi turu',
          'derinkuyu yeraltı şehri',
          'kapadokya doğa turu',
          'kapadokya günlük tur',
        ],
      },

      en: {
        title: 'Cappadocia Green Tour – Small Group & No Shopping',
        shortDescription:
          'Explore Ihlara Valley, Derinkuyu Underground City and Selime Monastery in one full-day tour',

        description:
          'Join the Cappadocia Green Tour and discover the most impressive natural and historical sites of the region. Visit Göreme Panorama, explore Derinkuyu Underground City, walk through Ihlara Valley, enjoy lunch by the Melendiz River and explore Selime Rock Monastery. This small-group, no-shopping tour offers a comfortable and authentic experience.',

        highlights: [
          'Panoramic views from Göreme View Point',
          'Explore Derinkuyu Underground City',
          'Hiking in Ihlara Valley',
          'Lunch by the Melendiz River',
          'Visit Selime Rock Monastery',
          'Local products and coffee tasting',
        ],

        itinerary: [
          {
            title: 'Hotel Pick-up',
            description: 'Pick-up from your hotel',
            time: '09:00',
          },
          {
            title: 'Göreme Panorama',
            description: 'Panoramic views and briefing',
            time: '09:30',
          },
          {
            title: 'Derinkuyu Underground City',
            description: 'Explore underground tunnels and rooms',
            time: '10:30',
          },
          {
            title: 'Ihlara Valley',
            description: '3.5 km hiking tour',
            time: '12:00',
          },
          {
            title: 'Lunch',
            description: 'Lunch by Melendiz River',
            time: '13:30',
          },
          {
            title: 'Selime Monastery',
            description: 'Visit rock-cut monastery',
            time: '14:30',
          },
          {
            title: 'Local Market & Coffee Break',
            description: 'Taste local products',
            time: '15:30',
          },
          {
            title: 'Hotel Return',
            description: 'Transfer back to hotel',
            time: '17:30',
          },
        ],

        included: [
          'Hotel pick-up and drop-off',
          'Professional English-speaking guide',
          'Transportation with air-conditioned vehicle',
          'Lunch',
          'Local tasting experience',
        ],

        notIncluded: [
          'Entrance fees',
          'Personal expenses',
          'Drinks',
          'Tips',
        ],

        importantInfo: [
          'Wear comfortable walking shoes',
          'Not suitable for people with claustrophobia',
          'Tour schedule may change due to weather',
          'Bring sunscreen and hat',
          'Not suitable for children under 6',
        ],

        metaTitle:
          'Cappadocia Green Tour | Ihlara Valley & Derinkuyu Underground City',

        metaDescription:
          'Discover Ihlara Valley, Derinkuyu Underground City and Selime Monastery on the Cappadocia Green Tour. Small group, guided full-day tour with lunch included.',

        metaKeywords: [
          'cappadocia green tour',
          'ihlára valley tour',
          'derinkuyu underground city',
          'cappadocia nature tour',
          'daily tour cappadocia',
        ],
      },
    },
  },
  {
    id: '3',
    slug: 'cappadocia-hot-air-balloon-tour-goreme',
    category: 'adventure',
    difficulty: 'easy',
    price: 350,
    originalPrice: 350,
    duration: '3',
    groupSize: { min: 1, max: 20 },
    ageRestriction: { min: 6 },
    rating: 4.9,
    reviewCount: 512,
    featured: true,
    active: true,

    images: [
      {
        url: 'https://images.unsplash.com/photo-1608211805656-f46ee1a39729?w=1200&h=800&fit=crop',
        alt: 'Cappadocia Hot Air Balloon Sunrise',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&h=800&fit=crop',
        alt: 'Cappadocia Balloons Over Fairy Chimneys',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&h=800&fit=crop',
        alt: 'Hot Air Balloons in Goreme',
        width: 1200,
        height: 800,
      },
    ],

    translations: {
      tr: {
        title: 'Kapadokya Sıcak Hava Balon Turu – Göreme Peri Bacaları Üzerinde Uçuş',

        shortDescription:
          'Gün doğumunda Göreme semalarında Kapadokya’nın eşsiz manzarasını balonla keşfedin',

        description:
          'Kapadokya Sıcak Hava Balon Turu ile gün doğumunda peri bacalarının üzerinde süzülmenin keyfini çıkarın. Sabah erken saatlerde otelinizden alınır, balonların hazırlanışını izler ve yaklaşık 1 saatlik unutulmaz bir uçuş deneyimi yaşarsınız. Profesyonel pilotlar eşliğinde güvenli ve konforlu bir şekilde Kapadokya’nın büyüleyici manzarasını kuşbakışı izleyebilirsiniz.',

        highlights: [
          'Gün doğumunda balon uçuşu deneyimi',
          'Peri bacaları üzerinde panoramik manzara',
          'Profesyonel ve lisanslı pilotlar',
          'Uçuş sertifikası veya madalya',
          'Otel transfer hizmeti dahil',
        ],

        itinerary: [
          {
            title: 'Otel Alımı',
            description: 'Sabah erken saatlerde otelden alınış',
            time: '05:00',
          },
          {
            title: 'Kalkış Alanı',
            description: 'Balonların hazırlanışının izlenmesi',
            time: '05:30',
          },
          {
            title: 'Uçuş',
            description: 'Yaklaşık 1 saatlik balon uçuşu',
            time: '06:00 - 07:00',
          },
          {
            title: 'İniş & Sertifika',
            description: 'İniş sonrası sertifika veya madalya töreni',
            time: '07:15',
          },
          {
            title: 'Otel Dönüşü',
            description: 'Otele transfer',
            time: '08:00',
          },
        ],

        included: [
          'Otel alım ve bırakma',
          'Yaklaşık 1 saat balon uçuşu',
          'Profesyonel pilot',
          'Uçuş sertifikası veya madalya',
          'Tam sigorta',
        ],

        notIncluded: [
          'Fotoğraf ve video paketi',
          'Yiyecek ve içecek',
          'Kişisel harcamalar',
        ],

        importantInfo: [
          'Hava koşullarına bağlı olarak uçuş iptal edilebilir',
          'Sivil Havacılık iznine bağlıdır',
          'Hamileler için önerilmez',
          'Rahat kıyafetler giyilmelidir',
          'Erken saatlerde hava serin olabilir',
        ],

        metaTitle:
          'Kapadokya Balon Turu | Göreme Sıcak Hava Balonu Uçuşu',

        metaDescription:
          'Kapadokya’da gün doğumunda sıcak hava balon turu deneyimi. Göreme’de peri bacaları üzerinde uçuş, otel transferi ve sertifika dahil.',

        metaKeywords: [
          'kapadokya balon turu',
          'göreme sıcak hava balonu',
          'kapadokya balloon flight',
          'peri bacaları balon turu',
          'cappadocia balloon ride',
        ],
      },

      en: {
        title: 'Cappadocia Hot Air Balloon Flight Over Fairy Chimneys in Göreme',

        shortDescription:
          'Enjoy a magical sunrise balloon flight over Cappadocia’s fairy chimneys',

        description:
          'Experience the best hot air balloon flight in Cappadocia at sunrise. You will be picked up early from your hotel, watch the balloon preparation, and enjoy an unforgettable one-hour flight over fairy chimneys and valleys. Fly safely with professional pilots and admire Cappadocia from a unique perspective.',

        highlights: [
          'Sunrise hot air balloon flight',
          'Panoramic views over fairy chimneys',
          'Professional licensed pilots',
          'Flight certificate or medal',
          'Hotel transfers included',
        ],

        itinerary: [
          {
            title: 'Hotel Pick-up',
            description: 'Early morning hotel pick-up',
            time: '05:00',
          },
          {
            title: 'Take-off Area',
            description: 'Watching balloon inflation',
            time: '05:30',
          },
          {
            title: 'Flight',
            description: 'Approximately 1-hour balloon flight',
            time: '06:00 - 07:00',
          },
          {
            title: 'Landing & Certificate',
            description: 'Certificate or medal ceremony',
            time: '07:15',
          },
          {
            title: 'Hotel Return',
            description: 'Transfer back to hotel',
            time: '08:00',
          },
        ],

        included: [
          'Hotel pick-up and drop-off',
          'Approx. 1-hour balloon flight',
          'Professional pilot',
          'Flight certificate or medal',
          'Full insurance',
        ],

        notIncluded: [
          'Photo and video package',
          'Food and drinks',
          'Personal expenses',
        ],

        importantInfo: [
          'Flights depend on weather conditions',
          'Subject to Civil Aviation approval',
          'Not recommended for pregnant women',
          'Wear comfortable clothes',
          'Early morning can be cold',
        ],

        metaTitle:
          'Cappadocia Hot Air Balloon Ride | Göreme Sunrise Flight',

        metaDescription:
          'Join the best Cappadocia hot air balloon ride over fairy chimneys in Göreme. Sunrise flight, hotel transfer and certificate included.',

        metaKeywords: [
          'cappadocia balloon ride',
          'hot air balloon goreme',
          'cappadocia sunrise flight',
          'fairy chimneys balloon',
          'balloon tour cappadocia',
        ],
      },
    },
  },
  {
    id: '4',
    slug: 'cappadocia-balloon-watching-tour-goreme',
    category: 'photography',
    difficulty: 'easy',
    price: 50,
    originalPrice: 70,
    duration: '2.5',
    groupSize: { min: 1, max: 15 },
    ageRestriction: { min: 6 },
    rating: 4.7,
    reviewCount: 198,
    featured: false,
    active: true,

    images: [
      {
        url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&h=800&fit=crop',
        alt: 'Cappadocia Balloon Watching Sunrise',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://images.unsplash.com/photo-1608211805656-f46ee1a39729?w=1200&h=800&fit=crop',
        alt: 'Hot Air Balloons Over Goreme Valleys',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?w=1200&h=800&fit=crop',
        alt: 'Cappadocia Sunrise Balloon Viewpoint',
        width: 1200,
        height: 800,
      },
    ],

    translations: {
      tr: {
        title: 'Kapadokya Balon İzleme Turu – Göreme Vadileri Gün Doğumu',

        shortDescription:
          'Göreme vadilerinde gün doğumunda yüzlerce balonu izleyip eşsiz fotoğraflar çekin',

        description:
          'Kapadokya Balon İzleme Turu ile gün doğumunda Göreme vadilerinde havalanan yüzlerce balonu yakından izleyin. Profesyonel transfer ile en iyi noktalara ulaştırılır, yaklaşık 2 saat boyunca farklı açılardan fotoğraf çekme imkânı sunulur. Sosyal medya ve anı koleksiyonunuz için unutulmaz kareler yakalayabilirsiniz.',

        highlights: [
          'Gün doğumunda balon izleme deneyimi',
          'En iyi fotoğraf noktalarına ulaşım',
          'Profesyonel transfer hizmeti',
          '2 saatlik fotoğraf çekimi süresi',
          'Sosyal medya için ideal manzaralar',
        ],

        itinerary: [
          {
            title: 'Otel Alımı',
            description: 'Sabah erken saatlerde otelden alınış',
            time: '05:30',
          },
          {
            title: 'İzleme Noktaları',
            description: 'Farklı açılardan balon fotoğraf çekimi',
            time: '06:00 - 08:00',
          },
          {
            title: 'Otel Dönüşü',
            description: 'Otele transfer',
            time: '08:15',
          },
        ],

        included: [
          'Otel alım ve bırakma',
          'Minivan ile ulaşım',
          'Profesyonel sürücü',
          'Fotoğraf noktalarına transfer',
        ],

        notIncluded: [
          'Profesyonel fotoğrafçı hizmeti',
          'Drone çekimi',
          'Yiyecek ve içecek',
          'Kişisel harcamalar',
        ],

        importantInfo: [
          'Hava koşullarına bağlı olarak program değişebilir',
          'Erken saatlerde hava soğuk olabilir',
          'Tripod getirmeniz önerilir',
          'Rahat kıyafetler tercih edilmelidir',
          'Balon uçuşu garanti edilemez',
        ],

        metaTitle:
          'Kapadokya Balon İzleme Turu | Göreme Gün Doğumu Fotoğraf Deneyimi',

        metaDescription:
          'Kapadokya’da balon izleme turu ile Göreme vadilerinde gün doğumunda yüzlerce balonu izleyin ve unutulmaz fotoğraflar çekin.',

        metaKeywords: [
          'kapadokya balon izleme turu',
          'göreme balon manzarası',
          'kapadokya fotoğraf turu',
          'balon izleme cappadocia',
          'sunrise balloon watching',
        ],
      },

      en: {
        title: 'Cappadocia Balloon Watching Tour – Sunrise in Göreme Valleys',

        shortDescription:
          'Watch hundreds of balloons at sunrise and capture stunning photos in Göreme valleys',

        description:
          'Join the Cappadocia Balloon Watching Tour and experience the magical sunrise over Göreme valleys filled with hundreds of hot air balloons. You will be transferred to the best viewpoints and spend around 2 hours taking unforgettable photos from different angles.',

        highlights: [
          'Sunrise balloon watching experience',
          'Access to best photo spots',
          'Comfortable minivan transfers',
          '2 hours of shooting time',
          'Perfect for social media content',
        ],

        itinerary: [
          {
            title: 'Hotel Pick-up',
            description: 'Early morning hotel pick-up',
            time: '05:30',
          },
          {
            title: 'Viewing Points',
            description: 'Balloon photography from different angles',
            time: '06:00 - 08:00',
          },
          {
            title: 'Hotel Return',
            description: 'Transfer back to hotel',
            time: '08:15',
          },
        ],

        included: [
          'Hotel pick-up and drop-off',
          'Transportation by minivan',
          'Professional driver',
          'Transfers to viewing points',
        ],

        notIncluded: [
          'Professional photographer service',
          'Drone shooting',
          'Food and drinks',
          'Personal expenses',
        ],

        importantInfo: [
          'Program depends on weather conditions',
          'Early mornings can be cold',
          'Bringing a tripod is recommended',
          'Wear comfortable clothes',
          'Balloon flights are not guaranteed',
        ],

        metaTitle:
          'Cappadocia Balloon Watching Tour | Göreme Sunrise Photography',

        metaDescription:
          'Watch hundreds of balloons at sunrise in Göreme valleys. Join Cappadocia balloon watching tour with hotel transfers and best viewpoints.',

        metaKeywords: [
          'cappadocia balloon watching',
          'goreme sunrise balloons',
          'balloon photography tour',
          'cappadocia sunrise view',
          'hot air balloon watching',
        ],
      },
    },
  },
  {
    id: '5',
    slug: 'daily-cappadocia-tour-from-kayseri',
    category: 'cultural',
    difficulty: 'easy',
    price: 80,
    originalPrice: 90,
    duration: '10',
    groupSize: { min: 1, max: 15 },
    ageRestriction: { min: 6 },
    rating: 4.8,
    reviewCount: 164,
    featured: false,
    active: true,

    images: [
      {
        url: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&h=800&fit=crop',
        alt: 'Cappadocia Landscape From Kayseri Tour',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://images.unsplash.com/photo-1608211805656-f46ee1a39729?w=1200&h=800&fit=crop',
        alt: 'Goreme Hot Air Balloons',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://images.unsplash.com/photo-1580136607993-baa37cfd7bd8?w=1200&h=800&fit=crop',
        alt: 'Uchisar Castle View',
        width: 1200,
        height: 800,
      },
    ],

    translations: {
      tr: {
        title: 'Kayseri Çıkışlı Günlük Kapadokya Turu – Minivan ile',

        shortDescription:
          'Kayseri’den hareketle Göreme ve Kapadokya’nın en önemli noktalarını keşfedin',

        description:
          'Kayseri çıkışlı günlük Kapadokya turu ile Uçhisar Kalesi, Göreme Açık Hava Müzesi, Aşk Vadisi ve Paşabağları’nı keşfedin. Konforlu minivan ulaşımı, profesyonel rehberlik ve Avanos’ta öğle yemeği ile keyifli ve dolu dolu bir gün geçireceksiniz.',

        highlights: [
          'Kayseri’den konforlu transfer',
          'Uçhisar Kalesi panoraması',
          'Göreme Açık Hava Müzesi ziyareti',
          'Aşk Vadisi fotoğraf molası',
          'Paşabağları peri bacaları',
          'Avanos’ta seramik atölyesi',
        ],

        itinerary: [
          {
            title: 'Kayseri Otel Alımı',
            description: 'Kayseri’deki otelinizden alınış',
            time: '08:30',
          },
          {
            title: 'Göreme Varış',
            description: 'Tur başlangıcı',
            time: '10:00',
          },
          {
            title: 'Uçhisar Kalesi',
            description: 'Manzara ve fotoğraf molası',
            time: '10:30',
          },
          {
            title: 'Göreme Açık Hava Müzesi',
            description: 'Kilise ve fresklerin keşfi',
            time: '11:30',
          },
          {
            title: 'Aşk Vadisi',
            description: 'Fotoğraf ve kısa yürüyüş',
            time: '12:45',
          },
          {
            title: 'Paşabağları',
            description: 'Peri bacaları ziyareti',
            time: '13:30',
          },
          {
            title: 'Avanos Öğle Yemeği',
            description: 'Nehir kenarında öğle yemeği',
            time: '14:30',
          },
          {
            title: 'Seramik Atölyesi',
            description: 'Çömlek yapımı gösterisi',
            time: '15:30',
          },
          {
            title: 'Tur Bitişi',
            description: 'Göreme’den Kayseri’ye dönüş',
            time: '18:00',
          },
          {
            title: 'Kayseri Otel Dönüşü',
            description: 'Otele bırakma',
            time: '19:00 - 19:30',
          },
        ],

        included: [
          'Kayseri’den gidiş-dönüş transfer',
          'Minivan ile ulaşım',
          'Profesyonel rehber',
          'Öğle yemeği',
          'Seramik atölyesi ziyareti',
        ],

        notIncluded: [
          'Müze giriş ücretleri',
          'İçecekler',
          'Kişisel harcamalar',
          'Bahşişler',
        ],

        importantInfo: [
          'Uzun süren bir turdur',
          'Rahat ayakkabı giymeniz önerilir',
          'Program trafik ve hava durumuna göre değişebilir',
          'Sabah erken kalkış vardır',
          '6 yaş altı çocuklar için uygun değildir',
        ],

        metaTitle:
          'Kayseri Çıkışlı Kapadokya Turu | Günlük Göreme & Uçhisar Gezisi',

        metaDescription:
          'Kayseri çıkışlı günlük Kapadokya turu ile Göreme, Uçhisar, Paşabağları ve Avanos’u keşfedin. Rehberli, transferli ve öğle yemekli tur.',

        metaKeywords: [
          'kayseri çıkışlı kapadokya turu',
          'kayseri göreme turu',
          'kapadokya günlük tur kayseri',
          'uçhisar kalesi turu',
          'avanos seramik turu',
        ],
      },

      en: {
        title: 'Daily Cappadocia Tour from Kayseri by Minivan',

        shortDescription:
          'Discover the highlights of Cappadocia with a comfortable transfer from Kayseri',

        description:
          'Join the daily Cappadocia tour from Kayseri and explore Uçhisar Castle, Göreme Open Air Museum, Love Valley and Paşabağları. Enjoy a comfortable minivan transfer, professional guiding and lunch in Avanos for a complete Cappadocia experience.',

        highlights: [
          'Round-trip transfer from Kayseri',
          'Panoramic views at Uçhisar Castle',
          'Visit Göreme Open Air Museum',
          'Photo stop at Love Valley',
          'Explore Paşabağları',
          'Ceramic workshop in Avanos',
        ],

        itinerary: [
          {
            title: 'Kayseri Hotel Pick-up',
            description: 'Pick-up from your hotel in Kayseri',
            time: '08:30',
          },
          {
            title: 'Arrival in Göreme',
            description: 'Tour starts',
            time: '10:00',
          },
          {
            title: 'Uçhisar Castle',
            description: 'Panoramic views and photos',
            time: '10:30',
          },
          {
            title: 'Göreme Open Air Museum',
            description: 'Explore churches and frescoes',
            time: '11:30',
          },
          {
            title: 'Love Valley',
            description: 'Photo break and short walk',
            time: '12:45',
          },
          {
            title: 'Paşabağları',
            description: 'Visit fairy chimneys',
            time: '13:30',
          },
          {
            title: 'Lunch in Avanos',
            description: 'Lunch by the river',
            time: '14:30',
          },
          {
            title: 'Ceramic Workshop',
            description: 'Pottery demonstration',
            time: '15:30',
          },
          {
            title: 'End of Tour',
            description: 'Return to Kayseri',
            time: '18:00',
          },
          {
            title: 'Hotel Drop-off',
            description: 'Drop-off at your hotel',
            time: '19:00 - 19:30',
          },
        ],

        included: [
          'Round-trip transfer from Kayseri',
          'Transportation by minivan',
          'Professional tour guide',
          'Lunch',
          'Ceramic workshop visit',
        ],

        notIncluded: [
          'Museum entrance fees',
          'Drinks',
          'Personal expenses',
          'Tips',
        ],

        importantInfo: [
          'This is a long full-day tour',
          'Wear comfortable walking shoes',
          'Schedule may change due to traffic and weather',
          'Early morning departure',
          'Not suitable for children under 6',
        ],

        metaTitle:
          'Daily Cappadocia Tour from Kayseri | Göreme & Uçhisar Trip',

        metaDescription:
          'Join the daily Cappadocia tour from Kayseri and explore Göreme, Uçhisar, Paşabağları and Avanos. Guided tour with transfers and lunch included.',

        metaKeywords: [
          'daily cappadocia tour from kayseri',
          'kayseri to cappadocia tour',
          'goreme tour from kayseri',
          'cappadocia day trip kayseri',
          'avanos pottery tour',
        ],
      },
    },
  }
];
