import type { Config } from "tailwindcss";
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FDF5ED',  // Lightest shade
          100: '#FAEAD9',
          200: '#F4D5B5',
          300: '#EEC092',
          400: '#E5A66E',
          500: '#DC8C3C',  // Base color
          600: '#B06C2A',
          700: '#854F1D',
          800: '#5A3413',
          900: '#2E1A0A',  // Darkest shade
        },
        secondary: {
          50: '#EAEAEB',  // Lightest shade
          100: '#D4D5D7',
          200: '#AAABAF',
          300: '#808287',
          400: '#56585F',
          500: '#282A2E',  // Base color
          600: '#202225',
          700: '#18191C',
          800: '#101113',
          900: '#080809',  // Darkest shade
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        orbitron: ['var(--font-orbitron)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
      },
      fontWeight: {
        bold: '700',
      },
    },
  },
  plugins: [
    typography,
  ],
} satisfies Config;

