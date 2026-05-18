const products = [
  { id: 1, name: "Laptop", price: 800 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphones", price: 100 },
  { id: 4, name: "Keyboard", price: 50 },
  { id: 5, name: "Mouse", price: 30 },
  { id: 6, name: "Monitor", price: 200 },
  { id: 7, name: "Tablet", price: 300 },
  { id: 8, name: "Camera", price: 600 },
  { id: 9, name: "Speaker", price: 120 },
]

export default function Products({ addToCart }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div style={{ display: "grid", gap: "10px" }}>
        {products.map((p) => (
          <div key={p.id} style={card}>
            <h3>{p.name}</h3>
            <p>${p.price}</p>

            <button onClick={() => addToCart(p)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

const card = {
  border: "1px solid #ccc",
  padding: "10px",
  borderRadius: "8px",
}