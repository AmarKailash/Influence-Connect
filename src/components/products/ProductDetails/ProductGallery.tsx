import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="aspect-square rounded-lg overflow-hidden"
        >
          <img
            src={images[currentImage]}
            alt={`${productName} - View ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      <div className="grid grid-cols-5 gap-2">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`aspect-square rounded-lg overflow-hidden border-2 ${
              currentImage === idx ? 'border-green-500' : 'border-transparent'
            }`}
          >
            <img
              src={img}
              alt={`${productName} thumbnail ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}