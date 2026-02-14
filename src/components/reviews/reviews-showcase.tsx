// components/reviews/reviews-showcase.tsx
'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Review } from '@/types/review';
import { Quote, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ReviewsShowcaseProps {
  reviews: Review[];
  locale: 'en' | 'tr';
}

export default function ReviewsShowcase({ reviews, locale }: ReviewsShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredReviews = reviews.slice(0, 3);

  // Auto-advance carousel (mobile only)
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredReviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredReviews.length]);


  return (
    <section className="pt-8 pb-20 relative overflow-hidden">
      <div className="container max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm font-medium text-primary">
              {locale === 'tr' ? 'Müşteri Memnuniyeti' : 'Customer Satisfaction'}
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {locale === 'tr' ? 'Misafirlerimiz Ne Diyor?' : 'What Our Guests Say'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {locale === 'tr'
              ? 'Binlerce mutlu misafirimizin deneyimlerini keşfedin'
              : 'Discover experiences from thousands of happy guests'}
          </p>
        </div>

        {/* Desktop: Static Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {featuredReviews.map((review) => (
            <Card
              key={review.id}
              className="group p-0 relative overflow-hidden border-0 bg-linear-to-br from-background/80 to-background/40 backdrop-blur-xl hover:from-background/90 hover:to-background/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <CardContent className="relative p-7 space-y-5">
                {/* Rating with Animation */}
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 transition-all duration-300 ${star <= review.rating
                        ? 'fill-amber-400 text-amber-400 group-hover:scale-110'
                        : 'fill-muted/50 text-muted/50'
                        }`}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Quote Mark - Floating */}
                <div className="absolute top-4 right-4 text-primary/5 group-hover:text-primary/10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                  <Quote className="w-12 h-12" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg leading-tight mb-2 line-clamp-2 pr-10">
                  {review.title[locale]}
                </h3>

                {/* Comment with Fade Effect */}
                <div className="relative">
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {review.comment[locale]}
                  </p>
                  <div className="absolute -bottom-4 left-0 right-0 h-8 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
                </div>

                {/* Author Section */}
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-border/25">
                  {/* Avatar with Glow */}
                  <div className="relative group/avatar">
                    <div className="absolute inset-0 bg-primary/5 rounded-full blur-md group-hover/avatar:blur-lg transition-all" />
                    <div className="relative w-10 h-10 rounded-full bg-linear-to-br from-primary/10 via-primary/10 to-primary/5 flex items-center justify-center font-semibold text-primary border border-primary/20">
                      {review.author.name.charAt(0)}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm truncate">{review.author.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {review.author.country}
                    </p>
                  </div>

                  {/* Tour Tag */}
                  <div className="hidden md:block max-w-35">
                    <div className="px-2.5 py-1 rounded-md bg-primary/5 border border-primary/10">
                      <p className="text-[11px] font-medium text-primary/70 truncate">
                        {review.tourTitle[locale]}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile: Slider */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredReviews.map((review) => (
                <div key={review.id} className="w-full h-fit shrink-0 px-2 pb-2">
                  <Card
                    className="group p-0 relative h-fit overflow-hidden border-0 bg-linear-to-br from-background/80 to-background/40 backdrop-blur-xl hover:from-background/90 hover:to-background/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                    onTouchStart={() => setIsAutoPlaying(false)}
                  >
                    <CardContent className="relative p-7 space-y-5">
                      {/* Rating with Animation */}
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((star, index) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 transition-all duration-300 ${star <= review.rating
                              ? 'fill-amber-400 text-amber-400 group-hover:scale-110'
                              : 'fill-muted/50 text-muted/50'
                              }`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                          />
                        ))}
                      </div>

                      {/* Quote Mark - Floating */}
                      <div className="absolute top-4 right-4 text-primary/5 group-hover:text-primary/10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                        <Quote className="w-12 h-12" strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3 className="font-semibold text-lg leading-tight mb-2 line-clamp-2 pr-10">
                        {review.title[locale]}
                      </h3>

                      {/* Comment with Fade Effect */}
                      <div className="relative">
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                          {review.comment[locale]}
                        </p>
                        <div className="absolute -bottom-4 left-0 right-0 h-8 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
                      </div>

                      {/* Author Section */}
                      <div className="flex items-center gap-3 pt-4 mt-4 border-t border-border/25">
                        {/* Avatar with Glow */}
                        <div className="relative group/avatar">
                          <div className="absolute inset-0 bg-primary/5 rounded-full blur-md group-hover/avatar:blur-lg transition-all" />
                          <div className="relative w-10 h-10 rounded-full bg-linear-to-br from-primary/10 via-primary/10 to-primary/5 flex items-center justify-center font-semibold text-primary border border-primary/20">
                            {review.author.name.charAt(0)}
                          </div>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm truncate">{review.author.name}</p>
                          <p className="text-xs text-muted-foreground truncate">
                            {review.author.country}
                          </p>
                        </div>

                        {/* Tour Tag */}
                        <div className="hidden md:block max-w-35">
                          <div className="px-2.5 py-1 rounded-md bg-primary/5 border border-primary/10">
                            <p className="text-[11px] font-medium text-primary/70 truncate">
                              {review.tourTitle[locale]}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2">
            {featuredReviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`transition-all duration-300 rounded-full ${currentIndex === index
                  ? 'bg-primary/75 w-6 h-1.5'
                  : 'bg-muted-foreground/20 w-1.5 h-1.5 hover:bg-muted-foreground/50'
                  }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
