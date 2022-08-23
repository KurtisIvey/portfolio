import React from "react";
import "./Contact.css";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import borderImg from "../../assets/shapeBorder.png";

const Contact = () => {
  return (
    <div className="main contact">
      <Navbar />
      <section className="contact__body">
        <img src={borderImg} alt="shape border background"></img>
        <h1>
          To <span className="underline">Reach Out</span> to Me
        </h1>
        <div className="contact__linkbody">
          You can email me at{" "}
          <a
            className="underline contact__link"
            href="mailto:kurtiveycodes@gmail.com"
          >
            kurtiveycodes@gmail.com
          </a>
        </div>
        <div>or</div>
        <div>
          Message me on{" "}
          <a
            className="underline contact__link"
            href="https://twitter.com/IveyCodingBJJ"
          >
            twitter
          </a>
          ,{" "}
          <a
            className="underline contact__link"
            href="https://www.linkedin.com/in/kurtis-ivey/"
          >
            linkedIn
          </a>
          , or{" "}
          <a
            className="underline contact__link"
            href="https://www.instagram.com/iveycodingandbjj/?hl=en"
          >
            instagram
          </a>
        </div>
      </section>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
