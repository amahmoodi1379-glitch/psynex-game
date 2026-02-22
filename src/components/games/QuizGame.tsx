'use client';

import React, { useState } from 'react';

export default function QuizGame() {
  const [score, setScore] = useState(0);

  return (
    <div className="p-8 glass-panel rounded-3xl shadow-2xl max-w-md mx-auto">
      <h2 className="text-3xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 text-center">کوییز روانشناسی</h2>
      
      <div className="space-y-4">
        <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
          <p className="font-bold mb-4 text-white text-lg">پدر علم روانشناسی کیست؟</p>
          <div className="space-y-3">
            <button 
              onClick={() => setScore(score + 1)}
              className="w-full p-3 text-right bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/30 border border-white/10 rounded-xl transition-all duration-300 text-gray-300"
            >
              ۱. ویلهلم وونت
            </button>
            <button className="w-full p-3 text-right bg-white/5 hover:bg-red-500/20 hover:text-red-300 hover:border-red-500/30 border border-white/10 rounded-xl transition-all duration-300 text-gray-300">
              ۲. زیگموند فروید
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <span className="inline-block px-6 py-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-sm font-bold shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          امتیاز شما: {score}
        </span>
      </div>
    </div>
  );
}
