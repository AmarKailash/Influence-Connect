import React from 'react';
import { ProductGrid } from '../products/ProductGrid';
import { ProductFeedbackForm } from './ProductFeedbackForm';
import type { Product } from '../../types';

interface SearchResultsProps {
  query: string;
  results: Product[];
}

export function SearchResults({ query, results }: SearchResultsProps) {
  if (results.length === 0) {
    return <ProductFeedbackForm searchQuery={query} />;
  }

  return <ProductGrid products={results} />;
}