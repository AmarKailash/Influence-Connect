import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Clock, Shield, MapPin } from 'lucide-react';

function ShippingInfo() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12">Shipping Information</h1>

          {/* Shipping Methods */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Delivery Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {deliveryOptions.map((option, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex items-center mb-4">
                    <Truck className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="font-semibold">{option.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{option.description}</p>
                  <p className="font-semibold">₹{option.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Times */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Estimated Delivery Times</h2>
            <div className="space-y-4">
              {deliveryTimes.map((time, index) => (
                <div key={index} className="flex items-start">
                  <Clock className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{time.region}</h3>
                    <p className="text-gray-600">{time.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Policy */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">Shipping Policy</h2>
            <div className="space-y-6">
              {policies.map((policy, index) => (
                <div key={index} className="flex items-start">
                  <Shield className="w-6 h-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">{policy.title}</h3>
                    <p className="text-gray-600">{policy.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const deliveryOptions = [
  {
    name: 'Standard Delivery',
    description: '3-5 business days',
    price: 49
  },
  {
    name: 'Express Delivery',
    description: '1-2 business days',
    price: 99
  }
];

const deliveryTimes = [
  {
    region: 'Metro Cities',
    duration: '2-3 business days'
  },
  {
    region: 'Tier 2 Cities',
    duration: '3-4 business days'
  },
  {
    region: 'Other Locations',
    duration: '4-6 business days'
  }
];

const policies = [
  {
    title: 'Free Shipping',
    description: 'Free shipping on orders above ₹10,000'
  },
  {
    title: 'Secure Packaging',
    description: 'All products are carefully packed to ensure safe delivery'
  },
  {
    title: 'Order Tracking',
    description: 'Track your order status in real-time through your dashboard'
  },
  {
    title: 'Return Policy',
    description: '7-day return policy for all products in original condition'
  }
];

export default ShippingInfo;