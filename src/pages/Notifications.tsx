import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Package, Tag, CreditCard, MessageSquare } from 'lucide-react';

function Notifications() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold">Notifications</h1>
            <button className="text-green-500 hover:text-green-600">
              Mark all as read
            </button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-white rounded-lg shadow-md p-6 ${
                  !notification.read ? 'border-l-4 border-green-500' : ''
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-2 rounded-full ${
                    notificationTypeStyles[notification.type].bgColor
                  }`}>
                    {notificationTypeStyles[notification.type].icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold">{notification.title}</h3>
                      <span className="text-sm text-gray-500">{notification.time}</span>
                    </div>
                    <p className="text-gray-600 mt-1">{notification.message}</p>
                    {notification.action && (
                      <button className="mt-2 text-green-500 hover:text-green-600 text-sm">
                        {notification.action}
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const notificationTypeStyles = {
  order: {
    icon: <Package className="w-5 h-5 text-blue-500" />,
    bgColor: 'bg-blue-100'
  },
  price: {
    icon: <Tag className="w-5 h-5 text-green-500" />,
    bgColor: 'bg-green-100'
  },
  payment: {
    icon: <CreditCard className="w-5 h-5 text-purple-500" />,
    bgColor: 'bg-purple-100'
  },
  message: {
    icon: <MessageSquare className="w-5 h-5 text-yellow-500" />,
    bgColor: 'bg-yellow-100'
  }
};

const notifications = [
  {
    id: 1,
    type: 'order',
    title: 'Order Shipped',
    message: 'Your order #12345 has been shipped and will arrive in 2-3 business days.',
    time: '2 minutes ago',
    read: false,
    action: 'Track Order'
  },
  {
    id: 2,
    type: 'price',
    title: 'Price Drop Alert',
    message: 'The iPhone 13 Pro you wishlisted is now available at a 15% discount!',
    time: '1 hour ago',
    read: false,
    action: 'View Deal'
  },
  {
    id: 3,
    type: 'payment',
    title: 'Payment Successful',
    message: 'Your payment of ₹54,999 for order #12345 has been processed successfully.',
    time: '2 hours ago',
    read: true
  },
  {
    id: 4,
    type: 'message',
    title: 'New Message',
    message: 'You have a new message regarding your MacBook Air listing.',
    time: '1 day ago',
    read: true,
    action: 'Read Message'
  }
];

export default Notifications;