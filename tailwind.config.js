/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3362CC",
      },
    },
    keyframes: {
      transformUp: {
        "0%": { transform: "translateY(100%)" },
        "100%": { transform: "translateY(0)" },
      },
      zoomIn: {
        "0%": { transform: "scaleX(-1)" },
        "100%": { transform: "scale(1)" },
      },
    },
    animation: {
      transformUp: "transformUp 2s ease-in-out 1s forwards",
      zoomIn: "zoomIn 2s ease-in-out 0.2s forwards",
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      "-xl": { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      "-lg": { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      "-md": { max: "767px" },
      // => @media (max-width: 767px) { ... }

      "-sm": { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  plugins: [],
};
