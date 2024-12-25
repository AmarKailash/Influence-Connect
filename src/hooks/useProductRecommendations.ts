import { useState, useEffect } from 'react';
import type { Product } from '../types';

export function useProductRecommendations(currentProduct: Product | null, allProducts: Product[]) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!currentProduct || allProducts.length === 0) {
      setRecommendations([]);
      return;
    }

    setIsLoading(true);
    try {
      // Get similar products based on category and price range
      const similar = allProducts.filter(product => 
        product.id !== currentProduct.id &&
        product.category === currentProduct.category &&
        Math.abs(product.price - currentProduct.price) < currentProduct.price * 0.3
      ).slice(0, 4);

      setRecommendations(similar);
      setError(null);
    } catch (err) {
      setError('Failed to load recommendations');
      console.error('Recommendation error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [currentProduct, allProducts]);

  return { recommendations, isLoading, error };
}