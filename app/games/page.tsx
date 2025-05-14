'use client';

import { Gamepad2, Plus } from 'lucide-react';
import Card from '../components/Card';

interface GameCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  status: 'available' | 'coming-soon';
  statusColor?: string;
  tags: string[];
}

const games: GameCard[] = [
  {
    title: "Hexagon Game",
    description: "A challenging puzzle game where you need to match colors in a hexagonal grid. Test your strategic thinking and pattern recognition skills.",
    href: "/games/hexagon",
    icon: <Gamepad2 size={32} />,
    status: 'available',
    tags: ['React', 'TypeScript', 'Game Logic']
  },
  {
    title: "Tic Tac Toe",
    description: "The classic game of X's and O's with a modern twist. Play against a friend or challenge the AI opponent with different difficulty levels.",
    href: "/games/tic-tac-toe",
    icon: <Gamepad2 size={32} />,
    status: 'coming-soon',
    tags: ['React', 'AI', 'Multiplayer']
  },
  {
    title: "More Games",
    description: "More exciting games are in development! Stay tuned for new additions to the game collection.",
    href: "#",
    icon: <Plus size={32} />,
    status: 'coming-soon',
    tags: []
  }
];

export default function Games() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-center gap-4 mb-8">
        <Gamepad2 size={40} className="text-[var(--secondary-color)]" />
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">games</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card
            key={game.title}
            title={game.title}
            description={game.description}
            icon={game.icon}
            iconColor={game.statusColor}
            href={game.href}
            tags={game.tags}
            status={game.status}
          />
        ))}
      </div>
    </div>
  );
} 