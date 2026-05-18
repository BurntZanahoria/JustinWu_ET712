import oceanImg from "../assets/ocean.jpg"

export default function Ocean() {
  return (
    <div>
      <h1>Ocean</h1>

      <img
        src={oceanImg}
        alt="ocean"
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p>
        More than 80% of the ocean is still unexplored. Scientists believe there
        are thousands of unknown species living in the deep sea that we have not
        discovered yet.
      </p>
    </div>
  )
}