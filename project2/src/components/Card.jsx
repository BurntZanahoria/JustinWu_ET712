import { useState } from "react";
import ModalWindow from "./ModalWindow";

function Card({ product, addToCart }) {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="card">

        <img src={product.image} alt={product.title} />

        <h3>{product.title}</h3>

        <p>${product.price}</p>

        <button onClick={() => setOpen(true)}>
          View Details
        </button>

        <button onClick={() => addToCart(product)}>
          Add To Cart
        </button>

      </div>

      {open && (
        <ModalWindow
          product={product}
          closeModal={() => setOpen(false)}
        />
      )}
    </>
  );
}

export default Card;