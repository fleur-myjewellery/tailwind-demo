/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
      colors: {
        'primary': {
          500: 'var(--primary-500)'
        },
        'pink': {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        },
        'beige': {
          50: '#fefcf6',
          100: '#fdf8e3',
          200: '#fbf1c7',
          300: '#f3e2a2',
          400: '#e6cd77',
          500: '#d1b555',
          600: '#b1973d',
          700: '#8e752f',
          800: '#6b5624',
          900: '#4d3f1a',
        },

      }
  },
  plugins: [],
}