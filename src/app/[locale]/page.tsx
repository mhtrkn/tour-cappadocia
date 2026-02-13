import JsonLd from '@/components/seo/JsonLd';

import ClientFAQ from '@/components/faq/client-faq';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { getFeaturedTours } from '@/lib/mock-data/helpers';
import { Users } from 'lucide-react';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const TourItem = dynamic(() => import('@/components/tour/tour-item'));

export const revalidate = 3600;

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://paphlagonia-tour.vercel.app';

  return {
    title: t('title'),
    description: t('description'),

    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        tr: `${baseUrl}/tr`,
        'x-default': `${baseUrl}/en`,
      },
    },
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const featuredTours = await getFeaturedTours(6);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Cappadocia Tours',
    url: 'https://cappadocia-tours.com',
    logo: 'https://cappadocia-tours.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90 555 123 4567',
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: ['Turkish', 'English'],
    },
    sameAs: [
      'https://www.facebook.com/cappadociatours',
      'https://www.instagram.com/cappadociatours',
      'https://twitter.com/cappadociatours',
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <div>
        {/* Hero Section */}
        <section className="relative bg-accent-foreground py-20 md:py-32 overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/splash.jpg"
            alt="Cappadocia"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={65}
            placeholder="blur"
            blurDataURL='/images/splash-blur.jpg'
            className="object-cover object-center opacity-50 brightness-50"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-secondary/50 via-primary/25 to-transparent" />

          {/* Content */}
          <div className="relative z-20 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-secondary">
                {t('hero.title')}
              </h1>

              <p className="text-lg md:text-xl text-muted mb-8">
                {t('hero.subtitle')}
              </p>

              <Button size="lg" asChild>
                <Link href="/tours">
                  {t('hero.cta')}
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Popular Tours */}
        <section className="py-10 md:py-20 max-w-5xl mx-auto">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t('popularTours.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('popularTours.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8">
              {featuredTours.map((tour) => <TourItem key={tour.id} tour={tour} />
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="relative py-10 md:py-12 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-linear-to-b from-background via-muted/30 to-background" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <div className="text-center mb-16 md:mb-20">
              <div className="inline-block mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {t('features.badge') || 'Neden Bizi Seçmelisiniz?'}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {t('features.title')}
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                {t('features.subtitle') || 'Unutulmaz bir deneyim için ihtiyacınız olan her şey'}
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
              {/* Card 1 - Professional Guides */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-primary/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-linear-to-br from-primary to-primary/60 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-primary/25">
                      <Users className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg">
                      ✓
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-2xl mb-3 group-hover:text-primary transition-colors">
                    {t('features.professionalGuides')}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('features.professionalGuidesDesc')}
                  </p>
                </div>
              </div>

              {/* Card 2 - Best Prices */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-amber-500/20 via-amber-500/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-card border border-border/50 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-linear-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-amber-500/25">
                      <span className="text-4xl filter drop-shadow-lg">💰</span>
                    </div>
                    <div className="absolute top-0 -right-2 px-3 py-1 bg-red-500 rounded-full text-white text-xs font-bold shadow-lg animate-pulse">
                      -%30
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-2xl mb-3 group-hover:text-amber-600 transition-colors">
                    {t('features.bestPrices')}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('features.bestPricesDesc')}
                  </p>
                </div>
              </div>

              {/* Card 3 - Safety First */}
              <div className="group relative">
                <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 via-emerald-500/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
                <div className="relative bg-card border border-border/50 rounded-2xl p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-2">
                  {/* Icon Container */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-emerald-500/25">
                      <span className="text-4xl filter drop-shadow-lg">🛡️</span>
                    </div>
                    <div className="absolute -top-1 -right-1 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-lg">★</span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-2xl mb-3 group-hover:text-emerald-600 transition-colors">
                    {t('features.safetyFirst')}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t('features.safetyFirstDesc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats or Trust Indicators */}
            <div className="mt-20 mb-10 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Profesyonel Rehber</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground">Ortalama Puan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Destek</div>
              </div>
            </div>
          </div>
        </section>

        <ClientFAQ />
      </div>
    </>
  );
}
