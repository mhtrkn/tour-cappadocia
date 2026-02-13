'use client';

import { Link } from '@/i18n/routing';
import { TextAlignEnd, X } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import CurrencySwitcher from './currency-switcher';
import LanguageSwitcher from './language-switcher';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

interface NavItem {
  href: string;
  label: string;
}

interface MobileNavProps {
  navItems: NavItem[];
}

export default function MobileNav({ navItems }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const t = useTranslations('common');
  const locale = useLocale();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <TextAlignEnd className="h-6! w-6!" />
        </Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false} side="right" className="w-full sm:w-80 p-0">
        <VisuallyHidden>
          <SheetTitle>Mobile Navigation Menu | Mobil Navigasyon Menü</SheetTitle>
          <SheetDescription>
            This panel allows you to navigate the site and change language or currency.
            <br />
            Bu panel, site içinde gezinmenizi ve dil veya para birimini değiştirmenizi sağlar.
          </SheetDescription>
        </VisuallyHidden>
        <div className="flex items-center justify-between px-4 border-b">
          <Link href={'/'} className="flex items-center" onClick={() => setOpen(false)}>
            <Image
              src="/icons/logo.png"
              alt="Paphlagonia Tour Logo"
              width={80}
              height={80}
              className="object-contain mt-1 w-20 h-20"
            />
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="h-9 w-9"
          >
            <X className="h-5! w-5!" />
          </Button>
        </div>

        <nav className="flex grow flex-col space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='flex grow justify-between items-end pb-28 gap-4 px-4'>
          <CurrencySwitcher paramsLocale={locale} mobileHiding={false} />
          <LanguageSwitcher locale={locale} mobileHiding={false} />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-background">
          <Link href={'/tours'} onClick={() => setOpen(false)} className="rounded-lg text-white bg-primary flex flex-1 items-center justify-center h-11 text-base">
            {t('bookNow')}
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
