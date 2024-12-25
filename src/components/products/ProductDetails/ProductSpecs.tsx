import React from 'react';
import { Cpu, Battery, Smartphone, HardDrive } from 'lucide-react';

interface Specification {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface ProductSpecsProps {
  category: string;
}

export function ProductSpecs({ category }: ProductSpecsProps) {
  const specs = getSpecsByCategory(category);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-6">Technical Specifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {specs.map((spec, index) => (
          <div key={index} className="flex items-center">
            <div className="p-2 bg-gray-100 rounded-lg mr-4">
              {spec.icon}
            </div>
            <div>
              <p className="text-sm text-gray-600">{spec.label}</p>
              <p className="font-semibold">{spec.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function getSpecsByCategory(category: string): Specification[] {
  switch (category) {
    case 'Phones':
      return [
        { icon: <Cpu className="w-5 h-5" />, label: 'Processor', value: 'A15 Bionic' },
        { icon: <Battery className="w-5 h-5" />, label: 'Battery', value: '3240 mAh' },
        { icon: <Smartphone className="w-5 h-5" />, label: 'Display', value: '6.1" OLED' },
        { icon: <HardDrive className="w-5 h-5" />, label: 'Storage', value: '256GB' }
      ];
    case 'Laptops':
      return [
        { icon: <Cpu className="w-5 h-5" />, label: 'Processor', value: 'M1 Pro' },
        { icon: <Battery className="w-5 h-5" />, label: 'Battery', value: '70Wh' },
        { icon: <Smartphone className="w-5 h-5" />, label: 'Display', value: '14" Retina' },
        { icon: <HardDrive className="w-5 h-5" />, label: 'Storage', value: '512GB SSD' }
      ];
    default:
      return [];
  }
}