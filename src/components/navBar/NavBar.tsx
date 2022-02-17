import { NavLink } from "react-router-dom";
const NavBar: React.FC = () => {
  return (
    <ul className="nav-link">
      <li>
        <NavLink className="nav-link__item" to="/">
          Main page
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link__item" to="/todo">
          Todo page
        </NavLink>
      </li>
    </ul>
  );
};
export default NavBar;
