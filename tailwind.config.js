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
        pixel2: ["Press Start 2P", "system-ui"],
        alien: ["Indie Flower", "Comic Sans"]
      },
      spacing: {
        '1/5': '20%',
        '1/6': '16.667%',
        '1/7': '14.286%',
        '1/8': '12.5%',
        '5/12': '41.667%',
        '37/100': '37%',
      },
    },
  },
  plugins: [],
}
