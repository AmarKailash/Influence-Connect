import React from 'react';
import { ShoppingCart, Heart, BarChart2 } from 'lucide-react';
import { useCartStore } from '../../stores/cartStore';
import { useWishlistStore } from '../../stores/wishlistStore';
import type { Product } from '../../types';
import toast from 'react-hot-toast';

interface ProductActionsProps {
  product: Product;
  onCompare?: () => void;
}

export function ProductActions({ product, onCompare }: ProductActionsProps) {
  const addToCart = useCartStore(state => state.addItem);
  const { addItem: addToWishlist } = useWishlistStore();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success('Added to cart!');
  };

  const handleAddToWishlist = () => {
    addToWishlist(product);
    toast.success('Added to wishlist!');
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleAddToCart}
        className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
      >
        <ShoppingCart className="w-5 h-5 inline-block mr-2" />
        Add to Cart
      </button>
      <button
        onClick={handleAddToWishlist}
        className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        <Heart className="w-5 h-5" />
      </button>
      {onCompare && (
        <button
          onClick={onCompare}
          className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <BarChart2 className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}