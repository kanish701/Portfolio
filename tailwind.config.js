/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#60a5fa',
        },
        secondary: {
          DEFAULT: '#10b981',
          dark: '#34d399',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          dark: '#a78bfa',
        },
        // Custom background colors for a richer feel
        'light-bg': '#f8fafc', // Slate 50
        'dark-bg': '#0f172a', // Slate 900
        'light-card': '#ffffff',
        'dark-card': '#1e293b', // Slate 800

        // Text colors
        'light-text-primary': '#1e293b', // Slate 800
        'light-text-secondary': '#475569', // Slate 600
        'dark-text-primary': '#f8fafc', // Slate 50
        'dark-text-secondary': '#94a3b8', // Slate 400
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right bottom, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1))',
      }
    },
  },
  plugins: [],
};