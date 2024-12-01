import ApiConnection from "../modules/ApiConnection";
import { ShopInterface } from "../interfaces/ShopInterface";

const Shop: React.FC<ShopInterface> = ({
  numberOfCartItems,
  increment,
  decrement,
}) => {
  const apiEndpoint = "https://fake-coffee-api.vercel.app/api";

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl my-10">Shop</h1>
        <div className="flex flex-col gap-8 justify-center w-full">
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
