import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export default function ContactInfo() {
  const t = useTranslations('contact');

  const contactItems = [
    {
      icon: MapPin,
      title: t('address'),
      content: t('addressLine'),
      href: 'https://maps.google.com/?q=Goreme,Nevsehir',
    },
    {
      icon: Phone,
      title: t('phone'),
      content: t('phoneLine'),
      href: 'tel:+905551234567',
    },
    {
      icon: Mail,
      title: t('email'),
      content: t('emailLine'),
      href: 'mailto:info@cappadocia-tours.com',
    },
    {
      icon: Clock,
      title: t('workingHours'),
      content: t('workingHoursLine'),
    },
  ];

  return (
    <div className="space-y-4">
      {contactItems.map((item, index) => {
        const Icon = item.icon;
        const content = item.href ? (
          <Link
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            {item.content}
          </Link>
        ) : (
          <span>{item.content}</span>
        );

        return (
          <Card key={index}>
            <CardContent className="flex items-start gap-4 pt-6">
              <div className="shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <div className="text-muted-foreground">{content}</div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
