import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";
import images from "./images";

const ImageCarousel = () => {
  const [i, setI] = useState(0);

  /*const [autoPlay, setAutoPlay] = useState(true);

  const handleAutoPlay = () => {
    while (autoPlay) {
      if (i === 3) {
        setI(0);
      }
      setI((prevI) => {
        return prevI + 1;
      });
    }
  };

  useEffect(() => {
    setInterval(handleAutoPlay, 2000);
  }, []);
  */

  const decreaseIndex = () => {
    if (i === 0) {
      console.log("backward max");
      return;
    }
    setI((prevI) => {
      return prevI - 1;
    });
  };
  const increaseIndex = () => {
    if (i === 3) {
      console.log("forward max");
      return;
    }
    setI((prevI) => {
      return prevI + 1;
    });
  };

  useEffect(() => {
    let index = i;
    setcurrentImage(images[index]);
  }, [i]);

  const [currentImage, setcurrentImage] = useState(images[0]);

  return (
    <div className="imageCarousel">
      <div>current index {i}</div>
      <div className="imageCarousel__container">
        <div className="imageCarousel__slide">
          <div className="imageCarousel__number">{currentImage.number}</div>
          <img
            className="imageCarousel__image"
            alt={currentImage.alt}
            src={currentImage.src}
          />
          <div className="imageCarousel__caption">{currentImage.caption}</div>
        </div>
      </div>

      <br />
      <button
        className="imageCarousel__back"
        href="#"
        onClick={() => decreaseIndex()}
      >
        back
      </button>
      <button
        className="imageCarousel__next"
        href="#"
        onClick={() => increaseIndex()}
      >
        forward
      </button>
      <div>
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
    </div>
  );
};

export default ImageCarousel;
