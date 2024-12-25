import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Filter, SortDesc, Search } from 'lucide-react';
import { useProductFilters } from '../hooks/useProductFilters';
import { ProductCard } from '../components/ProductCard';
import { FilterButton } from '../components/FilterButton';
import { categories, conditions } from '../constants/productFilters';
import { getSmartProductSearch } from '../lib/ai';
import { mockProducts } from '../lib/db/mockData';
import toast from 'react-hot-toast';

function ProductList() {
  const { 
    filteredProducts, 
    selectedCategory, 
    setSelectedCategory,
    selectedCondition, 
    setSelectedCondition,
    sortBy, 
    setSortBy 
  } = useProductFilters();

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(mockProducts);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (searchQuery.trim()) {
        setIsSearching(true);
        try {
          const results = await getSmartProductSearch(searchQuery, mockProducts);
          setSearchResults(results);
        } catch (error) {
          toast.error('Error performing smart search');
          setSearchResults(mockProducts);
        }
        setIsSearching(false);
      } else {
        setSearchResults(mockProducts);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  const displayProducts = searchQuery ? searchResults : filteredProducts;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products with AI-powered recommendations..."
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-8">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              <Filter className="w-5 h-5 mr-2 text-gray-500" />
              <span className="font-medium">Filters:</span>
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <FilterButton
                  key={category}
                  label={category}
                  isSelected={selectedCategory === category}
                  onClick={() => setSelectedCategory(category)}
                />
              ))}
            </div>

            {/* Conditions */}
            <div className="flex flex-wrap gap-2">
              {conditions.map(condition => (
                <FilterButton
                  key={condition}
                  label={condition}
                  isSelected={selectedCondition === condition}
                  onClick={() => setSelectedCondition(condition)}
                />
              ))}
            </div>

            {/* Sort */}
            <div className="flex items-center ml-auto">
              <SortDesc className="w-5 h-5 mr-2 text-gray-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="discount">Biggest Discount</option>
              </select>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isSearching && (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Searching with AI...</p>
          </div>
        )}

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {displayProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* No Results */}
        {displayProducts.length === 0 && !isSearching && (
          <div className="text-center py-8">
            <p className="text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductList;