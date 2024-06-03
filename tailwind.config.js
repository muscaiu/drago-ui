/** @type {import('tailwindcss').Config} */

export default {
  content: [
    // reference the library only
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'code-dark': '#121212',
      },
    },
  },
  plugins: [],
};
