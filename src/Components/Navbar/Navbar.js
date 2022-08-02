import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <button className="navbar__btn">Home</button>
      <button className="navbar__btn">About Me</button>
      <button className="navbar__btn">Projects</button>
      <button className="navbar__btn">Contact</button>
    </nav>
  );
};

export default Navbar;
