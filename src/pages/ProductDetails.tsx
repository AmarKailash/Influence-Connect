import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Truck, Package, Star } from 'lucide-react';
import { ProductGallery } from '../components/products/ProductDetails/ProductGallery';
import { ProductActions } from '../components/products/ProductActions';
import { RelatedProducts } from '../components/products/RelatedProducts';
import { mockProducts } from '../lib/db/mockData';

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = React.useState('description');
  
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">Product not found</p>
          <button
            onClick={() => navigate('/products')}
            className="text-green-500 hover:text-green-600"
          >
            Return to Products
          </button>
        </div>
      </div>
    );
  }

  const handleCompare = () => {
    navigate(`/compare?product1=${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 mb-8 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ProductGallery 
              images={[product.image_url]} 
              productName={product.name} 
            />

            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-400 mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600">(150 Reviews)</span>
              </div>

              <div className="mb-6">
                <div className="flex items-center">
                  <span className="text-3xl font-bold">₹{product.price.toLocaleString()}</span>
                  <span className="ml-2 text-lg text-gray-500 line-through">
                    ₹{product.original_price.toLocaleString()}
                  </span>
                  <span className="ml-2 text-green-500 text-lg">
                    {Math.round(((product.original_price - product.price) / product.original_price) * 100)}% OFF
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-3" />
                  <span>{product.condition} Condition - 6 Months Warranty</span>
                </div>
                <div className="flex items-center">
                  <Truck className="w-5 h-5 text-green-500 mr-3" />
                  <span>Free Delivery by Tomorrow</span>
                </div>
                <div className="flex items-center">
                  <Package className="w-5 h-5 text-green-500 mr-3" />
                  <span>7 Days Replacement Policy</span>
                </div>
              </div>

              <ProductActions product={product} onCompare={handleCompare} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <div className="border-b mb-6">
            <div className="flex space-x-8">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`pb-4 px-2 capitalize ${
                    selectedTab === tab
                      ? 'border-b-2 border-green-500 text-green-500'
                      : 'text-gray-500'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="prose max-w-none">
            {selectedTab === 'description' && (
              <div>
                <p className="text-gray-600">{product.description}</p>
                <ul className="mt-4 space-y-2">
                  <li>Brand: {product.name.split(' ')[0]}</li>
                  <li>Model: {product.name}</li>
                  <li>Condition: {product.condition}</li>
                  <li>Category: {product.category}</li>
                </ul>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-4">Technical Details</h3>
                  <ul className="space-y-2">
                    <li>Processor: Latest Generation</li>
                    <li>Memory: High Performance</li>
                    <li>Storage: Ample Space</li>
                  </ul>
                </div>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-gray-600">Great product, highly recommended!</p>
                  </div>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <RelatedProducts currentProduct={product} products={mockProducts} />
      </div>
    </div>
  );
}

export default ProductDetails;