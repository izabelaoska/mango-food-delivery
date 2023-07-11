/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      scale: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: false,
  },
}
