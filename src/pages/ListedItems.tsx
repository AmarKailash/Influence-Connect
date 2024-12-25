import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2, Eye } from 'lucide-react';
import { useCartStore } from '../stores/cartStore';

function ListedItems() {
  const { items } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">No items in cart</h2>
          <p className="text-gray-600">Start shopping to add items to your cart!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Cart Items</h1>

        <div className="grid gap-6">
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
                  <button className="p-2 text-gray-600 hover:text-blue-600">
                    <Eye className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-green-600">
                    <Edit className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-red-600">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListedItems;