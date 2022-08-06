import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import cssLogo from "../../assets/cssLogo.svg";
import firebaseLogo from "../../assets/firebaseLogo.svg";
import gitLogo from "../../assets/gitLogo.svg";
import htmlLogo from "../../assets/htmlLogo.svg";
import javascriptLogo from "../../assets/javascriptLogo.svg";
import reactLogo from "../../assets/reactLogo.svg";
import reduxLogo from "../../assets/reduxLogo.svg";

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
            I'm an over the road truck driver turned self taught front end
            developer that specializes in using React Js to build interactive
            websites.
          </div>
          <br />
          <div className="home__statement">
            Currently, I'm dedicating my time to learning more about web
            development through various sources such as The Odin Project and
            Freecodecamp.
          </div>
        </div>

        <img
          className="home__headshot"
          alt="blank headshot"
          src="https://images.squarespace-cdn.com/content/v1/55778247e4b0e3cc12fde995/1534835065769-MRGCVFIZBLAF0P70RCOK/headshot%2Bblank.png"
        />
        <div>
          <div>Skills</div>

          <img className="home__techLogo" src={htmlLogo} alt="html logo" />
          <img className="home__techLogo" src={cssLogo} alt="css logo" />
          <img
            className="home__techLogo"
            src={javascriptLogo}
            alt="javascript logo"
          />
          <img className="home__techLogo" src={gitLogo} alt="github logo" />
          <img
            className="home__techLogo"
            src={firebaseLogo}
            alt="firebase logo"
          />

          <img className="home__techLogo" src={reactLogo} alt="react logo" />
          <img
            className="home__techLogo"
            src={reduxLogo}
            alt="redux toolkit logo"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
