/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html','./public/gimt.html', './public/Contacto.html'],
  theme: {
    extend: {
      backgroundImage:{
        'etiqueta':"url('recursos/media/etiqueta.png')"
      }
    },
  },
  plugins: [],
}

