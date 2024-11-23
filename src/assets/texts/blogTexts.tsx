import { BlogsInterface } from "../../interfaces/BlogsInterface";
import roastingCoffee from "../images/roastingCoffee.jpg";
import espresso from "../images/espresso.jpg";
import coffeeBeans from "../images/coffeeBeans.jpg";

const blogs: BlogsInterface[] = [
  {
    title: "Coffee roast levels",
    text: "Roasting coffee unlocks flavor and aroma, with roast levels—light, medium, and dark—shaping taste. Light roasts preserve acidity and fruity notes, medium roasts balance sweetness and body, while dark roasts emphasize bold, smoky flavors. Each degree defines the coffee’s character, influencing its flavor, caffeine, and overall appeal.",
    category: "Coffee roast",
    image: roastingCoffee,
  },
  {
    title: "The art of making an espresso",
    text: "Crafting the perfect espresso is about precision: finely ground coffee, a 1:2 brew ratio, and 9 bars of pressure. Pull a 25–30 second shot with water at 90–96°C. The result? A rich, velvety crema, balanced flavor, and intense aroma—a harmonious dance of technique, quality beans, and passion.",
    category: "Perfecting coffee making",
    image: espresso,
  },
  {
    title: "Choosing the right beans",
    text: "Arabica beans, from high altitudes, are smooth, sweet, and ideal for specialty brews. Robusta, grown at lower altitudes, is bold and bitter, perfect for espresso and blends. Liberica offers fruity, floral notes, great for unique flavors. Excelsa adds tartness and depth, ideal for complex blends. Choose based on flavor needs.",
    category: "Bean types and flavors",
    image: coffeeBeans,
  },
];
export default blogs;
