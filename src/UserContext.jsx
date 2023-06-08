import React, { createContext, useReducer } from "react";

const initialState = {
  users: [],
};

export const UserContext = createContext(initialState);

const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        users: [...state.users, action.payload],
      };
    case "DELETE_USER":
      return {
        users: state.users.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const addUser = (user) => {
    const newUser = { ...user, id: Date.now() };
    dispatch({ type: "ADD_USER", payload: newUser });
  };

  const deleteUser = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
  };

  return (
    <UserContext.Provider value={{ users: state.users, addUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
