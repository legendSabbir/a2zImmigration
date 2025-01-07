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
      screens: {
        'sm': '575px',
        'lg': '968px',
        'xl': '1280px',
        '2xl': '1440px',
      },
    }
  },

  plugins: [
    require('tailwindcss-motion'),
  ]
};