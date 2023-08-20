/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      keyframes: {
        up_down: {
          '0%': {
            transform: 'translateY(-15px)'

          },

          '10%': {
            transform: 'translateY(-15px)'

          },


          '100%': {
            transform: 'translateY(0)'
          }
        },
      },

      animation: {
        'up-down': 'up_down 0.8s alternate-reverse infinite ease',
      },
      colors: {
        'main-yellow': '#ffcb0a',
        'main-black': '#000',
        'main-white': '#fff',
        'main-green': '#007835',
        'main-red': '#cc3532',
        'main-gray': '#171717',
        'snack-color': '#DB4332',
        'beverage-color': '#005C2F'
      }

    },
    plugins: [],

  }
}
