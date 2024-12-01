import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import ShoppingCartButton from "../components/ShoppingCartButton";

const ShoppingCart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl my-10">Shopping Cart</h1>
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
                <ShoppingCartButton item={item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
