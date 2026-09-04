/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#070710',
          900: '#0b0b16',
          850: '#0f0f1c',
          800: '#141424',
          700: '#1c1c30',
          600: '#262640',
          500: '#33334f',
        },
        accent: {
          DEFAULT: '#3b82f6',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        cyan2: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'blob': 'blob 18s ease-in-out infinite',
        'grid-fade': 'gridFade 8s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(30px,-40px) scale(1.1)' },
          '66%': { transform: 'translate(-20px,20px) scale(0.95)' },
        },
        gridFade: {
          '0%,100%': { opacity: '0.3' },
          '50%': { opacity: '0.5' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
