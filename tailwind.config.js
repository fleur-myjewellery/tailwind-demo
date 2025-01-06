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
    extend: {
      colors: {
        'primary': {
          light: '#e9b9c4',
          DEFAULT: '#f9d3e6',
          dark: '#ef87bb'
        },
        'gray': {
          200: '#f6f5f5'
        },
      },
      boxShadow: {
        'md': '0 4px 4px rgba(0, 0, 0, 0.3)',
      }
    }
    
  },
  plugins: [],
}