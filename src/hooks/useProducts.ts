import { useState, useEffect, useMemo } from 'react';
import { performLocalSearch } from '../lib/search/localSearch';
import { getSimilarProducts } from '../lib/recommendations/similarProducts';
import type { SearchParams } from '../lib/search/types';
import type { Product } from '../types';

export function useProducts(initialProducts: Product[], searchParams: SearchParams) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchResults = useMemo(() => {
    try {
      return performLocalSearch(initialProducts, searchParams);
    } catch (err) {
      setError('Error performing search');
      return {
        items: [],
        total: 0,
        page: 1,
        pageSize: 12
      };
    }
  }, [initialProducts, searchParams]);

  return {
    products: searchResults.items,
    total: searchResults.total,
    isLoading,
    error
  };
}

export function useProductRecommendations(
  product: Product | null,
  allProducts: Product[]
) {
  const [recommendations, setRecommendations] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!product || allProducts.length === 0) {
      setRecommendations([]);
      return;
    }

    setIsLoading(true);
    try {
      const similar = getSimilarProducts(product, allProducts);
      setRecommendations(similar);
      setError(null);
    } catch (err) {
      setError('Failed to load recommendations');
      console.error('Recommendation error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [product, allProducts]);

  return { recommendations, isLoading, error };
}