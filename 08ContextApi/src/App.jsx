import React from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Components/Login";
import Profile from "./Components/Profile";

function App() {
  return (
    <UserContextProvider>
      <div className="bg-black text-white font-bold h-screen p-10 text-3xl flex flex-col justify-center align-center text-center">
        <div>
          <h1>Welcome to the react useContext.</h1>
          <Login />
          <Profile />
        </div>
      </div>
    </UserContextProvider>
  );
}

export default App;
