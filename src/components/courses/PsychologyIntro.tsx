import React from 'react';

export default function PsychologyIntro() {
  return (
    <div className="p-10 glass-panel rounded-3xl shadow-2xl">
      <h1 className="text-4xl font-black mb-8 text-white tracking-tight">مبانی روانشناسی</h1>
      <div className="prose prose-lg prose-invert max-w-none text-gray-300 leading-relaxed">
        <p>
          روان‌شناسی علمی است که به مطالعه رفتار و فرآیندهای ذهنی می‌پردازد. این علم سعی دارد تا با استفاده از روش‌های علمی، چگونگی تفکر، احساس و رفتار انسان‌ها را درک کند.
        </p>
        <h3 className="text-2xl font-bold mt-8 mb-4 text-white">شاخه‌های اصلی:</h3>
        <ul className="list-none space-y-3 pl-0">
          {['روان‌شناسی بالینی', 'روان‌شناسی شناختی', 'روان‌شناسی رشد', 'روان‌شناسی اجتماعی'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
              <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
