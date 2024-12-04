import footerLinks from "../assets/texts/footerLinks";
import footerBeans from "../assets/images/footerBeans.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-stone-600 flex gap-8 justify-center">
        {footerLinks.map((item) => (
          <ul
            key={item.header}
            className="text-gray-200 pl-10 py-20 w-96 flex flex-col gap-4"
          >
            <h4 className="uppercase text-xl font-semibold">{item.header}</h4>
            {item.links.map((link) => (
              <Link to="./NotFound" key={link}>
                <li className="cursor-pointer hover:underline">{link}</li>
              </Link>
            ))}
          </ul>
        ))}
        <div className="flex items-center">
          <img className="max-h-52" src={footerBeans} alt="Coffee beans" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
