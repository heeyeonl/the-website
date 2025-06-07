"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[deiya]">
          Product-minded Web Developer
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-[brillant]">
          with a UX-first approach
        </h2>
        <p className="text-base md:text-lg">
          Making the web a more inclusive and delightful place, one pixel and
          breakpoint at a time.
        </p>
        <Link
          href="/projects"
          className="bg-[var(--ui-white)] group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border-2 px-6 font-medium transition-all duration-100 [box-shadow:5px_5px_rgb(0_0_0)] active:translate-x-[3px] active:translate-y-[3px] active:[box-shadow:0px_0px_rgb(0_0_0)] hover:cursor-pointer"
        >
          See Projects
        </Link>
      </div>
    </main>
  );
}
