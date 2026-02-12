import { Tour } from '@/types/tour';
import { Clock, Star, Users } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { PriceDisplay } from '../layout/price-display';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

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
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={tour.images[0].url}
            alt={tour.images[0].alt}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {tour.originalPrice > tour.price && (
            <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">
              {commonT('save')} <PriceDisplay amount={tour.originalPrice - tour.price} />
            </div>
          )}
          {/* Category Badge */}
          <Badge variant={"outline"} className="capitalize absolute top-4 left-4 bg-gray-50">
            {tour.category}
          </Badge>
          {tour.rating && (
            <div className="absolute bottom-3 left-3">
              <div className="flex items-center gap-1 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full shadow-lg">
                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                <span className="text-sm font-semibold">{tour.rating}</span>
                <span className="text-xs text-muted-foreground">({tour.reviewCount})</span>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-bold mb-2 group-hover:text-primary transition h-12 overflow-hidden text-ellipsis line-clamp-2">
            {tour.translations[locale as 'tr' | 'en'].title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4 h-10 overflow-hidden text-ellipsis line-clamp-2">
            {tour.translations[locale as 'tr' | 'en'].shortDescription}
          </p>

          {/* Meta Info */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{tour.duration} {commonT('hours')}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4" />
              <span>Max {tour.groupSize.max}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div className='relative pb-4'>
              <div className="flex flex-col items-baseline">
                <span className="text-2xl font-bold text-primary">
                  <PriceDisplay amount={tour.price} />
                </span>
                {tour.originalPrice > tour.price && (
                  <span className="text-sm text-muted-foreground line-through">
                    <PriceDisplay amount={tour.originalPrice} />
                  </span>
                )}
              </div>
              <span className="absolute bottom-0 left-0 text-xs text-muted-foreground lowercase">
                {commonT('perPerson')}
              </span>
            </div>
            <Button variant="outline" size="sm">
              {commonT('viewDetails')}
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TourItem
