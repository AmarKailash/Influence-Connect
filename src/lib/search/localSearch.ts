import type { Product } from '../types';
import type { SearchParams, SearchResult } from './types';

export function performLocalSearch(
  products: Product[],
  params: SearchParams
): SearchResult<Product> {
  let filtered = [...products];

  // Apply filters
  if (params.query) {
    const searchTerms = params.query.toLowerCase().split(' ');
    filtered = filtered.filter(product => {
      const searchText = `${product.name} ${product.category} ${product.description}`.toLowerCase();
      return searchTerms.every(term => searchText.includes(term));
    });
  }

  if (params.category && params.category !== 'All') {
    filtered = filtered.filter(product => product.category === params.category);
  }

  if (params.condition && params.condition !== 'All') {
    filtered = filtered.filter(product => product.condition === params.condition);
  }

  if (params.minPrice) {
    filtered = filtered.filter(product => product.price >= params.minPrice);
  }

  if (params.maxPrice) {
    filtered = filtered.filter(product => product.price <= params.maxPrice);
  }

  // Apply sorting
  if (params.sortBy) {
    filtered.sort((a, b) => {
      switch (params.sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'discount':
          const discountA = (a.original_price - a.price) / a.original_price;
          const discountB = (b.original_price - b.price) / b.original_price;
          return discountB - discountA;
        default:
          return 0;
      }
    });
  }

  // Apply pagination
  const page = params.page || 1;
  const pageSize = params.pageSize || 12;
  const start = (page - 1) * pageSize;
  const paginatedItems = filtered.slice(start, start + pageSize);

  return {
    items: paginatedItems,
    total: filtered.length,
    page,
    pageSize
  };
}