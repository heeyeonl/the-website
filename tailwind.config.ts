import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
      animation: {
        fade: 'fade 5s infinite'
      }
    },
  },
  plugins: [],
};

export default config; 