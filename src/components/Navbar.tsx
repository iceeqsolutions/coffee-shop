import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar: React.FC = () => {
  const totalItems = useSelector((state: RootState) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <>
      <div className="bg-neutral-100 h-48 flex justify-between fixed top-0 left-0 w-full z-10">
        <img
          className="h-40 m-5"
          src="src/assets/images/BeanyCupLogo.png"
          alt="Webshop logo"
        />
        <div className="w-3/4">
          <div className="linkText flex h-full items-center justify-center gap-10">
            <NavLink className="pt-1 px-5 pb-2 text-2xl text-yellow-600" to="/">
              Home
            </NavLink>
            <NavLink
              className="linkText pt-1 px-5 pb-2 text-2xl text-yellow-600"
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink
              className="linkText pt-1 px-5 pb-2 text-2xl text-yellow-600"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
        <div className="shoppingCart relative">
          <span className="px-3 pb-1 border-yellow-600 border-2 absolute top-5 left-5 text-yellow-400 font-bold text-2xl rounded-full bg-yellow-950">
            {totalItems}
          </span>
          <Link to="/shopping-cart">
            <img
              className="h-12 w-12 m-10"
              src="src/assets/images/shoppingCart.png"
              alt="Shopping cart"
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;

// Logo font: Monotype Corsiva 48px & 28px
