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
          dark: '#6E7D60',
        },
        orange: {
          DEFAULT: '#FF725E',
        },
        yellow: {
          DEFAULT: '#E0DA48',
          dark: '#BEA363',
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
      fontFamily: {
        playfair: ['Playfair Display', 'system-ui'],
      },
      backgroundImage: {
        // spots
        'topic-naturalSpot': "url('assets/images/topics/naturalSpot.png')",
        'topic-tourismFactory': "url('assets/images/topics/tourismFactory.png')",
        'topic-rest': "url('assets/images/topics/rest.png')",
        'topic-leisureAgriculture': "url('assets/images/topics/leisureAgriculture.png')",
        'topic-ecological': "url('assets/images/topics/ecological.png')",
        'topic-hotSpring': "url('assets/images/topics/hotSpring.png')",
        'topic-historicalSite': "url('assets/images/topics/historicalSite.png')",
        // activities
        'topic-festival': "url('assets/images/topics/festival.png')",
        'topic-bike': "url('assets/images/topics/bike.png')",
        'topic-leisure': "url('assets/images/topics/leisure.png')",
        'topic-industry': "url('assets/images/topics/industry.png')",
        'topic-annual': "url('assets/images/topics/annual.png')",
        'topic-seasons': "url('assets/images/topics/seasons.png')",
        // foods
        'topic-localCuisine': "url('assets/images/topics/localCuisine.png')",
        'topic-chineseCuisine': "url('assets/images/topics/chineseCuisine.png')",
        'topic-dessert': "url('assets/images/topics/dessert.png')",
        'topic-exoticCuisine': "url('assets/images/topics/exoticCuisine.png')",
        'topic-souvenir': "url('assets/images/topics/souvenir.png')",
        'topic-vegetable': "url('assets/images/topics/vegetable.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
