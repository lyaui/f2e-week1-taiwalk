module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '375px',
        xl: '1200px',
      },
      colors: {
        primary: {
          light: '#7F977B',
          DEFAULT: '#65895F',
          darK: '#6E7D60',
        },
        orange: {
          DEFAULT: '#FF725E',
        },
        yellow: {
          DEFAULT: '#BEA363',
        },
        gray: {
          100: '#F9F9F9',
          300: '#E5E5E5',
          500: '#9E9E9E',
          700: '#646464',
          800: '#2F2F2F',
          900: '#1E1E1E',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
