import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Recycle, Truck, MessageSquareMore } from 'lucide-react';
import FeaturedProducts from '../components/FeaturedProducts';

function Home() {
  return (
    <div className="relative">
      {/* Live Wallpaper Background */}
      <div className="fixed inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-circuit-board-animation-3180-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Section */}
      <section className="relative py-20 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Give Tech a Second Life
            </h1>
            <p className="text-xl mb-8">
              India's most trusted platform for buying and selling refurbished electronics
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
              Start Selling
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/90">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FeatureCard
              icon={<ShieldCheck className="w-12 h-12 text-green-500" />}
              title="Quality Assured"
              description="Rigorous testing and certification process"
            />
            <FeatureCard
              icon={<Recycle className="w-12 h-12 text-green-500" />}
              title="Sustainable Choice"
              description="Reduce e-waste and save the environment"
            />
            <FeatureCard
              icon={<Truck className="w-12 h-12 text-green-500" />}
              title="Safe Delivery"
              description="Secure packaging and fast shipping"
            />
            <FeatureCard
              icon={<MessageSquareMore className="w-12 h-12 text-green-500" />}
              title="AI Support"
              description="24/7 intelligent chatbot assistance"
            />
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="p-6 bg-white rounded-lg shadow-lg text-center"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default Home;