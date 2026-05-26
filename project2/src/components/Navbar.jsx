import { Link } from "react-router-dom";

function Navbar({ cart }) {

  return (
    <nav className="navbar">

      <h2>Justin's Store</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/electronics">Electronics</Link>

        <Link to="/clothing">Clothing</Link>

        <Link to="/food">Food</Link>

        <Link to="/cart">
          Cart ({cart.length})
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;