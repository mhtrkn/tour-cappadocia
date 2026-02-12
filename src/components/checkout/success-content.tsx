/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from '@/i18n/routing';
import { format } from 'date-fns';
import { enUS, tr } from 'date-fns/locale';
import { Calendar, CheckCircle2, Download, Home, List, Mail, Phone, ScrollText, Users } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useCurrency } from '../layout/currency-switcher';

interface CompletedBooking {
  tourTitle: string;
  date: string;
  adults: number;
  price: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bookingReference: string;
}

export default function SuccessContent() {
  const [booking, setBooking] = useState<CompletedBooking | null>(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('success');
  const { formatPrice } = useCurrency();
  const dateLocale = locale === 'tr' ? tr : enUS;

  const bookingRef = searchParams.get('ref');

  useEffect(() => {
    const completed = localStorage.getItem('completedBooking');
    if (!completed || !bookingRef) {
      router.push('/tours');
      return;
    }

    try {
      const data = JSON.parse(completed);
      if (data.bookingReference !== bookingRef) {
        router.push('/tours');
        return;
      }
      setBooking(data);
    } catch (error) {
      console.error('Invalid booking data:', error);
      router.push('/tours');
    }
  }, [bookingRef, router]);

  if (!booking) {
    return null;
  }

  const tourDate = new Date(booking.date);

  return (
    <>
      <div className="min-h-screen bg-linear-to-b from-background to-muted/20 py-12">
        <div className="container max-w-4xl mx-auto px-4">
          {/* Success Icon */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-green-500/10 rounded-full mb-6">
              <CheckCircle2 className="w-16 h-16 text-green-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Booking Reference */}
          <Card className="mb-8 border-2 border-primary/20 bg-linear-to-br from-primary/5 to-transparent">
            <CardContent>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  {t('referenceLabel')}
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-background rounded-lg border-2 border-primary/30">
                  <span className="text-3xl font-mono font-bold text-primary">
                    {booking.bookingReference}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  {locale === 'tr'
                    ? 'Bu kodu e-postanızda bulabilirsiniz'
                    : 'You can find this code in your email'
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Booking Details */}
          <Card className="mb-8">
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">{t('details.title')}</h2>

                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                    <ScrollText className="w-5 h-5 text-primary mt-0.5" />
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{t('details.tour')}</p>
                      <p className="font-medium line-clamp-1">{booking.tourTitle}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                      <Calendar className="w-5 h-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{t('details.date')}</p>
                        <p className="font-medium">{format(tourDate, 'PPP', { locale: dateLocale })}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                      <Users className="w-5 h-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{t('details.guests')}</p>
                        <p className="font-medium">{booking.adults} {locale === 'tr' ? 'Kişi' : 'People'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                      <Mail className="w-5 h-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{t('details.email')}</p>
                        <p className="font-medium">{booking.email}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                      <Phone className="w-5 h-5 text-primary mt-0.5" />
                      <div className="flex-1">
                        <p className="text-sm text-muted-foreground mb-1">{t('details.phone')}</p>
                        <p className="font-medium">{booking.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <span className="font-semibold">{t('details.total')}</span>
                    <span className="text-2xl font-bold text-primary">
                      {formatPrice(booking.price * booking.adults)}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Button variant="outline" size="lg" className="gap-2">
              <Download className="w-4 h-4" />
              {locale === 'tr' ? 'PDF İndir' : 'Download PDF'}
            </Button>
            <Link href="/tours" className="md:col-span-1">
              <Button variant="outline" size="lg" className="w-full gap-2">
                <List className="w-4 h-4" />
                {locale === 'tr' ? 'Diğer Turlar' : 'Other Tours'}
              </Button>
            </Link>
            <Link href="/" className="md:col-span-1">
              <Button size="lg" className="w-full gap-2">
                <Home className="w-4 h-4" />
                {locale === 'tr' ? 'Ana Sayfa' : 'Home'}
              </Button>
            </Link>
          </div>

          {/* Next Steps */}
          <Card>
            <CardContent>
              <h3 className="font-bold text-lg mb-4">{t('nextSteps.title')}</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">1</span>
                  </div>
                  <p>{t('nextSteps.step1')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">2</span>
                  </div>
                  <p>{t('nextSteps.step2')}</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-primary">3</span>
                  </div>
                  <p>{t('nextSteps.step3')}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
