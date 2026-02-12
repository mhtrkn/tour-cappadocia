// app/[locale]/checkout/page.tsx
import CheckoutContent from '@/components/checkout/checkout-content';
import PageTitle from '@/components/layout/page-title';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export const revalidate = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.checkout' });

  return {
    title: t('title'),
    description: t('description'),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'checkout' });

  return (
    <div className='container max-w-5xl mx-auto mb-20'>
      <PageTitle title={t('title')} subtitle={t('subtitle')} withBreadCrumb />
      <CheckoutContent />
    </div>
  );
}
