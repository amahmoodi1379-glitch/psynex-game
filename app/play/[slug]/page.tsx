import { notFound } from 'next/navigation';
import { courses } from '@/src/data';
import { componentRegistry } from '@/src/component-registry';
import Link from 'next/link';

export async function generateStaticParams() {
  const params = [];
  for (const course of courses) {
    for (const section of course.sections) {
      for (const game of section.games) {
        params.push({ slug: game.slug });
      }
    }
  }
  return params;
}

export default async function PlayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Find the game and its parent course/section for breadcrumbs
  let gameItem = null;
  let parentCourse = null;

  for (const course of courses) {
    for (const section of course.sections) {
      const foundGame = section.games.find((g) => g.slug === slug);
      if (foundGame) {
        gameItem = foundGame;
        parentCourse = course;
        break;
      }
    }
    if (gameItem) break;
  }

  if (!gameItem) {
    notFound();
  }

  const Component = componentRegistry[slug];

  if (!Component) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-white">
        <h1 className="text-2xl font-bold text-red-500">خطا</h1>
        <p className="text-gray-400 mt-2">کامپوننت مربوط به این بخش یافت نشد.</p>
        <Link href="/" className="text-indigo-400 hover:underline mt-4 inline-block">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">خانه</Link>
          <span>/</span>
          <Link href={`/course/${parentCourse?.slug}`} className="hover:text-white transition-colors">{parentCourse?.title}</Link>
          <span>/</span>
          <span className="text-white">{gameItem.title}</span>
        </div>

        <Component />
      </div>
    </div>
  );
}
