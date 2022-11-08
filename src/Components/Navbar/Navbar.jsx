import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul className="m-4">
        <li className="nav--item">About</li>
        <li className="nav--item">Details</li>
        <li className="nav--item">Github</li>
      </ul>
      {/* <div className="spacer"></div> */}
    </nav>
  );
};

export default Navbar;
