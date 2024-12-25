export const mockUsers = [
  {
    id: '1',
    email: 'john@example.com',
    name: 'John Doe',
    password_hash: 'mock_hash',
    created_at: new Date().toISOString()
  }
];

export const mockProducts = [
  // Phones Category
  {
    id: '1',
    name: 'iPhone 13 Pro',
    category: 'Phones',
    price: 54999,
    original_price: 89900,
    condition: 'Excellent',
    description: '256GB, Graphite, 1 Year Warranty',
    image_url: 'https://images.unsplash.com/photo-1632661674596-df8be070a5c5',
    seller_id: '1',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Samsung Galaxy S21',
    category: 'Phones',
    price: 42999,
    original_price: 69999,
    condition: 'Like New',
    description: '128GB, Phantom Black, 6 Months Warranty',
    image_url: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
    seller_id: '1',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Google Pixel 6',
    category: 'Phones',
    price: 35999,
    original_price: 59999,
    condition: 'Good',
    description: '128GB, Stormy Black, 1 Year Warranty',
    image_url: 'https://images.unsplash.com/photo-1635870723802-e88d76ae3c3e',
    seller_id: '1',
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'OnePlus 9 Pro',
    category: 'Phones',
    price: 39999,
    original_price: 64999,
    condition: 'Excellent',
    description: '256GB, Morning Mist, 1 Year Warranty',
    image_url: 'https://images.unsplash.com/photo-1636430228899-5e1f2bc6b7a9',
    seller_id: '1',
    created_at: new Date().toISOString()
  },

  // Laptops Category
  {
    id: '5',
    name: 'MacBook Air M1',
    category: 'Laptops',
    price: 69999,
    original_price: 99900,
    condition: 'Like New',
    description: '8GB RAM, 256GB SSD, Space Gray',
    image_url: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9',
    seller_id: '1',
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Dell XPS 13',
    category: 'Laptops',
    price: 79999,
    original_price: 119999,
    condition: 'Excellent',
    description: '16GB RAM, 512GB SSD, 4K Display',
    image_url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45',
    seller_id: '1',
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    name: 'HP Spectre x360',
    category: 'Laptops',
    price: 84999,
    original_price: 129999,
    condition: 'Like New',
    description: '16GB RAM, 1TB SSD, OLED Display',
    image_url: 'https://images.unsplash.com/photo-1544731612-de7f96afe55f',
    seller_id: '1',
    created_at: new Date().toISOString()
  },

  // Tablets Category
  {
    id: '8',
    name: 'iPad Pro 12.9"',
    category: 'Tablets',
    price: 71999,
    original_price: 119900,
    condition: 'Excellent',
    description: '256GB, Space Gray, M1 Chip',
    image_url: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
    seller_id: '1',
    created_at: new Date().toISOString()
  },
  {
    id: '9',
    name: 'Samsung Galaxy Tab S7+',
    category: 'Tablets',
    price: 49999,
    original_price: 79999,
    condition: 'Good',
    description: '128GB, Mystic Silver, S Pen Included',
    image_url: 'https://images.unsplash.com/photo-1589739900243-4b52cd9b104e',
    seller_id: '1',
    created_at: new Date().toISOString()
  },

  // Accessories Category
  {
    id: '10',
    name: 'AirPods Pro',
    category: 'Accessories',
    price: 12999,
    original_price: 24900,
    condition: 'Like New',
    description: 'Active Noise Cancellation, Wireless Charging Case',
    image_url: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5',
    seller_id: '1',
    created_at: new Date().toISOString()
  },
  {
    id: '11',
    name: 'Apple Watch Series 7',
    category: 'Accessories',
    price: 24999,
    original_price: 41900,
    condition: 'Excellent',
    description: '45mm, GPS, Aluminum Case',
    image_url: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d',
    seller_id: '1',
    created_at: new Date().toISOString()
  }
];

// Mock Orders Data
export const mockOrders = [
  {
    id: 'ORD001',
    userId: '1',
    items: [mockProducts[0]], // iPhone 13 Pro
    status: 'Delivered',
    total: 54999,
    paymentMethod: 'UPI',
    deliveryAddress: '123 Main St, Bangalore',
    orderDate: '2024-03-15T10:30:00Z',
    deliveryDate: '2024-03-18T14:20:00Z'
  },
  {
    id: 'ORD002',
    userId: '1',
    items: [mockProducts[4]], // MacBook Air M1
    status: 'Processing',
    total: 69999,
    paymentMethod: 'Credit Card',
    deliveryAddress: '123 Main St, Bangalore',
    orderDate: '2024-03-19T15:45:00Z',
    estimatedDelivery: '2024-03-22T18:00:00Z'
  }
];

// Payment Methods Data
export const mockPaymentMethods = {
  upi: [
    {
      id: 'UPI001',
      userId: '1',
      vpa: 'john@okicici',
      bank: 'ICICI Bank',
      isDefault: true
    },
    {
      id: 'UPI002',
      userId: '1',
      vpa: 'john@okhdfc',
      bank: 'HDFC Bank',
      isDefault: false
    }
  ],
  cards: [
    {
      id: 'CARD001',
      userId: '1',
      type: 'Credit Card',
      bank: 'HDFC Bank',
      last4: '4567',
      expiryMonth: '12',
      expiryYear: '2025',
      isDefault: true
    },
    {
      id: 'CARD002',
      userId: '1',
      type: 'Debit Card',
      bank: 'SBI',
      last4: '8901',
      expiryMonth: '08',
      expiryYear: '2026',
      isDefault: false
    }
  ],
  savedAddresses: [
    {
      id: 'ADDR001',
      userId: '1',
      type: 'Home',
      address: '123 Main St',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001',
      isDefault: true
    }
  ]
};