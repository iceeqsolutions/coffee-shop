import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";
import { RootState } from "../redux/store";

const ShoppingCart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);

  return (
    <>
      <h1>Shopping Cart</h1>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.image_url} alt={item.name} />
          <div>
            <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default ShoppingCart;
