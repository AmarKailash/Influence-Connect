import OpenAI from 'openai';
import type { Product } from '../types';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export async function getProductRecommendations(
  currentProduct: Product,
  allProducts: Product[]
): Promise<Product[]> {
  const prompt = `Given the current product:
    Name: ${currentProduct.name}
    Category: ${currentProduct.category}
    Price: ${currentProduct.price}
    Condition: ${currentProduct.condition}

    And a list of other products:
    ${allProducts.map(p => `- ${p.name} (${p.category}, ${p.price})`).join('\n')}

    Recommend 3 similar products based on category, price range, and condition.
    Return only the product names, separated by commas.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const recommendedNames = response.choices[0].message.content?.split(',').map(n => n.trim()) || [];
    return allProducts.filter(p => recommendedNames.includes(p.name));
  } catch (error) {
    console.error('Error getting recommendations:', error);
    return [];
  }
}

export async function getSmartProductSearch(
  query: string,
  products: Product[]
): Promise<Product[]> {
  const prompt = `Given the search query "${query}" and these products:
    ${products.map(p => `- ${p.name} (${p.category}, ${p.condition}, ${p.description})`).join('\n')}

    Return the names of the 5 most relevant products, considering:
    1. Query relevance to product name, category, and description
    2. Product condition
    3. Price range implications from the query
    
    Return only product names, separated by commas.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    const recommendedNames = response.choices[0].message.content?.split(',').map(n => n.trim()) || [];
    return products.filter(p => recommendedNames.includes(p.name));
  } catch (error) {
    console.error('Error in smart search:', error);
    return [];
  }
}

export async function getPersonalizedDescription(product: Product): Promise<string> {
  const prompt = `Create a compelling and natural product description for:
    Name: ${product.name}
    Category: ${product.category}
    Price: ${product.price}
    Condition: ${product.condition}
    Current Description: ${product.description}

    Make it engaging, highlight key features, and emphasize value for money.
    Keep it under 100 words.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content || product.description;
  } catch (error) {
    console.error('Error generating description:', error);
    return product.description;
  }
}