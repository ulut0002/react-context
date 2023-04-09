import { useEffect, useState } from "react";
import UserDetail from "./UserDetail";

function Users() {
  const [users, setUsers] = useState([]);
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
      })
      .catch((error) => {
        console.warn(error);
        setError(error.message);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (users && Array.isArray(users)) {
    return (
      <ul className="user--list">
        {users.map((user) => {
          return <UserDetail key={user.id} user={user}></UserDetail>;
        })}
      </ul>
    );
  }

  return null;
}

export default Users;
