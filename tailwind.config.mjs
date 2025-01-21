/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      mob: "375px",
      tablet: "768px",
      laptop: "1024px",
      laptoplg: "1140px",
      desktop: "1280px",
      laptopl: "1440px",
    },
    extend: {
      colors: {
        btnBG: "var(--background)",
        btnFG: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
