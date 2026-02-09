"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./context/ThemeContext";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col width-fit sm:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 xl:px-30 gap-6">
      <Image 
        src={theme === 'dark' ? "/images/web-drawing-white.png" : "/images/web-drawing-black.png"}
        alt="Web Drawing" 
        width={800} 
        height={800} 
        className="w-full md:w-1/2"
      />
      <div className="flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-2xl lg:text-4xl font-bold font-[deiya]">Product-minded</h1>
        <h1 className="text-2xl lg:text-4xl font-bold font-[deiya]">Software Engineer</h1>
        <h2 className="text-md md:text-xl font-[brillant]">with a UX-first approach</h2>
        <p className="text-base md:text-lg">Making the web a more inclusive and delightful place, one pixel at a time.</p>
        <Link
          href="/projects"
          className={`${theme === 'dark' ? 'bg-[var(--foreground)]' : 'bg-[var(--ui-white)]'} group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 px-6 font-medium transition-all duration-100 ${theme === 'dark' ? '[box-shadow:5px_5px_rgb(255_255_255)]' : '[box-shadow:5px_5px_rgb(0_0_0)]'} active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(0_0_0)] hover:cursor-pointer`}
        >
          See Projects
        </Link>
      </div>
    </main>
  );
}
