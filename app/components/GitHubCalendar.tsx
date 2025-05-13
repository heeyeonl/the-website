'use client';

import GitHubCalendar from 'react-github-calendar';

export default function GitHubContributions() {
  return (
    <div className="w-full overflow-x-auto py-4">
      <div className="min-w-[720px] flex justify-center">
        <GitHubCalendar
          username="heeyeonl"
          colorScheme="light"
          fontSize={12}
          blockSize={10}
          blockMargin={4}
          theme={{
            light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
          }}
        />
      </div>
    </div>
  );
} 