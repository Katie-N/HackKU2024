/** @type {import('tailwindcss').Config} */
module.exports = {
  // purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./src/**/*.{vue,html,js}',
  '../src/**/*.{vue,html,js}',
  './src/App.vue',
  './index.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ["Pixelify Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
