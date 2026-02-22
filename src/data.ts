export interface Game {
  id: string;
  title: string;
  slug: string;
  description: string;
  gradient: string;
}

export interface Section {
  id: string;
  title: string;
  games: Game[];
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  gradient: string;
  sections: Section[];
}

export const courses: Course[] = [
  {
    id: 'c1',
    title: 'مبانی روانشناسی',
    slug: 'psychology-basics',
    description: 'آشنایی با مفاهیم پایه و تاریخچه علم روانشناسی.',
    gradient: 'from-blue-600 to-indigo-900',
    sections: [
      {
        id: 's1',
        title: 'مقدمات و تاریخچه',
        games: [
          {
            id: 'g1',
            title: 'مبانی روانشناسی',
            slug: 'psychology-intro',
            description: 'مروری بر تاریخچه و مفاهیم اولیه.',
            gradient: 'from-blue-500 to-cyan-600',
          },
        ],
      },
      {
        id: 's2',
        title: 'سنجش و ارزیابی',
        games: [
          {
            id: 'g2',
            title: 'کوییز روانشناسی',
            slug: 'psychology-quiz',
            description: 'سنجش اطلاعات عمومی شما.',
            gradient: 'from-orange-500 to-red-600',
          },
          {
            id: 'g3',
            title: 'بازی حافظه',
            slug: 'memory-game',
            description: 'تقویت حافظه کوتاه مدت.',
            gradient: 'from-emerald-500 to-teal-600',
          },
        ],
      },
    ],
  },
  {
    id: 'c2',
    title: 'آمار و روش تحقیق',
    slug: 'statistics-research',
    description: 'یادگیری روش‌های آماری و تحلیل داده‌ها.',
    gradient: 'from-purple-600 to-fuchsia-900',
    sections: [
      {
        id: 's3',
        title: 'آمار توصیفی',
        games: [
          {
            id: 'g4',
            title: 'مفاهیم آمار توصیفی',
            slug: 'descriptive-statistics',
            description: 'آشنایی با میانگین، میانه و نما.',
            gradient: 'from-purple-500 to-pink-600',
          },
        ],
      },
    ],
  },
];
