import React from 'react';
import { motion } from 'framer-motion';

interface ProductImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
  className?: string;
  isSelected?: boolean;
}

export function ProductImage({ 
  src, 
  alt, 
  onClick, 
  className = '', 
  isSelected = false 
}: ProductImageProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`relative overflow-hidden rounded-lg ${className} ${
        isSelected ? 'border-2 border-green-500' : ''
      }`}
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
}