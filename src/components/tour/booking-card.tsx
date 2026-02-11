'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Clock, Users, Calendar as CalendarIcon, Minus, Plus } from 'lucide-react';
import { format } from 'date-fns';
import { tr, enUS } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface BookingCardProps {
  price: number;
  originalPrice?: number;
  duration: string;
  groupSize: { min: number; max: number };
  locale: string;
}

export default function BookingCard({
  price,
  originalPrice,
  duration,
  groupSize,
  locale,
}: BookingCardProps) {
  const [date, setDate] = useState<Date>();
  const [adults, setAdults] = useState(groupSize.min);

  const dateLocale = locale === 'tr' ? tr : enUS;

  const handleAdultsChange = (increment: number) => {
    const newValue = adults + increment;
    if (newValue >= groupSize.min && newValue <= groupSize.max) {
      setAdults(newValue);
    }
  };

  const totalPrice = price * adults;
  const totalDiscount = originalPrice ? (originalPrice - price) * adults : 0;

  const handleBooking = () => {
    if (!date) {
      toast.info(locale === 'tr' ? 'Lütfen bir tarih seçin' : 'Please select a date', {
        description: locale === 'tr' ? 'Rezervasyon yapmak için bir tarih seçmelisiniz.' : 'You need to select a date to make a booking.',
      });
      return;
    }

    // Mock booking - gerçek implementasyonda API call yapılır
    console.log('Booking:', {
      date: format(date, 'PPP', { locale: dateLocale }),
      adults,
      totalPrice,
    });

    alert(
      locale === 'tr'
        ? `Rezervasyon başarılı! Tarih: ${format(date, 'PPP', { locale: dateLocale })}, Kişi: ${adults}, Toplam: $${totalPrice}`
        : `Booking successful! Date: ${format(date, 'PPP', { locale: dateLocale })}, Adults: ${adults}, Total: $${totalPrice}`
    );
  };

  return (
    <Card className="sticky top-20">
      <CardHeader>
        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-bold text-primary">${price}</span>
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        <p className="text-sm text-muted-foreground">
          {locale === 'tr' ? 'kişi başı' : 'per person'}
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Tour Info */}
        <div className="space-y-3 pb-4 border-b">
          <div className="flex items-center gap-3 text-sm">
            <Clock className="h-5 w-5 text-muted-foreground" />
            <span>{duration}</span>
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
                  'w-full flex items-center justify-start text-left font-normal h-11!',
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

        {/* Price Summary */}
        {/* <div className="space-y-2 pt-4 border-t">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">
              ${price} x {adults} {locale === 'tr' ? 'kişi' : 'person'}
            </span>
            <span className="font-semibold">${price * adults}</span>
          </div>
          {totalDiscount > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>{locale === 'tr' ? 'İndirim' : 'Discount'}</span>
              <span>-${totalDiscount}</span>
            </div>
          )}
          <div className="flex justify-between text-lg font-bold pt-2 border-t">
            <span>{locale === 'tr' ? 'Toplam' : 'Total'}</span>
            <span className="text-primary">${totalPrice}</span>
          </div>
        </div> */}

        {/* Book Button */}
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
