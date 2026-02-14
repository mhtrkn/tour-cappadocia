'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface TourGalleryProps {
  images: {
    url: string;
    alt: string;
    width: number;
    height: number;
  }[];
}

export default function TourGallery({ images }: TourGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative w-full h-100 md:h-125 rounded-xl overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].url}
              alt={images[currentIndex].alt}
              fill
              priority
              quality={75}
              loading="eager"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <Button
              size="icon"
              className="absolute cursor-pointer border-2 border-secondary bg-primary/25 hover:bg-primary/75 transition duration-300 left-4 top-1/2 -translate-y-1/2 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6! w-6! -ml-0.5 fill-accent!" />
            </Button>
            <Button
              size="icon"
              className="absolute cursor-pointer border-2 border-secondary bg-primary/25 hover:bg-primary/75 transition duration-300 right-4 top-1/2 -translate-y-1/2 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="h-6! w-6! -mr-0.5 fill-accent!" />
            </Button>
          </>
        )}

        {/* Counter */}
        <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-20 rounded-lg overflow-hidden border-2 transition duration-500 ${index === currentIndex
                ? 'border-primary'
                : 'border-transparent hover:border-gray-300'
                }`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                loading="lazy"
                className="object-cover"
                sizes="150px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
