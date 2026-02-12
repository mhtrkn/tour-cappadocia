/* eslint-disable @typescript-eslint/no-explicit-any */
import BackToTopButton from '@/components/layout/back-to-top';
import CookieConsentModal from '@/components/layout/cookie-consent-modal';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { ThemeProviders } from '@/components/layout/theme-providers';
import { Toaster } from '@/components/ui/sonner';
import { routing } from '@/i18n/routing';
import { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Kumbh_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import '../globals.css';

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-kumbh-sans',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.paphlagoniatour.com';

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        'en': `${baseUrl}/en`,
        'tr': `${baseUrl}/tr`,
        'x-default': `${baseUrl}/en`,
      },
    },
    openGraph: {
      locale: locale === 'tr' ? 'tr_TR' : 'en_US',
      alternateLocale: locale === 'tr' ? ['en_US'] : ['tr_TR'],
      url: `${baseUrl}/${locale}`,
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={kumbhSans.variable} suppressHydrationWarning>
      <body className="font-sans antialiased theme-light">
        <NextIntlClientProvider messages={messages}>
          <ThemeProviders>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
            <Toaster richColors position='top-right' />
            <CookieConsentModal />
            <BackToTopButton />
          </ThemeProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
