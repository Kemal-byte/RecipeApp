import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="m-4">
        <li className="nav--item">
          <NavLink
            style={({ isActive }) => ({
              color: isActive && "#fded0d",
            })}
            to="/"
            className="nav-link"
            aria-current="page"
          >
            Home
          </NavLink>
        </li>
        <li className="nav--item">
          <NavLink
            style={({ isActive }) => ({
              color: isActive && "red",
            })}
            to="/about"
            className="nav-link"
            aria-current="page"
          >
            About
          </NavLink>
        </li>
        <li className="nav--item">Github</li>
      </ul>
      {/* <div className="spacer"></div> */}
    </nav>
  );
};

export default Navbar;
