import React, { useRef } from "react";
import "./Navbar.css";
import { mdiMenu } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";
import { activePageSliceActions } from "../../store/slices/activePageSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  // redux
  const dispatch = useDispatch();
  const setActivePage = (page) =>
    dispatch(activePageSliceActions.setCurrent(page));
  // redux state
  const activePage = useSelector((state) => state.activePage.current);

  //refs
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
          <li
            style={
              activePage === "home"
                ? { backgroundColor: " rgb(178, 193, 178)" }
                : null
            }
          >
            <Link
              onClick={() => setActivePage("home")}
              style={
                activePage === "home"
                  ? { color: "rgb(23, 23, 23)" }
                  : { color: "white" }
              }
              className="navbar__link"
              to="/"
            >
              Home
            </Link>
          </li>
          <li
            style={
              activePage === "about"
                ? { backgroundColor: " rgb(178, 193, 178)" }
                : null
            }
          >
            <Link
              onClick={() => setActivePage("about")}
              style={
                activePage === "about"
                  ? { color: "rgb(23, 23, 23)" }
                  : { color: "white" }
              }
              className="navbar__link"
              to="/About"
            >
              About Me
            </Link>
          </li>
          <li
            style={
              activePage === "projects"
                ? { backgroundColor: " rgb(178, 193, 178)" }
                : null
            }
          >
            <Link
              onClick={() => setActivePage("projects")}
              style={
                activePage === "projects"
                  ? { color: "rgb(23, 23, 23)" }
                  : { color: "white" }
              }
              className="navbar__link"
              to="/Projects"
            >
              Projects
            </Link>
          </li>
          <li
            style={
              activePage === "contact"
                ? { backgroundColor: " rgb(178, 193, 178)" }
                : null
            }
          >
            <Link
              onClick={() => setActivePage("contact")}
              style={
                activePage === "contact"
                  ? { color: "rgb(23, 23, 23)" }
                  : { color: "white" }
              }
              className="navbar__link"
              to="/Contact"
            >
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
