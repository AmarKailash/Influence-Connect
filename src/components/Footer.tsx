import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success('Thanks for subscribing to our newsletter!');
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">RefurbHub</h3>
            <p className="text-sm">
              India's most trusted platform for buying and selling refurbished electronics.
              Quality assured, sustainable choice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-green-500 text-sm">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-green-500 text-sm">Contact</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-green-500 text-sm">Blog</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-green-500 text-sm">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="hover:text-green-500 text-sm">Help Center</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-green-500 text-sm">Terms of Service</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-green-500 text-sm">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-green-500 text-sm">Shipping Info</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Stay Updated</h3>
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </form>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-500">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-green-500">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} RefurbHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;