import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserList = () => {
  const { users, deleteUser } = useContext(UserContext);

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <span>{user.name}</span>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
