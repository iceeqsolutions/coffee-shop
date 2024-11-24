import { useState } from "react";

const ShoppingCartButton = () => {
  const [quantity, setQuantity] = useState(0);

  function increment() {
    setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(0);
    }
  }

  return (
    <div className="my-5 flex justify-center">
      {quantity === 0 ? (
        <button
          className="px-5 pb-1 border-2 border-yellow-950 rounded-2xl"
          onClick={increment}
        >
          Add to cart
        </button>
      ) : (
        <div>
          <button className="px-1" onClick={decrement}>
            -
          </button>
          <span className="px-5 pb-1 border-2 border-yellow-950 rounded-2xl">
            {quantity}
          </span>
          <button className="px-1" onClick={increment}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCartButton;
