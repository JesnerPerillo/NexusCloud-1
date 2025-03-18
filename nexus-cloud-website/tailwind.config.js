/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        oswald: ["Oswald", 'sans-serif']
      },
    },
  },
  plugins: [],
};
// layout components {
//   .underline-transition {
//     @apply relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[2px] before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-100
//   }
// }