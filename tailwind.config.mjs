/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#e0c9a6',
          50: '#faf6f0',
          100: '#f5ede0',
          200: '#ebdcc5',
          300: '#e0c9a6',
          400: '#cfb186',
          500: '#bd9665',
          600: '#a37a4b',
          700: '#835f3b',
          800: '#694c32',
          900: '#533c2a',
        },
      },
      fontFamily: {
        serif: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
