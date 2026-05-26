import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Electronics from "./pages/Electronics";
import Clothing from "./pages/Clothing";
import Food from "./pages/Food";
import CartPage from "./pages/CartPage";

import "./App.css";

function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    const exist = cart.find((item) => item.id === product.id);

    if (exist) {

      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );

    } else {

      setCart([...cart, { ...product, qty: 1 }]);

    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>

      <Navbar cart={cart} />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/electronics"
          element={<Electronics addToCart={addToCart} />}
        />

        <Route
          path="/clothing"
          element={<Clothing addToCart={addToCart} />}
        />

        <Route
          path="/food"
          element={<Food addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
            />
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;