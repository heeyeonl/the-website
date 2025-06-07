import ProjectContainer from "@/app/components/ProjectContainer";

export default function MyWebsite() {
  return (
    <ProjectContainer title="My Website" githubLink="https://github.com/heeyeonl/the-website">
      <p className="text-lg text-[var(--ui-black)] mb-6">
        This is my personal website built with Next.js and Tailwind CSS. I wanted to create a space where I can showcase my projects and share my thoughts.
      </p>

      <h2 className="text-2xl font-sansita mt-8 mb-4">Technologies Used</h2>
      <ul className="list-disc list-inside space-y-2 text-[var(--ui-black)]">
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Lucide Icons</li>
        <li>Vercel</li>
      </ul>
    </ProjectContainer>
  );
}
