import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Trash2, Heart } from 'lucide-react';
import { useWishlistStore } from '../stores/wishlistStore';
import { useCartStore } from '../stores/cartStore';
import { getProductRecommendations } from '../lib/ai';
import toast from 'react-hot-toast';

function WishlistPage() {
  const { items, removeItem } = useWishlistStore();
  const { addItem } = useCartStore();
  const [recommendations, setRecommendations] = React.useState([]);

  React.useEffect(() => {
    const loadRecommendations = async () => {
      if (items.length > 0) {
        try {
          const recs = await getProductRecommendations(items[0], items);
          setRecommendations(recs);
        } catch (error) {
          console.error('Error loading recommendations:', error);
        }
      }
    };
    loadRecommendations();
  }, [items]);

  const handleAddToCart = (item: any) => {
    addItem(item);
    toast.success('Added to cart!');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600">Save items you love to your wishlist!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Wishlist Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.condition}</p>
                      <p className="text-green-600 font-semibold mt-1">
                        ₹{item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                    >
                      <ShoppingCart className="w-4 h-4" />
                      <span>Add to Cart</span>
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-gray-600 hover:text-red-600"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI Recommendations */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Recommended for You</h2>
              <div className="space-y-4">
                {recommendations.map((item: any) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center space-x-4 p-4 border rounded-lg hover:bg-gray-50"
                  >
                    <img
                      src={item.image_url}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.condition}</p>
                      <p className="text-green-600">₹{item.price.toLocaleString()}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;