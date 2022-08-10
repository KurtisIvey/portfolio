import React, { useRef } from "react";
import "./Navbar.css";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarLinks = useRef(null);

  const toggleNavbar = () => {
    navbarLinks.current.classList.toggle("active");
  };

  return (
    <nav className="navbar">
      <div className="navbar__name">K. Ivey</div>

      <Icon
        path={mdiMenu}
        className="navbar__toggle"
        onClick={() => toggleNavbar()}
      />

      <div ref={navbarLinks} className="navbar__links">
        <ul>
          <li>
            <Link className="navbar__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navbar__link" to="/About">
              About Me
            </Link>
          </li>
          <li>
            <Link className="navbar__link" to="/Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="navbar__link" to="/Contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

/*
<nav className="navbar">
      <button className="navbar__btn">Home</button>
      <button className="navbar__btn">About Me</button>
      <button className="navbar__btn">Projects</button>
      <button className="navbar__btn">Contact</button>
    </nav>
*/
