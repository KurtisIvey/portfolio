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
    <>
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className={index === i ? "imageCarousel__active" : "imageCarousel"}
          >
            {index === i && (
              <>
                <button
                  className="imageCarousel__back imageCarousel__arrow"
                  href="#"
                  onClick={() => decreaseIndex()}
                >
                  &#8678;
                </button>
                <button
                  className="imageCarousel__next imageCarousel__arrow"
                  href="#"
                  onClick={() => increaseIndex()}
                >
                  &#8680;
                </button>
                <div className="imageCarousel__number">{image.number}</div>
                <div className="imageCarousel__caption">{image.caption}</div>
                <img
                  className="imageCarousel__image"
                  alt={image.alt}
                  src={image.src}
                />
              </>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ImageCarousel;

/*
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
*/

/*
.imageCarousel {
  box-sizing: border-box;
  height: fit-content;
  max-height: 600px;
  width: fit-content;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
}

.imageCarousel__arrow {
  background-color: rgba(162, 162, 162, 0.623);
  border: none;
  border-radius: 8px;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  z-index: 3;
}
.imageCarousel__arrow:hover {
  background-color: rgba(255, 255, 255, 0.605);
  color: rgb(71, 71, 71);
}

.imageCarousel__back {
  position: absolute;
  top: 50%;
  right: 88%;
}
.imageCarousel__next {
  position: absolute;
  top: 50%;
  left: 88%;
}




.slide {
  opacity: 0;
  transition: 500ms opacity ease-in-out;
}
.slide__active {
  opacity: 1;
}

.imageCarousel__number {
  position: absolute;
  top: 5px;
  left: 7px;
  color: rgb(123, 123, 123);
}

.imageCarousel__image {
  width: 100%;
  height: 100%;
  transition: 1110ms ease-in-out;
}

.imageCarousel__caption {
  position: absolute;
  bottom: 5px;
  background-color: rgba(255, 255, 255, 0.499);
  border-radius: 5px;
  width: fit-content;
  padding: 0 10px;
  text-align: center;
}
*/
