"use client";

import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ContactInfo() {
  const t = useTranslations('contact');

  const contactItems = [
    {
      icon: MapPin,
      title: t('address'),
      content: t('addressLine'),
      href: 'https://maps.app.goo.gl/8JHccLcFPKneAWwC8',
      iconText: 'fill-indigo-500 stroke-indigo-500',
      gradient: 'from-indigo-500/10 to-purple-500/10 border border-indigo-500',
    },
    {
      icon: Phone,
      title: t('phone'),
      content: t('phoneLine'),
      href: 'tel:+905551234567',
      iconText: 'fill-emerald-500 stroke-emerald-500',
      gradient: 'from-emerald-500/10 to-teal-500/10 border border-emerald-500',
    },
    {
      icon: Mail,
      title: t('email'),
      content: t('emailLine'),
      href: 'mailto:info@cappadocia-tours.com',
      iconText: 'fill-pink-500 stroke-pink-500',
      gradient: 'from-pink-500/10 to-rose-500/10 border border-pink-500',
    },
    {
      icon: Clock,
      title: t('workingHours'),
      content: t('workingHoursLine'),
      iconText: 'fill-amber-500 stroke-amber-500',
      gradient: 'from-amber-500/10 to-orange-500/10 border border-amber-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {contactItems.map((item, index) => {
        const Icon = item.icon;

        const content = item.href ? (
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            {item.content}
          </Link>
        ) : (
          <span className="font-medium">{item.content}</span>
        );

        return (
          <div key={index}>
            <div className="flex items-center md:items-start gap-4 px-4 py-2">
              <div
                className={`shrink-0 w-12 h-12 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center shadow-sm`}
              >
                <Icon className={`h-7 w-7 text-${item.iconText}`} />
              </div>

              <div className="flex-1">
                <h3 className="text-base font-semibold text-foreground mb-1">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
