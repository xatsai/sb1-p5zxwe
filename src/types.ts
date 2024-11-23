export interface Gift {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  platform: 'amazon' | 'walmart';
  inStock: boolean;
  shipping: string;
  category: string;
}

export interface FormData {
  age: string;
  gender: string;
  relationship: string;
  interests: string[];
  occasion: string;
  priceMin: number;
  priceMax: number;
  urgency: string;
}