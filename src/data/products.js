export const categories = [
  { id: 'electronics', name: 'Electronics', icon: '📱' },
  { id: 'clothing', name: 'Clothing', icon: '👕' },
  { id: 'books', name: 'Books', icon: '📚' },
  { id: 'home', name: 'Home & Garden', icon: '🏠' },
  { id: 'sports', name: 'Sports', icon: '⚽' },
  { id: 'beauty', name: 'Beauty', icon: '💄' }
];

export const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: 999,
    originalPrice: 1199,
    category: 'electronics',
    rating: 4.8,
    reviews: 1250,
    description: 'The most advanced iPhone yet with titanium design, A17 Pro chip, and revolutionary camera system.',
    features: [
      'A17 Pro chip with 6-core GPU',
      '48MP Main camera with 2x telephoto',
      'Titanium design',
      'Action Button',
      'USB-C connector'
    ],
    images: [
      'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'
    ],
    inStock: true,
    badge: 'Best Seller'
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    price: 2499,
    originalPrice: 2999,
    category: 'electronics',
    rating: 4.9,
    reviews: 892,
    description: 'Supercharged by M3 Max chip for extreme performance in a portable design.',
    features: [
      'M3 Max chip',
      '16" Liquid Retina XDR display',
      '22-hour battery life',
      'Three Thunderbolt 4 ports',
      'MagSafe 3 charging'
    ],
    images: [
      'https://images.pexels.com/photos/205421/pexels-photo-205421.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/3999538/pexels-photo-3999538.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/1298601/pexels-photo-1298601.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'
    ],
    inStock: true,
    badge: 'New'
  },
  {
    id: 3,
    name: 'Premium Cotton T-Shirt',
    price: 29,
    originalPrice: 49,
    category: 'clothing',
    rating: 4.5,
    reviews: 324,
    description: 'Soft, comfortable, and stylish cotton t-shirt perfect for everyday wear.',
    features: [
      '100% Premium Cotton',
      'Pre-shrunk fabric',
      'Reinforced seaming',
      'Multiple colors available',
      'Machine washable'
    ],
    images: [
      'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'
    ],
    inStock: true,
    badge: 'Sale'
  },
  {
    id: 4,
    name: 'JavaScript: The Definitive Guide',
    price: 45,
    originalPrice: 59,
    category: 'books',
    rating: 4.7,
    reviews: 567,
    description: 'The comprehensive guide to JavaScript programming for developers of all levels.',
    features: [
      'Latest ES2023 features',
      '700+ pages of content',
      'Practical examples',
      'Expert author',
      'Digital version included'
    ],
    images: [
      'https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'
    ],
    inStock: true,
    badge: null
  },
  {
    id: 5,
    name: 'Smart Home Security Camera',
    price: 199,
    originalPrice: 249,
    category: 'home',
    rating: 4.6,
    reviews: 445,
    description: 'Advanced security camera with AI detection, night vision, and mobile app control.',
    features: [
      '4K Ultra HD recording',
      'AI person detection',
      'Night vision',
      'Two-way audio',
      'Cloud storage included'
    ],
    images: [
      'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'
    ],
    inStock: true,
    badge: 'Popular'
  },
  {
    id: 6,
    name: 'Professional Tennis Racket',
    price: 149,
    originalPrice: 199,
    category: 'sports',
    rating: 4.4,
    reviews: 234,
    description: 'High-performance tennis racket used by professional players worldwide.',
    features: [
      'Carbon fiber construction',
      'Perfect weight balance',
      'Anti-vibration system',
      'Grip size options',
      'Professional string tension'
    ],
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/1040946/pexels-photo-1040946.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'
    ],
    inStock: false,
    badge: null
  },
  {
    id: 7,
    name: 'Luxury Skincare Set',
    price: 89,
    originalPrice: 129,
    category: 'beauty',
    rating: 4.8,
    reviews: 892,
    description: 'Complete skincare routine with premium ingredients for radiant, healthy skin.',
    features: [
      'Natural ingredients',
      'Dermatologist tested',
      '5-step routine',
      'All skin types',
      'Cruelty-free'
    ],
    images: [
      'https://images.pexels.com/photos/3762879/pexels-photo-3762879.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/3785147/pexels-photo-3785147.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'
    ],
    inStock: true,
    badge: 'Limited'
  },
  {
    id: 8,
    name: 'Wireless Bluetooth Headphones',
    price: 79,
    originalPrice: 99,
    category: 'electronics',
    rating: 4.3,
    reviews: 678,
    description: 'Premium wireless headphones with noise cancellation and superior sound quality.',
    features: [
      'Active noise cancellation',
      '30-hour battery life',
      'Quick charge technology',
      'Premium audio drivers',
      'Comfortable over-ear design'
    ],
    images: [
      'https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop'
    ],
    inStock: true,
    badge: null
  }
];