'use client';

import { Hand, Linkedin, Github, Store, Mail } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex justify-center py-20">
      <div className="max-w-[500px] px-4">
        <div className="flex items-center gap-2">
          <Hand size={22} className="text-gray-700" />
          <p>Hello, nice to meet you! :)</p>
        </div>
        
        <h1 className="text-3xl font-bold my-4">About me</h1>
        
        <div className="flex flex-col gap-6 mb-9">
          <p>
            I am Heeyeon Lee, a Front-end Engineer with 5 years of industry experience.
            I graduated with a Computer Science degree from Brigham Young University, Provo, Utah.
          </p>
          <p>
            I&apos;ve always been drawn to art and visual storytelling, which naturally led me to front-end development. With 5 years of experience as a front-end engineer, I love building interfaces that feel thoughtful, intuitive, and beautiful. I specialize in transforming manual workflows into scalable, self-serviceable products that empower users and reduce operational overhead.
          </p>
          <p>
            Outside of work, I love spending time on creative hobbies like knitting and unwinding with games—whether competitive, strategic, or cozy.
          </p>
        </div>

        <div className="text-center">
          <div className="relative w-[300px] h-[300px] mx-auto md:w-[200px] md:h-[200px]">
            <Image
              src="/profile.jpg"
              alt="Heeyeon Lee"
              fill
              className="rounded-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="text-center my-6">
          <p className="mb-2">Let&apos;s connect!</p>
          <div className="flex justify-center gap-4">
            <a 
              href="mailto:heeyeon.lee0@gmail.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-red-500 hover:text-red-600 transition-colors"
            >
              <Mail size={32} />
            </a>
            <a 
              href="https://www.linkedin.com/in/heeyeonl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-blue-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={32} />
            </a>
            <a 
              href="https://github.com/heeyeonl"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-gray-700 hover:text-gray-800 transition-colors"
            >
              <Github size={32} />
            </a>
            <a 
              href="http://etsy.com/shop/HeeyeonKnits"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-orange-500 hover:text-orange-600 transition-colors"
            >
              <Store size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 