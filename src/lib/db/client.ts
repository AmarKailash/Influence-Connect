// Mock client implementation
export const client = {
  async query(sql: string, params: any[] = []): Promise<any> {
    console.log('Mock query:', sql, params);
    return { rows: [] };
  }
};