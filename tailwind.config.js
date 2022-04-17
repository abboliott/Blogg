module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '280px',
      // => @media (min-width: 640px) { ... }

      'md': '791px',
      // => @media (min-width: 768px) { ... }

      'lg': '1217px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  
    extend: {
      fontFamily: {
        heading: ['AirBagFree'],    
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}