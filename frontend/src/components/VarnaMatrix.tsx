'use client';

import { useState } from 'react';
import { varnaData, varnaCategories, Varna, VarnaCategory } from '@/data/varnaData';

type TransliterationScheme = 'devanagari' | 'iast' | 'itrans';

export default function VarnaMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<VarnaCategory | 'all'>('all');
  const [selectedVarna, setSelectedVarna] = useState<Varna | null>(null);
  const [transliterationScheme, setTransliterationScheme] = useState<TransliterationScheme>('devanagari');

  const filteredVarnas = selectedCategory === 'all' 
    ? varnaData 
    : varnaData.filter(v => v.category === selectedCategory);

  const getDisplayText = (varna: Varna): string => {
    switch (transliterationScheme) {
      case 'iast':
        return varna.iast;
      case 'itrans':
        return varna.itrans;
      default:
        return varna.devanagari;
    }
  };

  return (
    <div className="min-h-screen bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-orange-800 mb-2">वर्ण मैट्रिक्स</h1>
          <p className="text-xl text-orange-700">Varna Matrix - The Foundation of Sanskrit Pronunciation</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Matrix */}
          <div className="flex-1">
            {/* Controls */}
            <div className="bg-white rounded-xl shadow-md p-4 mb-6">
              <div className="flex flex-wrap gap-4 items-center justify-between">
                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedCategory('all')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === 'all'
                        ? 'bg-orange-600 text-white'
                        : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                    }`}
                  >
                    All ({varnaData.length})
                  </button>
                  {varnaCategories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id as VarnaCategory)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === cat.id
                          ? 'bg-orange-600 text-white'
                          : 'bg-orange-100 text-orange-800 hover:bg-orange-200'
                      }`}
                    >
                      {cat.name} ({cat.count})
                    </button>
                  ))}
                </div>

                {/* Transliteration Toggle */}
                <div className="flex bg-orange-100 rounded-lg p-1">
                  <button
                    onClick={() => setTransliterationScheme('devanagari')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      transliterationScheme === 'devanagari'
                        ? 'bg-orange-600 text-white'
                        : 'text-orange-800'
                    }`}
                  >
                    देवनागरी
                  </button>
                  <button
                    onClick={() => setTransliterationScheme('iast')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      transliterationScheme === 'iast'
                        ? 'bg-orange-600 text-white'
                        : 'text-orange-800'
                    }`}
                  >
                    IAST
                  </button>
                  <button
                    onClick={() => setTransliterationScheme('itrans')}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      transliterationScheme === 'itrans'
                        ? 'bg-orange-600 text-white'
                        : 'text-orange-800'
                    }`}
                  >
                    ITRANS
                  </button>
                </div>
              </div>
            </div>

            {/* Varna Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
              {filteredVarnas.map(varna => (
                <button
                  key={varna.id}
                  onClick={() => setSelectedVarna(varna)}
                  className={`aspect-square rounded-xl flex items-center justify-center text-2xl font-bold transition-all transform hover:scale-105 shadow-sm ${
                    selectedVarna?.id === varna.id
                      ? 'bg-orange-600 text-white shadow-lg ring-2 ring-orange-800'
                      : 'bg-white text-orange-900 hover:bg-orange-50 hover:shadow-md'
                  }`}
                >
                  {getDisplayText(varna)}
                </button>
              ))}
            </div>
          </div>

          {/* Detail Panel */}
          <div className="lg:w-96">
            {selectedVarna ? (
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold text-orange-900 mb-2">
                    {selectedVarna.devanagari}
                  </div>
                  <div className="text-2xl text-orange-700 mb-1">{selectedVarna.iast}</div>
                  <div className="text-lg text-orange-500">{selectedVarna.itrans}</div>
                </div>

                <div className="space-y-4">
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-orange-800 uppercase tracking-wide mb-2">
                      Sthāna (Place of Articulation)
                    </h3>
                    <p className="text-orange-900 font-medium">{selectedVarna.sthana}</p>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-orange-800 uppercase tracking-wide mb-2">
                      Prayatna (Manner of Articulation)
                    </h3>
                    <p className="text-orange-900">{selectedVarna.prayatna}</p>
                  </div>

                  {selectedVarna.description && (
                    <div className="bg-orange-50 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-orange-800 uppercase tracking-wide mb-2">
                        English Equivalent
                      </h3>
                      <p className="text-orange-900">{selectedVarna.description}</p>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <button
                      className="flex-1 bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                      onClick={() => {
                        const utterance = new SpeechSynthesisUtterance(selectedVarna.iast);
                        utterance.lang = 'sa-IN';
                        speechSynthesis.speak(utterance);
                      }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                      Listen
                    </button>
                    <button
                      className="flex-1 bg-orange-100 text-orange-800 py-3 px-4 rounded-lg font-medium hover:bg-orange-200 transition-colors flex items-center justify-center gap-2"
                      onClick={() => {
                        const utterance = new SpeechSynthesisUtterance(selectedVarna.iast);
                        utterance.lang = 'sa-IN';
                        utterance.rate = 0.5;
                        speechSynthesis.speak(utterance);
                      }}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      Slow
                    </button>
                  </div>

                  <button
                    className="w-full bg-orange-800 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-900 transition-colors"
                    onClick={() => setSelectedVarna(null)}
                  >
                    Close Details
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-4">
                <div className="text-center text-orange-600">
                  <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  <p className="font-medium">Select a Varna to view details</p>
                  <p className="text-sm mt-2 text-orange-500">
                    Click on any character above to see mouth placement guide and pronunciation tips
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
