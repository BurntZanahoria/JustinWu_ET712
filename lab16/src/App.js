import './App.css';
import React, {useState} from 'react';
import ProductList from './components/ProductList';
import Cart from "./components/Cart"

function App() {
  // set the state
  const [cart, setCart] = useState([])
  // find if the product already exists in the cart
  const addToCart = (product) => {
    const exist = cart.find((item)=>item.id === product.id)
    // if product exists, increase quantity
    if(exist){
      setCart(
        cart.map((item) => {
          if(item.id === product.id){
            return{...item, qty:item.qty+1}
          }
          else{
            return item
          }
        })
      )
    }
    // if product does NOT exist, add new item
    else{
      setCart([...cart, {...product, qty:1}])
    }
  }

  // function to remove item
  const removeFromCart = (id)=>{
    setCart(cart.filter((item)=> item.id !== id))
  }
  return (
    <div className="App">
      <h1>Welcome to Justin Wu's supermarket</h1>
      <ProductList addToCart={addToCart}/>
      <Cart cart = {cart} removeFromCart={removeFromCart}/>
    </div>
  );
}

export default App;
