import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// module.exports = {
//   theme: {
//     extend: {
//       fontFamily: {
//         montserrat: ['Montserrat', 'sans-serif'],
//       },
//     },
//   },
// };


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), 
    tailwindcss()
  ],
})
