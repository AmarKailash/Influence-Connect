export interface User {
  id: string;
  email: string;
  name: string;
  password_hash: string;
  created_at: string;
}

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