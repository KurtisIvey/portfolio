import React, { useRef, useState } from "react";
import "./Navbar.css";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarLinks = useRef(null);
  const [activePage, setActivePage] = useState("home");
  const homeLink = useRef(null);
  const aboutLink = useRef(null);
  const projectsLink = useRef(null);
  const contactLink = useRef(null);

  const handleActivePage = (page) => {
    setActivePage(page);
    if (page === "home") {
    }
  };

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
            <Link ref={homeLink} className="navbar__link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link ref={aboutLink} className="navbar__link" to="/About">
              About Me
            </Link>
          </li>
          <li>
            <Link ref={projectsLink} className="navbar__link" to="/Projects">
              Projects
            </Link>
          </li>
          <li>
            <Link ref={contactLink} className="navbar__link" to="/Contact">
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
