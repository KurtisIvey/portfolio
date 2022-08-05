import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";

function App() {
  return (
    <div className="home">
      <Navbar />
      <div className="home__body">
        <div className="home__hiContainer">
          <div className="home__smallText">Hi, my name is </div>
          <div className="home__bigText">Kurtis Ivey,</div>
          <div className="home__medText">and I design websites</div>
          <div className="home__statement">
            I'm a self taught front end developer that specializes in using
            React Js to build interactive websites. Currently, I'm dedicating my
            time to learning more about web development through various sources
            such as The Odin Project and Freecodecamp.
          </div>
        </div>

        <img
          className="home__headshot"
          alt="blank headshot"
          src="https://images.squarespace-cdn.com/content/v1/55778247e4b0e3cc12fde995/1534835065769-MRGCVFIZBLAF0P70RCOK/headshot%2Bblank.png"
        />
      </div>
    </div>
  );
}

export default App;
