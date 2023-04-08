import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <div className="nav--container">
        <NavLink to="../" className="button">
          Users
        </NavLink>
        <NavLink to="../../beers/" className="button">
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}
export default NavBar;
