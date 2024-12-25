import { FallbackRecommendationEngine } from './fallbackEngine';
import { AIRecommendationEngine } from './aiEngine';

const fallbackEngine = new FallbackRecommendationEngine();
const aiEngine = new AIRecommendationEngine(
  import.meta.env.VITE_OPENAI_API_KEY || '',
  fallbackEngine
);

export const recommendationEngine = aiEngine;