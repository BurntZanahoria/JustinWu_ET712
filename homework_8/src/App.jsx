import { Routes, Route } from "react-router-dom"
import { useState } from "react"

import Navbar from "./components/Navbar"
import Products from "./pages/Products"
import Cart from "./pages/Cart"

export default function App() {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id)
    if (!exists) {
      setCart([...cart, product])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id))
  }

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Products addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
      </Routes>
    </>
  )
}