export interface RecommendationEngine {
  getRecommendations(currentProduct: Product, allProducts: Product[]): Promise<Product[]>;
  getSmartSearch(query: string, products: Product[]): Promise<Product[]>;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  condition: string;
  description: string;
}