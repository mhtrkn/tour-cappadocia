import BreadcrumbWrapper from '@/components/layout/breadcrumb';
import BookingCard from '@/components/tour/booking-card';
import TourGallery from '@/components/tour/tour-gallery';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getAllTours, getTourBySlug } from '@/lib/mock-data/helpers';
import { Check, Clock, Info, Star, Users, X } from 'lucide-react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

interface TourDetailPageProps {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
}

export const revalidate = 3600;

export async function generateMetadata({
  params
}: TourDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) {
    return {
      title: 'Tour Not Found',
    };
  }

  const translation = tour.translations[locale as 'tr' | 'en'];

  return {
    title: translation.metaTitle,
    description: translation.metaDescription,
    keywords: translation.metaKeywords,
    openGraph: {
      title: translation.metaTitle,
      description: translation.metaDescription,
      images: [
        {
          url: tour.images[0].url,
          width: tour.images[0].width,
          height: tour.images[0].height,
          alt: tour.images[0].alt,
        },
      ],
      locale: locale,
    },
  };
}

export async function generateStaticParams() {
  const tours = await getAllTours();
  const locales = ['tr', 'en'];

  const params = [];
  for (const locale of locales) {
    for (const tour of tours) {
      params.push({
        locale,
        slug: tour.slug,
      });
    }
  }

  return params;
}

export default async function TourDetailPage({ params }: TourDetailPageProps) {
  const { locale, slug } = await params;
  const tour = await getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: 'tourDetail' });
  const toursT = await getTranslations({ locale, namespace: 'tours' });
  const translation = tour.translations[locale as 'tr' | 'en'];

  return (
    <div className='max-w-7xl mx-auto'>
      <BreadcrumbWrapper
        items={[
          {
            label: toursT('title'),
            href: '/tours'
          },
          {
            label: translation.title
          }
        ]}
      />
      <div className="py-4 md:mb-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="capitalize border border-primary bg-secondary/50 text-secondary-foreground">
                    {tour.category}
                  </Badge>
                  <Badge variant="outline" className="capitalize">
                    {tour.difficulty}
                  </Badge>
                </div>

                <h1 className="text-2xl md:text-4xl font-bold mb-4">
                  {translation.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{tour.rating}</span>
                    <span>({tour.reviewCount} {t('reviews')})</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{tour.duration} {t('hours')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Max {tour.groupSize.max} {t('people')}</span>
                  </div>
                </div>
              </div>

              {/* Gallery */}
              <TourGallery images={tour.images} />

              {/* Overview */}
              <div>
                <p className="text-xl md:2xl font-bold mb-4">{t('overview')}</p>
                <h2 className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {translation.description}
                </h2>
              </div>

              <Separator />

              {/* Highlights */}
              <div>
                <h3 className="text-xl md:2xl font-bold mb-4">{t('highlights')}</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {translation.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                      <span className='text-sm md:text-base'>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Separator />

              {/* Itinerary */}
              <div>
                <h2 className="text-xl md:2xl font-bold mb-4">{t('itinerary')}</h2>
                <div className="space-y-4">
                  {translation.itinerary.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="shrink-0">
                        <div className="text-sm md:text-base w-6 h-6 md:w-8 md:h-8 rounded-full bg-primary/10 border border-primary text-primary flex items-center justify-center font-semibold">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-sm md:text-base font-semibold">{item.title}</h3>
                          {item.time && (
                            <span className="text-sm text-muted-foreground">
                              {item.time}
                            </span>
                          )}
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              {/* What's Included */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-600" />
                    {t('included')}
                  </h2>
                  <ul className="space-y-2">
                    {translation.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <X className="h-5 w-5 text-red-600" />
                    {t('notIncluded')}
                  </h2>
                  <ul className="space-y-2">
                    {translation.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <X className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Separator />

              {/* Important Info */}
              <div>
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  {t('importantInfo')}
                </h2>
                <ul className="space-y-2">
                  {translation.importantInfo.map((info, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <Info className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <BookingCard
                tourSlug={tour.slug}
                tourTitle={tour.translations[locale as 'tr' | 'en'].title}
                price={tour.price}
                originalPrice={tour.originalPrice}
                duration={tour.duration}
                groupSize={tour.groupSize}
                locale={locale}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
