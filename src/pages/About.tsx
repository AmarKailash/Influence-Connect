import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Recycle, Users, Award } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About RefurbHub
          </motion.h1>
          <p className="text-xl max-w-2xl mx-auto">
            India's leading marketplace for premium refurbished electronics, 
            committed to sustainability and quality assurance.
          </p>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <p className="text-gray-500">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-green-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const team = [
  {
    name: 'Sukin',
    role: 'Founder',
    image: 'https://images.unsplash.com/photo-1531959522738-89c6086c9cca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFlvdW5nJTIwYm95fGVufDB8fDB8fHww',
    description: 'Visionary leader with expertise in sustainable technology'
  },
  {
    name: 'Bharathi',
    role: 'CEO',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
    description: 'Strategic innovator driving company growth and vision'
  },
  {
    name: 'Amar Kailash',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    description: 'Operations expert with focus on efficiency and quality'
  },
  {
    name: 'AkshayaKeerthi',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    description: 'Tech visionary leading digital transformation'
  }
];

const values = [
  {
    icon: <Shield className="w-8 h-8 text-green-600" />,
    title: 'Quality Assured',
    description: 'Rigorous testing and certification for every product'
  },
  {
    icon: <Recycle className="w-8 h-8 text-green-600" />,
    title: 'Sustainability',
    description: 'Reducing e-waste through responsible refurbishment'
  },
  {
    icon: <Users className="w-8 h-8 text-green-600" />,
    title: 'Customer First',
    description: 'Dedicated support and satisfaction guarantee'
  },
  {
    icon: <Award className="w-8 h-8 text-green-600" />,
    title: 'Trust & Security',
    description: 'Secure transactions and verified sellers'
  }
];

export default About;