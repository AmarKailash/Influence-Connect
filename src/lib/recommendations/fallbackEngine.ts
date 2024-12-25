import type { RecommendationEngine, Product } from './types';

export class FallbackRecommendationEngine implements RecommendationEngine {
  async getRecommendations(currentProduct: Product, allProducts: Product[]): Promise<Product[]> {
    return allProducts
      .filter(product => 
        product.id !== currentProduct.id &&
        product.category === currentProduct.category &&
        Math.abs(product.price - currentProduct.price) < currentProduct.price * 0.3
      )
      .slice(0, 3);
  }

  async getSmartSearch(query: string, products: Product[]): Promise<Product[]> {
    const searchTerms = query.toLowerCase().split(' ');
    
    return products
      .filter(product => {
        const searchableText = `${product.name} ${product.category} ${product.description}`.toLowerCase();
        return searchTerms.some(term => searchableText.includes(term));
      })
      .slice(0, 5);
  }
}