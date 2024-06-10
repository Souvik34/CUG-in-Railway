/* eslint-disable no-irregular-whitespace */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #CAF0F8, #4895EF, #4361EE, #020349)',
      },
    },
  },
  fontFamily: {
    sans: ["var(--font-noto)"]
  },
  plugins: [],
}

