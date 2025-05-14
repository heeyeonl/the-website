'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [index, setIndex] = useState(0);
  const words = [
    'Heeyeon',
    'developer',
    'knitter',
    'gamer',
    'cat lover',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => 
        prevIndex < words.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-5">
          <div className="font-sansita text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
            Hi I&apos;m
          </div>
          <div className="relative font-sansita text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide">
            {index === 0 ? '' : 'a '}
            <span className={`inline-block ${index !== 0 ? 'w-[130px] sm:w-[160px] md:w-[200px] lg:w-[320px] border-b-2 border-[var(--text-primary)] text-center' : ''}`}>
              <span className="animate-[fade_5s_infinite]">
                {words[index]}
              </span>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
