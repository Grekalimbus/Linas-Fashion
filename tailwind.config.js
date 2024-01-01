/** @type {import('tailwindcss').Config} */



module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        slideUp: "slideUp 0.5s ease-out forwards",
      },

      keyframes: {
        slideUp: {
          from: {
            opacity: "0",
            transform: "translateY(60px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      screens: {
        xl: "1280px",
        lg: "1000px",
        md: "920px",
        sm: "350px",
      },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"], // Установка DM Sans как основного шрифта
        sansi: ["Nunito", "sans-serif"],
      },
    },
  },
};
