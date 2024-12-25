import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'iPhone 13 Pro',
    image: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5',
    price: 54999,
    originalPrice: 89900,
    rating: 4.8,
    condition: 'Excellent'
  },
  {
    id: 2,
    name: 'MacBook Air M1',
    image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    price: 69999,
    originalPrice: 99900,
    rating: 4.9,
    condition: 'Like New'
  },
  {
    id: 3,
    name: 'Samsung Galaxy S21',
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
    price: 34999,
    originalPrice: 69900,
    rating: 4.7,
    condition: 'Good'
  },
  {
    id: 4,
    name: 'iPad Pro 12.9"',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
    price: 71999,
    originalPrice: 119900,
    rating: 4.9,
    condition: 'Excellent'
  }
];

function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: any }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
          {discount}% OFF
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        
        <div className="flex items-center mb-2">
          <ShieldCheck className="w-4 h-4 text-green-500 mr-1" />
          <span className="text-sm text-gray-600">{product.condition}</span>
        </div>

        <div className="flex items-center mb-3">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
            <span className="ml-2 text-sm text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          </div>
          <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default FeaturedProducts;