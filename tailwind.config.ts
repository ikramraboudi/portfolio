import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        denim: {
          50: '#F2F6FA',
          100: '#E1EBF5',
          200: '#C3D7EB',
          300: '#A4C3E1',
          400: '#8FB0D6',
          500: '#5B7FA6',
          600: '#4A6A8F',
          700: '#395372',
          800: '#2A3D55',
          900: '#1D2A3B',
        },
        rose: {
          soft: '#F6E3E0',
          powder: '#E8B9B3',
          dark: '#D9A7A1',
        },
        sage: {
          soft: '#EAF3EC',
          badge: '#8FB79B',
          dark: '#769E82',
        },
        bg: {
          light: '#FAF7F2',
          dark: '#141A23',
        },
        surface: {
          light: '#FFFFFF',
          softLight: '#F3EEE7',
          dark: '#1D2530',
          softDark: '#252E3B',
        },
        content: {
          mainLight: '#26303B',
          secLight: '#6B7684',
          mainDark: '#ECE8E1',
          secDark: '#A5AFBC',
        },
        line: {
          light: '#E7E0D6',
          dark: '#2F3947',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(91, 127, 166, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 30px -4px rgba(91, 127, 166, 0.12), 0 4px 12px -2px rgba(0, 0, 0, 0.05)',
        'soft-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.35)',
      },
    },
  },
  plugins: [],
} satisfies Config;
