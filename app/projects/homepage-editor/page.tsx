'use client';

import Image from 'next/image';

export default function HomepageEditor() {
  const projectImages = [
    { id: 1, src: '/homepage-editor/homepage-editor-1.jpeg', alt: 'Homepage Editor Screenshot 1' },
    { id: 2, src: '/homepage-editor/homepage-editor-2.jpeg', alt: 'Homepage Editor Screenshot 2' },
    { id: 3, src: '/homepage-editor/homepage-editor-3.jpeg', alt: 'Homepage Editor Screenshot 3' },
    { id: 4, src: '/homepage-editor/homepage-editor-4.jpeg', alt: 'Homepage Editor Screenshot 4' },
    { id: 5, src: '/homepage-editor/homepage-editor-5.jpeg', alt: 'Homepage Editor Screenshot 5' },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Project Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-sansita mb-4">Homepage Editor</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-6">
            A web-based tool that allows users to customize and preview their homepage layouts in real-time.
            Built with modern web technologies to provide a seamless editing experience.
          </p>
          
          <h2 className="text-2xl font-sansita mt-8 mb-4">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Real-time preview of homepage layouts</li>
            <li>Drag-and-drop interface for easy customization</li>
            <li>Responsive design testing capabilities</li>
            <li>Component library with customizable elements</li>
            <li>Export functionality for implemented designs</li>
          </ul>

          <h2 className="text-2xl font-sansita mt-8 mb-4">Technologies Used</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Vue.js for the frontend interface</li>
            <li>CSS/Sass for styling</li>
          </ul>
        </div>
      </header>

      {/* Project Screenshots */}
      <section>
        <h2 className="text-2xl font-sansita mb-6">Project Screenshots</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectImages.map((image) => (
            <div key={image.id} className="relative">
              <div className="aspect-video relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mt-2 text-sm text-gray-500 text-center">
                {`Interface View ${image.id}`}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Details */}
      <section className="mt-16">
        <h2 className="text-2xl font-sansita mb-6">Development Process</h2>
        <div className="prose max-w-none text-gray-600">
          <p className="mb-4">
            The Homepage Editor project was developed with a focus on providing a user-friendly interface
            for creating and customizing website layouts. The development process involved several key stages:
          </p>
          
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>Initial Planning:</strong> Research and wireframing to determine the most intuitive
              user interface for homepage editing.
            </li>
            <li>
              <strong>Component Development:</strong> Creating a library of reusable components that users
              can drag and drop into their layouts.
            </li>
            <li>
              <strong>Real-time Preview:</strong> Implementing a live preview system that updates as users
              make changes to their design.
            </li>
            <li>
              <strong>Responsive Testing:</strong> Adding tools to test and adjust layouts across different
              screen sizes.
            </li>
            <li>
              <strong>Export System:</strong> Developing a clean export system that generates production-ready
              code for the designed layouts.
            </li>
          </ol>
        </div>
      </section>
    </main>
  );
}