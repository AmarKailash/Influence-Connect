import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, User } from 'lucide-react';
import { SearchBar } from './search/SearchBar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <ShoppingCart className="w-8 h-8 text-green-500" />
            <span className="text-xl font-bold">Refusion</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="w-64">
              <SearchBar />
            </div>
            <Link to="/products" className="text-gray-600 hover:text-green-500">Products</Link>
            <Link to="/sell" className="text-gray-600 hover:text-green-500">Sell</Link>
            <Link to="/dashboard" className="text-gray-600 hover:text-green-500">Dashboard</Link>
            <Link to="/login" className="flex items-center space-x-1 text-gray-600 hover:text-green-500">
              <User className="w-5 h-5" />
              <span>Login</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <SearchBar />
              </div>
              <Link
                to="/products"
                className="text-gray-600 hover:text-green-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
              <Link
                to="/sell"
                className="text-gray-600 hover:text-green-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                Sell
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-green-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/login"
                className="flex items-center space-x-1 text-gray-600 hover:text-green-500 py-2"
                onClick={() => setIsOpen(false)}
              >
                <User className="w-5 h-5" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}