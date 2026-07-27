/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{jsx,js}', './src/**/*.{jsx,js}'],
  theme: {
    extend: {
      fontFamily: {
        valera: ['Valera Round Regular', 'serif'],
      },
      backgroundImage: {
        'offers':        "url('/assets/Compressed/offers.png')",
        'healthcare':    "url('/assets/Compressed/Healthcare1.webp')",
        'finance':       "url('/assets/Compressed/finance1.webp')",
        'education':     "url('/assets/Compressed/Education1.webp')",
        'digimedia':     "url('/assets/Compressed/digimedia1.webp')",
        'casestudy':     "url('/assets/Cs/caseStudy.jpg')",
        'laptopcstudy':  "url('/assets/Compressed/Laptop.png')",
        'testimonial':   "url('/assets/Compressed/testimonial.png')",
        'map':           "url('/assets/Compressed/MAP.png')",
        'cstdmain':      "url('/assets/Compressed/cstdmain.png')",
        'bannerbg':      "url('/assets/Compressed/bannerbg.png')",
        'bgplate':       "url('/assets/Compressed/bgplate.png')",
        'bannerai':      "url('/assets/Compressed/bannerai.png')",
        'indusbanner':   "url('/assets/Compressed/indusbanner.png')",
        'talkbanner':    "url('/assets/Compressed/talkbanner.png')",
        'mobdevhome':    "url('/assets/Compressed/mobdevhome.png')",
        'cstdbanner':    "url('/assets/Compressed/cstdbanner.png')",
        'journeymap1':   "url('/assets/Compressed/journeymap1.png')",
        'journeymap2':   "url('/assets/Compressed/journeymap2.png')",
        'rescasebanner': "url('/assets/Compressed/rescasebanner.png')",
        'resourceshero': "url('/assets/Compressed/resourceshero.png')",
      },
      animation: {
        'spin-slow':   'spin 150s linear infinite',
        'spin-medium': 'spin 2s linear infinite',
      },
      size: {
        '128': '32rem',
      },
      colors: {
        'bloo':   '#01b0f1',
        'muted':  '#7f7f7f',
        'blackk': '#333333',
      },
      screens: {
        'ps': '300px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
