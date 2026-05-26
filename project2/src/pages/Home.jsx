import { useState } from "react";

import gamingheadset from "../images/gamingheadset.jpg";
import hoodie from "../images/hoodie.jpg";
import pizza from "../images/pizza.jpg";
import laptop from "../images/laptop.jpg";
import sushi from "../images/sushi.jpg";

function Home() {

  const images = [
    gamingheadset,
    hoodie,
    pizza,
    laptop,
    sushi
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {

    setCurrentImage(
      (currentImage + 1) % images.length
    );

  };

  const prevSlide = () => {

    setCurrentImage(
      (currentImage - 1 + images.length) % images.length
    );

  };

  return (
    <div className="home">

      <h1>Welcome to Justin's Store</h1>

      <p>
        Shop electronics, clothing, and food.
      </p>

      <div className="slideshow">

        <img
          src={images[currentImage]}
          alt="slide"
          className="slide-image"
        />

        <div className="slide-buttons">

          <button onClick={prevSlide}>
            Previous
          </button>

          <button onClick={nextSlide}>
            Next
          </button>

        </div>

      </div>

    </div>
  );
}

export default Home;