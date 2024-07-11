export default {
  purge: ['./src/**/*.{css, js,jsx,ts,tsx}', './index.html'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: theme => ({
        'backgroundIntroduction': "linear-gradient(#131313, #d7d7d7)",
      }),
      colors: {
        backgroundHeader: '#333333',
        blackColor: '#000000',
        grayColorBorder: '#939393',
        borderColor: 'rgba(0, 0, 0, 0.42)',
        backgroundIntroduction: 'linear-gradient(#131313, #d7d7d7)'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '32': '32px',
      },
      spacing: {
        '6': '24px',
        '62': '62px',
        '100': '100px',
        '114': '114px',
        '164': '164px',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
      translate: ['group-hover'],
    },
  },
  plugins: [],
}