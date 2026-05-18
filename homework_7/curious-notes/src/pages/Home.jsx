import homeImg from "../assets/house.jpg";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>

      <img
        src={homeImg}
        alt="home"
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p>Welcome to Curious Notes</p>
    </div>
  )
}