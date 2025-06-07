import ProjectContainer from "@/app/components/ProjectContainer";
import { Link2 } from "lucide-react";
import Tags from "@/app/components/Tags";
import Image from "next/image";

export default function AiChatNpmPackage() {
    const tags = ['React', 'TypeScript', 'OpenAI - GPT-3.5 Turbo', 'Node.js', 'Render'];
    
  return (
    <ProjectContainer title="AI Chat NPM Package" githubLink="https://github.com/heeyeonl/chat-widget-package">
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
            <h2 className="text-2xl font-sansita mb-6">Key Features</h2>
            <ul className="list-none list-inside space-y-2 text-[var(--ui-black)]">
                <li><b>🤖 AI-Powered Responses</b> Uses OpenAI GPT-3.5 Turbo for natural, contextual replies</li>
                <li><b>🎨 Customizable Branding</b> Easily set your own logo, title, subtitle, and brand colors</li>
                <li><b>💬 Live Chat UI</b> Smooth interface with auto-scroll and typing support</li>
                <li><b>🛠️ Maintenance Mode</b> Gracefully disables input and shows a banner when offline</li>
                <li><b>📱 Responsive Design</b> Mobile-friendly, works across all screen sizes</li>
                <li><b>🔐 Secure Architecture</b> API key remains server-side; frontend communicates via API</li>
            </ul>
        </section>
        <section className="mt-8">
            <Image 
                src="/ai-chat.png" 
                alt="AI Chat Desktop"
                width={800}
                height={600}
                className="w-full h-auto"
            />
        </section>
    </ProjectContainer>
  )
}