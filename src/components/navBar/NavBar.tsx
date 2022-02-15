import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <li>
        <NavLink to="/">Main Page</NavLink>
      </li>
      <li>
        <NavLink to="/todo">Todo Page</NavLink>
      </li>
    </div>
  );
};
export default NavBar;
