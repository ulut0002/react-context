import { useState } from "react";
import { useFavorites } from "../context/FavoriteContext";

function UserDetail({ user }) {
  // access to favorites context
  const [favorites, setFavorites] = useFavorites();

  // state variable to indicate whether currently displayed item is in the fav list
  const [favorited, setFavorited] = useState(isFavorited(user.id));

  // When user clicks on "add to fav" button, system finds if the current user is in the fav list.
  // If yes, then the user is removed from the list
  // If no, then the user is added to the list
  function handleFavoriteAction() {
    let copyArray = [...favorites];
    const idx = copyArray.findIndex((fav) => fav.id === user.id);
    if (idx === -1) {
      // not in the list, so add it to the list
      copyArray.push(user);
      setFavorited(true);
    } else {
      // already in the list, so remove it from the list
      copyArray.splice(idx, 1);
      setFavorited(false);
    }
    setFavorites(copyArray);
  }

  // searches current user in the fav list and returns boolean
  function isFavorited() {
    if (!favorites || !Array.isArray(favorites)) return false;
    return favorites.findIndex((fav) => fav.id === user.id) >= 0;
  }

  return (
    <li className="user--container">
      <img
        className="user--content user--avatar"
        src={user.avatar}
        alt={`avatar for ${user.username}`}
      ></img>
      <h2 className="user--content user--name">{user.username}</h2>
      <h3 className="user--content user--email">{user.email}</h3>
      <span
        onClick={handleFavoriteAction}
        className={`material-icons user--fav user--content ${
          favorited ? "favorited" : ""
        }`}
      >
        {favorited ? "person_remove" : "person_add_alt_1"}
      </span>
    </li>
  );
}
export default UserDetail;
