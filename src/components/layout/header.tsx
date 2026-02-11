'use client';

import { Link as I18nLink } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import LanguageSwitcher from './language-switcher';
import MobileNav from './mobile-nav';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const t = useTranslations('common');
  const router = useRouter();

  const navItems = [
    { href: '/tours', label: t('tours') },
    { href: '/about', label: t('about') },
    { href: '/wishlist', label: t('wishlist') },
    { href: '/contact', label: t('contact') },
  ];

  const handleRoute = () => {
    router.push('contact');
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/75">
      <div className="container mx-auto px-4">
        <div className="flex py-2 items-center justify-between">
          {/* Logo */}
          <I18nLink href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Image src={"/icons/logo.png"} alt="Paphlagonia Tour Logo" width={96} height={96} className="object-contain mt-1" />
            </div>
          </I18nLink>

          {/* Desktop Navigation */}
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

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            <Button onClick={handleRoute} className="hidden md:inline-flex md:ml-4" size={"sm"}>
              {t('contactUs')}
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <MobileNav navItems={navItems} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
