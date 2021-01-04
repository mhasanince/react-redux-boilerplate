/* eslint global-require: 1 */

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#2B0000',
          800: '#570000',
          700: '#820000',
          600: '#AE0000',
          500: '#D90000',
          400: '#E13333',
          300: '#E86666',
          200: '#F09999',
          100: '#F09999',
          50: '#F09999',
        },
        secondary: {
          900: '#171A1E',
          800: '#2D333C',
          700: '#444D5A',
          600: '#5A6678',
          500: '#718096',
          400: '#8D99AB',
          300: '#AAB3C0',
          200: '#C6CCD5',
          100: '#E3E6EA',
          50: '#F1F2F5',
        },
        success: {
          900: '#07230E',
          800: '#0E461C',
          700: '#14692B',
          600: '#1B8C39',
          500: '#22AF47',
          400: '#4EBF6C',
          300: '#7ACF91',
          200: '#A7DFB5',
          100: '#D3EFDA',
          50: '#E9F7ED',
        },
        warning: {
          900: '#33260B',
          800: '#664C16',
          700: '#997320',
          600: '#CC992B',
          500: '#FFBF36',
          400: '#FFCC5E',
          300: '#FFD986',
          200: '#FFE5AF%',
          100: '#FFF2D7',
          50: '#FFF9EB',
        },
        danger: {
          900: '#320D0B',
          800: '#631916',
          700: '#952621',
          600: '#C6322C',
          500: '#F83F37',
          400: '#F9655F',
          300: '#FB8C87',
          200: '#FCB2AF',
          100: '#FED9D7',
          50: '#FEECEB',
        },
        light: '#EDF2F7',
      },
      fontFamily: {
        sans: [
          'Montserrat',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          'Montserrat',
          'ui-serif',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'Times',
          'serif',
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}