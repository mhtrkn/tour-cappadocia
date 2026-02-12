import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Footer() {
  const t = useTranslations('common');
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-accent-foreground/75 text-white border-t overflow-hidden">

      {/* Background Image */}
      <Image
        src="/images/bottom-splash.jpg"
        alt="Cappadocia landscape"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center brightness-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-accent-foreground to-accent-foreground/20" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <Image
              src="/icons/logo.png"
              alt="Paphlagonia Tour Logo"
              width={120}
              height={120}
              priority
              className="object-contain drop-shadow-lg w-auto h-auto"
            />

            <p className="text-sm text-100 font-medium">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center space-y-4">
            <h3 className="font-semibold">
              {t('footer.quickLinks')}
            </h3>

            <ul className="space-y-2">
              {[
                { href: '/about', label: t('about') },
                { href: '/tours', label: t('tours') },
                { href: '/wishlist', label: t('wishlist') },
                { href: '/contact', label: t('contact') },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-100/50 hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div className="text-right space-y-4">
            <h3 className="font-semibold">
              {t('footer.popularTours')}
            </h3>

            <ul className="space-y-2">
              {[
                t('footer.redTour'),
                t('footer.greenTour'),
                t('footer.privateTour'),
              ].map((tour) => (
                <li key={tour}>
                  <Link
                    href="/tours"
                    className="text-sm text-gray-100/50 hover:text-primary transition-colors"
                  >
                    {tour}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200/40">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-muted">
              &copy; {year} Paphlagonia Tour. {t('footer.allRightsReserved')}
            </p>

            <div className="flex gap-8">
              <Link
                href="/privacy-and-policy"
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                {t('footer.privacyPolicy')}
              </Link>

              <Link
                href="/kvkk"
                className="text-sm text-muted hover:text-primary transition-colors"
              >
                {t('footer.termsOfService')}
              </Link>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
