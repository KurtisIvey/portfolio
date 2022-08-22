import React from "react";
import Footer from "../../Components/Footer/Footer";
import ImageCarousel from "../../Components/ImageCarousel/ImageCarousel";
import Navbar from "../../Components/Navbar/Navbar";
import "./About.css";

const About = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="about__body">
        <h1>About Me</h1>
        <div className="about__text">
          &emsp; Hi, my name is Kurtis and I enjoy creating websites from
          scratch. My interest in coding originally started while I was an over
          the road truck driver/instructor for about 5 years. While trucking
          itself is a fantastic job that pays very well, it is not conducive to
          a good marital life. Because of this, I sought out an alternative that
          would provide for my family and allow me to be at home. Therefore,
          once my wife successfully immigrated from Jamaica to the USA, I needed
          a game plan for the future and chose coding.
        </div>
        <br />
        <ImageCarousel />
        <br />
        <div className="about__text">
          &emsp; Fast forward to the end of my trucking career, I enrolled in
          college with the intention to get a bachelors in software engineering.
          However, I realized after being in school for a while, that I could
          teach myself everything I needed to know and save about $50,000. Soon
          after, I started my coding journey by teaching myself python. Later
          on, I switched to javascript after being displeased with the graphical
          user interfaces of apps I made in python. I've been coding in
          javascript ever since. Growing my skills by utilizing nearly every
          resource in existence such as Google, Youtube, Freecodecamp, scrimba,
          udemy, docs, and The Odin Project.
        </div>
        <br />
        <div>
          <span className="about__funFact about__text">Fun Fact:</span>{" "}
          <span className="about__text">
            I've drove the distance equivalent to having driven around the world
            28 times, so I'm pretty much a professional at sitting on my butt.
          </span>{" "}
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default About;
