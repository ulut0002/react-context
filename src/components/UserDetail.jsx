function UserDetail({ user }) {
  // person_add_alt_1 or person_remove

  function handleFavoriteAction() {
    console.log("handleFavoriteAction");
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
          className="material-icons user--fav user--content"
        >
          person_add_alt_1
        </span>
      </li>
    </div>
  );
}
export default UserDetail;
