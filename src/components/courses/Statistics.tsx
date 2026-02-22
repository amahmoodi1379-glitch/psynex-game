import React from 'react';

export default function Statistics() {
  return (
    <div className="p-10 glass-panel rounded-3xl shadow-2xl">
      <h1 className="text-4xl font-black mb-8 text-white tracking-tight">آمار توصیفی</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-center hover:bg-blue-500/20 transition-colors">
          <h3 className="text-xl font-bold text-blue-400 mb-2">میانگین</h3>
          <p className="text-blue-200/70 text-sm">مجموع داده‌ها تقسیم بر تعداد</p>
        </div>
        <div className="p-6 bg-purple-500/10 border border-purple-500/20 rounded-2xl text-center hover:bg-purple-500/20 transition-colors">
          <h3 className="text-xl font-bold text-purple-400 mb-2">میانه</h3>
          <p className="text-purple-200/70 text-sm">عدد وسط در داده‌های مرتب شده</p>
        </div>
        <div className="p-6 bg-orange-500/10 border border-orange-500/20 rounded-2xl text-center hover:bg-orange-500/20 transition-colors">
          <h3 className="text-xl font-bold text-orange-400 mb-2">نما</h3>
          <p className="text-orange-200/70 text-sm">عددی که بیشترین تکرار را دارد</p>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed text-lg">
        آمار توصیفی به مجموعه روش‌هایی گفته می‌شود که برای جمع‌آوری، خلاصه‌سازی، طبقه‌بندی و توصیف ویژگی‌های مهم مجموعه‌ای از داده‌ها مورد استفاده قرار می‌گیرد.
      </p>
    </div>
  );
}
