import ApiConnection from "../modules/ApiConnection";
import { ShopInterface } from "../interfaces/ShopInterface";
import shopBanner from "../assets/images/shopBanner.jpg";

const Shop: React.FC<ShopInterface> = ({
  numberOfCartItems,
  increment,
  decrement,
}) => {
  const apiEndpoint = "https://fake-coffee-api.vercel.app/api";

  return (
    <>
      <div className="mt-48 flex flex-col justify-center items-center">
        <div className="banner relative">
          <h2 className="absolute top-16 left-20">Coffee Shop</h2>
          <img
            src={shopBanner}
            alt="Shop Banner"
            className="w-full bg-contain"
          />
        </div>
        <div className="mt-32 flex flex-col gap-8 justify-center w-full">
          <ApiConnection
            apiEndpoint={apiEndpoint}
            numberOfItems={9999}
            numberOfCartItems={numberOfCartItems}
            increment={increment}
            decrement={decrement}
          />
        </div>
      </div>
    </>
  );
};

export default Shop;
