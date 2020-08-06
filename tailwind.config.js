module.exports = {
  purge: [],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite', // I'm a custom style!
        'spin-slower': 'spin 5s linear infinite' // I'm a custom style!
      },
      backgroundColor: {
        'brand': '#1c64f2', // I'm a custom style!
        'warm-gray-100': '#f6f6f7' // I'm a custom style!
      },
      maxHeight: {
        'lg': '30rem',
        'xl': '45rem'
      }
    },
  },
  variants: {},
  plugins: []
}