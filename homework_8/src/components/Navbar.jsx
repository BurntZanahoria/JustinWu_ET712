import { Link } from "react-router-dom"

export default function Navbar({ cartCount }) {
  return (
    <nav style={styles.nav}>
      <h2>Mini Shop</h2>

      <div style={styles.links}>
        <Link to="/">Products</Link>
        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px",
    borderBottom: "1px solid #ccc",
  },
  links: {
    display: "flex",
    gap: "15px",
  },
}