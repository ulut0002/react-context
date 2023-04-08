import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink to="../" className="button">
        Users
      </NavLink>
      <NavLink to="../../beers/" className="button">
        Favorites
      </NavLink>
    </nav>
  );
}
export default NavBar;
