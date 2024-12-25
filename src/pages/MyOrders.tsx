import React, { useState } from 'react';
import { mockOrders } from '../lib/db/mockData';
import { OrderCard } from '../components/orders/OrderCard';
import type { Order } from '../types';

function MyOrders() {
  const [filter, setFilter] = useState<'all' | 'processing' | 'delivered'>('all');

  const filteredOrders = mockOrders.filter(order => {
    if (filter === 'all') return true;
    if (filter === 'processing') return order.status === 'Processing';
    if (filter === 'delivered') return order.status === 'Delivered';
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Orders</h1>

        {/* Order Filters */}
        <div className="mb-8 flex space-x-4">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'all' ? 'bg-green-500 text-white' : 'bg-white text-gray-600'
            }`}
          >
            All Orders
          </button>
          <button 
            onClick={() => setFilter('processing')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'processing' ? 'bg-green-500 text-white' : 'bg-white text-gray-600'
            }`}
          >
            Processing
          </button>
          <button 
            onClick={() => setFilter('delivered')}
            className={`px-4 py-2 rounded-lg ${
              filter === 'delivered' ? 'bg-green-500 text-white' : 'bg-white text-gray-600'
            }`}
          >
            Delivered
          </button>
        </div>

        <div className="space-y-6">
          {filteredOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyOrders;