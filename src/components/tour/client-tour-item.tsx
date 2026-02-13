'use client';

import { Tour } from '@/types/tour';
import dynamic from 'next/dynamic';

const TourItem = dynamic(() => import('@/components/tour/tour-item'), { ssr: false });

export default function ClientTourItem({ tour }: { tour: Tour }) {
  return <TourItem tour={tour} />;
}
