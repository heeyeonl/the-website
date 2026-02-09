'use client';

import { Hand, Linkedin } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex justify-center my-10 mx-[5%] sm:mx-[8%] lg:mx-[12%]">
      <div className="max-w-[500px] p-6 sm:p-10 bg-[var(--ui-white)] border-2 border-dashed rounded-lg">
        <div className="flex items-center gap-2">
          <div className="animate-wave">
            <Hand size={22} className="text-[var(--ui-black)]" />
          </div>
          <p className="text-[var(--ui-black)]">Hello, nice to meet you! :)</p>
        </div>
        
        <h1 className="text-3xl font-bold my-4 text-[var(--ui-black)]">About me</h1>
        
        <div className="flex flex-col gap-6 mb-9 text-[var(--ui-black)]">
          <p>
            I am Heeyeon Lee, CTO & Co-Founder of Palette, with 6+ years of industry experience as a software engineer.
            I graduated with a Computer Science degree from Brigham Young University, Provo, Utah.
          </p>
          <p>
            I&apos;ve always been drawn to art and visual storytelling, which naturally led me to software development. I love building products that feel thoughtful, intuitive, and beautiful—not just in the UI, but in the experience itself.
          </p>
          <p>
            Currently, I&apos;m building Palette, a creative collaboration platform, from zero to one. Previously, I specialized in transforming manual workflows into scalable, self-serviceable products that empower users.
          </p>
          <p>
            Outside of work, I love spending time on creative hobbies like knitting and unwinding with games—whether competitive, strategic, or cozy.
          </p>
        </div>

        <div className="text-center">
          <div className="relative w-[150px] h-[150px] mx-auto md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px]">
            <Image
              src="/images/profile.jpg"
              alt="Heeyeon Lee"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center my-6">
          <p className="mb-2 text-[var(--ui-black)]">Let&apos;s connect!</p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/heeyeonl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
            >
              <Linkedin size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 