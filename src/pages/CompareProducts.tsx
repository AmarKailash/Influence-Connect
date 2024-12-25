import React, { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Plus, X } from 'lucide-react';
import { mockProducts } from '../lib/db/mockData';
import type { Product } from '../types';

function CompareProducts() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const product1Id = searchParams.get('product1');
  const product2Id = searchParams.get('product2');

  const product1 = mockProducts.find(p => p.id === product1Id);
  const product2 = mockProducts.find(p => p.id === product2Id);

  const [showProductSelector, setShowProductSelector] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = mockProducts.filter(p => 
    p.id !== product1Id && 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectProduct = (product: Product) => {
    const params = new URLSearchParams(searchParams);
    params.set('product2', product.id);
    navigate(`/compare?${params.toString()}`);
    setShowProductSelector(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 mb-8 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <h1 className="text-3xl font-bold mb-8">Compare Products</h1>

        <div className="grid grid-cols-2 gap-8">
          {/* Product 1 */}
          {product1 && (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <img
                src={product1.image_url}
                alt={product1.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold mb-2">{product1.name}</h2>
              <p className="text-2xl font-bold text-green-500 mb-4">
                ₹{product1.price.toLocaleString()}
              </p>
              <ComparisonDetails product={product1} />
            </div>
          )}

          {/* Product 2 */}
          {product2 ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="relative">
                <img
                  src={product2.image_url}
                  alt={product2.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <button
                  onClick={() => {
                    const params = new URLSearchParams(searchParams);
                    params.delete('product2');
                    navigate(`/compare?${params.toString()}`);
                  }}
                  className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <h2 className="text-xl font-bold mb-2">{product2.name}</h2>
              <p className="text-2xl font-bold text-green-500 mb-4">
                ₹{product2.price.toLocaleString()}
              </p>
              <ComparisonDetails product={product2} />
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center min-h-[400px]">
              {showProductSelector ? (
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-3 border rounded-lg mb-4"
                  />
                  <div className="max-h-96 overflow-y-auto">
                    {filteredProducts.map(product => (
                      <button
                        key={product.id}
                        onClick={() => handleSelectProduct(product)}
                        className="w-full flex items-center p-4 hover:bg-gray-50 border-b"
                      >
                        <img
                          src={product.image_url}
                          alt={product.name}
                          className="w-16 h-16 object-cover rounded mr-4"
                        />
                        <div className="text-left">
                          <h3 className="font-semibold">{product.name}</h3>
                          <p className="text-green-500">₹{product.price.toLocaleString()}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setShowProductSelector(true)}
                  className="flex flex-col items-center text-gray-500 hover:text-gray-700"
                >
                  <Plus className="w-12 h-12 mb-4" />
                  <span>Add Product to Compare</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ComparisonDetails({ product }: { product: Product }) {
  return (
    <div className="space-y-4">
      <div>
        <h3 className="font-semibold text-gray-600 mb-1">Category</h3>
        <p>{product.category}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-600 mb-1">Condition</h3>
        <p>{product.condition}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-600 mb-1">Original Price</h3>
        <p>₹{product.original_price.toLocaleString()}</p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-600 mb-1">Savings</h3>
        <p className="text-green-500">
          ₹{(product.original_price - product.price).toLocaleString()}
          {' '}
          ({Math.round(((product.original_price - product.price) / product.original_price) * 100)}%)
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-gray-600 mb-1">Description</h3>
        <p className="text-gray-600">{product.description}</p>
      </div>
    </div>
  );
}

export default CompareProducts;