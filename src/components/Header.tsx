'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-10">
            <Link href="/" className="group flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-all duration-300">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tighter group-hover:text-indigo-400 transition-colors">
                Psynex
              </span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
             <Link 
                href="/" 
                className="text-sm font-medium text-gray-500 hover:text-gray-300 transition-colors"
              >
                صفحه اصلی
              </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
