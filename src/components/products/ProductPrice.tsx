import React from 'react';

interface ProductPriceProps {
  price: number;
  originalPrice: number;
  showDiscount?: boolean;
}

export function ProductPrice({ price, originalPrice, showDiscount = true }: ProductPriceProps) {
  const discount = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );

  return (
    <div className="flex items-center">
      <span className="text-2xl font-bold">₹{price.toLocaleString()}</span>
      <span className="ml-2 text-sm text-gray-500 line-through">
        ₹{originalPrice.toLocaleString()}
      </span>
      {showDiscount && (
        <span className="ml-2 text-green-500">
          {discount}% OFF
        </span>
      )}
    </div>
  );
}