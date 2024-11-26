import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  const [numberOfCartItems, setNumberOfCartItems] = useState<number>(0);

  function increment() {
    setNumberOfCartItems(numberOfCartItems + 1);
  }

  function decrement() {
    if (numberOfCartItems > 0) {
      setNumberOfCartItems(numberOfCartItems - 1);
    } else {
      setNumberOfCartItems(0);
    }
  }

  return (
    <>
      <Navbar />
      <Home
        numberOfCartItems={numberOfCartItems}
        increment={increment}
        decrement={decrement}
      />
    </>
  );
}

export default App;
