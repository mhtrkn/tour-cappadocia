// app/not-found.tsx
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-background via-muted/20 to-background p-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Animation */}
        <div className="relative mb-5">
          <div className="flex items-center gap-40 justify-center text-[150px] md:text-[200px] font-bold text-primary/10 leading-none select-none">
            <span>4</span>
            <span>4</span>
          </div>
          <div className="absolute inset-0 top-6 flex items-center justify-center">
            <div className='relative'>
              <div className="w-30 h-30 md:w-40 md:h-40 bg-primary/10 border border-primary/50 rounded-full flex items-center justify-center backdrop-blur-sm animate-pulse">
                <Search className="w-16 h-16 md:w-20 md:h-20 text-primary" />
              </div>
              {/* Floating particles */}
              <div className="absolute -top-4 right-2 w-4 h-4 bg-primary rounded-full animate-bounce" />
              <div className="absolute -bottom-2 left-2 w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-200" />
              <div className="absolute bottom-12 -right-5 w-2 h-2 bg-amber-500 rounded-full animate-bounce delay-500" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent leading-normal">
            {t('title')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto">
            {t('description')}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button>
              {t('homeButton')}
            </Button>
          </Link>
        </div>

        {/* Popular Links */}
        <div className="mt-12 pt-12 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            {t('popularPages')}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/tours">
              <span className="px-3 py-1 bg-muted/20 border hover:bg-muted rounded-lg text-sm transition-colors">
                {t('tours')}
              </span>
            </Link>
            <Link href="/contact">
              <span className="px-3 py-1 bg-muted/20 border hover:bg-muted rounded-lg text-sm transition-colors">
                {t('contact')}
              </span>
            </Link>
            <Link href="/wishlist">
              <span className="px-3 py-1 bg-muted/20 border hover:bg-muted rounded-lg text-sm transition-colors">
                {t('wishlist')}
              </span>
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
