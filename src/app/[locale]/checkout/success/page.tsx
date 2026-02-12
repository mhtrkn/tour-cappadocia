/* eslint-disable @typescript-eslint/no-unused-vars */
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import SuccessContent from '@/components/checkout/success-content';

export const revalidate = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.success' });

  return {
    title: t('title'),
    description: t('description'),
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function SuccessPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <SuccessContent />;
}
