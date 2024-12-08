/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Asegúrate de que esta ruta coincida con tus archivos de componentes
  ],
  theme: {
    extend: {
      fontFamily: {
        'avenir-book': ['Avenir Book', 'sans-serif'],
        'avenir-light': ['Avenir Light', 'sans-serif'],
        'avenir-roman': ['Avenir Roman', 'sans-serif'],
        'lustria': ['Lustria', 'serif']
      }
    }
  },
  plugins: [],
}
