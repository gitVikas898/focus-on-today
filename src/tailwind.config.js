/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors :{
        'white-color':'rgba(251, 251, 251, 1)',
        'input-color': 'rgba(255, 255, 255, 1)',
        'green-color' : 'rgba(72, 163, 0, 1)',
        'brown-color' : 'rgba(0, 0, 0, 1)',
        'text-color' : 'rgba(133, 133, 133, 1)',
        'input-text-color':'rgba(217, 217, 217, 1)',
        'progress-bar-color': 'rgba(72, 163, 0, 0.1)'
      }
    },
  },
  plugins: [],
}

