import PageContainer from "@/app/components/PageContainer";
import Tags from "@/app/components/Tags";
import { Link2 } from "lucide-react";

const CoinbaseSocial = () => {
  const tags = [
    "React",
    "TypeScript",
    "UX design",
    "Figma",
    "Tailwind CSS",
    "Material UI",
    "Vercel",
    "Mobbin",
  ];

  return (
    <PageContainer
      title="Coinbase Social"
      githubLink="https://github.com/heeyeonl/coinbase-social"
    >
      {/* Header */}
      <section>
        <Tags tags={tags} />
        <p>
          As I prepare for the interview with Coinbase, I thought about how I
          can help with their growth. One thing that came to my mind was that
          Coinbase is a single player app, so I thought it would be cool to have
          a starting point for a social feature to share what the most assests
          you have or see what your friends are doing.
        </p>
        <div className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group mt-4">
          <Link2
            size={16}
            className="group-hover:rotate-45 transition-transform duration-300"
          />
          <a
            href="https://coinbase-social-hackathon.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link to mock Coinbase with Social Feature
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-sansita mt-8 mb-4">Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-[var(--ui-black)]">
        <li>
            <strong>Onboarding process</strong>
          </li>
          <li>
            <strong>Social Tab</strong>
          </li>
          <li>
            <strong>Seachbar with People</strong>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-sansita mt-8 mb-4">Development Process</h2>
        <p className="mb-4">
          This project involved a lot of research and product design on top of learning how Coinbase articulates their design choices and user experience.
        </p>
        <ol className="list-decimal list-inside space-y-2 text-[var(--ui-black)]">
          <li>
            <strong>Iterating ideas</strong> - I iterated on the idea of a social feature for Coinbase, how it looks and what it does. Some of the ideas I had were: 
            <ul className="list-disc list-inside space-y-2 text-[var(--ui-black)]"> 
                <li>Referral quest</li>
                <li></li>
            </ul>
          </li>
        </ol>
      </section>


    </PageContainer>
  );
};

export default CoinbaseSocial;
