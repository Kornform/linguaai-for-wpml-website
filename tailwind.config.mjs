/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#07080e',
        surface: '#0d0e17',
        card: '#111320',
        'card-hover': '#151828',
        border: '#1c1f30',
        primary: {
          DEFAULT: '#6366f1',
          light: '#818cf8',
          dark: '#4f46e5',
          glow: 'rgba(99,102,241,0.25)',
        },
        cyan: {
          accent: '#22d3ee',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(99,102,241,0.18)',
        'glow-sm': '0 0 20px rgba(99,102,241,0.12)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-up': 'fadeUp 0.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
