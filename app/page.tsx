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
    <main className="h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center text-center px-4">
        <div className="flex flex-col md:flex-row items-center gap-5 font-sansita text-[60px] md:text-[40px] tracking-wide">
          <div>Hi I&apos;m</div>
          <div className="relative">
            {index === 0 ? '' : 'a'}
            <span className={`inline-block ${index !== 0 ? 'w-[200px] md:w-[320px] border-b-2 border-black text-center' : ''}`}>
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
