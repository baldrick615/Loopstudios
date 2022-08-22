/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
        alata: ['Alata'],
      },
      backgroundImage: {
        'hero-desktop': "url('/src/img/desktop/image-hero.jpg')",
        'hero-mobile': "url('/src/img/mobile/image-hero.jpg')"
      },
      letterSpacing: {
        widest: '.3em'
      },
    },
  },
  plugins: [],
}
