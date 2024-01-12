/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      somePaleGreen: '#FBFFF1',
      platinum: '#E9E9E9',
      aquamarine: '#AAD7D9',
      cream: '#FFFDD0',
      backgroundBlue: '#B4C5E4',
      royalRed: '#741A3B',
      darkestBlue: '#090C9B',
      salmonLikeColor: '#ffe1d9',
      Navbarblue: '#99a8c2',
      royalBlue: '#0A2463',
      cream: 'fffdd0',
      platinum: '#E9E9E9',
      slate: '#475569',
      black: '#000000',
      red: '#FF0000'
    },
    fontFamily: {
      'sans': ['Raleway', 'sans-serif']
    },
    shadow: {
    'shadow-2xl': 'box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);',
    },
    extend: {},
  },
  plugins: [],
}

