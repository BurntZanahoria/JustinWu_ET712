import Card from "../components/Card";
import food from "../data/food";

function Food({ addToCart }) {

  return (
    <div className="page">

      <h1>Food</h1>

      <div className="products-grid">

        {food.map((product) => (

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

export default Food;