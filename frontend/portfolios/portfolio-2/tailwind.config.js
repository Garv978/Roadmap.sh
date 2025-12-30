/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        urban: ["Urbanist", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        grotesk: ["Space Grotesk", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        lexend: ["Lexend", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        karla: ["Karla", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
        quick: ["Quicksand", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"],
        varela: ["Varela Round", "sans-serif"],

        // Display / headlines
        bebas: ["Bebas Neue", "sans-serif"],
        righteous: ["Righteous", "sans-serif"],
        anton: ["Anton", "sans-serif"],

        // Serif / elegant
        playfair: ["Playfair Display", "serif"],
        cormorant: ["Cormorant Garamond", "serif"],
        lora: ["Lora", "serif"],

        // Mono (dev fonts)
        jet: ["JetBrains Mono", "monospace"],
        fira: ["Fira Code", "monospace"],
        robotoMono: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
