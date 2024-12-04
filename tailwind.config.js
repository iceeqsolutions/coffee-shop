/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: { max: "400px" },

      tablet: { max: "550px" },

      laptop: { max: "768px" },

      desktop: { max: "1000px" },
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["4rem", { lineHeight: "1" }],
      "7xl": ["5rem", { lineHeight: "1" }],
      "8xl": [
        "6rem",
        {
          letterSpacing: "2px",
          lineHeight: "8rem",
        },
      ],
    },
    fontFamily: {
      charm: ["Charm", "cursive"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      backgroundImage: {
        NotFound: "url('/notFoundBanner.jpg')",
        CoffeeShop: "url('/shopBanner.jpg')",
        ShoppingCart: "url('/coffeeShopBanner.jpg')",
        Contact: "url('/contactUs.jpg')",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-0.5deg)" },
          "50%": { transform: "rotate(0.5deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
