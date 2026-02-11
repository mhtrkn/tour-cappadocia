'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/use-media-query';

const languages = {
  en: {
    flag: 'https://flagcdn.com/w40/gb.png',
    flag2x: 'https://flagcdn.com/w80/gb.png',
    names: {
      tr: 'İngilizce',
      en: 'English'
    }
  },
  tr: {
    flag: 'https://flagcdn.com/w40/tr.png',
    flag2x: 'https://flagcdn.com/w80/tr.png',
    names: {
      tr: 'Türkçe',
      en: 'Turkish'
    }
  }
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleLanguageChange = (newLocale: 'en' | 'tr') => {
    router.replace(pathname, { locale: newLocale });
  };

  const currentLanguage = languages[locale as keyof typeof languages];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={isMobile ? "ghost" : "outline"} size="sm" className="gap-2 mr-0">
          <Image
            src={currentLanguage.flag}
            srcSet={`${currentLanguage.flag} 1x, ${currentLanguage.flag2x} 2x`}
            alt={currentLanguage.names[locale as 'tr' | 'en']}
            width={20}
            height={15}
          />
          <span className="hidden sm:inline text-sm">
            {currentLanguage.names[locale as 'tr' | 'en']}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-35">
        {Object.entries(languages).map(([code, { flag, flag2x, names }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as 'en' | 'tr')}
            className={locale === code ? 'bg-accent' : ''}
          >
            <Image
              src={flag}
              srcSet={`${flag} 1x, ${flag2x} 2x`}
              alt={names[locale as 'tr' | 'en']}
              width={20}
              height={15}
            />
            <span>{names[locale as 'tr' | 'en']}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
