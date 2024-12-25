import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your AI assistant from RefurbHub. How can I help you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInput('');

    // Simulate AI response with localized context
    setTimeout(() => {
      const response = getLocalizedResponse(userMessage.toLowerCase());
      setMessages(prev => [...prev, { text: response, isBot: true }]);
    }, 1000);
  };

  const getLocalizedResponse = (query: string): string => {
    if (query.includes('price') || query.includes('cost')) {
      return "Our refurbished products typically cost 30-50% less than their original price. All prices are in Indian Rupees (₹) and include GST.";
    }
    
    if (query.includes('warranty') || query.includes('guarantee')) {
      return "We offer a 6-month warranty on all products. This includes free repairs and replacements at our service centers across India.";
    }
    
    if (query.includes('delivery') || query.includes('shipping')) {
      return "We offer free delivery across India. Delivery typically takes 2-3 days in metro cities and 3-5 days in other locations. You can track your order through our website.";
    }
    
    if (query.includes('payment')) {
      return "We accept all major payment methods including UPI (GPay, PhonePe, Paytm), credit/debit cards, and net banking. All transactions are secure and encrypted.";
    }
    
    if (query.includes('return') || query.includes('refund')) {
      return "We have a 7-day return policy. If you're not satisfied with your purchase, we'll arrange a free pickup and provide a full refund within 5-7 business days.";
    }

    return "I can help you with information about our products, pricing, warranty, delivery, payments, and returns. What would you like to know more about?";
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        <MessageSquare />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-96 bg-white rounded-lg shadow-xl"
          >
            <div className="p-4 bg-green-500 text-white rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">RefurbHub Assistant</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isBot
                        ? 'bg-gray-100'
                        : 'bg-green-500 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  Send
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ChatBot;