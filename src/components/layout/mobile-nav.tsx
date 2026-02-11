'use client';

import { Link } from '@/i18n/routing';
import { TextAlignEnd, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '../ui/sheet';

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

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <TextAlignEnd className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false} side="right" className="w-full sm:w-80 p-0">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center">
            <span className="text-xl font-bold text-primary">
              Paphlagonia Tour
            </span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(false)}
            className="h-9 w-9"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col p-6 space-y-1">
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

        {/* CTA Button - Bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-background">
          <Button className="w-full h-12 text-base" size="lg">
            {t('bookNow')}
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-3">
            {t('bookNow')} {/* veya başka bir tagline */}
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
