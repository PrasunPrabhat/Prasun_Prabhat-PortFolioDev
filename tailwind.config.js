/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0B132B", // Main background
        deep: "#1C2541", // Alternate section background
        steel: "#3A506B", // Card borders, muted text
        aqua: {
          DEFAULT: "#5BC0BE",
          500: "#5BC0BE", // Primary accent
        },
        mint: {
          DEFAULT: "#6FFFE9",
          500: "#6FFFE9", // Hover / Glow
        },
      },

      animation: {
        fadeInUp: "fadeInUp 1s ease-out forwards",
        blob: "blob 8s infinite ease-in-out",
      },

      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(30px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },

        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -20px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },

      backgroundImage: {
        "skills-gradient":
          "linear-gradient(38.73deg, rgba(91, 192, 190, 0.15) 60%, rgba(58, 80, 107, 0) 50%), linear-gradient(141.27deg, rgba(28, 37, 65, 0) 50%, rgba(111, 255, 233, 0.15) 100%)",
      },
    },
  },
  plugins: [],
};
