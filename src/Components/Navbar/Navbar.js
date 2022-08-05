import React, { useRef } from "react";
import "./Navbar.css";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";

const Navbar = () => {
  const navbarLinks = useRef(null);

  const toggleNavbar = () => {
    navbarLinks.current.classList.toggle("active");
  };

  return (
    <nav className="navbar">
      <div class="navbar__name">K. Ivey</div>

      <Icon
        path={mdiMenu}
        class="navbar__toggle"
        onClick={() => toggleNavbar()}
      />

      <div ref={navbarLinks} class="navbar__links">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
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
