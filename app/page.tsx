'use client';


export default function Home() {
  return (
    <main className="h-[calc(100vh-4rem)] flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[deiya]">Product-minded Web Developer</h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl font-[brillant]">with a UX-first approach</h2>
        <p className="text-base md:text-lg">Making the web a more inclusive and delightful place, one pixel and breakpoint at a time.</p>
      </div>
    </main>
  );
}
