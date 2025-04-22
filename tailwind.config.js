// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx,css}",
  ],
  options: {
    safelist: ['font-RoxboroughCF-ExtraBold'],
  },
  theme: {
    extend: {
      fontFamily: {
        'RoxboroughCF-ExtraBold': ["RoxboroughCF-ExtraBold", "sans-serif"],
        kohinoor: ["Kohinoor", "sans-serif"],
      },
    },
  },
  plugins: [],
};
// tailwind.config.js
