/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'selector',
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        screens:{
          "other": {'min' : '340px', 'max' : '1280px'},
        },
        colors:{
          darkbg: '#1E293B',
        },
      },
    },
    plugins: [],
  }