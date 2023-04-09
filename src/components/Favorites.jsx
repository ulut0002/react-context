import { useFavorites } from "../context/FavoriteContext";
import UserDetail from "./UserDetail";

function Favorites() {
  const [favorites, setFavorites] = useFavorites();
  if (!favorites || !Array.isArray(favorites) || favorites.length === 0) {
    return <div>You favorites list is empty</div>;
  }
  return (
    <div>
      {favorites.map((fav) => {
        return <UserDetail key={fav.id} user={fav}></UserDetail>;
      })}
    </div>
  );
}
export default Favorites;
