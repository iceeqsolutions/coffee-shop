const Navbar = () => {
  return (
    <>
      <div className="flex">
        <img src="src/assets/images/BeanyCupLogo.png" alt="Webshop logo" />
        <div className="navigation">
          <div className="navlinks">
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className="shoppingCart">
          <img src="src/assets/images/shoppingCart.png" alt="Shopping cart" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

// Logo font: Monotype Corsiva 48px & 28px
