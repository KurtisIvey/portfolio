import React from "react";
import "./Footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  const styling = { height: "30px", width: "30px" };
  const white = "#ffffff";
  const black = "#333333";
  return (
    <div className="footer">
      <div className="footer__shape">
        <div className="footer__designedBy">Designed by Kurtis Ivey</div>
        <div className="footer__socialIcons">
          <a href="https://twitter.com/IveyCodingBJJ">
            <SocialIcon
              style={styling}
              className="footer__socialIcon"
              network="twitter"
              bgColor={white}
            />
          </a>
          <a href="https://github.com/Kitsunebackfire/portfolio">
            <SocialIcon
              style={styling}
              className="footer__socialIcon"
              network="github"
              bgColor={white}
            />
          </a>
          <a href="https://www.linkedin.com/in/k-ivey/">
            <SocialIcon
              style={styling}
              className="footer__socialIcon"
              network="linkedin"
              bgColor={white}
            />
          </a>
          <a href="https://www.instagram.com/iv.coding.bjj/?hl=en">
            <SocialIcon
              style={styling}
              className="footer__socialIcon"
              network="instagram"
              bgColor={white}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
