import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCartStore } from '../stores/cartStore';
import { useWishlistStore } from '../stores/wishlistStore';
import type { Product } from '../types';
import toast from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addItem);
  const { items: wishlistItems, addItem: addToWishlist, removeItem: removeFromWishlist } = useWishlistStore();
  
  const isWishlisted = wishlistItems.some(item => item.id === product.id);
  
  const discount = Math.round(
    ((product.original_price - product.price) / product.original_price) * 100
  );

  const handleBuyNow = () => {
    addToCart(product);
    toast.success('Added to cart!');
    navigate('/cart');
  };

  const toggleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id);
      toast.success('Removed from wishlist');
    } else {
      addToWishlist(product);
      toast.success('Added to wishlist');
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden relative"
    >
      {/* Wishlist Button */}
      <button
        onClick={toggleWishlist}
        className="absolute top-2 right-2 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <Heart 
          className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} 
        />
      </button>

      <div className="relative">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
          {discount}% OFF
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        
        <div className="flex items-center mb-3">
          <span className="px-2 py-1 bg-gray-100 text-sm rounded-full">
            {product.condition}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold">₹{product.price.toLocaleString()}</span>
            <span className="ml-2 text-sm text-gray-500 line-through">
              ₹{product.original_price.toLocaleString()}
            </span>
          </div>
          <button 
            onClick={handleBuyNow}
            className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}