import OpenAI from 'openai';
import type { RecommendationEngine, Product } from './types';

export class AIRecommendationEngine implements RecommendationEngine {
  private openai: OpenAI;
  private fallbackEngine: RecommendationEngine;

  constructor(apiKey: string, fallbackEngine: RecommendationEngine) {
    this.openai = new OpenAI({
      apiKey,
      dangerouslyAllowBrowser: true
    });
    this.fallbackEngine = fallbackEngine;
  }

  async getRecommendations(currentProduct: Product, allProducts: Product[]): Promise<Product[]> {
    try {
      const prompt = `Given the current product:
        Name: ${currentProduct.name}
        Category: ${currentProduct.category}
        Price: ${currentProduct.price}
        Condition: ${currentProduct.condition}

        And a list of other products:
        ${allProducts.map(p => `- ${p.name} (${p.category}, ${p.price})`).join('\n')}

        Recommend 3 similar products based on category, price range, and condition.
        Return only the product names, separated by commas.`;

      const response = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      const recommendedNames = response.choices[0].message.content?.split(',').map(n => n.trim()) || [];
      const recommendations = allProducts.filter(p => recommendedNames.includes(p.name));
      
      return recommendations.length > 0 ? recommendations : this.fallbackEngine.getRecommendations(currentProduct, allProducts);
    } catch (error) {
      console.error('AI recommendation error, using fallback:', error);
      return this.fallbackEngine.getRecommendations(currentProduct, allProducts);
    }
  }

  async getSmartSearch(query: string, products: Product[]): Promise<Product[]> {
    try {
      const prompt = `Given the search query "${query}" and these products:
        ${products.map(p => `- ${p.name} (${p.category}, ${p.condition}, ${p.description})`).join('\n')}

        Return the names of the 5 most relevant products, considering:
        1. Query relevance to product name, category, and description
        2. Product condition
        3. Price range implications from the query
        
        Return only product names, separated by commas.`;

      const response = await this.openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      });

      const recommendedNames = response.choices[0].message.content?.split(',').map(n => n.trim()) || [];
      const results = products.filter(p => recommendedNames.includes(p.name));
      
      return results.length > 0 ? results : this.fallbackEngine.getSmartSearch(query, products);
    } catch (error) {
      console.error('AI search error, using fallback:', error);
      return this.fallbackEngine.getSmartSearch(query, products);
    }
  }
}