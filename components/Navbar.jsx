import React from "react";
import BookIcon from "./icons/Bookicon";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full h-26 p-4 bg-blue-500">
      <div className="w-1/2 text-3xl font-semibold text-indigo-800 flex flex-row gap-2">
        <div>
          <BookIcon />
        </div>
        <div> ViChron</div>
      </div>
      <div className="flex justify-between w-1/2  text-xl text-white">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
        <a href="/help">Help</a>
      </div>
    </div>
  );
};

export default Navbar;
