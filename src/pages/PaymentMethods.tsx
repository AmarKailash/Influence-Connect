import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { mockPaymentMethods } from '../lib/db/mockData';
import { PaymentCard } from '../components/payment/PaymentCard';
import { UPICard } from '../components/payment/UPICard';
import toast from 'react-hot-toast';

function PaymentMethods() {
  const [showAddCard, setShowAddCard] = useState(false);
  const [showAddUPI, setShowAddUPI] = useState(false);

  const handleDeleteCard = (id: string) => {
    toast.success('Card removed successfully');
  };

  const handleDeleteUPI = (id: string) => {
    toast.success('UPI ID removed successfully');
  };

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Card added successfully!');
    setShowAddCard(false);
  };

  const handleAddUPI = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('UPI ID added successfully!');
    setShowAddUPI(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Payment Methods</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Saved Cards */}
          <div className="col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Saved Cards</h2>
                <button
                  onClick={() => setShowAddCard(true)}
                  className="flex items-center text-green-500 hover:text-green-600"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add New Card
                </button>
              </div>

              {/* Add Card Form */}
              {showAddCard && (
                <AddCardForm
                  onSubmit={handleAddCard}
                  onCancel={() => setShowAddCard(false)}
                />
              )}

              {/* Card List */}
              <div className="space-y-4">
                {mockPaymentMethods.cards.map((card) => (
                  <PaymentCard
                    key={card.id}
                    card={card}
                    onDelete={handleDeleteCard}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* UPI Section */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">UPI IDs</h2>
                <button
                  onClick={() => setShowAddUPI(true)}
                  className="flex items-center text-green-500 hover:text-green-600"
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Add New UPI
                </button>
              </div>

              {/* Add UPI Form */}
              {showAddUPI && (
                <AddUPIForm
                  onSubmit={handleAddUPI}
                  onCancel={() => setShowAddUPI(false)}
                />
              )}

              {/* UPI List */}
              <div className="space-y-4">
                {mockPaymentMethods.upi.map((upi) => (
                  <UPICard
                    key={upi.id}
                    upi={upi}
                    onDelete={handleDeleteUPI}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AddCardForm({ onSubmit, onCancel }: { onSubmit: (e: React.FormEvent) => void, onCancel: () => void }) {
  return (
    <form onSubmit={onSubmit} className="mb-6 p-4 border rounded-lg">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Expiry Date
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="MM/YY"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            CVV
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="123"
            required
          />
        </div>
        <div className="col-span-2 flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Add Card
          </button>
        </div>
      </div>
    </form>
  );
}

function AddUPIForm({ onSubmit, onCancel }: { onSubmit: (e: React.FormEvent) => void, onCancel: () => void }) {
  return (
    <form onSubmit={onSubmit} className="mb-6 p-4 border rounded-lg">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            UPI ID
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            placeholder="username@bank"
            required
          />
        </div>
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Add UPI
          </button>
        </div>
      </div>
    </form>
  );
}

export default PaymentMethods;