/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        NotFound: "url('src/assets/images/notFoundBanner.jpg')",
        CoffeeShop: "url('src/assets/images/shopBanner.jpg')",
        ShoppingCart: "url('src/assets/images/coffeeShopBanner.jpg')",
        Contact: "url('src/assets/images/contactUs.jpg')",
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
