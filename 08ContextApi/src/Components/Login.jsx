import React, { useState, useContext } from "react";
import UserContext from "../Context/userContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = () => {};
  return (
    <>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

export default Login;
