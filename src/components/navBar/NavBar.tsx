import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="nav-link">
      <li className="nav-link__item">
        <NavLink to="/">Main Page</NavLink>
      </li>
      <li className="nav-link__item">
        <NavLink className="nav-link__item" to="/todo">
          Todo Page
        </NavLink>
      </li>
    </div>
  );
};
export default NavBar;
