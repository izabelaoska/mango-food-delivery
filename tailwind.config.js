/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#F9F9FB',
        orange_fill: '#FB9401',
        grey_fill: '#9CA3AF',
        beige_fill: '#FFECD0',
        orange_500: '#ff0000',
        orange_400: '#ff4d00',
        orange_300: '#ff7400',
        orange_200: '#ff9a00',
        orange_100: '#ffc100',
      },
    },
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
