import { client } from './client';
import type { User } from './types';

export async function createUser(email: string, name: string, passwordHash: string): Promise<User> {
  const id = crypto.randomUUID();
  await client.execute({
    sql: 'INSERT INTO users (id, email, name, password_hash) VALUES (?, ?, ?, ?)',
    args: [id, email, name, passwordHash]
  });
  
  return {
    id,
    email,
    name,
    password_hash: passwordHash,
    created_at: new Date().toISOString()
  };
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const result = await client.execute({
    sql: 'SELECT * FROM users WHERE email = ?',
    args: [email]
  });
  return result.rows[0] as User || null;
}

export async function getUserById(id: string): Promise<User | null> {
  const result = await client.execute({
    sql: 'SELECT * FROM users WHERE id = ?',
    args: [id]
  });
  return result.rows[0] as User || null;
}