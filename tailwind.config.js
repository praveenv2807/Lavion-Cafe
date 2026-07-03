/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: "#1B120D",
          light: "#241811",
          dark: "#120B07",
        },
        roast: {
          DEFAULT: "#3E2723",
          light: "#5A3A2E",
        },
        caramel: {
          DEFAULT: "#C08552",
          light: "#D9A066",
          dark: "#A66A3C",
        },
        copper: "#B87333",
        cream: {
          DEFAULT: "#F5E6D3",
          light: "#FFF8F0",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Manrope'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      backgroundImage: {
        "grain": "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        steam: {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0" },
          "15%": { opacity: "0.5" },
          "50%": { transform: "translateY(-40px) scaleX(1.4)", opacity: "0.3" },
          "100%": { transform: "translateY(-80px) scaleX(1.8)", opacity: "0" },
        },
        drip: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateY(140px)", opacity: "0" },
        },
        float: {
          "0%,100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(8deg)" },
        },
        fillCup: {
          "0%": { height: "0%" },
          "100%": { height: "78%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        steam: "steam 3.5s ease-in infinite",
        drip: "drip 1.8s ease-in infinite",
        float: "float 6s ease-in-out infinite",
        fillCup: "fillCup 2.5s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
}
