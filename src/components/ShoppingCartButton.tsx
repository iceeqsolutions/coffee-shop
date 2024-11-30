import { ShoppingCartButtonInterface } from "../interfaces/ShoppingCartButtonInterface";
import { addToCart, removeFromCart } from "../redux/features/cartSlice";
import { RootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCartButton: React.FC<ShoppingCartButtonInterface> = ({
  item,
}) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: RootState) =>
    state.cart.cartItems.find((i) => i.id === item.id)
  );
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="my-5 flex justify-center">
      {quantity === 0 ? (
        <button
          className="px-5 pb-1 border-2 border-yellow-950 rounded-2xl"
          onClick={() => dispatch(addToCart(item))}
        >
          Add to cart
        </button>
      ) : (
        <div>
          <button
            className="px-1"
            onClick={() => dispatch(removeFromCart(item.id))}
          >
            -
          </button>
          <span className="px-5 pb-1 border-2 border-yellow-950 rounded-2xl">
            {quantity}
          </span>
          <button className="px-1" onClick={() => dispatch(addToCart(item))}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartButton;
