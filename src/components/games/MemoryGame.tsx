'use client';

import React, { useState } from 'react';

export default function MemoryGame() {
  const [flipped, setFlipped] = useState<boolean>(false);

  return (
    <div className="p-8 glass-panel rounded-3xl shadow-2xl text-center">
      <h2 className="text-3xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">بازی حافظه</h2>
      <p className="mb-8 text-gray-400">روی کارت کلیک کنید تا برگردد!</p>
      
      <div 
        onClick={() => setFlipped(!flipped)}
        className={`w-40 h-40 mx-auto cursor-pointer transition-all duration-500 transform ${flipped ? 'rotate-y-180 bg-indigo-600 shadow-[0_0_30px_rgba(79,70,229,0.4)]' : 'bg-white/10 hover:bg-white/20'} rounded-2xl flex items-center justify-center border border-white/10`}
      >
        <span className={`text-4xl font-bold ${flipped ? 'text-white' : 'text-white/30'}`}>
          {flipped ? '🧠' : '?'}
        </span>
      </div>
      
      <div className="mt-8">
        <p className="text-sm text-gray-500">این یک کامپوننت نمونه برای تست است.</p>
      </div>
    </div>
  );
}
