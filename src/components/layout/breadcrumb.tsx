'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Link } from '@/i18n/routing';
import { Home } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Fragment } from 'react';

export interface BreadcrumbItemType {
  label: string;
  href?: string;
}

interface BreadcrumbWrapperProps {
  items: BreadcrumbItemType[];
  showHome?: boolean;
}

export default function BreadcrumbWrapper({
  items,
  showHome = true
}: BreadcrumbWrapperProps) {
  const locale = useLocale();
  const homeLabel = locale === 'tr' ? 'Ana Sayfa' : 'Home';

  return (
    <div className="container mx-auto px-4 py-4">
      <Breadcrumb>
        <BreadcrumbList>
          {showHome && (
            <>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/" className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors">
                    <span className="sr-only sm:not-sr-only">{homeLabel}</span>
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}

          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <Fragment key={index}>
                <BreadcrumbItem>
                  {isLast || !item.href ? (
                    <BreadcrumbPage className="text-muted-foreground font-normal">
                      {item.label}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link href={item.href} className="text-primary hover:text-primary/80 transition-colors">
                        {item.label}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {!isLast && <BreadcrumbSeparator />}
              </Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
