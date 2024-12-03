import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { selectTotalSum } from "../redux/features/cartSlice";
import ShoppingCartButton from "../components/ShoppingCartButton";
import coffeeShopBanner from "../assets/images/coffeeShopBanner.jpg";

const ShoppingCart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalSum = useSelector((state: RootState) =>
    selectTotalSum(state.cart)
  );

  return (
    <>
      <div className="mt-48 flex flex-col justify-center items-center">
        <div className="banner relative">
          <div className="absolute top-6 left-20">
            <h2 className="pt-24 text-8xl">Your Shopping Cart</h2>
          </div>
          <img
            src={coffeeShopBanner}
            alt="Contact banner"
            className="w-full bg-contain"
          />
        </div>
      </div>
      <div className="mt-2 flex flex-col justify-center items-center">
        <div className="w-3/4 flex flex-col m-10 justify-center bg-neutral-50 rounded-3xl shadow-2xl">
          {cartItems.map((item) => (
            <div className="m-5 flex flex-col items-start" key={item.id}>
              <h2 className="text-xl font-bold text-yellow-950">{item.name}</h2>

              <div className="w-full flex justify-between items-center">
                <img
                  className="h-52 aspect-square object-cover object-center"
                  src={item.image_url}
                  alt={item.name}
                />
                <div className="w-2/3 flex flex-col">
                  <h3 className="text-xl">{item.description}</h3>
                  <h3 className="pt-10 text-xl">
                    Price per pack: {item.price}€
                  </h3>
                </div>
                <div className="flex flex-col items-center">
                  <ShoppingCartButton item={item} />
                </div>
              </div>
            </div>
          ))}
          {cartItems.length > 0 && <h2>Total: {totalSum}€</h2>}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
