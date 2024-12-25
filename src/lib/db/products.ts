import { client } from './client';
import type { Product } from './types';

export async function createProduct(product: Omit<Product, 'id' | 'created_at'>): Promise<Product> {
  const id = crypto.randomUUID();
  await client.execute({
    sql: `INSERT INTO products (id, name, category, price, original_price, condition, 
      description, image_url, seller_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      id,
      product.name,
      product.category,
      product.price,
      product.original_price,
      product.condition,
      product.description,
      product.image_url,
      product.seller_id
    ]
  });

  return {
    ...product,
    id,
    created_at: new Date().toISOString()
  };
}

export async function getProducts(category?: string): Promise<Product[]> {
  const sql = category
    ? 'SELECT * FROM products WHERE category = ? ORDER BY created_at DESC'
    : 'SELECT * FROM products ORDER BY created_at DESC';
  const args = category ? [category] : [];
  const result = await client.execute({ sql, args });
  return result.rows as Product[];
}

export async function getProductById(id: string): Promise<Product | null> {
  const result = await client.execute({
    sql: 'SELECT * FROM products WHERE id = ?',
    args: [id]
  });
  return result.rows[0] as Product || null;
}

export async function getProductsByUser(userId: string): Promise<Product[]> {
  const result = await client.execute({
    sql: 'SELECT * FROM products WHERE seller_id = ? ORDER BY created_at DESC',
    args: [userId]
  });
  return result.rows as Product[];
}

export async function searchProducts(query: string): Promise<Product[]> {
  const searchPattern = `%${query}%`;
  const result = await client.execute({
    sql: `SELECT * FROM products WHERE 
          name LIKE ? OR description LIKE ? OR category LIKE ?
          ORDER BY created_at DESC`,
    args: [searchPattern, searchPattern, searchPattern]
  });
  return result.rows as Product[];
}