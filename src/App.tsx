import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import ShoppingCart from "./pages/ShoppingCart";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Footnote from "./components/Footnote";

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
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                numberOfCartItems={numberOfCartItems}
                increment={increment}
                decrement={decrement}
              />
            }
          />
          <Route
            path="/shop"
            element={
              <Shop
                numberOfCartItems={numberOfCartItems}
                increment={increment}
                decrement={decrement}
              />
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <Footnote />
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
