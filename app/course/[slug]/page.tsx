import { notFound } from 'next/navigation';
import { courses } from '@/src/data';
import Link from 'next/link';

export async function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-400 hover:text-white transition-colors mb-6"
          >
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            بازگشت به لیست دوره‌ها
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            {course.title}
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl leading-relaxed">
            {course.description}
          </p>
        </div>

        <div className="space-y-12">
          {course.sections.map((section) => (
            <div key={section.id} className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-grow bg-gradient-to-l from-transparent via-white/10 to-transparent" />
                <h2 className="text-2xl font-bold text-white whitespace-nowrap px-4 py-2 rounded-full bg-white/5 border border-white/5">
                  {section.title}
                </h2>
                <div className="h-px flex-grow bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {section.games.map((game) => (
                  <Link
                    key={game.id}
                    href={`/play/${game.slug}`}
                    className="group relative glass-card rounded-3xl overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className={`h-1.5 w-full bg-gradient-to-r ${game.gradient}`} />
                    
                    <div className="p-6 flex-grow flex flex-col relative z-10">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                        {game.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-grow line-clamp-2">
                        {game.description}
                      </p>
                      
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                        <span className="text-xs font-medium text-gray-500 group-hover:text-white transition-colors">
                          شروع بازی
                        </span>
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 text-gray-400">
                          <svg
                            className="w-3 h-3 transform rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
