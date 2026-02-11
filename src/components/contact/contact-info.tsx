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
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      icon: Phone,
      title: t('phone'),
      content: t('phoneLine'),
      href: 'tel:+905551234567',
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Mail,
      title: t('email'),
      content: t('emailLine'),
      href: 'mailto:info@cappadocia-tours.com',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Clock,
      title: t('workingHours'),
      content: t('workingHoursLine'),
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          <motion.div
            key={index}
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="relative overflow-hidden rounded-2xl shadow hover:shadow-md transition-all">
              {/* Gradient Accent */}
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${item.gradient}`}
              />

              <CardContent className="flex items-start gap-4 px-4 py-2">
                {/* Icon */}
                <div
                  className={`shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br ${item.gradient} flex items-center justify-center shadow-sm`}
                >
                  <Icon className="h-7 w-7 text-white" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {content}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
