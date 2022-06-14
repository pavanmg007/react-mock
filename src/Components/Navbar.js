import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="flex nav">
        <li>
          <NavLink className="link" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
