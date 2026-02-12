/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import {
  AlertCircle,
  ChevronDown,
  Clock,
  CreditCard,
  HelpCircle,
  MessageCircle,
  Search
} from 'lucide-react';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { Button } from '../ui/button';

/* ---------------------------------- */
/* Types */
/* ---------------------------------- */

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: Category;
  icon: any;
  popular?: boolean;
}

type Category =
  | 'genel'
  | 'rezervasyon'
  | 'odeme'
  | 'iptal';

/* ---------------------------------- */
/* Color Map (Tailwind Safe) */
/* ---------------------------------- */

const categoryStyles: Record<Category, string> = {
  genel: 'text-blue-600 border-blue-200 bg-blue-50/50',
  rezervasyon: 'text-purple-600 border-purple-200 bg-purple-50/50',
  odeme: 'text-emerald-600 border-emerald-200 bg-emerald-50/50',
  iptal: 'text-red-600 border-red-200 bg-red-50/50',
};

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */

export default function FAQSection() {
  const t = useTranslations('faq');

  const [search, setSearch] = useState('');
  const [open, setOpen] = useState<string | null>('1');

  const faqData: FAQItem[] = [
    {
      id: '1',
      category: 'genel',
      icon: HelpCircle,
      popular: true,
      question: t('items.1.question'),
      answer: t('items.1.answer'),
    },
    {
      id: '4',
      category: 'rezervasyon',
      icon: Clock,
      popular: true,
      question: t('items.4.question'),
      answer: t('items.4.answer'),
    },
    {
      id: '7',
      category: 'odeme',
      icon: CreditCard,
      popular: true,
      question: t('items.7.question'),
      answer: t('items.7.answer'),
    },
    {
      id: '13',
      category: 'iptal',
      icon: AlertCircle,
      popular: true,
      question: t('items.13.question'),
      answer: t('items.13.answer'),
    },
  ];

  return (
    <section className="py-20 bg-white transition-all duration-300">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="w-full mx-auto text-center mb-8 px-4">

          <div className="inline-flex items-center gap-2 mb-4 text-primary">
            <MessageCircle size={18} />
            <span className="text-sm font-medium">
              {t('badge')}
            </span>
          </div>

          <h2 className="text-4xl font-bold mb-4">
            {t('title')}
          </h2>

          <p className="text-muted-foreground mb-6">
            {t('description')}
          </p>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('search')}
              className="w-full pl-10 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-3 px-4">

          {faqData.length === 0 && (
            <p className="text-center text-muted-foreground">
              {t('noResult')}
            </p>
          )}

          {faqData.map((item) => {
            const Icon = item.icon;
            const isOpen = open === item.id;

            return (
              <div
                key={item.id}
                className={`border rounded-xl transition
              ${isOpen
                    ? categoryStyles[item.category]
                    : 'border-border'
                  }`}
              >
                <button
                  onClick={() =>
                    setOpen(isOpen ? null : item.id)
                  }
                  className="w-full flex items-start gap-3 p-4 text-left"
                >
                  <Icon
                    className={`w-5 h-5 mt-1
                  ${isOpen
                        ? categoryStyles[item.category].split(' ')[0]
                        : 'text-muted-foreground'
                      }`}
                  />

                  <span className="flex-1 font-medium">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`w-5 h-5 transition
                  ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
