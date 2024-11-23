import React from 'react';
import GiftForm from './components/GiftForm';
import GiftList from './components/GiftList';
import { FormData, Gift } from './types';
import { mockGifts } from './data/mockGifts';
import { Gift as GiftIcon } from 'lucide-react';

function App() {
  const [showResults, setShowResults] = React.useState(false);
  const [filteredGifts, setFilteredGifts] = React.useState<Gift[]>([]);

  const handleSubmit = (data: FormData) => {
    // In a real app, this would call the Amazon/Walmart APIs
    // For demo, we'll filter the mock data based on price range
    const filtered = mockGifts.filter(
      gift => gift.price >= data.priceMin && gift.price <= data.priceMax
    );
    setFilteredGifts(filtered);
    setShowResults(true);
  };

  const handleFilter = (minPrice: number, maxPrice: number) => {
    const filtered = mockGifts.filter(
      gift => gift.price >= minPrice && gift.price <= maxPrice
    );
    setFilteredGifts(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2">
            <GiftIcon className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">GiftFinder</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showResults ? (
          <GiftForm onSubmit={handleSubmit} />
        ) : (
          <>
            <button
              onClick={() => setShowResults(false)}
              className="mb-6 text-indigo-600 hover:text-indigo-700 font-medium flex items-center gap-2"
            >
              ← Back to Form
            </button>
            <GiftList gifts={filteredGifts} onFilter={handleFilter} />
          </>
        )}
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} GiftFinder. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;