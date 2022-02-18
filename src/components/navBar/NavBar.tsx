import { NavLink } from "react-router-dom";
const NavBar: React.FC = () => {
  return (
    <ul className="nav-link">
      <NavLink className="nav-link__item" to="/">
        Main page
      </NavLink>
      <NavLink className="nav-link__item" to="/todo">
        Todo page
      </NavLink>
    </ul>
  );
};
export default NavBar;
