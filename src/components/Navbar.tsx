const Navbar = () => {
  return (
    <>
      <div className="bg-neutral-100 h-48 flex justify-between">
        <img
          className="h-40 m-5"
          src="src/assets/images/BeanyCupLogo.png"
          alt="Webshop logo"
        />
        <div className="w-3/4">
          <div className="flex h-full items-center justify-center gap-20">
            <a
              className="text-2xl border-4 px-3 pb-3 pt-2 rounded-2xl border-yellow-950 bg-neutral-100 text-yellow-600"
              href="#"
            >
              Home
            </a>
            <a
              className="text-2xl bg-yellow-950 text-neutral-100 border-yellow-600 border-4 px-3 pb-3 pt-2 rounded-2xl hover:border-yellow-950 hover:bg-neutral-100 hover:text-yellow-600"
              href="#"
            >
              Shop
            </a>
            <a
              className="text-2xl bg-yellow-950 text-neutral-100 border-yellow-600 border-4 px-3 pb-3 pt-2 rounded-2xl hover:border-yellow-950 hover:bg-neutral-100 hover:text-yellow-600"
              href="#"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="shoppingCart relative">
          <span className="px-3 pb-1 border-yellow-600 border-2 absolute top-5 left-5 text-yellow-400 font-bold text-2xl rounded-full bg-yellow-950">
            3
          </span>
          <img
            className="h-12 w-12 m-10"
            src="src/assets/images/shoppingCart.png"
            alt="Shopping cart"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

// Logo font: Monotype Corsiva 48px & 28px
