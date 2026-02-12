// app/[locale]/wishlist/page.tsx
import PageTitle from '@/components/layout/page-title';
import WishlistContent from '@/components/wishlist/wishlist-content';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.wishlist' });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.paphlagoniatour.com';

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}/wishlist`,
      languages: {
        'en': `${baseUrl}/en/wishlist`,
        'tr': `${baseUrl}/tr/wishlist`,
        'x-default': `${baseUrl}/en/wishlist`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${baseUrl}/${locale}/wishlist`,
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
    },
  };
}

export default async function WishlistPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'wishlist' });

  return (
    <div className="bg-linear-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <PageTitle title={t('title')} subtitle={t('subtitle')} withBreadCrumb />

        <div className='pt-10 pb-20'>
          <WishlistContent />
        </div>
      </div>
    </div>
  );
}
