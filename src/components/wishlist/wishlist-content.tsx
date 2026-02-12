/* eslint-disable react-hooks/exhaustive-deps */
// components/wishlist/wishlist-content.tsx
'use client';

import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/routing';
import { getToursBySlugsSync } from '@/lib/mock-data/helpers';
import { clearWishlist, getWishlistSlugs } from '@/lib/wishlist';
import { Tour } from '@/types/tour';
import { Calendar, FolderHeart, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import TourItem from '../tour/tour-item';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function WishlistContent() {
  const [wishlistTours, setWishlistTours] = useState<Tour[]>([]);
  const locale = useLocale() as 'en' | 'tr';
  const t = useTranslations('wishlist');

  const fetchWishlistTours = () => {
    try {
      const slugs = getWishlistSlugs();

      if (slugs.length === 0) {
        setWishlistTours([]);
        return;
      }

      const tours = getToursBySlugsSync(slugs);

      const sortedTours = tours.sort((a, b) => {
        const indexA = slugs.indexOf(a.slug);
        const indexB = slugs.indexOf(b.slug);
        return indexA - indexB;
      });

      setWishlistTours(sortedTours);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
      toast.error(
        locale === 'tr' ? 'Favoriler yüklenemedi' : 'Failed to load wishlist'
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchWishlistTours();
    }, 100);

    // Listen for wishlist changes
    const handleWishlistChange = () => {
      fetchWishlistTours();
    };

    window.addEventListener('wishlistChange', handleWishlistChange);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('wishlistChange', handleWishlistChange);
    };
  }, []);

  const handleClearAll = () => {
    clearWishlist();
    setWishlistTours([]);
    toast.success(
      locale === 'tr' ? 'Tüm favoriler temizlendi' : 'All favorites cleared'
    );
  };

  if (wishlistTours.length === 0) {
    return (
      <div className="text-center">
        <div className="w-20 md:w-28 h-20 md:h-28 mx-auto mb-6 bg-primary/10 border border-primary/50 rounded-full flex items-center justify-center">
          <FolderHeart className="w-10! md:w-16! h-10! md:h-16! text-primary" />
        </div>
        <h2 className="text-2xl font-bold mb-4">{t('empty.title')}</h2>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          {t('empty.description')}
        </p>
        <Link href="/tours">
          <Button size="lg" className="gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {t('empty.browseButton')}
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className='max-w-5xl mx-auto'>
      {/* Stats */}
      <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-sm text-muted-foreground">
            {wishlistTours.length} {wishlistTours.length === 1 ? t('stats.tourSingular') : t('stats.tourPlural')}
          </p>
        </div>
        <div className="flex gap-3">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="gap-2 text-destructive hover:text-destructive"
              >
                {t('actions.clearAll')}
                <X className="w-4 h-4" />
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  {locale === 'tr' ? 'Emin misiniz?' : 'Are you sure?'}
                </AlertDialogTitle>
                <AlertDialogDescription>
                  {locale === 'tr'
                    ? 'Tüm favorileri temizlemek istediğinize emin misiniz? Bu işlem geri alınamaz.'
                    : `Are you sure you want to clear all favorites? This action cannot be undone.`}
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>
                  {locale === 'tr' ? 'İptal' : 'Cancel'}
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleClearAll}
                  className="bg-destructive hover:bg-destructive/90"
                >
                  {locale === 'tr' ? 'Temizle' : 'Clear All'}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistTours.map((tour) => {
          return <TourItem key={tour.id} tour={tour} />;
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/20 p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />

          <div className="relative text-center">
            <h2 className="text-3xl font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/tours">
                <Button size="lg" className="gap-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {t('cta.browseButton')}
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="gap-2">
                  <Calendar className="w-5 h-5" />
                  {t('cta.contactButton')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
