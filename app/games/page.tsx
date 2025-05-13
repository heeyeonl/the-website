'use client';

import Link from 'next/link';
import { Brain, Gamepad, Plus } from 'lucide-react';

interface GameCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  status: 'available' | 'coming-soon';
}

const games: GameCard[] = [
  {
    title: "Hexagon",
    description: "A memory game from 'The Devil's Plan' where you need to find combinations of numbers that add up to a target sum.",
    href: "/games/hexagon",
    icon: <Brain size={32} />,
    status: 'available'
  },
  {
    title: "Coming Soon",
    description: "More exciting games are on the way! Stay tuned for new additions to our game collection.",
    href: "#",
    icon: <Plus size={32} />,
    status: 'coming-soon'
  }
];

export default function Games() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex items-center gap-4 mb-8">
        <Gamepad size={40} className="text-blue-500" />
        <h1 className="text-3xl font-bold">Games</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.title}
            className={`border rounded-lg p-6 shadow-sm transition-all duration-300 ${
              game.status === 'available'
                ? 'hover:shadow-md hover:-translate-y-1 bg-white'
                : 'bg-gray-50'
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`${game.status === 'available' ? 'text-blue-500' : 'text-gray-400'}`}>
                {game.icon}
              </div>
              <h2 className="text-xl font-semibold">{game.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{game.description}</p>
            {game.status === 'available' ? (
              <Link
                href={game.href}
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Play Now
              </Link>
            ) : (
              <span className="inline-block bg-gray-200 text-gray-600 px-4 py-2 rounded-md cursor-not-allowed">
                Coming Soon
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
} 