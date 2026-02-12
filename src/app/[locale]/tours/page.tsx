import PageTitle from '@/components/layout/page-title';
import TourItem from '@/components/tour/tour-item';
import { getAllTours } from '@/lib/mock-data/helpers';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

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
  const tours = await getAllTours();

  return (
    <>
      <div className="mb-20">
        <div className="container mx-auto">
          <PageTitle title={t('title')} subtitle={t('subtitle')} withBreadCrumb />

          {/* Tours Grid */}
          <div className="max-w-5xl pt-10 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tours.map((tour) => (
              <TourItem key={tour.id} tour={tour} />
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
