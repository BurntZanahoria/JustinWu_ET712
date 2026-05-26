import Card from "../components/Card";
import clothing from "../data/clothing";

function Clothing({ addToCart }) {

  return (
    <div className="page">

      <h1>Clothing</h1>

      <div className="products-grid">

        {clothing.map((product) => (

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

export default Clothing;