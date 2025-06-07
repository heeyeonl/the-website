'use client';

import HexagonGame from '@/app/components/games/HexagonGame';
import PageContainer from '@/app/components/PageContainer';

export default function HexagonGamePage() {
  return (
    <PageContainer title="Hexagon" githubLink="https://github.com/heeyeonl/the-website/blob/main/app/components/games/HexagonGame.tsx">
      <HexagonGame />
    </PageContainer>
  );
} 