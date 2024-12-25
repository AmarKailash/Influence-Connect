import { create } from 'zustand';
import { createUser, getUserByEmail, type User } from '../lib/db';

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, name: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const user = await getUserByEmail(email);
      if (!user) {
        throw new Error('User not found');
      }
      // In a real app, verify password hash here
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  signup: async (email: string, name: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      // In a real app, hash password here
      const user = await createUser(email, name, password);
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false });
    }
  },

  logout: () => {
    set({ user: null });
  }
}));