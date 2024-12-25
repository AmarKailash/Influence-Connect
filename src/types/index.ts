export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  original_price: number;
  condition: string;
  description: string;
  image_url: string;
  seller_id: string;
  created_at: string;
}

export interface Order {
  id: string;
  userId: string;
  items: Product[];
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  paymentMethod: string;
  deliveryAddress: string;
  orderDate: string;
  deliveryDate?: string;
  estimatedDelivery?: string;
}

export interface Card {
  id: string;
  userId: string;
  type: string;
  bank: string;
  last4: string;
  expiryMonth: string;
  expiryYear: string;
  isDefault: boolean;
}

export interface UPI {
  id: string;
  userId: string;
  vpa: string;
  bank: string;
  isDefault: boolean;
}