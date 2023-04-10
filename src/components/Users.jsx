import { useEffect, useState } from "react";
import UserDetail from "./UserDetail";

function Users() {
  // a brief message when results are fetched
  const [loading, setLoading] = useState(true);

  const [users, setUsers] = useState([]);

  // for the fetch error
  const [error, setError] = useState("");

  function fetchData() {
    fetch("https://random-data-api.com/api/v2/users?size=20")
      .then((response) => {
        if (!response.ok) throw new Error("Data could not be fetched");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.warn(error);
        setError(error.message);
        setLoading(false);
      });
  }

  // fetch data every when the page is rendered
  useEffect(() => {
    fetchData();
  }, []);

  // State : Loading message (default)
  if (loading) {
    return <p className="info--message">Loading. Please wait...</p>;
  }

  // State: an error happened during the fetch
  if (error) {
    return <p className="error--message">{error}</p>;
  }

  // State: Display the User list
  if (users && Array.isArray(users)) {
    return (
      <ul className="user--list">
        {users.map((user) => {
          return <UserDetail key={user.uid} user={user}></UserDetail>;
        })}
      </ul>
    );
  }

  // When all else fails
  return null;
}

export default Users;
