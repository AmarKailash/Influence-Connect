export interface SearchResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface SearchParams {
  query?: string;
  category?: string;
  condition?: string;
  minPrice?: number;
  maxPrice?: number;
  sortBy?: string;
  page?: number;
  pageSize?: number;
}