import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.title}>Curious Notes</h2>

      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/space">Space</Link>
        <Link style={styles.link} to="/ocean">Ocean</Link>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    borderBottom: "1px solid #ccc",
  },
  title: {
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    textDecoration: "none",
    color: "inherit",
    fontWeight: "bold",
  },
}