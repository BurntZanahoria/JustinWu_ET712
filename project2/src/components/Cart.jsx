function Cart({ cart, removeFromCart }) {

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const tax = subtotal * 0.0816;

  const total = subtotal + tax;

  return (
    <div className="cart-container">

      <h1>Your Cart</h1>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (

        <div className="cart-item" key={item.id}>

          <img src={item.image} alt={item.title} />

          <div>
            <h3>{item.title}</h3>
            <p>Quantity: {item.qty}</p>
            <p>${item.price}</p>
          </div>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>

        </div>

      ))}

      <h3>Subtotal: ${subtotal.toFixed(2)}</h3>

      <h3>NY Tax: ${tax.toFixed(2)}</h3>

      <h2>Total: ${total.toFixed(2)}</h2>

    </div>
  );
}

export default Cart;