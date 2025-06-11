'use client';

import { useState } from 'react';
import TicTacToeGame from '@/app/components/games/TicTacToeGame';
import TicTacToePlusGame from '@/app/components/games/TicTacToePlusGame';
import PageContainer from '@/app/components/PageContainer';
import Toggle from '@/app/components/Toggle';

export default function TicTacToe() {
  const [isPlusOn, setIsPlusOn] = useState(0);

  const gameMode = [
    {
      name: "Tic Tac Toe",
      githubLink: "https://github.com/heeyeonl/the-website/blob/main/app/components/games/TicTacToeGame.tsx"
    },
    {
      name: "Tic Tac Toe +",
      githubLink: "https://github.com/heeyeonl/the-website/blob/main/app/components/games/TicTacToePlusGame.tsx"
    }
  ]
  return (
    <PageContainer title={gameMode[isPlusOn].name} githubLink={gameMode[isPlusOn].githubLink}>
      <div className="w-full flex justify-end">
        <Toggle props={{ isOn: isPlusOn === 1, setIsOn: () => setIsPlusOn(isPlusOn === 1 ? 0 : 1), label: 'Plus' }} />
      </div>
      {isPlusOn ? <TicTacToePlusGame /> : <TicTacToeGame />}
    </PageContainer>
  );
}