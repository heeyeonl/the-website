"use client";

import PageContainer from "@/app/components/PageContainer";
import { Link2, Rocket, Server, Monitor, Database, Cloud, Bot, Users, Wrench, BarChart3 } from "lucide-react";
import Tags from "@/app/components/Tags";

export default function Palette() {
  const tags = [
    "React",
    "TanStack Start",
    "TanStack Router",
    "TypeScript",
    "Node.js",
    "Tailwind CSS",
    "Radix UI",
    "tldraw",
    "InstantDB",
    "Mux",
    "AWS S3",
    "Google Gemini API",
    "Vercel",
    "Storybook",
    "PostHog",
  ];

  return (
    <PageContainer title="Palette Tools">
      <section>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="bg-[var(--accent)] text-white text-xs font-semibold px-3 py-1 rounded-full">
            CTO & Co-Founder
          </span>
          <span className="bg-[var(--ui-black)]/10 text-[var(--ui-black)] text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
            <Rocket size={12} />
            VC Backed by StartUp Ignition
          </span>
        </div>

        <Tags tags={tags} />

        <p className="text-[var(--ui-black)] leading-relaxed">
          Palette is the all-in-one platform helping filmmakers run their studio—from
          animation shops and YouTubers to in-house content teams. As CTO & Co-Founder,
          I&apos;m building Palette from zero to one: leading architecture and product
          development, translating artist workflows into scalable technical
          primitives like versioning, attribution, and remixing, and owning engineering end to end.
        </p>

        <div className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group mt-4">
          <Link2
            size={16}
            className="group-hover:rotate-45 transition-transform duration-300"
          />
          <a
            href="https://www.palette.tools/"
            target="_blank"
            rel="noopener noreferrer"
          >
            palette.tools
          </a>
        </div>
      </section>

      {/* What I Do */}
      <section className="mt-10">
        <h2 className="text-2xl font-[deiya] mb-4">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <RoleCard
            icon={<Server size={20} />}
            title="Technical Architecture"
            description="Designing the entire system from the ground up—choosing the right primitives for creative workflows, real-time collaboration, and media-heavy infrastructure."
          />
          <RoleCard
            icon={<Monitor size={20} />}
            title="Full-Stack Development"
            description="Owning the entire product surface from pixel-perfect UI with React and Radix UI to backend services on Node.js, all type-safe with TypeScript and Zod."
          />
          <RoleCard
            icon={<Users size={20} />}
            title="Engineering Leadership"
            description="Setting the technical direction, making key architectural decisions, and establishing engineering practices as we scale from zero to one."
          />
          <RoleCard
            icon={<Bot size={20} />}
            title="AI Integration"
            description="Building AI-powered features with Google Gemini API—like Auto Setup, where users upload a script or describe a project and get a ready-to-edit structure in seconds."
          />
        </div>
      </section>

      {/* Tech Stack Deep Dive */}
      <section className="mt-10">
        <h2 className="text-2xl font-[deiya] mb-4">Tech Stack</h2>
        <div className="space-y-6">
          <StackSection
            icon={<Monitor size={18} />}
            title="Frontend"
            items={[
              "React with TanStack Start & TanStack Router for a type-safe, file-based routing experience",
              "Tailwind CSS and Radix UI for a consistent, accessible component system",
              "tldraw for the canvas-based frame-by-frame drawover and annotation tools",
              "TipTap for rich text editing across comments, notes, and descriptions",
              "Zod and React Hook Form for robust form validation",
              "Storybook for isolated component development and documentation",
            ]}
          />
          <StackSection
            icon={<Server size={18} />}
            title="Backend & Services"
            items={[
              "Node.js for server-side logic and API endpoints",
              "Mux for video ingestion, transcoding, and streaming",
              "Clerk for authentication and user management",
              "Stripe for subscription billing and payment processing",
              "SendGrid for transactional email delivery",
              "Google Gemini API for AI-powered features like Auto Setup",
            ]}
          />
          <StackSection
            icon={<Database size={18} />}
            title="Data & Real-Time"
            items={[
              "InstantDB for real-time, reactive data synchronization across clients",
              "Asset versioning system for tracking changes and promoting primary versions",
              "AWS S3 for scalable file and media storage",
            ]}
          />
          <StackSection
            icon={<Wrench size={18} />}
            title="Tooling & Infrastructure"
            items={[
              "Vite for fast builds and hot module replacement",
              "Vercel for hosting and edge deployments",
              "PostHog for product analytics and user insights",
              "pnpm for dependency management",
              "ESLint for code quality and consistency",
            ]}
          />
        </div>
      </section>

      {/* Platform Highlights */}
      <section className="mt-10">
        <h2 className="text-2xl font-[deiya] mb-4">Platform Highlights</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Frame-by-Frame Drawover",
              desc: "Built with tldraw—draw over, comment, and tag teammates directly on video frames and stills.",
            },
            {
              title: "Live Boards",
              desc: "Real-time collaborative boards powered by InstantDB, perfect for art walls and style guides.",
            },
            {
              title: "Timeline",
              desc: "Visual planning and task assignment connected to assets and deliverables.",
            },
            {
              title: "Versioning",
              desc: "Auto-track versions and changes, then promote the best as primary.",
            },
            {
              title: "AI Auto Setup",
              desc: "Powered by Google Gemini—describe your project and get a ready-to-edit structure in seconds.",
            },
            {
              title: "Video Streaming",
              desc: "Mux-powered video ingestion and adaptive streaming for seamless review workflows.",
            },
          ].map((feature) => (
            <div
              key={feature.title}
              className="border border-[var(--ui-black)]/15 rounded-lg p-4 bg-[var(--ui-black)]/[0.02]"
            >
              <h3 className="font-semibold text-[var(--ui-black)] mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--ui-black)]/70">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Palette Toolkit */}
      <section className="mt-10">
        <h2 className="text-2xl font-[deiya] mb-4">Palette Toolkit</h2>
        <p className="text-[var(--ui-black)] leading-relaxed">
          Beyond the core platform, I&apos;m building the Palette Toolkit—a developer SDK
          that lets studios build custom pipelines and integrations on top of Palette.
          This includes API access, custom AI agents, and self-hosting options for
          enterprise clients.
        </p>
      </section>
    </PageContainer>
  );
}

/* ── Helper Components ─────────────────────────────────────────── */

function RoleCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="border border-[var(--ui-black)]/15 rounded-lg p-4 flex gap-3">
      <div className="text-[var(--accent)] mt-0.5 shrink-0">{icon}</div>
      <div>
        <h3 className="font-semibold text-[var(--ui-black)] mb-1">{title}</h3>
        <p className="text-sm text-[var(--ui-black)]/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

function StackSection({
  icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[var(--accent)]">{icon}</span>
        <h3 className="font-semibold text-[var(--ui-black)]">{title}</h3>
      </div>
      <ul className="list-disc list-inside space-y-1 text-[var(--ui-black)]/80 text-sm ml-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
