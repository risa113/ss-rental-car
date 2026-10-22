/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#101D2C',
          light: '#1B2C3F',
          dark: '#0A131E',
          surface: '#152435',
        },
        ivory: {
          DEFAULT: '#F7F5F0',
          dark: '#EFECE4',
          subtle: '#FAF9F6',
        },
        silver: {
          DEFAULT: '#C8CED5',
          light: '#E2E6EB',
          dark: '#9EA7B3',
        },
        cyan: {
          DEFAULT: '#42C5D9',
          hover: '#31B2C6',
          light: '#65D5E6',
          subtle: '#E6F8FB',
        },
        graphite: {
          DEFAULT: '#252B33',
          light: '#424B57',
          dark: '#171B20',
          subtle: '#5C6777',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'Manrope', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(16, 29, 44, 0.04)',
        'elevated': '0 10px 30px -5px rgba(16, 29, 44, 0.08), 0 4px 6px -2px rgba(16, 29, 44, 0.03)',
        'cyan-glow': '0 0 25px -3px rgba(66, 197, 217, 0.35)',
      },
      borderRadius: {
        'card': '14px',
      }
    },
  },
  plugins: [],
}
