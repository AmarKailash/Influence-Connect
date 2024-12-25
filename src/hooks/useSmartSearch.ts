import { useState, useEffect } from 'react';
import { recommendationEngine } from '../lib/recommendations';
import type { Product } from '../types';

export function useSmartSearch(query: string, products: Product[]) {
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (!query.trim()) {
        setResults(products);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const searchResults = await recommendationEngine.getSmartSearch(query, products);
        setResults(searchResults);
      } catch (err) {
        setError('Search failed');
        console.error('Search error:', err);
        setResults(products);
      } finally {
        setIsLoading(false);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [query, products]);

  return { results, isLoading, error };
}