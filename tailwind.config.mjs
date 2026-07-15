/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        neo: {
          bg: '#fdfaf6',
          black: '#111111',
          white: '#ffffff',
          primary: '#ffde59', /* Yellow */
          secondary: '#ff90e8', /* Pink */
          accent: '#90f4ff', /* Blue */
          success: '#b8ff90', /* Green */
        }
      },
      boxShadow: {
        'neo': '4px 4px 0px 0px #111111',
        'neo-sm': '2px 2px 0px 0px #111111',
        'neo-lg': '8px 8px 0px 0px #111111',
      }
    },
  },
  plugins: [],
};
