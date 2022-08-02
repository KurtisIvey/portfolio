import React from "react";
import FancyName from "../FancyName/FancyName.js";
import Navbar from "../Navbar/Navbar.js";

const Header = () => {
  return (
    <div className="header">
      <FancyName />
      <Navbar />
    </div>
  );
};

export default Header;
