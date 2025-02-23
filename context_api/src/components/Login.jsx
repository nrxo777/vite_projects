import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({ username, password });
  };

  return (
    <div>
      <h2 className="block mb-2 font-large m-5 text-white">Login</h2>
      <div className="flex">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="User Name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 m-5 w-55 flex-none"
        />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5 m-5 w-55 flex-none"
        />
      </div>

      <button
        onClick={handleSubmit}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm w-full sm:w-auto m-5 px-5 py-2.5 text-center"
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
