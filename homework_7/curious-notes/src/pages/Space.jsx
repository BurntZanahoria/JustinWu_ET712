import spaceImg from "../assets/space.jpg"

export default function Space() {
  return (
    <div>
      <h1>Space</h1>

      <img
        src={spaceImg}
        alt="space"
        style={{ width: "300px", borderRadius: "10px" }}
      />

      <p>
        Space is completely silent because there is no air to carry sound waves.
        Even powerful explosions would be completely silent in a vacuum.
      </p>
    </div>
  )
}