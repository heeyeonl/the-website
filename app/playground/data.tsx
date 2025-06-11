import React from 'react';
import { Hexagon, SquarePercent, Plus, LayoutList } from 'lucide-react';

export interface GameCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  status: number;
  statusColor?: string;
  tags?: string[];
  actionLabel?: string;
}

export interface ToolCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  status: number;
  statusColor?: string;
  tags?: string[];
  actionLabel?: string;
}

export const CardStatus = {
  available: 0,
  comingSoon: 1,
  inProgress: 2,
}

export const games: GameCard[] = [
  {
    title: "Hexagon",
    description: "Inspired by a Korean TV show's famous game, players recall tile numbers on a hex grid to match a target sum and score points.",
    href: "/playground/hexagon",
    icon: <Hexagon size={32} />,
    status: CardStatus.available,
    actionLabel: 'Play Now',
  },
  {
    title: "Tic Tac Toe +",
    description: "Play classic Tic Tac Toe, or toggle to Infinite Tic Tac Toe! Once the board's full, replace your oldest moves and keep the game going—endless strategy and chaos!",
    href: "/playground/tic-tac-toe",
    icon: <SquarePercent size={32} />,
    status: CardStatus.available,
    actionLabel: 'Play Now',
  },
  {
    title: "More Games",
    description: "More exciting games are in development! Stay tuned for new additions to the game collection.",
    href: "#",
    icon: <Plus size={32} />,
    status: CardStatus.comingSoon,
  }
];

export const tools: ToolCard[] = [
  {
    title: "To Do",
    description: "A simple to-do list app that allows you to add, edit, and delete tasks.",
    href: "/playground/to-do",
    icon: <LayoutList size={32} />,
    status: CardStatus.inProgress,
    actionLabel: 'Play Now',
  },
  // {
  //   title: "Egg Timer",
  //   description: "A simple egg timer that allows you to set the time for an egg to boil.",
  //   href: "/playground/egg-timer",
  //   icon: <Hourglass size={32} />,
  //   status: CardStatus.comingSoon,
  //   actionLabel: 'Play Now',
  // },
  {
    title: "More Tools",
    description: "More exciting tools are in development! Stay tuned for new additions to the tool collection.",
    href: "#",
    icon: <Plus size={32} />,
    status: CardStatus.comingSoon,
  }
]; 