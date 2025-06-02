/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6', // Changed to blue-500
        'primary-dark': '#60a5fa', // Changed to blue-400
        secondary: '#10b981', // Changed to emerald-500
        'secondary-dark': '#34d399', // Changed to emerald-400
        accent: '#8b5cf6', // Changed to violet-500
        'accent-dark': '#a78bfa', // Changed to violet-400
        success: '#22c55e',
        warning: '#eab308',
        error: '#ef4444',
        'light-bg': '#f9fafb',
        'dark-bg': '#111827',
        'light-text': '#1f2937',
        'dark-text': '#f3f4f6',
        'dark-card': '#1e293b',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        typing: 'typing 3.5s steps(40, end)',
        blink: 'blink .75s step-end infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          from: { borderColor: 'transparent' },
          to: { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
      },
    },
  },
  plugins: [],
};