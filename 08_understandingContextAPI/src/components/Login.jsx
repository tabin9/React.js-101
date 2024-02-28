import React from "react";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2 className="my-5 text-2xl underline bg-yellow-500 p-4">Login</h2>
      <input
        className="mx-5 pl-3 py-2"
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />
      <input
        className="mx-5 pl-3 py-2"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button
        className="text-white py-2 px-5 bg-blue-700"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
