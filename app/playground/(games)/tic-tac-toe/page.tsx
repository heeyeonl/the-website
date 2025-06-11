'use client';

import { useState } from 'react';
import TicTacToeGame from '@/app/components/games/TicTacToeGame';
import TicTacToePlusGame from '@/app/components/games/TicTacToePlusGame';
import PageContainer from '@/app/components/PageContainer';
import Toggle from '@/app/components/Toggle';

export default function TicTacToe() {
  const [isPlusOn, setIsPlusOn] = useState(false);
  return (
    <PageContainer title={isPlusOn ? "Tic Tac Toe +" : "Tic Tac Toe"} githubLink="https://github.com/heeyeonl/the-website/blob/main/app/components/games/TicTacToeGame.tsx">
      <div className="w-full flex justify-end">
        <Toggle props={{ isOn: isPlusOn, setIsOn: setIsPlusOn, label: 'Plus' }} />
      </div>
      {isPlusOn ? <TicTacToePlusGame /> : <TicTacToeGame />}
    </PageContainer>
  );
}