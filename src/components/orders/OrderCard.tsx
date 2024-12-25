import React from 'react';
import { motion } from 'framer-motion';
import { Package, ArrowRight } from 'lucide-react';
import { formatDate } from '../../utils/dateUtils';
import type { Order } from '../../types';

interface OrderCardProps {
  order: Order;
}

export function OrderCard({ order }: OrderCardProps) {
  return (
    <motion.div
      key={order.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md p-6"
    >
      {/* Order Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <Package className="w-6 h-6 text-green-500" />
          <div>
            <p className="font-semibold">Order #{order.id}</p>
            <p className="text-sm text-gray-600">
              Placed on {formatDate(order.orderDate)}
            </p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm ${statusColors[order.status]}`}>
          {order.status}
        </div>
      </div>

      {/* Order Items */}
      <div className="border-t border-b py-4 mb-4">
        {order.items.map((item) => (
          <div key={item.id} className="flex items-center justify-between mb-4 last:mb-0">
            <div className="flex items-center space-x-4">
              <img
                src={item.image_url}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.condition}</p>
              </div>
            </div>
            <p className="font-semibold">₹{item.price.toLocaleString()}</p>
          </div>
        ))}
      </div>

      {/* Order Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <p className="text-sm text-gray-600">Payment Method</p>
          <p className="font-semibold">{order.paymentMethod}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">Delivery Address</p>
          <p className="font-semibold">{order.deliveryAddress}</p>
        </div>
        <div>
          <p className="text-sm text-gray-600">
            {order.status === 'Delivered' ? 'Delivered On' : 'Expected Delivery'}
          </p>
          <p className="font-semibold">
            {formatDate(order.deliveryDate || order.estimatedDelivery)}
          </p>
        </div>
      </div>

      {/* Order Actions */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">Total Amount</p>
          <p className="text-xl font-bold">₹{order.total.toLocaleString()}</p>
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center text-green-500 hover:text-green-600">
            Track Order <ArrowRight className="w-4 h-4 ml-2" />
          </button>
          {order.status === 'Delivered' && (
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
              Write Review
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const statusColors = {
  'Processing': 'bg-blue-100 text-blue-800',
  'Shipped': 'bg-yellow-100 text-yellow-800',
  'Delivered': 'bg-green-100 text-green-800',
  'Cancelled': 'bg-red-100 text-red-800'
};