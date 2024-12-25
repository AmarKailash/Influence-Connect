import type { User, Product } from './db/types';
import { mockUsers, mockProducts } from './db/mockData';

// User Operations
export async function createUser(email: string, name: string, passwordHash: string): Promise<User> {
  const user: User = {
    id: crypto.randomUUID(),
    email,
    name,
    password_hash: passwordHash,
    created_at: new Date().toISOString()
  };
  return user;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  return mockUsers.find(user => user.email === email) || null;
}

// Product Operations
export async function createProduct(product: Omit<Product, 'id' | 'created_at'>): Promise<Product> {
  const newProduct: Product = {
    ...product,
    id: crypto.randomUUID(),
    created_at: new Date().toISOString()
  };
  return newProduct;
}

export async function getProducts(category?: string): Promise<Product[]> {
  if (category) {
    return mockProducts.filter(product => product.category === category);
  }
  return mockProducts;
}

export async function getProductById(id: string): Promise<Product | null> {
  return mockProducts.find(product => product.id === id) || null;
}

export async function getProductsByUser(userId: string): Promise<Product[]> {
  return mockProducts.filter(product => product.seller_id === userId);
}

export async function searchProducts(query: string): Promise<Product[]> {
  const searchQuery = query.toLowerCase();
  return mockProducts.filter(product => 
    product.name.toLowerCase().includes(searchQuery) ||
    product.description.toLowerCase().includes(searchQuery) ||
    product.category.toLowerCase().includes(searchQuery)
  );
}

export type { User, Product };