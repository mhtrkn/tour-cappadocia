import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Award, Heart, CheckCircle2 } from 'lucide-react';

export const revalidate = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.about' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        'en': '/en/about',
        'tr': '/tr/about',
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'about' });

  const features = [
    {
      icon: Award,
      title: t('experience'),
      description: t('experienceDesc'),
    },
    {
      icon: Shield,
      title: t('safety'),
      description: t('safetyDesc'),
    },
    {
      icon: Users,
      title: t('guides'),
      description: t('guidesDesc'),
    },
    {
      icon: Heart,
      title: t('satisfaction'),
      description: t('satisfactionDesc'),
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
      </section>

      <div className="container max-w-6xl relative mx-auto px-4">
        {/* Our Story */}
        <section className="py-16">
          <div className="grid md:grid-cols-1 gap-6 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">{t('ourStory')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('ourStoryText')}
              </p>
              <div className="flex gap-12 my-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">
                    {locale === 'tr' ? 'Yıl Deneyim' : 'Years Experience'}
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-sm text-muted-foreground">
                    {locale === 'tr' ? 'Mutlu Misafir' : 'Happy Guests'}
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">
                    {locale === 'tr' ? 'Farklı Tur' : 'Different Tours'}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-100 rounded-4xl overflow-hidden">
              <Image
                src="/images/our-story.jpg"
                alt="Cappadocia"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-muted/30 -mx-4 px-4 md:mx-0 md:rounded-xl md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('ourMission')}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('ourMissionText')}
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('whyChooseUs')}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8 pb-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-72 rounded-xl overflow-hidden order-2 md:order-1">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Our Team"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">{t('team')}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('teamText')}
              </p>
              <ul className="space-y-3">
                {[
                  locale === 'tr' ? 'Lisanslı turist rehberleri' : 'Licensed tour guides',
                  locale === 'tr' ? 'Deneyimli sürücüler' : 'Experienced drivers',
                  locale === 'tr' ? 'Müşteri hizmetleri ekibi' : 'Customer service team',
                  locale === 'tr' ? '7/24 destek' : '24/7 support',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 text-center">
          <div className="w-full mx-auto bg-linear-to-br from-orange-50 to-red-50 rounded-xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'tr' ? 'Harika bir deneyim için hazır mısınız?' : 'Ready for an amazing experience?'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {locale === 'tr'
                ? 'Kapadokya\'da unutulmaz anılar biriktirin. Size yardımcı olmak için buradayız!'
                : 'Create unforgettable memories in Cappadocia. We are here to help!'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/tours">
                  {locale === 'tr' ? 'Turları İncele' : 'Browse Tours'}
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">
                  {t('cta')}
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
