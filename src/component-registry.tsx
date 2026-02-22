import dynamic from 'next/dynamic';
import React from 'react';

// Lazy load components for better performance
const PsychologyIntro = dynamic(() => import('./components/courses/PsychologyIntro'));
const Statistics = dynamic(() => import('./components/courses/Statistics'));
const MemoryGame = dynamic(() => import('./components/games/MemoryGame'));
const QuizGame = dynamic(() => import('./components/games/QuizGame'));

export const componentRegistry: Record<string, React.ComponentType> = {
  'psychology-intro': PsychologyIntro,
  'descriptive-statistics': Statistics,
  'memory-game': MemoryGame,
  'psychology-quiz': QuizGame,
};
