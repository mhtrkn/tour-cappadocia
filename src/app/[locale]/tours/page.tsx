import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { getAllTours } from '@/lib/mock-data/helpers';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star } from 'lucide-react';
import BreadcrumbWrapper from '@/components/layout/breadcrumb';
import { Badge } from '@/components/ui/badge';

export const revalidate = 3600;

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.tours' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/tours`,
      languages: {
        'en': '/en/tours',
        'tr': '/tr/tours',
      },
    },
  };
}

export default async function ToursPage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tours' });
  const commonT = await getTranslations({ locale, namespace: 'common' });
  const tours = await getAllTours();

  return (
    <>
      <BreadcrumbWrapper
        items={[
          { label: t('title') }
        ]}
      />

      <div className="mb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Tours Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tours.map((tour) => (
              <Link
                key={tour.id}
                href={`/tours/${tour.slug}`}
                className="group"
              >
                <div className="border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full bg-white">
                  {/* Image */}
                  <div className="relative w-full h-64 overflow-hidden">
                    <Image
                      src={tour.images[0].url}
                      alt={tour.images[0].alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {tour.originalPrice && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Save ${tour.originalPrice - tour.price}
                      </div>
                    )}
                    {/* Category Badge */}
                    <Badge variant={"outline"} className="capitalize absolute top-4 left-4 bg-gray-50">
                      {tour.category}
                    </Badge>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-bold mb-2 group-hover:text-primary transition h-12 overflow-hidden text-ellipsis line-clamp-2">
                      {tour.translations[locale as 'tr' | 'en'].title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 h-10 overflow-hidden text-ellipsis line-clamp-2">
                      {tour.translations[locale as 'tr' | 'en'].shortDescription}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{tour.duration} {commonT('hours')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>Max {tour.groupSize.max}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{tour.rating}</span>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-bold text-primary">
                            ${tour.price}
                          </span>
                          {tour.originalPrice > tour.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${tour.originalPrice}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-muted-foreground lowercase">
                          {commonT('perPerson')}
                        </span>
                      </div>
                      <Button variant="outline" size="sm">
                        {commonT('viewDetails')}
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {tours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                {locale === 'tr' ? 'Henüz tur bulunmuyor.' : 'No tours available yet.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
