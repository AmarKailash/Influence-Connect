import React from 'react';
import { Star, Shield, Truck, Package } from 'lucide-react';
import { ProductPrice } from '../ProductPrice';
import { ProductActions } from '../ProductActions';
import type { Product } from '../../../types';

interface ProductInfoProps {
  product: Product;
  onCompare: () => void;
}

export function ProductInfo({ product, onCompare }: ProductInfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      
      <div className="flex items-center mb-4">
        <div className="flex items-center text-yellow-400 mr-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <span className="text-gray-600">(150 Reviews)</span>
      </div>

      <div className="mb-6">
        <ProductPrice 
          price={product.price} 
          originalPrice={product.original_price} 
        />
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-center">
          <Shield className="w-5 h-5 text-green-500 mr-3" />
          <span>{product.condition} Condition - 6 Months Warranty</span>
        </div>
        <div className="flex items-center">
          <Truck className="w-5 h-5 text-green-500 mr-3" />
          <span>Free Delivery by Tomorrow</span>
        </div>
        <div className="flex items-center">
          <Package className="w-5 h-5 text-green-500 mr-3" />
          <span>7 Days Replacement Policy</span>
        </div>
      </div>

      <div className="border-t border-b py-4 mb-8">
        <h3 className="font-semibold mb-2">Product Description</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>

      <ProductActions product={product} onCompare={onCompare} />
    </div>
  );
}