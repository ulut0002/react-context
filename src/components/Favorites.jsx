import { useFavorites } from "../context/FavoriteContext";
import UserDetail from "./UserDetail";

function Favorites() {
  const [favorites, setFavorites] = useFavorites();
  if (!favorites || !Array.isArray(favorites) || favorites.length === 0) {
    return <div className="highlight-center">You favorites list is empty</div>;
  }
  return (
    <ul className="user--list">
      {favorites.map((fav) => {
        return <UserDetail key={fav.uid} user={fav}></UserDetail>;
      })}
    </ul>
  );
}
export default Favorites;
