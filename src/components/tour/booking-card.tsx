/* eslint-disable react-hooks/set-state-in-effect */
'use client';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { addToWishlist, isInWishlist, removeFromWishlist } from '@/lib/wishlist';
import { format } from 'date-fns';
import { enUS, tr } from 'date-fns/locale';
import { Calendar as CalendarIcon, Clock, Heart, Minus, Plus, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { PriceDisplay } from '../layout/price-display';

interface BookingCardProps {
  tourSlug: string;
  price: number;
  originalPrice: number;
  duration: string;
  groupSize: { min: number; max: number };
  locale: string;
}

export default function BookingCard({
  tourSlug,
  price,
  originalPrice,
  duration,
  groupSize,
  locale,
}: BookingCardProps) {
  const [date, setDate] = useState<Date>();
  const [adults, setAdults] = useState(groupSize.min);
  const [isLiked, setLiked] = useState(false);
  const [mounted, setMounted] = useState(false);

  const dateLocale = locale === 'tr' ? tr : enUS;

  useEffect(() => {
    setMounted(true);
    setLiked(isInWishlist(tourSlug));

    const handleWishlistChange = (event: CustomEvent) => {
      if (event.detail.slug === tourSlug) {
        setLiked(isInWishlist(tourSlug));
      }
    };

    window.addEventListener('wishlistChange', handleWishlistChange as EventListener);
    return () => {
      window.removeEventListener('wishlistChange', handleWishlistChange as EventListener);
    };
  }, [tourSlug]);

  const handleAdultsChange = (increment: number) => {
    const newValue = adults + increment;
    if (newValue >= groupSize.min && newValue <= groupSize.max) {
      setAdults(newValue);
    }
  };

  const toggleLike = () => {
    const newValue = !isLiked;
    setLiked(newValue);

    if (newValue) {
      addToWishlist(tourSlug);
      toast.success(
        locale === 'tr' ? 'Favorilere eklendi!' : 'Added to wishlist!',
        {
          description: locale === 'tr'
            ? 'Turu favorilerinizden görebilirsiniz.'
            : 'You can view this tour in your wishlist.',
        }
      );
    } else {
      removeFromWishlist(tourSlug);
      toast.info(
        locale === 'tr' ? 'Favorilerden çıkarıldı' : 'Removed from wishlist'
      );
    }
  };

  const totalPrice = price * adults;

  const handleBooking = () => {
    if (!date) {
      toast.info(
        locale === 'tr' ? 'Lütfen bir tarih seçin' : 'Please select a date',
        {
          description: locale === 'tr'
            ? 'Rezervasyon yapmak için bir tarih seçmelisiniz.'
            : 'You need to select a date to make a booking.',
        }
      );
      return;
    }

    console.log('Booking:', {
      tourSlug,
      date: format(date, 'PPP', { locale: dateLocale }),
      adults,
      totalPrice,
    });

    toast.success(
      locale === 'tr' ? 'Rezervasyon başarılı!' : 'Booking successful!',
      {
        description: locale === 'tr'
          ? `Tarih: ${format(date, 'PPP', { locale: dateLocale })}, Kişi: ${adults}, Toplam: ${totalPrice}`
          : `Date: ${format(date, 'PPP', { locale: dateLocale })}, Adults: ${adults}, Total: ${totalPrice}`,
      }
    );
  };

  if (!mounted) {
    return (
      <Card className="sticky top-28">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-primary">
                <PriceDisplay amount={price} />
              </span>
            </div>
            <Button variant="ghost" size="sm" disabled>
              <Heart className="h-5! w-5! text-primary" />
            </Button>
          </div>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="sticky top-28">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-primary">
              <PriceDisplay amount={price} />
            </span>
            {originalPrice && originalPrice > price && (
              <span className="text-lg text-muted-foreground line-through">
                <PriceDisplay amount={originalPrice} />
              </span>
            )}
          </div>

          <Button onClick={toggleLike} variant="ghost" size="sm">
            <Heart
              className={`h-5! w-5! transition-all duration-300 ${isLiked
                ? 'fill-primary text-primary scale-110'
                : 'text-primary hover:scale-110'
                }`}
            />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Tour Info */}
        <div className="space-y-3 pb-4 border-b">
          <div className="flex items-center gap-3 text-sm">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span>{duration} {locale === 'tr' ? 'saat' : 'hours'}</span>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Users className="h-5 w-5 text-muted-foreground" />
            <span>
              {locale === 'tr'
                ? `${groupSize.min}-${groupSize.max} kişi`
                : `${groupSize.min}-${groupSize.max} people`}
            </span>
          </div>
        </div>

        {/* Date Picker */}
        <div className="space-y-2">
          <Label htmlFor="date">
            {locale === 'tr' ? 'Tarih Seçin' : 'Select Date'}
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  'w-full flex items-center justify-start text-left font-normal h-11! bg-transparent!',
                  !date && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? (
                  format(date, 'PPP', { locale: dateLocale })
                ) : (
                  <span>{locale === 'tr' ? 'Bir tarih seçin' : 'Pick a date'}</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
                initialFocus
                locale={dateLocale}
              />
            </PopoverContent>
          </Popover>
        </div>

        {/* Adults Counter */}
        <div className="space-y-2">
          <Label>
            {locale === 'tr' ? 'Yetişkin Sayısı' : 'Number of Adults'}
          </Label>
          <div className="flex items-center justify-between border rounded-lg px-3 h-11">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleAdultsChange(-1)}
              disabled={adults <= groupSize.min}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="font-semibold text-lg">{adults}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleAdultsChange(1)}
              disabled={adults >= groupSize.max}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center">
            {locale === 'tr'
              ? `Min: ${groupSize.min}, Max: ${groupSize.max}`
              : `Min: ${groupSize.min}, Max: ${groupSize.max}`}
          </p>
        </div>
        <Button
          className="w-full"
          size="lg"
          onClick={handleBooking}
        >
          {locale === 'tr' ? 'Rezervasyon Yap' : 'Book Now'}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          {locale === 'tr'
            ? 'Ücretsiz iptal 24 saat öncesine kadar'
            : 'Free cancellation up to 24 hours before'}
        </p>
      </CardContent>
    </Card>
  );
}
