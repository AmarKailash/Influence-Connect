import { useState, useMemo } from 'react';
import { mockProducts } from '../lib/db/mockData';

export function useProductFilters() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    return mockProducts
      .filter(product => 
        (selectedCategory === 'All' || product.category === selectedCategory) &&
        (selectedCondition === 'All' || product.condition === selectedCondition)
      )
      .sort((a, b) => {
        switch (sortBy) {
          case 'price-low':
            return a.price - b.price;
          case 'price-high':
            return b.price - a.price;
          case 'discount':
            return ((b.original_price - b.price) / b.original_price) - 
                   ((a.original_price - a.price) / a.original_price);
          default:
            return 0;
        }
      });
  }, [selectedCategory, selectedCondition, sortBy]);

  return {
    filteredProducts,
    selectedCategory,
    setSelectedCategory,
    selectedCondition,
    setSelectedCondition,
    sortBy,
    setSortBy
  };
}