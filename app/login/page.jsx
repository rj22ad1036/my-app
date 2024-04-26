// import React, { useState } from "react";
import SigninButton from "@/components/SigninButton";

const Page = () => {
  //   const [username, setUsername] = useState("");
  //   const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="absolute top-14 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500">
      <div className="border-2 border-black p-4 gap-3 flex flex-col rounded-md bg-gray-200 w-80 h-auto">
        <h2 className="text-3xl">Login with</h2>
        {/* <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <label className="flex flex-col">
            Username
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-2 border-black border-2 rounded-md p-1"
            />
          </label>
          <label className="flex flex-col">
            Password
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-2 border-black border-2 rounded-md p-1"
            />
          </label>
          <button
            type="submit"
            className="py-2 px-4 bg-blue-500 text-white border-2 border-black rounded-md"
          >
            Login
          </button>
        </form> */}
        {/* <span className="text-center ">OR</span> */}
        <div className="flex flex-col space-y-4 mt-4">
          <SigninButton />
          <button className="py-2 px-4 w-72 bg-black text-white border-2 border-black rounded-md">
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
