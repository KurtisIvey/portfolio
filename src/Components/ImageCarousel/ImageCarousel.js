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
      <button
        className="imageCarousel__back imageCarousel__arrow"
        href="#"
        onClick={() => decreaseIndex()}
      >
        &#8678;{" "}
      </button>
      <button
        className="imageCarousel__next imageCarousel__arrow"
        href="#"
        onClick={() => increaseIndex()}
      >
        &#8680;{" "}
      </button>
      <div className="imageCarousel__number">{currentImage.number}</div>
      <div className="imageCarousel__caption">{currentImage.caption}</div>

      <img
        className="imageCarousel__image"
        alt={currentImage.alt}
        src={currentImage.src}
      />
    </div>
  );
};

export default ImageCarousel;
