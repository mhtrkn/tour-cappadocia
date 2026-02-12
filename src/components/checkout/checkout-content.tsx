// components/checkout/checkout-content.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Link, useRouter } from '@/i18n/routing';
import { getTourBySlugSync } from '@/lib/mock-data/helpers';
import { Tour } from '@/types/tour';
import { format } from 'date-fns';
import { enUS, tr } from 'date-fns/locale';
import { Calendar, CreditCard, Hotel, Info, Loader2, MapPin, ShieldCheck, User, Users } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useCurrency } from '../layout/currency-switcher';

interface BookingData {
  tourSlug: string;
  tourTitle: string;
  date: string;
  adults: number;
  price: number;
  totalPrice: number;
}

export default function CheckoutContent() {
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    hotelName: '',
    pickupLocation: '',
    specialRequests: '',
    agreeToTerms: false,
  });

  const router = useRouter();
  const locale = useLocale() as 'en' | 'tr';
  const t = useTranslations('checkout');
  const { formatPrice } = useCurrency();
  const dateLocale = locale === 'tr' ? tr : enUS;

  useEffect(() => {
    const loadBookingData = async () => {
      const pending = localStorage.getItem('pendingBooking');
      if (!pending) {
        router.push('/tours');
        return;
      }

      try {
        const data = JSON.parse(pending);
        setBookingData(data);

        const tourData = await getTourBySlugSync(data.tourSlug);
        if (tourData) {
          setTour(tourData);
        }
      } catch (error) {
        console.error('Invalid booking data:', error);
        router.push('/tours');
      }
    };

    loadBookingData();
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.country) {
      toast.error(
        locale === 'tr' ? 'Lütfen tüm zorunlu alanları doldurun' : 'Please fill all required fields'
      );
      return;
    }

    if (!formData.agreeToTerms) {
      toast.error(
        locale === 'tr' ? 'Lütfen şartları kabul edin' : 'Please accept the terms and conditions'
      );
      return;
    }

    setLoading(true);

    try {
      // Mock API call - gerçek implementasyonda backend'e gönderilir
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Generate booking reference
      const bookingReference = `PT${Date.now().toString().slice(-8)}`;

      // Save booking details
      const completeBooking = {
        ...bookingData,
        ...formData,
        bookingReference,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem('completedBooking', JSON.stringify(completeBooking));
      localStorage.removeItem('pendingBooking');

      // Redirect to success page
      router.push(`/checkout/success?ref=${bookingReference}`);
    } catch (error) {
      console.error('Booking error:', error);
      toast.error(
        locale === 'tr' ? 'Rezervasyon başarısız oldu' : 'Booking failed'
      );
    } finally {
      setLoading(false);
    }
  };

  if (!bookingData || !tour) {
    return (
      <div className="text-center py-20">
        <Loader2 className="w-12 h-12 mx-auto mb-4 animate-spin text-primary" />
        <p className="text-muted-foreground">
          {locale === 'tr' ? 'Yükleniyor...' : 'Loading...'}
        </p>
      </div>
    );
  }

  const tourDate = new Date(bookingData.date);
  const tourTitle = tour.translations[locale].title;
  const tourDescription = tour.translations[locale].description;

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-3 gap-8 px-4 md:px-0 mt-8 md:mt-0">
        {/* Left Column - Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Tour Preview */}
          <Card className="border-2 border-primary/20 bg-linear-to-br from-primary/5 to-transparent">
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Tour Image */}
                <div className="w-full md:w-48 h-40 relative rounded-xl overflow-hidden shrink-0 border-2 border-border">
                  <Image
                    src={tour.images[0].url}
                    alt={tour.images[0].alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Tour Info */}
                <div className="flex-1 space-y-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">
                        {format(tourDate, 'PPP', { locale: dateLocale })}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold text-foreground">
                      {tourTitle}
                    </h2>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {tourDescription}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="font-semibold">
                      {bookingData.adults} {locale === 'tr' ? 'Kişi' : 'People'}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                {t('contactInfo.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className='flex flex-col gap-1'>
                  <Label htmlFor="firstName">{t('contactInfo.firstName')}
                    <span className='text-destructive -ml-1.5'>*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className='text-sm md:text-base'
                    placeholder={locale === 'tr' ? 'Adınız' : 'Your first name'}
                  />
                </div>
                <div className='flex flex-col gap-1'>
                  <Label htmlFor="lastName">{t('contactInfo.lastName')}
                    <span className='text-destructive -ml-1.5'>*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className='text-sm md:text-base'
                    placeholder={locale === 'tr' ? 'Soyadınız' : 'Your last name'}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className='flex flex-col gap-1'>
                  <Label htmlFor="email">
                    {t('contactInfo.email')}
                    <span className='text-destructive -ml-1.5'>*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='text-sm md:text-base'
                    placeholder={locale === 'tr' ? 'ornek@email.com' : 'example@email.com'}
                  />
                </div>

                <div className='flex flex-col gap-1'>
                  <Label htmlFor="phone">
                    {t('contactInfo.phone')}
                    <span className='text-destructive -ml-1.5'>*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className='text-sm md:text-base'
                    placeholder="+90 555 555 55 55"
                  />
                </div>
              </div>


              <div className='flex flex-col gap-1'>
                <Label htmlFor="country">
                  {t('contactInfo.country')}
                  <span className='text-destructive -ml-1.5'>*</span>
                </Label>
                <Input
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  required
                  className='text-sm md:text-base'
                  placeholder={locale === 'tr' ? 'Ülke' : 'Country'}
                />
              </div>
            </CardContent>
          </Card>

          {/* Accommodation & Pickup */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hotel className="w-5 h-5" />
                {t('accommodation.title')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className='flex flex-col gap-1'>
                <Label htmlFor="hotelName">
                  {t('accommodation.hotelName')}
                </Label>
                <Input
                  id="hotelName"
                  name="hotelName"
                  value={formData.hotelName}
                  onChange={handleInputChange}
                  className='text-sm md:text-base'
                  placeholder={locale === 'tr' ? 'Otel adı' : 'Hotel name'}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {locale === 'tr'
                    ? 'Kaldığınız otelin adını yazın (opsiyonel)'
                    : 'Enter your hotel name (optional)'
                  }
                </p>
              </div>

              <div className='flex flex-col gap-1'>
                <Label htmlFor="pickupLocation">
                  {t('accommodation.pickupLocation')}
                </Label>
                <Input
                  id="pickupLocation"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  className='text-sm md:text-base'
                  placeholder={locale === 'tr' ? 'Alınma noktası veya buluşma yeri' : 'Pickup point or meeting location'}
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {locale === 'tr'
                    ? 'Nereden alınmak istiyorsunuz? (opsiyonel)'
                    : 'Where should we pick you up? (optional)'
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Special Requests */}
          <Card className='mb-4'>
            <CardHeader>
              <CardTitle>{t('specialRequests.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                className='min-h-30 text-sm md:text-base'
                rows={4}
                placeholder={t('specialRequests.label')}
              />
            </CardContent>
          </Card>

          {/* Terms & Conditions */}
          <div className="hidden md:flex items-end gap-3">
            <input
              type="checkbox"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={(e) => setFormData(prev => ({ ...prev, agreeToTerms: e.target.checked }))}
              className="w-4 h-4"
              required
            />
            <Label htmlFor="agreeToTerms" className="cursor-pointer text-sm">
              {locale === 'tr' ? (
                <>
                  <Link href="/kvkk" className="text-primary hover:underline font-medium">
                    Kullanım Koşullarını
                  </Link>
                  {' '}ve{' '}
                  <Link href="/privacy-and-policy" className="text-primary hover:underline font-medium">
                    Gizlilik Politikasını
                  </Link>
                  {' '}okudum ve kabul ediyorum.
                </>
              ) : (
                <>
                  I have read and agree to the{' '}
                  <Link href="/kvkk" className="text-primary hover:underline font-medium">
                    Terms & Conditions
                  </Link>
                  {' '}and{' '}
                  <Link href="/privacy-and-policy" className="text-primary hover:underline font-medium">
                    Privacy Policy
                  </Link>.
                </>
              )}
            </Label>
          </div>
          <div className="flex md:hidden items-center gap-3">
            <input
              type="checkbox"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  agreeToTerms: e.target.checked,
                }))
              }
              className="w-4 h-4"
              required
            />
            <Label
              htmlFor="agreeToTerms"
              className="cursor-pointer text-xs"
            >
              {locale === 'tr'
                ? 'Kullanım Koşulları ve Gizlilik Politikasını okudum ve kabul ediyorum.'
                : 'I have read and agree to the Terms & Conditions and Privacy Policy.'}
            </Label>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-28">
            <CardHeader>
              <CardTitle>{t('summary.title')}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Tour Info Summary */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm gap-8">
                  <span className="text-muted-foreground">{locale === 'tr' ? 'Tur' : 'Tour'}</span>
                  <span className="font-medium text-right line-clamp-2">{tourTitle}</span>
                </div>
                <div className="flex items-center justify-between text-sm gap-8">
                  <span className="text-muted-foreground">{locale === 'tr' ? 'Tarih' : 'Date'}</span>
                  <span className="font-medium">{format(tourDate, 'PP', { locale: dateLocale })}</span>
                </div>
                <div className="flex items-center justify-between text-sm gap-8">
                  <span className="text-muted-foreground">{locale === 'tr' ? 'Misafir' : 'Guests'}</span>
                  <span className="font-medium">{bookingData.adults} {locale === 'tr' ? 'Kişi' : 'People'}</span>
                </div>
              </div>

              <Separator />

              {/* Price Breakdown */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    <span className="text-muted-foreground">{locale === 'tr' ? 'Fiyat' : 'Price'}</span>
                  </span>
                  <span>{formatPrice(bookingData.price)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-semibold text-lg">
                  <span>{t('summary.total')}</span>
                  <span className="text-primary">{formatPrice(bookingData.price * bookingData.adults)}</span>
                </div>
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {locale === 'tr' ? 'İşleniyor...' : 'Processing...'}
                  </>
                ) : (
                  <>
                    <CreditCard className="w-4 h-4 mr-2" />
                    {t('summary.confirmButton')}
                  </>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <ShieldCheck className="w-4 h-4" />
                <span>{locale === 'tr' ? 'Güvenli ödeme' : 'Secure payment'}</span>
              </div>

              {/* Info Note */}
              <div className="flex items-center gap-2 p-2 border border-yellow-500/20 bg-yellow-50 rounded-lg">
                <Info className='w-3.5! h-3.5! text-yellow-500' />
                <p className="flex-1 text-xs text-muted-foreground">
                  {locale === 'tr'
                    ? 'Detaylar mail adresinize gönderilecektir.'
                    : 'Details will be sent to your email.'
                  }
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </form>
  );
}
