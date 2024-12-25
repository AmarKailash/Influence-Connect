import { createClient } from '@libsql/client';

const db = createClient({
  url: import.meta.env.VITE_DB_URL || 'libsql://refurb-marketplace-user.turso.io',
  authToken: import.meta.env.VITE_DB_AUTH_TOKEN
});

export { db };