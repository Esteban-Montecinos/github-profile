import {nextui} from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
    },
    colors: {
      'navy': '#111729',
      'azul': '#1D1B48',
      'celeste': '#3662E3',
      'celeste-oscuro': '#20293A',
      'gris-oscuro': '#364153',
      'gris-medio': '#4A5567',
      'gris-claro': '#CDD5E0',
      'gris': '#97A3B6'
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}
