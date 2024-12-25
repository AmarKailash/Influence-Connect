import React from 'react';

interface FilterButtonProps {
  label: string;
  isSelected: boolean;
  onClick: () => void;
}

export function FilterButton({ label, isSelected, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-full text-sm ${
        isSelected
          ? 'bg-green-500 text-white'
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
}