import React from 'react';
import { Hexagon, SquarePercent, Plus, Hourglass, Dice4 } from 'lucide-react';

export interface GameCard {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  status: number;
  statusColor?: string;
  tags?: string[];
  actionLabel?: string;
  isHighlighted?: boolean;
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
  isHighlighted?: boolean;
}

export const CardStatus = {
  available: 0,
  comingSoon: 1,
  inProgress: 2,
}

export const games: GameCard[] = [
  {
    title: "Tic Tac Toe ∞",
    description: "Play Infinite Tic Tac Toe! (Or toggle to classic Tic Tac Toe) Once the board's full, replace your oldest moves to keep the game going!",
    href: "/playground/tic-tac-toe",
    icon: <SquarePercent size={32} />,
    status: CardStatus.available,
    actionLabel: 'Play Now',
    isHighlighted: true,
  },
  {
    title: "Connect 4",
    description: "A classic game where two players race to connect four discs in a row—simple, quick, and super fun!",
    icon: <Dice4 size={32} />,
    href: "/playground/connect-4",
    status: CardStatus.available,
    actionLabel: 'Play Now',
  },
  {
    title: "Hexagon",
    description: "Inspired by a Korean TV show's famous game, players recall tile numbers on a hex grid to match a target sum and score points.",
    href: "/playground/hexagon",
    icon: <Hexagon size={32} />,
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
  // {
  //   title: "To Do",
  //   description: "A simple to-do list app that allows you to add, edit, and delete tasks.",
  //   href: "/playground/to-do",
  //   icon: <LayoutList size={32} />,
  //   status: CardStatus.inProgress,
  //   actionLabel: 'Play Now',
  // },
  {
    title: "Pasta Timer",
    description: "A simple pasta timer to help you cook your pasta perfectly al dente.",
    href: "/playground/egg-timer",
    icon: <Hourglass size={32} />,
    status: CardStatus.inProgress,
    actionLabel: 'Play Now',
  },
  {
    title: "More Tools",
    description: "More exciting tools are coming!",
    href: "#",
    icon: <Plus size={32} />,
    status: CardStatus.comingSoon,
  }
]; 