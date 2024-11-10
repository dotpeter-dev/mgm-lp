module.exports = {
  content: ["./*.html", "./src/**/*.js", "./src/*.sass"],
  theme: {
    
    extend: {
      fontFamily: {
        'montserrat': ['Raleway', 'sans-serif' ],
        'raleway': ['Montserrat', 'sans-serif' ],
      },
      colors: {
        'primary': '#FFFFFF',
        'primary-dark': '#F1F1F1',
        'secondary': '#295e80',
        'secondary-dark': '#1F2F38',
        'accent': '#a4ed85',
        'accent-dark': '#5db3ab',
      },
    },
  },
  plugins: [],
}