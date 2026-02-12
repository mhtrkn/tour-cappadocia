'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from '@/i18n/routing';
import Image from 'next/image';

const languages = {
  en: {
    flag: 'https://flagcdn.com/w40/gb.png',
    names: {
      tr: 'İngilizce',
      en: 'English'
    }
  },
  tr: {
    flag: 'https://flagcdn.com/w40/tr.png',
    names: {
      tr: 'Türkçe',
      en: 'Turkish'
    }
  }
};

export default function LanguageSwitcher({ locale, mobileHiding }: { locale: string, mobileHiding?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale: 'en' | 'tr') => {
    router.replace(pathname, { locale: newLocale });
  };

  const currentLanguage = languages[locale as keyof typeof languages];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className={`gap-2 mr-0 ${mobileHiding ? 'hidden' : 'flex-1'}`}>
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.names[locale as 'tr' | 'en']}
            width={20}
            height={16}
            className='w-5 h-4 rounded'
          />
          <span className="sm:inline text-sm">
            {currentLanguage.names[locale as 'tr' | 'en']}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-35">
        <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
          {locale === 'tr' ? 'Dil Seçin' : 'Select Language'}
        </div>
        {Object.entries(languages).map(([code, { flag, names }]) => (
          <DropdownMenuItem
            key={code}
            onClick={() => handleLanguageChange(code as 'en' | 'tr')}
            className={locale === code ? 'bg-accent' : ''}
          >
            <Image
              src={flag}
              alt={names[locale as 'tr' | 'en']}
              width={20}
              height={16}
              className='w-5 h-4 rounded'
            />
            <span>{names[locale as 'tr' | 'en']}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
