import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';

function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-600">Blog post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-gray-600 mb-8 hover:text-gray-900"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Blog
        </button>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover"
          />
          
          <div className="p-8">
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{post.date}</span>
              <User className="w-4 h-4 ml-4 mr-2" />
              <span>{post.author}</span>
              <Tag className="w-4 h-4 ml-4 mr-2" />
              <span>{post.category}</span>
            </div>

            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            
            <div className="prose max-w-none">
              {post.content.map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>

            {post.tags && (
              <div className="mt-8 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.article>
      </div>
    </div>
  );
}

const blogPosts = [
  {
    id: '1',
    title: 'Why Choose Refurbished Electronics?',
    author: 'Bharathi',
    date: 'March 10, 2024',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03',
    content: [
      'In today\'s world of rapidly advancing technology, the decision between buying new or refurbished electronics has become increasingly significant. This comprehensive guide explores the compelling reasons why choosing refurbished electronics might be the smarter choice for both your wallet and the environment.',
      'First and foremost, the cost savings are substantial. Refurbished devices typically cost 30-50% less than their brand-new counterparts, while offering nearly identical functionality. Our rigorous testing and certification process ensures that every device meets the highest quality standards.',
      'Environmental impact is another crucial factor. By choosing refurbished electronics, you\'re helping to reduce e-waste and minimize the environmental footprint of consumer electronics. Each refurbished device means one less device in a landfill and reduced demand for new manufacturing.',
      'Quality assurance is at the heart of our refurbishment process. Every device undergoes extensive testing, repairs are made with genuine parts, and all products come with a warranty for peace of mind.'
    ],
    tags: ['Sustainability', 'Cost Savings', 'Quality Assurance', 'E-Waste']
  },
  {
    id: '2',
    title: 'Tips for Buying Refurbished Phones',
    author: 'AkshayaKeerthi',
    date: 'March 8, 2024',
    category: 'Guides',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb',
    content: [
      'Buying a refurbished phone can be a smart financial decision, but it\'s important to know what to look for. This guide provides essential tips to ensure you make an informed purchase.',
      'Always check the phone\'s condition grade and understand what each grade means. Look for detailed information about any cosmetic imperfections and ensure the phone has been thoroughly tested.',
      'Warranty is crucial when buying refurbished. Choose sellers who offer at least a 6-month warranty and have a clear returns policy. This protects your investment and ensures you can get support if needed.',
      'Battery health is particularly important in refurbished phones. Ask about the battery condition and whether it has been replaced during refurbishment.'
    ],
    tags: ['Smartphones', 'Buying Guide', 'Tips', 'Quality Check']
  }
];

export default BlogPost;