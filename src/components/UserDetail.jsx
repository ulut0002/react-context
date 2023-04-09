import { useState } from "react";
import { useFavorites } from "../context/FavoriteContext";

function UserDetail({ user }) {
  // person_add_alt_1 or person_remove

  const [favorites, setFavorites] = useFavorites();
  const [favorited, setFavorited] = useState(isFavorited(user.id));

  function handleFavoriteAction() {
    console.log("handleFavoriteAction", favorites);
    let copyArray = [...favorites];
    const idx = copyArray.findIndex((fav) => fav.id === user.id);
    if (idx === -1) {
      copyArray.push(user);
      setFavorited(true);
    } else {
      copyArray.splice(idx, 1);
      setFavorited(false);
    }
    setFavorites(copyArray);
  }

  function isFavorited() {
    if (!favorites) return false;
    if (!Array.isArray(favorites)) return false;
    return favorites.findIndex((fav) => fav.id === user.id) >= 0;
  }

  return (
    <div>
      <p>List of Current Users</p>
      <li className="user--container">
        <img
          className="user--content user--avatar"
          src={user.avatar}
          alt={`avatar for ${user.username}`}
        ></img>
        <p className="user--content user--name">{user.username}</p>
        <p className="user--content user--email">{user.email}</p>
        <span
          onClick={handleFavoriteAction}
          className={`material-icons user--fav user--content ${
            favorited ? "favorited" : ""
          }`}
        >
          {favorited ? "person_remove" : "person_add_alt_1"}
        </span>
      </li>
    </div>
  );
}
export default UserDetail;
