import PageContainer from "@/app/components/PageContainer";
// import GitHubContributions from '@/app/components/GitHubCalendar';

export default function Grind() {
  return (
    <PageContainer title="Grind" githubLink="https://github.com/heeyeonl/grind">
      <p className="text-lg text-gray-600 mb-6">
        I wanted to master data structures and algorithms (DSA), so I built a collection of projects. My goal is to add more files to this repository as I learn more about DSA!
      </p>
      {/* <div className="mb-12">
        <h2 className="text-2xl font-sansita mb-4">My GitHub Contributions</h2>
        <GitHubContributions />
      </div> */}
    </PageContainer>
  );
}
