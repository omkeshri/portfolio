/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ['Merriweather', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'lora': ['Lora', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
