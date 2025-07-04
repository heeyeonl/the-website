import PageContainer from "@/app/components/PageContainer";
import Tags from "@/app/components/Tags";

export default function MyWebsite() {
  const tags = ['Next.js', 'Tailwind CSS', 'Lucide Icons', 'Vercel'];

  return (
    <PageContainer title="My Website" githubLink="https://github.com/heeyeonl/the-website">
      <Tags tags={tags} />
      <p className="text-lg text-[var(--ui-black)] mb-6">
        This is my personal website built with Next.js and Tailwind CSS. I wanted to create a space where I can showcase my projects and share my thoughts.
      </p>
    </PageContainer>
  );
}
