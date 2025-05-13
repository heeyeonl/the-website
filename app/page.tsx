export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to My Website
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            I&apos;m a passionate developer creating innovative solutions through code.
            Explore my projects, games, and learn more about my journey in tech.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/projects"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              View Projects
            </a>
            <a
              href="/about"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Learn More <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
