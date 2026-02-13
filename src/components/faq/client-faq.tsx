'use client';

import dynamic from 'next/dynamic';

const FAQSection = dynamic(
  () => import('@/components/faq/faq-section'),
  { ssr: false }
);

export default function ClientFAQ() {
  return <FAQSection />;
}
