import React from 'react';
import { Gift } from '../types';
import { Star, ShoppingCart, Package } from 'lucide-react';

interface Props {
  gifts: Gift[];
  onFilter: (minPrice: number, maxPrice: number) => void;
}

export default function GiftList({ gifts, onFilter }: Props) {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Recommended Gifts</h2>
        <div className="flex items-center gap-4">
          <select
            className="rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            onChange={e => {
              const [min, max] = e.target.value.split('-').map(Number);
              onFilter(min, max);
            }}
          >
            <option value="0-1000">All Prices</option>
            <option value="0-25">Under $25</option>
            <option value="25-50">$25 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100-1000">$100+</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gifts.map(gift => (
          <div
            key={gift.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative pb-[56.25%]">
              <img
                src={gift.image}
                alt={gift.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                ${gift.price.toFixed(2)}
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{gift.title}</h3>
              
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(gift.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">({gift.reviews})</span>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{gift.description}</p>

              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <Package className="w-4 h-4" />
                <span>{gift.shipping}</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
                  onClick={() => window.open(`https://${gift.platform}.com`, '_blank')}
                >
                  <ShoppingCart className="w-4 h-4" />
                  Buy on {gift.platform.charAt(0).toUpperCase() + gift.platform.slice(1)}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}