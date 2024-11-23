import React from 'react';
import { FormData } from '../types';
import { Gift, Heart, Package, Tag, User2 } from 'lucide-react';

interface Props {
  onSubmit: (data: FormData) => void;
}

export default function GiftForm({ onSubmit }: Props) {
  const [formData, setFormData] = React.useState<FormData>({
    age: '',
    gender: '',
    relationship: '',
    interests: [],
    occasion: '',
    priceMin: 0,
    priceMax: 1000,
    urgency: 'normal',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-8">
          <Gift className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-900">Find the Perfect Gift</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <User2 className="w-4 h-4" />
              Recipient's Age
            </label>
            <select
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.age}
              onChange={e => setFormData(prev => ({ ...prev, age: e.target.value }))}
              required
            >
              <option value="">Select age range</option>
              <option value="0-12">0-12 years</option>
              <option value="13-17">13-17 years</option>
              <option value="18-24">18-24 years</option>
              <option value="25-34">25-34 years</option>
              <option value="35-44">35-44 years</option>
              <option value="45+">45+ years</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <User2 className="w-4 h-4" />
              Gender
            </label>
            <select
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.gender}
              onChange={e => setFormData(prev => ({ ...prev, gender: e.target.value }))}
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Heart className="w-4 h-4" />
              Relationship
            </label>
            <select
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.relationship}
              onChange={e => setFormData(prev => ({ ...prev, relationship: e.target.value }))}
              required
            >
              <option value="">Select relationship</option>
              <option value="spouse">Spouse/Partner</option>
              <option value="family">Family Member</option>
              <option value="friend">Friend</option>
              <option value="colleague">Colleague</option>
            </select>
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
              <Package className="w-4 h-4" />
              Occasion
            </label>
            <select
              className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              value={formData.occasion}
              onChange={e => setFormData(prev => ({ ...prev, occasion: e.target.value }))}
              required
            >
              <option value="">Select occasion</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
              <option value="christmas">Christmas</option>
              <option value="graduation">Graduation</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            Interests
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {['Tech', 'Fashion', 'Sports', 'Books', 'Cooking', 'Gaming'].map(interest => (
              <label
                key={interest}
                className={`flex items-center p-3 rounded-lg border cursor-pointer transition-colors ${
                  formData.interests.includes(interest)
                    ? 'bg-indigo-50 border-indigo-200'
                    : 'bg-white border-gray-200 hover:bg-gray-50'
                }`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  checked={formData.interests.includes(interest)}
                  onChange={() => handleInterestChange(interest)}
                />
                <span className="text-sm">{interest}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Tag className="w-4 h-4" />
            Price Range
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="number"
                placeholder="Min"
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.priceMin}
                onChange={e => setFormData(prev => ({ ...prev, priceMin: Number(e.target.value) }))}
                min="0"
                required
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Max"
                className="w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                value={formData.priceMax}
                onChange={e => setFormData(prev => ({ ...prev, priceMax: Number(e.target.value) }))}
                min="0"
                required
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
        >
          Find Perfect Gifts
        </button>
      </div>
    </form>
  );
}