'use client';

import { Gamepad2, PencilRuler } from 'lucide-react';
import Card from '../components/Card';
import { games, tools, GameCard, ToolCard } from './data';

export default function Games() {
  return (
    <>
        {/* Tools */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-5">
          <div className="flex items-center gap-4 mb-4">
            <PencilRuler size={40} className="text-[var(--foreground)]" />
            <h1 className="text-3xl font-bold text-[var(--ui-black)]">tools</h1>
          </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tools.map((tool: ToolCard) => (
                <Card
                    key={tool.title}
                    title={tool.title}
                    description={tool.description}
                    icon={tool.icon}
                    href={tool.href}
                    status={tool.status}
                    actionLabel={tool.actionLabel}
                />
            ))}
            </div>
        </div>

        {/* Games */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 pb-10">
            <div className="flex items-center gap-4 mb-4">
                <Gamepad2 size={40} className="text-[var(--foreground)]" />
                <h1 className="text-3xl font-bold text-[var(--ui-black)]">games</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {games.map((game: GameCard) => (
                <Card
                    key={game.title}
                    title={game.title}
                    description={game.description}
                    icon={game.icon}
                    iconColor={game.statusColor}
                    href={game.href}
                    tags={game.tags}
                    status={game.status}
                    actionLabel={game.actionLabel}
                />
                ))}
            </div>
        </div>
    </>
  );
} 