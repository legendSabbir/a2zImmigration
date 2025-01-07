/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'nunito': ['"Nunito"', 'sans-serif'],
        'sans': ['"Rubik"', 'sans-serif'],
      },
      colors: {
        'primary': 'rgba(var(--primary-color))',
      },
    }
  },

  plugins: [
    require('tailwindcss-motion'),
  ]
};