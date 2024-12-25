import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Truck, Shield, Package } from 'lucide-react';
import { getProductRecommendations } from '../lib/ai';
import { useCartStore } from '../stores/cartStore';
import toast from 'react-hot-toast';

function Checkout() {
  const cartItems = useCartStore(state => state.items);
  const [recommendations, setRecommendations] = useState([]);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  useEffect(() => {
    const loadRecommendations = async () => {
      if (cartItems.length > 0) {
        try {
          const recs = await getProductRecommendations(cartItems[0], []);
          setRecommendations(recs);
        } catch (error) {
          console.error('Error loading recommendations:', error);
        }
      }
    };
    loadRecommendations();
  }, [cartItems]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Order placed successfully!');
    // Handle order submission
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Checkout Form */}
            <div className="w-full lg:w-2/3 px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-lg shadow-lg p-6 mb-6"
              >
                {/* Steps */}
                <div className="flex justify-between mb-8">
                  {['Shipping', 'Payment', 'Review'].map((s, i) => (
                    <div
                      key={s}
                      className={`flex items-center ${
                        step > i + 1 ? 'text-green-500' : 'text-gray-500'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step === i + 1 ? 'bg-green-500 text-white' : 'bg-gray-200'
                      }`}>
                        {i + 1}
                      </div>
                      <span className="ml-2">{s}</span>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {step === 1 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="p-2 border rounded"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          className="p-2 border rounded"
                          required
                        />
                        <input
                          type="tel"
                          placeholder="Phone"
                          className="p-2 border rounded"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Address"
                          className="p-2 border rounded"
                          required
                        />
                        <input
                          type="text"
                          placeholder="City"
                          className="p-2 border rounded"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Pincode"
                          className="p-2 border rounded"
                          required
                        />
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
                      <div className="space-y-4">
                        <input
                          type="text"
                          placeholder="Card Number"
                          className="w-full p-2 border rounded"
                          required
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="p-2 border rounded"
                            required
                          />
                          <input
                            type="text"
                            placeholder="CVV"
                            className="p-2 border rounded"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold mb-4">Order Review</h2>
                      {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between border-b py-2">
                          <div className="flex items-center">
                            <img
                              src={item.image_url}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="ml-4">
                              <h3 className="font-semibold">{item.name}</h3>
                              <p className="text-gray-500">{item.condition}</p>
                            </div>
                          </div>
                          <p className="font-semibold">₹{item.price.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 flex justify-between">
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="bg-gray-500 text-white px-6 py-2 rounded"
                      >
                        Back
                      </button>
                    )}
                    <button
                      type={step === 3 ? 'submit' : 'button'}
                      onClick={() => step < 3 && setStep(step + 1)}
                      className="bg-green-500 text-white px-6 py-2 rounded"
                    >
                      {step === 3 ? 'Place Order' : 'Continue'}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div className="w-full lg:w-1/3 px-4">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  {cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between">
                      <span>{item.name}</span>
                      <span>₹{item.price.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>₹{totalAmount.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Recommendations */}
                {recommendations.length > 0 && (
                  <div className="mt-6">
                    <h3 className="font-semibold mb-4">Recommended for You</h3>
                    <div className="space-y-4">
                      {recommendations.map((item: any, index) => (
                        <div key={index} className="flex items-center">
                          <img
                            src={item.image_url}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded"
                          />
                          <div className="ml-4">
                            <h4 className="font-semibold">{item.name}</h4>
                            <p className="text-green-500">₹{item.price.toLocaleString()}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;