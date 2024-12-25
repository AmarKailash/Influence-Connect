import React, { useState } from 'react';
import { Send } from 'lucide-react';
import toast from 'react-hot-toast';

interface ProductFeedbackFormProps {
  searchQuery: string;
}

export function ProductFeedbackForm({ searchQuery }: ProductFeedbackFormProps) {
  const [formData, setFormData] = useState({
    expectedPrice: '',
    condition: 'any',
    description: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, send this data to your backend
    console.log('Product Request:', { searchQuery, ...formData });
    toast.success('Thank you! We will notify you when similar products are available.');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">
        We couldn't find "{searchQuery}" in our inventory
      </h2>
      <p className="text-gray-600 mb-6">
        Let us know what you're looking for and we'll notify you when it's available
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expected Price Range (₹)
          </label>
          <input
            type="text"
            value={formData.expectedPrice}
            onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
            className="w-full p-2 border rounded-lg"
            placeholder="e.g. 30000-40000"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preferred Condition
          </label>
          <select
            value={formData.condition}
            onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
            className="w-full p-2 border rounded-lg"
          >
            <option value="any">Any Condition</option>
            <option value="like-new">Like New</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional Details
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full p-2 border rounded-lg"
            rows={4}
            placeholder="Tell us more about what you're looking for..."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email for Notifications
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 flex items-center justify-center gap-2"
        >
          <Send className="w-4 h-4" />
          Submit Request
        </button>
      </form>
    </div>
  );
}