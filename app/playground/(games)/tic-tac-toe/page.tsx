'use client';

import TicTacToeGame from '@/app/components/games/TicTacToeGame';
import PageContainer from '@/app/components/PageContainer';

export default function TicTacToe() {
  return (
    <PageContainer title="Tic Tac Toe" githubLink="https://github.com/heeyeonl/the-website/blob/main/app/components/games/TicTacToeGame.tsx">
      <TicTacToeGame />
    </PageContainer>
  );
}