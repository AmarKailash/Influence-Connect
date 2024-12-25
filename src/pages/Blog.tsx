import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

function Blog() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">RefurbHub Blog</h1>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden mb-12"
        >
          <div className="md:flex">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1498049794561-7780e7231661"
                alt="Featured post"
                className="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                <span>March 15, 2024</span>
                <User className="w-4 h-4 ml-4 mr-2" />
                <span>By Admin</span>
              </div>
              <h2 className="text-2xl font-bold mb-4">
                The Future of Refurbished Electronics in India
              </h2>
              <p className="text-gray-600 mb-6">
                Explore how the refurbished electronics market is revolutionizing 
                technology access in India while promoting sustainability...
              </p>
              <button className="flex items-center text-green-600 hover:text-green-700">
                Read More <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="flex items-center text-green-600 hover:text-green-700">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

const blogPosts = [
  {
    title: 'Why Choose Refurbished Electronics?',
    excerpt: 'Discover the environmental and economic benefits of choosing refurbished devices...',
    date: 'March 10, 2024',
    image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03'
  },
  {
    title: 'Tips for Buying Refurbished Phones',
    excerpt: 'Expert guide on what to look for when purchasing a refurbished smartphone...',
    date: 'March 8, 2024',
    image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb'
  },
  {
  title: 'E-Waste Management in India',
  excerpt: 'How refurbishing electronics is helping reduce India\'s growing e-waste problem...',
  date: 'March 5, 2024',
  image: 'https://images.unsplash.com/photo-1576163893186-ced55b9bedad',
}

];

export default Blog;