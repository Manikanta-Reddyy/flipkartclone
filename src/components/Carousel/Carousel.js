import React, { useState } from "react";
import "./Carousel.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
  const data = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/81EZPF-FSdL._SX3000_.jpg",
      alt: "Description of the image",
      name: "Plants",
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81OCE7mUqhL._SX3000_.jpg",
      alt: "Description of the image",
      name: "Headphones",
    },
    {
      id: 3,
      image: "https://m.media-amazon.com/images/I/71JylaoMg+L._SX3000_.jpg",
      alt: "Description of the image",
      name: "Mobile",
    },
  ];

  const [index, setIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(data[0].image);

  function showNextImage() {
    if (index === data.length - 1) {
      setCurrentImage(data[0].image);
      setIndex(0);
      return;
    }

    setCurrentImage(data[index + 1].image);
    setIndex(index + 1);
  }

  function showPreviousImage() {
    if (index === 0) {
      setCurrentImage(data[data.length - 1].image);
      setIndex(data.length - 1);
      return;
    }

    setCurrentImage(data[index - 1].image);
    setIndex(index - 1);
  }

  return (
    <div className="carousel">
      <div className="carousel_arrow" onClick={showPreviousImage}>
        <ArrowBackIosNewIcon />
      </div>

      <img className="carousel_images" src={currentImage} alt={data[index].alt} />

      <div className="carousel_arrow" onClick={showNextImage}>
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
}
export default Carousel;
