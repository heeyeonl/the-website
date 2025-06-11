"use client";

import PageContainer from "@/app/components/PageContainer";
import { Link2 } from "lucide-react";
import Tags from "@/app/components/Tags";
import Image from "next/image";
import FullScreenImageModal from "@/app/components/FullScreenImageModal";
import { useState } from "react";

export default function AiChatNpmPackage() {
    const tags = ['React', 'TypeScript', 'OpenAI - GPT-3.5 Turbo', 'Node.js', 'Render'];
    const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <PageContainer title="AI Chat NPM" githubLink="https://github.com/heeyeonl/chat-widget-package">
        <section>
            <Tags tags={tags} />
            <p>
                I built a simple AI powered chat widget that can be easily integrated into any website.
                It uses the OpenAI API to generate responses and can be customized with your own API key.
            </p>
            <div className="flex items-center gap-2 text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors group mt-4">
                <Link2 size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                <a href="https://www.npmjs.com/package/@heeyeonl/chat-widget" target="_blank" rel="noopener noreferrer">
                    Link to NPM package
                </a>
            </div>
        </section>

        <section className="mt-8">
            <h2 className="text-2xl font-sansita mt-8 mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-[var(--ui-black)]">
                <li>AI-powered responses (OpenAI GPT-3.5 Turbo)</li>
                <li>Customizable branding</li>
                <li>Live chat UI</li>
                <li>Center-controlled maintenance mode</li>
                <li>Responsive design</li>
            </ul>
        </section>

        <section className="mt-8">
            <Image 
                src="/images/ai-chat.png" 
                alt="AI Chat Desktop"
                width={800}
                height={600}
                className="w-full h-auto cursor-pointer"
                onClick={() => setSelectedImage({src: "/images/ai-chat.png", alt: "AI Chat Desktop"})}
            />
        </section>

        <FullScreenImageModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </PageContainer>
  )
}