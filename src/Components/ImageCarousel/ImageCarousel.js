import React, { useEffect, useState } from "react";
import "./ImageCarousel.css";

const ImageCarousel = () => {
  const [i, setI] = useState(0);
  const changeIndex = (direction) => {
    if (direction === "forward" && i === 2) {
      console.log("forward max");
      return;
    }
    if (direction === "backward" && i === 0) {
      console.log("backward max");
      return;
    }
    if (direction === "forward") {
      console.log("trying to go forward");
      setI((prevI) => {
        return prevI + 1;
      });
      console.log(i);
    }
    if (direction === "backward") {
      console.log("trying to go backwards");

      setI((prevI) => {
        return prevI - 1;
      });
      console.log(i);
    }
  };

  const images = [
    {
      number: "1/3",
      caption: "truck 1",
      alt: "truck",
      src: "https://thumbs.dreamstime.com/b/girl-hates-gets-annoyed-freak-out-starting-arguing-bad-day-work-outraged-pissed-irritated-curly-haired-woman-cringe-yelling-226104012.jpg",
    },
    {
      number: "2/3",
      caption: "truck 2",
      alt: "truck 2",
      src: "https://thumbs.dreamstime.com/b/photo-impressed-brunette-nice-lady-open-mouth-wear-yellow-sweater-isolated-grey-color-background-photo-impressed-brunette-215541962.jpg",
    },
    {
      number: "3/3",
      caption: "truck 3",
      alt: "truck 3",
      src: "https://thumbs.dreamstime.com/b/impressed-surprised-excited-attractive-curly-haired-young-woman-widen-eyes-press-palms-cheeks-unbelievable-luck-say-wow-folding-165368397.jpg",
    },
  ];
  useEffect(() => {
    let index = i;
    setcurrentImage(images[index]);
  }, [i]);
  const [currentImage, setcurrentImage] = useState(images[0]);

  return (
    <div>
      <div>current index {i}</div>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">{currentImage.number}</div>
          <img alt={currentImage.alt} src={currentImage.src} />
          <div className="text">{currentImage.caption}</div>
        </div>
      </div>

      <br />
      <button className="prev" href="#" onClick={() => changeIndex("backward")}>
        back
      </button>
      <button className="next" href="#" onClick={() => changeIndex("forward")}>
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
