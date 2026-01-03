export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  description: string;
  category: string;
  image: string;
  rating: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "CyberPunk Headset X1",
    price: 299.99,
    salePrice: 249.99,
    description: "Immersive audio with neon accents and active noise cancellation. Perfect for the digital nomad.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Neon Flux Hoodie",
    price: 89.00,
    description: "High-quality cotton blend with reactive neon stitching. Glows under UV light.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80",
    rating: 4.5,
  },
  {
    id: "3",
    name: "Quantum Keyboard",
    price: 159.50,
    description: "Mechanical keyboard with per-key RGB programming and transparent switches.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b91ad91?w=500&q=80",
    rating: 4.9,
  },
  {
    id: "4",
    name: "Holo-Watch V2",
    price: 349.00,
    salePrice: 299.00,
    description: "Smartwatch with holographic display interface and biometric tracking.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    rating: 4.7,
  },
  {
    id: "5",
    name: "Stealth Sneakers",
    price: 120.00,
    description: "Urban tactical sneakers with waterproof coating and silent soles.",
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    rating: 4.6,
  },
  {
    id: "6",
    name: "Drone Cam Pro",
    price: 899.00,
    salePrice: 799.00,
    description: "4K autonomous drone with follow-me mode and obstacle avoidance.",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=500&q=80",
    rating: 4.9,
  },
];
