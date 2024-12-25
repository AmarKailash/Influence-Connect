import type { Product } from '../types';

export function getSimilarProducts(
  product: Product,
  allProducts: Product[],
  limit: number = 4
): Product[] {
  // Remove the current product from recommendations
  const otherProducts = allProducts.filter(p => p.id !== product.id);

  // Calculate similarity scores
  const productsWithScores = otherProducts.map(p => ({
    product: p,
    score: calculateSimilarityScore(product, p)
  }));

  // Sort by similarity score and return top N products
  return productsWithScores
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(p => p.product);
}

function calculateSimilarityScore(product1: Product, product2: Product): number {
  let score = 0;

  // Category match (highest weight)
  if (product1.category === product2.category) {
    score += 5;
  }

  // Price range similarity (medium weight)
  const priceDiff = Math.abs(product1.price - product2.price);
  const priceScore = Math.max(0, 3 - (priceDiff / product1.price) * 3);
  score += priceScore;

  // Condition match (medium weight)
  if (product1.condition === product2.condition) {
    score += 2;
  }

  return score;
}