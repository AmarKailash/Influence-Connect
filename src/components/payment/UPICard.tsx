import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, CheckCircle2 } from 'lucide-react';
import type { UPI } from '../../types';

interface UPICardProps {
  upi: UPI;
  onDelete: (id: string) => void;
}

export function UPICard({ upi, onDelete }: UPICardProps) {
  return (
    <motion.div
      key={upi.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between p-4 border rounded-lg"
    >
      <div>
        <p className="font-semibold">{upi.vpa}</p>
        <p className="text-sm text-gray-600">{upi.bank}</p>
      </div>
      <div className="flex items-center space-x-4">
        {upi.isDefault && (
          <span className="flex items-center text-green-600">
            <CheckCircle2 className="w-5 h-5 mr-1" />
            Default
          </span>
        )}
        <button 
          onClick={() => onDelete(upi.id)}
          className="text-red-500 hover:text-red-600"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}