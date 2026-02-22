import Link from 'next/link';
import { courses } from '@/src/data';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[100px] -z-10" />
        
        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6 drop-shadow-2xl">
          یادگیری <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">تعاملی</span> و <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">مدرن</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          با Psynex، مفاهیم پیچیده روانشناسی و آمار را از طریق بازی‌ها و درس‌های تعاملی، ساده و جذاب بیاموزید.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Link
            key={course.id}
            href={`/course/${course.slug}`}
            className="group relative glass-card rounded-3xl overflow-hidden flex flex-col h-full hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className={`h-1.5 w-full bg-gradient-to-r ${course.gradient}`} />
            
            <div className="p-6 flex-grow flex flex-col relative z-10">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                {course.title}
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {course.description}
              </p>
              
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-xs font-medium text-gray-500 group-hover:text-white transition-colors">
                  {course.sections.reduce((acc, sec) => acc + sec.games.length, 0)} بازی
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 text-gray-400">
                  <svg
                    className="w-4 h-4 transform rotate-180 group-hover:scale-110 transition-transform"
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
  );
}
