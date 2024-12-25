import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Trash2, CheckCircle2 } from 'lucide-react';
import type { Card } from '../../types';

interface PaymentCardProps {
  card: Card;
  onDelete: (id: string) => void;
}

export function PaymentCard({ card, onDelete }: PaymentCardProps) {
  return (
    <motion.div
      key={card.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between p-4 border rounded-lg"
    >
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <CreditCard className="w-6 h-6 text-gray-600" />
        </div>
        <div>
          <p className="font-semibold">{card.type} - {card.bank}</p>
          <p className="text-sm text-gray-600">•••• •••• •••• {card.last4}</p>
          <p className="text-sm text-gray-600">Expires {card.expiryMonth}/{card.expiryYear}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {card.isDefault && (
          <span className="flex items-center text-green-600">
            <CheckCircle2 className="w-5 h-5 mr-1" />
            Default
          </span>
        )}
        <button 
          onClick={() => onDelete(card.id)}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}