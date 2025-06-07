"use client";

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const InstagramEmbedComponent = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="relative overflow-hidden pb-[60%] w-full max-w-[500px]">
      <iframe
        src="https://www.instagram.com/heeyeon.knits/embed"
        className="absolute top-0 left-0 w-full h-full border-none"
        loading="lazy"
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(InstagramEmbedComponent), {
  ssr: false
}); 