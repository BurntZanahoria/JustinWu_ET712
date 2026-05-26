import Card from "../components/Card";
import electronics from "../data/electronics";

function Electronics({ addToCart }) {

  return (
    <div className="page">

      <h1>Electronics</h1>

      <div className="products-grid">

        {electronics.map((product) => (

          <Card
            key={product.id}
            product={product}
            addToCart={addToCart}
          />

        ))}

      </div>

    </div>
  );
}

export default Electronics;