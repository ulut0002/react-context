import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useFavorites } from "../context/FavoriteContext";

function NavBar() {
  const [favorites, setFavorites] = useFavorites();
  return (
    <nav>
      <NavLink to="../" className="button">
        Users <sup></sup>
      </NavLink>
      <NavLink to="../../favs" className="button">
        Favorites <sup>({favorites.length})</sup>
      </NavLink>
    </nav>
  );
}
export default NavBar;
