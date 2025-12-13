/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#1e40af',
        secondary: '#0ea5e9',
      },
      // TAMBAHKAN BREAKPOINT EXTRA untuk stretching yang lebih smooth
      screens: {
        'xs': '375px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}