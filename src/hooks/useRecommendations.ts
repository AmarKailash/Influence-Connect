import { useState, useEffect } from 'react';
import { recommendationEngine } from '../lib/recommendations';
import type { Product } from '../types';

export function useRecommendations(currentProduct: Product | null, allProducts: Product[]) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRecommendations = async () => {
      if (!currentProduct || allProducts.length === 0) {
        setRecommendations([]);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const results = await recommendationEngine.getRecommendations(currentProduct, allProducts);
        setRecommendations(results);
      } catch (err) {
        setError('Failed to load recommendations');
        console.error('Recommendation error:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadRecommendations();
  }, [currentProduct, allProducts]);

  return { recommendations, isLoading, error };
}