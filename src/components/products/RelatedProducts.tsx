import React from 'react';
import { ProductCard } from './ProductCard';
import type { Product } from '../../types';

interface RelatedProductsProps {
  currentProduct: Product;
  products: Product[];
}

export function RelatedProducts({ currentProduct, products }: RelatedProductsProps) {
  const relatedProducts = products
    .filter(product => 
      product.id !== currentProduct.id && 
      product.category === currentProduct.category
    )
    .slice(0, 4);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {relatedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}