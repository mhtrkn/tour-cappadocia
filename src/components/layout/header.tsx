import { Link as I18nLink, Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import CurrencySwitcher from './currency-switcher';
import LanguageSwitcher from './language-switcher';
import MobileNav from './mobile-nav';

export default function Header() {
  const t = useTranslations('common');
  const locale = useLocale();

  const navItems = [
    { href: '/about', label: t('about') },
    { href: '/tours', label: t('tours') },
    { href: '/wishlist', label: t('wishlist') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/75">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Image
                src="/icons/logo.png"
                alt="Paphlagonia Tour Logo"
                width={80}
                height={80}
                className="object-contain mt-1 w-20 h-20"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8 py-2">
            {navItems.map((item) => (
              <I18nLink
                key={item.href}
                href={item.href}
                className="font-medium transition-colors hover:text-primary"
              >
                {item.label}
              </I18nLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2">
            <CurrencySwitcher paramsLocale={locale} mobileHiding />
            <LanguageSwitcher locale={locale} mobileHiding />
            <Link href="/contact" className="hidden md:inline-flex rounded-md bg-primary text-white border border-primary px-3 h-8 items-center justify-center text-sm">
              {t('contactUs')}
            </Link>

            <div className="md:hidden">
              <MobileNav navItems={navItems} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
