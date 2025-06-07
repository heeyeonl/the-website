import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'ui': {
          'white': '#FFFFFF',
          '000': '#f7ede2',
          'black': '#0D0D0D',
        },
        'primary': {
          DEFAULT: '#ef233c',
          hover: '#d90429',
        },
        'secondary': {
          DEFAULT: '#588157',
          hover: '#3a5a40',
        },
      },
      fontFamily: {
        'avenir': ['var(--font-avenir)', 'sans-serif'],
        'agraham': ['var(--font-agraham)', 'sans-serif'],
        'brillant': ['var(--font-brillant)', 'sans-serif'],
        'specialelite': ['var(--font-specialelite)', 'sans-serif'],
        'quivert': ['var(--font-quivert)', 'sans-serif'],
        'deiya': ['var(--font-deiya)', 'sans-serif'],
      },
      keyframes: {
        fade: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        'tilt-shaking': {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '75%': { transform: 'rotate(-2deg)' },
        }
      },
      animation: {
        fade: 'fade 5s infinite',
        'tilt-shaking': 'tilt-shaking 1s infinite'
      },
      boxShadow: {
        'custom': '0 3px 10px rgb(0 0 0 / 0.1)',
      }
    },
  },
  plugins: [],
};

export default config; 