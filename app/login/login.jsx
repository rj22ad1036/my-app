import React, { useState } from "react";

const Page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2>Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mb-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-2"
        />
        <button type="submit" className="py-2 px-4 bg-blue-500 text-white">
          Login
        </button>
      </form>
    </div>
  );
};

export default Page;
