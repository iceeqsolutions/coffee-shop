import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { selectTotalSum, clearCart } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";
import ShoppingCartButton from "../components/ShoppingCartButton";

const ShoppingCart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const totalSum = useSelector((state: RootState) =>
    selectTotalSum(state.cart)
  );
  const dispatch = useDispatch();

  const handleCheckout = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="mt-48 desktop:mt-0 flex flex-col justify-center items-center">
        <div className="w-full h-80 bg-cover bg-right bg-no-repeat bg-ShoppingCart relative">
          <div className="absolute top-10 left-20 text-white italic font-charm">
            <h2 className="text-8xl">Shopping Cart</h2>
          </div>
        </div>
      </div>
      <div className="mt-2 flex flex-col justify-center items-center">
        <div className="max-w-[1000px] w-3/4 flex flex-col m-10 justify-center bg-neutral-50 rounded-3xl shadow-2xl">
          {cartItems.map((item) => (
            <div className="m-5 flex flex-col items-start" key={item.id}>
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-yellow-950">
                  {item.name}
                </h2>
                <p className="font-thin text-sm">
                  Price per pack: {item.price}€
                </p>
              </div>

              <div className="w-full flex justify-between items-center">
                <img
                  className="h-52 aspect-square object-cover object-center"
                  src={item.image_url}
                  alt={item.name}
                />
                <div className="flex desktop:flex-col">
                  <h3 className="max-w-2/3 pr-10 text-xl">
                    {item.description}
                  </h3>

                  <div className="min-w-24 flex flex-col items-center desktop:justify-center desktop:mt-10 desktop:mr-10">
                    <ShoppingCartButton item={item} />
                  </div>
                </div>
              </div>
            </div>
          ))}
          {cartItems.length > 0 && (
            <>
              <div className="m-5 flex justify-end">
                <h2 className="text-2xl font-bold">Cart Total: {totalSum}€</h2>
              </div>
              <div className="mx-14 mt-5 flex border-t-2 border-gray-300 justify-center">
                <Link to="../">
                  <button
                    onClick={handleCheckout}
                    className="my-16 px-5 py-2 text-2xl bg-yellow-900 border-2 border-yellow-950 text-white rounded-2xl hover:bg-white hover:text-yellow-950 hover:border-2 hover "
                  >
                    Checkout
                  </button>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
