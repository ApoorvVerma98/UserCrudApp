
import React from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import { UserProvider } from "./UserContext";
import "./style.css";


const App = () => {
  return (
    <UserProvider>
      <div>
        <UserList />
        <UserForm />
      </div>
    </UserProvider>
  );
};

export default App;

