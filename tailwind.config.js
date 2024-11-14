/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xxs': '0.5rem', // 10px
        'xxxs': '0.25rem',  // 8px
      },
    },
  },
  plugins: [],
}

