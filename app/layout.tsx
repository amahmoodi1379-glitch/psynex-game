import { Suspense } from 'react';
import type { Metadata } from 'next';
import { Vazirmatn } from 'next/font/google';
import Header from '@/src/components/Header';
import './globals.css';

const vazir = Vazirmatn({ 
  subsets: ['arabic'],
  variable: '--font-vazir',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Psynex - پلتفرم آموزشی روانشناسی',
  description: 'پلتفرم آموزشی تعاملی برای یادگیری روانشناسی و آمار',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazir.variable} dark`}>
      <body className="font-sans antialiased min-h-screen flex flex-col overflow-x-hidden">
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-950 to-gray-950 pointer-events-none" />
        <Suspense fallback={<div className="h-20 border-b border-white/5" />}>
          <Header />
        </Suspense>
        <main className="flex-grow relative">
          {children}
        </main>
        <footer className="border-t border-white/5 py-12 mt-auto relative z-10">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-gray-500 text-sm font-medium">
              © ۱۴۰۳ Psynex. طراحی شده با عشق برای یادگیری.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
