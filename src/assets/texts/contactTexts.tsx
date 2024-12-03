import visitUs from "../images/visitUs.jpg";
import callUs from "../images/callUs.jpg";
import emailUs from "../images/emailUs.jpg";
import { ContactInterface } from "../../interfaces/ContactInterface";

const contactText: ContactInterface[] = [
  {
    header: "Visit Us",
    text: "Come and meet us in person and share your thoughts - we'll save a seat for you.",
    image: visitUs,
    contact: "Coffeestreet 1, 12345 Coffeeville",
  },
  {
    header: "Call Us",
    text: "If you have any questions or concerns about our products or our service, you're more than welcome to give us a call.",
    image: callUs,
    contact: "+123 456 7890",
  },
  {
    header: "Send Us Feedback",
    text: "We'd love to hear how we can improve our service. Please share your thoughts via email, or send us direct feedback below:",
    image: emailUs,
    contact: "coffeeshop@more.coffee",
  },
];

export default contactText;
