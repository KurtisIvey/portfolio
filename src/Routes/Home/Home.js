import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./Home.css";
import cssLogo from "../../assets/logos/cssLogo.svg";
import firebaseLogo from "../../assets/logos/firebaseLogo.svg";
import gitLogo from "../../assets/logos/gitLogo.svg";
import htmlLogo from "../../assets/logos/htmlLogo.svg";
import javascriptLogo from "../../assets/logos/javascriptLogo.svg";
import reactLogo from "../../assets/logos/reactLogo.svg";
import reduxLogo from "../../assets/logos/reduxLogo.svg";
import Footer from "../../Components/Footer/Footer";

function App() {
  return (
    <div className="main home">
      <Navbar />
      <div className="home__body">
        <div className="home__hiContainer">
          <div className="home__smallText">Hi, my name is </div>
          <div className="home__bigText">Kurtis Ivey,</div>
          <div className="home__medText">and I design websites.</div>
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

        <div className="home__skills">
          <div className="home__skillsTitle">Skills</div>
          <div className="home__skillsLogoBox">
            <div className="home__techLogoContainer">
              <img className="home__techLogo" src={htmlLogo} alt="html logo" />
              <div className="home__techLogoTitle">Html5</div>
            </div>
            <div className="home__techLogoContainer">
              <img className="home__techLogo" src={cssLogo} alt="css logo" />
              <div className="home__techLogoTitle">CSS3</div>
            </div>
            <div className="home__techLogoContainer">
              <img
                className="home__techLogo"
                src={javascriptLogo}
                alt="javascript logo"
              />
              <div className="home__techLogoTitle">Javascript</div>
            </div>
            <div className="home__techLogoContainer">
              <img className="home__techLogo" src={gitLogo} alt="github logo" />
              <div className="home__techLogoTitle">Git</div>
            </div>
            <div className="home__techLogoContainer">
              <img
                className="home__techLogo"
                src={firebaseLogo}
                alt="firebase logo"
              />
              <div className="home__techLogoTitle">Firebase</div>
            </div>

            <div className="home__techLogoContainer">
              <img
                className="home__techLogo"
                src={reactLogo}
                alt="react logo"
              />
              <div className="home__techLogoTitle">React</div>
            </div>
            <div className="home__techLogoContainer home__reduxLogoContainer">
              <img
                className="home__techLogo "
                src={reduxLogo}
                alt="redux toolkit logo"
              />
              <div className="home__techLogoTitle">Redux</div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        {/*added footer div to control footer position via flexbox */}
        <Footer />
      </footer>
    </div>
  );
}

export default App;
