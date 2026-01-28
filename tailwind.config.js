/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F386B',
          light: '#223e77',
          dark: '#142343',
        },
        secondary: {
          DEFAULT: '#E41937',
        },
        accent: {
          DEFAULT: '#F39C12',
        },
        highlight: {
          DEFAULT: '#ff5e14',
        }
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'],
        heading: ['"Raleway"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
