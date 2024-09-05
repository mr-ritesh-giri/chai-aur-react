import React from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  // const value = { user, setUser };

  return (
    <UserContext.Provider
      value={{ user, setUser }}
      // value={value} It can also be done.
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
