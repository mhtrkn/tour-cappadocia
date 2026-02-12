import { Tour } from '@/types/tour';
import { ArrowRight, Clock, Star, Users } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { PriceDisplay } from '../layout/price-display';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { Link } from '@/i18n/routing';

function TourItem({ tour }: { tour: Tour }) {
  const commonT = useTranslations('common');
  const locale = useLocale();

  return (
    <Link
      key={tour.id}
      href={`/tours/${tour.slug}`}
      className="group"
    >
      <div className="border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full bg-white">
        {/* Image */}
        <div className="relative w-full h-44 md:h-64 overflow-hidden">
          <Image
            src={tour.images[0].url}
            alt={tour.images[0].alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {tour.originalPrice > tour.price && (
            <div className="absolute left-2 top-8 w-fit md:top-4 md:left-auto md:right-4 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
              {commonT('save')} <PriceDisplay amount={tour.originalPrice - tour.price} />
            </div>
          )}
          {/* Category Badge */}
          <Badge variant={"outline"} className="capitalize absolute top-2 md:top-4 left-2 md:left-4 bg-gray-50">
            {tour.category}
          </Badge>
          {tour.rating && (
            <div className="absolute bottom-3 left-3">
              <div className="flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-semibold">{tour.rating}</span>
                <span className="text-xs text-muted-foreground">({tour.reviewCount})</span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-3 md:p-6">
          <h3 className="font-bold text-sm md:text-base mb-2 group-hover:text-primary transition md:h-12 overflow-hidden text-ellipsis line-clamp-2">
            {tour.translations[locale as 'tr' | 'en'].title}
          </h3>
          <p className="hidden md:block text-sm text-muted-foreground mb-4 h-10 overflow-hidden text-ellipsis line-clamp-2">
            {tour.translations[locale as 'tr' | 'en'].shortDescription}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span className='whitespace-nowrap'>{tour.duration} {commonT('hours')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span className='block md:hidden'>{tour.groupSize.max}</span>
              <span className='hidden md:block whitespace-nowrap'>Max {tour.groupSize.max}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className='relative pb-4'>
              <div className="flex flex-row gap-1.5 md:gap-0 md:flex-col items-baseline">
                <span className="text-base md:text-2xl font-bold text-primary">
                  <PriceDisplay amount={tour.price} />
                </span>
                {tour.originalPrice > tour.price && (
                  <span className="text-xs md:text-sm text-muted-foreground line-through">
                    <PriceDisplay amount={tour.originalPrice} />
                  </span>
                )}
              </div>
              <span className="absolute bottom-0 left-0 text-xs text-muted-foreground lowercase whitespace-nowrap">
                {commonT('perPerson')}
              </span>
            </div>
            <Button className='hidden md:flex' variant="outline" size="sm">
              {commonT('viewDetails')}
            </Button>
            <Button className='w-8! h-8! flex items-center justify-center rounded-full md:hidden' size="sm" variant="outline">
              <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TourItem
