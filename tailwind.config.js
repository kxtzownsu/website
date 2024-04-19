module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        background: '#1e1e2e',
        bg_secondary: '#313244',
        primary: '#cba6f7',
        secondary: '#8f93ac',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
