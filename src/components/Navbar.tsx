import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Navbar: React.FC = () => {
  const totalItems = useSelector((state: RootState) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0)
  );
  return (
    <>
      <div className="bg-neutral-100 h-56 flex justify-between fixed top-0 left-0 w-full z-10 shadow-2xl desktop:relative">
        <img
          className="h-40 m-5"
          src="src/assets/images/BeanyCupLogo.png"
          alt="Webshop logo"
        />
        <div className="flex w-3/4 justify-center desktop:absolute bottom-2 desktop:w-full desktop:justify-around">
          <div className="ml-20 mr-2 linkText flex h-full items-center justify-center gap-20 flex-grow desktop:mx-20 desktop:gap-10 desktop:justify-around">
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
          {totalItems > 0 && (
            <span className="px-2 border-yellow-600 absolute top-8 left-8 text-white font-bold text-xl rounded-full bg-stone-500 bg-opacity-90">
              {totalItems}
            </span>
          )}
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
