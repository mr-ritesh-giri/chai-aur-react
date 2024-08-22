import React, { useState, useContext } from "react";
import UserContext from "../Context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="mr-7 rounded-md p-2 mt-5 text-black"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {""}
      <input
        type="text"
        placeholder="Password"
        className="rounded-md p-2 text-black"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 rounded-md ml-10 p-2"
      >
        Submit
      </button>
    </>
  );
}

export default Login;
